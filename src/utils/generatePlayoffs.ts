export interface Standing { team: string; division?: string; wins: number; tiebreaker?: number }

export interface PlayoffMatch { home: string; away: string }
export type PlayoffRound = PlayoffMatch[];

// Deterministic simple playoff bracket generator
// Format: top 2 from each division (2 * divisions) + top 4 wildcards -> 16-team single-elim bracket (4 rounds)
export function generatePlayoffBracket(standings: Standing[], seed = 'HFL_playoffs_v1') {
  // group by division
  const byDiv = new Map<string, Standing[]>();
  standings.forEach(s => {
    const d = s.division || 'Unknown';
    if (!byDiv.has(d)) byDiv.set(d, []);
    byDiv.get(d)!.push(s);
  });

  // deterministic sort helper
  function cmp(a: Standing, b: Standing) {
    if (a.wins !== b.wins) return b.wins - a.wins;
    const ta = (a.tiebreaker || 0), tb = (b.tiebreaker || 0);
    if (ta !== tb) return tb - ta;
    return a.team.localeCompare(b.team);
  }

  // pick top 2 per division
  const qualifiers: Standing[] = [];
  for (const [div, arr] of Array.from(byDiv.entries()).sort()) {
    arr.sort(cmp);
    if (arr.length >= 1) qualifiers.push(arr[0]);
    if (arr.length >= 2) qualifiers.push(arr[1]);
  }

  // pick wildcards: top remaining teams across divisions
  const qualifiedSet = new Set(qualifiers.map(q => q.team));
  const remaining = standings.filter(s => !qualifiedSet.has(s.team)).sort(cmp);
  const wildcards = remaining.slice(0, 4);

  const field = qualifiers.concat(wildcards).slice(0, 16);

  // seed by wins then tiebreaker
  field.sort(cmp);

  // Build bracket: 1v16,2v15,...
  const bracket: PlayoffRound[] = [];
  let roundSize = field.length;
  let current = field.map(f => f.team);
  while (roundSize >= 2) {
    const round: PlayoffMatch[] = [];
    for (let i = 0; i < roundSize / 2; i++) {
      const home = current[i];
      const away = current[roundSize - 1 - i];
      round.push({ home, away });
    }
    bracket.push(round);
    // prepare next round placeholders (winners)
    current = Array.from({ length: round.length }, (_, i) => `Winner(${round[i].home} vs ${round[i].away})`);
    roundSize = current.length;
  }

  return bracket; // array of rounds; bracket[0] is round of 16
}
