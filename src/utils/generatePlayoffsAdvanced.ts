export interface Standing { team: string; division?: string; wins: number; seed?: number; tiebreaker?: number }

export interface PlayoffLeg { home: string; away: string }
export interface PlayoffMatchAdvanced { legs: PlayoffLeg[]; aggregate?: string; seedHome?: number; seedAway?: number }
export type PlayoffRoundAdvanced = PlayoffMatchAdvanced[];

// Advanced bracket generator supporting:
// - two-leg ties for early rounds (home/away each leg)
// - reseeding between rounds (highest remaining seed faces lowest)
// - home/away assignment: higher seed hosts second leg by default
export function generatePlayoffBracketAdvanced(
  standings: Standing[],
  opts: { twoLegRounds?: number; reseed?: boolean; seedKey?: string } = { twoLegRounds: 1, reseed: true }
) {
  const twoLegRounds = opts.twoLegRounds ?? 1; // number of early rounds that use two legs
  const reseed = opts.reseed ?? true;

  // deterministic sort by wins, tiebreaker, then provided seed
  function cmp(a: Standing, b: Standing) {
    if (a.wins !== b.wins) return b.wins - a.wins;
    const ta = (a.tiebreaker || 0), tb = (b.tiebreaker || 0);
    if (ta !== tb) return tb - ta;
    const sa = (a.seed || 0), sb = (b.seed || 0);
    if (sa !== sb) return sa - sb;
    return a.team.localeCompare(b.team);
  }

  // group by division to pick top 2
  const byDiv = new Map<string, Standing[]>();
  standings.forEach(s => {
    const d = s.division || 'Unknown';
    if (!byDiv.has(d)) byDiv.set(d, []);
    byDiv.get(d)!.push(s);
  });

  const qualifiers: Standing[] = [];
  for (const [div, arr] of Array.from(byDiv.entries()).sort()) {
    arr.sort(cmp);
    if (arr.length >= 1) qualifiers.push(arr[0]);
    if (arr.length >= 2) qualifiers.push(arr[1]);
  }

  const qualifiedSet = new Set(qualifiers.map(q => q.team));
  const remaining = standings.filter(s => !qualifiedSet.has(s.team)).sort(cmp);
  const wildcards = remaining.slice(0, 4);

  let field = qualifiers.concat(wildcards).slice(0, 16);
  field.sort(cmp);

  // assign seed numbers (1 = best)
  field = field.map((f, i) => ({ ...f, seed: i + 1 }));

  const rounds: PlayoffRoundAdvanced[] = [];
  let current = field.map(f => f);
  let roundIndex = 0;
  while (current.length >= 2) {
    // optionally reseed
    if (reseed && roundIndex > 0) {
      current.sort(cmp);
    }
    const roundMatches: PlayoffMatchAdvanced[] = [];
    const n = current.length;
    for (let i = 0; i < n / 2; i++) {
      const homeSeed = current[i];
      const awaySeed = current[n - 1 - i];
      // determine legs
      const legs: PlayoffLeg[] = [];
      const isTwoLeg = roundIndex < twoLegRounds;
      if (isTwoLeg) {
        // leg1: lower-seed hosts, leg2: higher-seed hosts
        legs.push({ home: awaySeed.team, away: homeSeed.team });
        legs.push({ home: homeSeed.team, away: awaySeed.team });
      } else {
        // single leg: higher seed hosts
        legs.push({ home: homeSeed.team, away: awaySeed.team });
      }
      roundMatches.push({ legs, seedHome: homeSeed.seed, seedAway: awaySeed.seed });
    }
    rounds.push(roundMatches);
    // prepare placeholders for winners (preserve seed of higher seed by default)
    current = roundMatches.map((m) => ({ team: `Winner(${m.legs[1]?.home || m.legs[0].home} vs ${m.legs[0]?.away || m.legs[0].away})`, division: undefined, wins: 0, seed: Math.min(m.seedHome||99, m.seedAway||99) } as Standing));
    roundIndex++;
  }

  return rounds;
}
