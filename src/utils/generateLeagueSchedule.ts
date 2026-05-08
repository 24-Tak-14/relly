import { getTeamData } from '../data/TeamData.ts'; // From previous generation
import type { Team } from '../types';

interface Matchup {
  week: number;
  home: string;
  away: string;
}

// Simple deterministic 32-bit hash from string
function hashStringToInt(s: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

// Mulberry32 PRNG (seeded)
function mulberry32(seed: number) {
  let t = seed >>> 0;
  return function () {
    t += 0x6D2B79F5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

const DEFAULT_SEED = 'HFL_schedule_v1';
const TARGET_GAMES = 17; // games per team (one bye in 18-week season)
const TOTAL_WEEKS = 18;

export function generateLeagueSchedule(seedStr = DEFAULT_SEED): Matchup[] {
  const teamData = getTeamData();
  const teams = Object.values(teamData) as Team[];
  const rng = mulberry32(hashStringToInt(seedStr));

  const teamNames = teams.map((t) => t.name);
  const teamIndex = new Map<string, number>();
  teamNames.forEach((n, i) => teamIndex.set(n, i));

  // Helper to get division (flexible field names)
  function getDivision(t: Team): string {
    // try multiple possible fields
    // @ts-ignore
    return t.depotAllegiance || t.depot_allegiance || (t as any).allegiance || 'Unknown';
  }

  // Build divisions
  const divisions = new Map<string, string[]>();
  teams.forEach((t) => {
    const d = getDivision(t) || 'Unknown';
    if (!divisions.has(d)) divisions.set(d, []);
    divisions.get(d)!.push(t.name);
  });

  // Track pairings already scheduled (unordered pair key)
  const scheduledPairs = new Set<string>();
  const gamesPerTeam = new Array(teams.length).fill(0);

  function pairKey(a: string, b: string) {
    return a < b ? `${a}||${b}` : `${b}||${a}`;
  }

  // Helper to add a matchup (single game, home/away assigned)
  const matchups: { home: string; away: string }[] = [];
  function addMatch(a: string, b: string, homeIsA: boolean | null = null) {
    const key = pairKey(a, b);
    if (scheduledPairs.has(key)) return false;
    // If either already hit target, skip
    if (gamesPerTeam[teamIndex.get(a)!] >= TARGET_GAMES || gamesPerTeam[teamIndex.get(b)!] >= TARGET_GAMES) return false;
    // decide home
    let home = a;
    let away = b;
    if (homeIsA === false) { home = b; away = a; }
    else if (homeIsA === null) { // random
      if (rng() < 0.5) { home = b; away = a; }
    }
    matchups.push({ home, away });
    scheduledPairs.add(key);
    gamesPerTeam[teamIndex.get(home)!]++;
    gamesPerTeam[teamIndex.get(away)!]++;
    return true;
  }

  // 1) Intra-division double round-robin (home+away)
  divisions.forEach((names) => {
    for (let i = 0; i < names.length; i++) {
      for (let j = i + 1; j < names.length; j++) {
        // add two games (A home B, then B home A)
        addMatch(names[i], names[j], true);
        addMatch(names[i], names[j], false);
      }
    }
  });

  // 2) Inter-division pool: build all possible unordered pairs not in same-division
  const allPairs: [string, string][] = [];
  for (let i = 0; i < teamNames.length; i++) {
    for (let j = i + 1; j < teamNames.length; j++) {
      const a = teamNames[i];
      const b = teamNames[j];
      const divA = getDivision(teams[i]);
      const divB = getDivision(teams[j]);
      if (divA === divB) continue; // already handled as intra-division
      const key = pairKey(a, b);
      if (scheduledPairs.has(key)) continue;
      allPairs.push([a, b]);
    }
  }

  // Shuffle inter-division pool deterministically
  for (let i = allPairs.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = allPairs[i]; allPairs[i] = allPairs[j]; allPairs[j] = tmp;
  }

  // 3) Fill remaining games from inter-division pool until each team has TARGET_GAMES
  for (const [a, b] of allPairs) {
    // stop early when all teams reached targets
    if (gamesPerTeam.every((c) => c >= TARGET_GAMES)) break;
    addMatch(a, b, null);
  }

  // 4) At this point some teams might still be below TARGET_GAMES (rare). Try to pair them among themselves.
  const teamsNeeding = teamNames.filter((n, idx) => gamesPerTeam[idx] < TARGET_GAMES);
  // attempt pairing among them
  for (let i = 0; i < teamsNeeding.length; i++) {
    for (let j = i + 1; j < teamsNeeding.length; j++) {
      if (gamesPerTeam[teamIndex.get(teamsNeeding[i])!] >= TARGET_GAMES) continue;
      if (gamesPerTeam[teamIndex.get(teamsNeeding[j])!] >= TARGET_GAMES) continue;
      addMatch(teamsNeeding[i], teamsNeeding[j], null);
    }
  }

  // Final check: if still under-target, allow duplicate pairs but flip home/away to reach counts (deterministic)
  for (let tIdx = 0; tIdx < teams.length; tIdx++) {
    const tName = teamNames[tIdx];
    while (gamesPerTeam[tIdx] < TARGET_GAMES) {
      // find any other team with available slots
      let found = false;
      for (let oIdx = 0; oIdx < teams.length; oIdx++) {
        if (oIdx === tIdx) continue;
        if (gamesPerTeam[oIdx] >= TARGET_GAMES) continue;
        // add a match even if pair existed before
        const other = teamNames[oIdx];
        // decide home by deterministic coin
        const homeIsA = (hashStringToInt(tName + other + gamesPerTeam[tIdx]) % 2) === 0;
        // push without checking scheduledPairs
        const home = homeIsA ? tName : other;
        const away = homeIsA ? other : tName;
        matchups.push({ home, away });
        gamesPerTeam[tIdx]++;
        gamesPerTeam[oIdx]++;
        found = true;
        break;
      }
      if (!found) break; // cannot do more
    }
  }

  // At this point we should have totalMatches = sum(gamesPerTeam)/2
  const totalMatches = matchups.length;

  // 5) Assign weeks using Edmonds' blossom maximum matching per week
  // @ts-ignore
  const blossom = require('edmonds-blossom');
  type PendingMatch = { home: string; away: string };
  let pending: PendingMatch[] = matchups.map(m => ({ home: m.home, away: m.away }));
  // deterministic order
  pending.sort((a,b)=> (a.home + a.away).localeCompare(b.home + b.away));

  const weeks: PendingMatch[][] = Array.from({ length: TOTAL_WEEKS }, () => []);
  const teamsInWeek: Set<string>[] = Array.from({ length: TOTAL_WEEKS }, () => new Set());
  const maxMatchesPerWeek = Math.floor(teams.length / 2);

  // For each week, run maximum matching on the graph of remaining pending matches, choose up to capacity
  for (let w = 0; w < TOTAL_WEEKS; w++) {
    // Build vertex index map
    const vertexIndex = new Map<string, number>();
    teamNames.forEach((n, idx) => vertexIndex.set(n, idx));
    // Build edges list as [i, j, weight]
    const edges: number[][] = [];
    for (const m of pending) {
      const i = vertexIndex.get(m.home)!;
      const j = vertexIndex.get(m.away)!;
      edges.push([i, j, 1]);
    }
    if (edges.length === 0) continue;
    // run blossom
    const mate = blossom(edges, true); // returns mate array
    const taken = new Set<string>();
    let placed = 0;
    for (let i = 0; i < mate.length && placed < maxMatchesPerWeek; i++) {
      const j = mate[i];
      if (j === -1) continue;
      if (i > j) continue; // handle each pair once
      const a = teamNames[i];
      const b = teamNames[j];
      // ensure both are still free this week
      if (teamsInWeek[w].has(a) || teamsInWeek[w].has(b)) continue;
      // confirm pending contains this match in either order
      const idx = pending.findIndex(p => (p.home === a && p.away === b) || (p.home === b && p.away === a));
      if (idx === -1) continue;
      // assign
      weeks[w].push(pending[idx]);
      teamsInWeek[w].add(a);
      teamsInWeek[w].add(b);
      // remove from pending
      pending.splice(idx, 1);
      placed++;
    }
  }

  // If any pending remain, attempt to place them greedily without causing conflicts
  if (pending.length > 0) {
    for (let w = 0; w < TOTAL_WEEKS; w++) {
      for (let i = pending.length -1; i >=0; i--) {
        const m = pending[i];
        if (weeks[w].length >= maxMatchesPerWeek) continue;
        if (!teamsInWeek[w].has(m.home) && !teamsInWeek[w].has(m.away)) {
          weeks[w].push(m);
          teamsInWeek[w].add(m.home);
          teamsInWeek[w].add(m.away);
          pending.splice(i,1);
        }
      }
    }
  }

  // Any still pending: append to weeks round-robin (should be rare)
  if (pending.length > 0) {
    let wIdx = 0;
    for (const m of pending) {
      weeks[wIdx].push(m);
      wIdx = (wIdx + 1) % TOTAL_WEEKS;
    }
    pending = [];
  }

  // Build final schedule array
  const final: Matchup[] = [];
  for (let w = 0; w < TOTAL_WEEKS; w++) {
    for (const m of weeks[w]) {
      final.push({ week: w + 1, home: m.home, away: m.away });
    }
  }

  // Balance home/away counts across the season (best-effort)
  try {
    // import dynamically to avoid circular TS issues in this build step
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const bal = require('./homeAwayBalancer') as { balanceHomeAway?: Function };
    if (bal && typeof bal.balanceHomeAway === 'function') {
      bal.balanceHomeAway(final, teamNames, TOTAL_WEEKS);
    }
  } catch (e) {
    // ignore balancing errors
  }

  // 6) Assign bye weeks: each team should have exactly one week where they do not play. Find a week where they are not scheduled and mark BYE.
  const playsPerTeam = new Map<string, number>();
  teamNames.forEach(n => playsPerTeam.set(n, 0));
  for (const mk of final) {
    playsPerTeam.set(mk.home, (playsPerTeam.get(mk.home) || 0) + 1);
    playsPerTeam.set(mk.away, (playsPerTeam.get(mk.away) || 0) + 1);
  }

  const teamHasBye = new Map<string, number | null>();
  teamNames.forEach(n => teamHasBye.set(n, null));

  for (const t of teamNames) {
    // find week where t is not in teamsInWeek
    let byeWeek: number | null = null;
    for (let w = 0; w < TOTAL_WEEKS; w++) {
      if (!teamsInWeek[w].has(t)) { byeWeek = w + 1; break; }
    }
    if (byeWeek === null) {
      // fallback: pick a random week deterministically
      byeWeek = (hashStringToInt(t) % TOTAL_WEEKS) + 1;
    }
    teamHasBye.set(t, byeWeek);
    final.push({ week: byeWeek, home: t, away: 'BYE' });
  }

  // Deterministic sort by week, then home
  final.sort((a,b) => a.week - b.week || a.home.localeCompare(b.home) || a.away.localeCompare(b.away));
  return final;
}
