import { getTeamData } from '../src/data/TeamData';
import { generatePlayoffBracketAdvanced } from '../src/utils/generatePlayoffsAdvanced';
import { simulateBracket } from '../src/utils/simulatePlayoffs';

async function main(){
  const teams = Object.values(getTeamData()).map((t,i)=>({ team: t.name, division: t.depotAllegiance, wins: (i%10)+6, tiebreaker: i }));
  const bracket = generatePlayoffBracketAdvanced(teams, { twoLegRounds: 1, reseed: true });
  console.log('Generated advanced bracket with', bracket.length, 'rounds');
  const result = simulateBracket(bracket, 'HFL_sim_v1');
  console.log('Simulation winners by round:');
  result.winnersByRound.forEach((r, idx)=>{ console.log(`Round ${idx+1}:`, r); });
  console.log('Champion:', result.champion);
}

main();
