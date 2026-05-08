export type Matchup = { week: number; home: string; away: string };

export function balanceHomeAway(schedule: Matchup[], teamNames: string[], totalWeeks: number) {
  const homeCount = new Map<string, number>();
  const awayCount = new Map<string, number>();
  teamNames.forEach(t => { homeCount.set(t, 0); awayCount.set(t, 0); });

  for (const m of schedule) {
    if (m.away === 'BYE') continue;
    homeCount.set(m.home, (homeCount.get(m.home) || 0) + 1);
    awayCount.set(m.away, (awayCount.get(m.away) || 0) + 1);
  }

  // Greedy balancing: try flipping home/away for matches where it helps both teams or at least doesn't worsen the other
  let changed = true;
  let iterations = 0;
  while (changed && iterations < 1000) {
    changed = false;
    iterations++;
    for (const m of schedule) {
      if (m.away === 'BYE') continue;
      const h = m.home; const a = m.away;
      const hHome = homeCount.get(h) || 0; const hAway = awayCount.get(h) || 0;
      const aHome = homeCount.get(a) || 0; const aAway = awayCount.get(a) || 0;
      // target is to keep home-away difference within 1
      if (hHome - hAway <= 1) continue;
      if ( (aHome - aAway) >= 0 ) continue; // flipping would worsen away team
      // safe to flip if not creating BYE issues
      // perform flip
      m.home = a; m.away = h;
      homeCount.set(h, hHome - 1);
      awayCount.set(h, hAway + 1);
      homeCount.set(a, aHome + 1);
      awayCount.set(a, aAway - 1);
      changed = true;
    }
  }

  // best-effort; no return (mutates schedule)
}
