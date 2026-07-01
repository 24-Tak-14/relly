import { generatePlayoffBracketAdvanced } from '../src/utils/generatePlayoffsAdvanced';
import { simulateBracket } from '../src/utils/simulatePlayoffs';
import { getTeamData } from '../src/data/TeamData';

function assert(cond: boolean, msg: string) { if (!cond) { console.error(msg); process.exit(2); } }

function main() {
  const teams = Object.values(getTeamData()).map((t, i) => ({ team: t.name, division: t.depotAllegiance, wins: (i%10)+6, tiebreaker: i }));
  const bracket = generatePlayoffBracketAdvanced(teams, { twoLegRounds: 1, reseed: true });
  assert(bracket.length === 4, `Expected 4 rounds, got ${bracket.length}`);
  const sim = simulateBracket(bracket, 'test-seed');
  assert(sim.champion && sim.champion.length > 0, 'Champion should be non-empty');
  console.log('Playoff unit test PASSED');
}

main();
