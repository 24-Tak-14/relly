import { generateLeagueSchedule } from '../src/utils/generateLeagueSchedule';
import { generatePlayoffBracketAdvanced } from '../src/utils/generatePlayoffsAdvanced';
import * as fs from 'fs/promises';

async function main(){
  const schedule = generateLeagueSchedule();
  const teams = schedule.reduce((acc, m) => {
    if (!acc.includes(m.home)) acc.push(m.home);
    if (m.away !== 'BYE' && !acc.includes(m.away)) acc.push(m.away);
    return acc;
  }, [] as string[]);
  // build fake standings using games outcome deterministic by index
  const standings = teams.map((t, i) => ({ team: t, division: 'Unknown', wins: (i % 10) + 6, tiebreaker: i }));
  const playoffs = generatePlayoffBracketAdvanced(standings, { twoLegRounds: 1, reseed: true });
  await fs.mkdir('scripts/output', { recursive: true });
  await fs.writeFile('scripts/output/schedule.json', JSON.stringify(schedule, null, 2));
  await fs.writeFile('scripts/output/playoffs.json', JSON.stringify(playoffs, null, 2));
  console.log('Exported schedule and playoffs to scripts/output/');
}

main();
