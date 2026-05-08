import { generateLeagueSchedule } from '../src/utils/generateLeagueSchedule';
import { generatePlayoffBracket, Standing } from '../src/utils/generatePlayoffs';
import { getTeamData } from '../src/data/TeamData';

function unorderedKey(a: string, b: string) { return a < b ? `${a}||${b}` : `${b}||${a}`; }

function validateSchedule(schedule: any[]) {
  // similar validation to previous
  const teams = new Set<string>();
  for (const m of schedule) { if (m.away !== 'BYE') { teams.add(m.home); teams.add(m.away); } else teams.add(m.home); }
  const teamList = Array.from(teams).sort();
  const gamesPerTeam = new Map<string, number>();
  const byePerTeam = new Map<string, number>();
  for (const t of teamList) { gamesPerTeam.set(t, 0); byePerTeam.set(t, 0); }
  for (const m of schedule) {
    if (m.away === 'BYE') byePerTeam.set(m.home, (byePerTeam.get(m.home)||0)+1);
    else {
      gamesPerTeam.set(m.home, (gamesPerTeam.get(m.home)||0)+1);
      gamesPerTeam.set(m.away, (gamesPerTeam.get(m.away)||0)+1);
    }
  }
  let ok = true;
  for (const t of teamList) {
    const g = gamesPerTeam.get(t) || 0; const b = byePerTeam.get(t) || 0;
    if (g !== 17) { console.error(`Team ${t} has ${g} games (expected 17)`); ok = false; }
    if (b !== 1) { console.error(`Team ${t} has ${b} byes (expected 1)`); ok = false; }
  }
  // per-week conflict
  const weeksMap = new Map<number, Set<string>>();
  for (const m of schedule) {
    const w = m.week; if (!weeksMap.has(w)) weeksMap.set(w, new Set()); const s = weeksMap.get(w)!;
    if (m.away !== 'BYE') { if (s.has(m.home)||s.has(m.away)) { console.error(`Conflict in week ${w}: ${m.home} or ${m.away} double-scheduled`); ok = false; } s.add(m.home); s.add(m.away); }
    else { if (s.has(m.home)) { console.error(`Conflict: ${m.home} has bye and game week ${w}`); ok = false; } s.add(m.home); }
  }
  if (!ok) throw new Error('Schedule validation FAILED');
  console.log('Schedule validation PASSED');
}

function testPlayoffs() {
  const teams = Object.values(getTeamData()).map((t, i) => ({ team: t.name, division: t.depotAllegiance, wins: Math.floor((Math.random()*10)+4), tiebreaker: i } as Standing));
  const bracket = generatePlayoffBracket(teams);
  if (bracket.length !== 4) throw new Error('Expected 4 rounds for 16-team bracket');
  const round16 = bracket[0];
  if (round16.length !== 8) throw new Error('Expected 8 matches in round of 16');
  console.log('Playoff generation PASSED');
}

async function main(){
  console.log('Running schedule validation...');
  const schedule = generateLeagueSchedule();
  validateSchedule(schedule);
  console.log('Running playoff tests...');
  testPlayoffs();
  console.log('\nAll tests PASSED');
}

main();
