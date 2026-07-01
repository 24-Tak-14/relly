import { generatePlayoffBracketAdvanced } from '../src/utils/generatePlayoffsAdvanced';

// Build dummy standings for 6 divisions -> top2 each + wildcards
const teams = Array.from({length:16}, (_,i)=>({ team: `Team${i+1}`, division: `D${Math.floor(i/3)}`, wins: 20 - i, seed: i+1 }));

function run(){
  const roundsDefault = generatePlayoffBracketAdvanced(teams as any);
  if (!Array.isArray(roundsDefault) || roundsDefault.length === 0) throw new Error('rounds missing');
  // test aggregate option and higherSeedHostsSecondLeg
  const roundsAgg = generatePlayoffBracketAdvanced(teams as any, { twoLegRounds: 2, aggregateAwayGoals: true, higherSeedHostsSecondLeg: true });
  if (!roundsAgg.some(r => r.some(m => m.aggregate === 'awayGoals'))) throw new Error('aggregateAwayGoals not applied');
  console.log('Advanced playoff tests PASSED');
}

run();
