import { PlayoffRoundAdvanced } from './generatePlayoffsAdvanced';

// deterministic 32-bit hash
function hashStringToInt(s: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

// Simulate an advanced bracket deterministically using seed
export function simulateBracket(bracket: PlayoffRoundAdvanced[], seed = 'HFL_sim_v1') {
  const winnersByRound: string[][] = [];
  let roundIndex = 0;
  let currentRound = bracket[0] ? bracket[0] : [];

  for (const round of bracket) {
    const roundWinners: string[] = [];
    for (const match of round) {
      // choose winner among the two teams using deterministic hash
      // extract team names from legs: prefer second leg home as higher seed
      let teamA = match.legs[0].home; // first leg home
      let teamB = match.legs[0].away;
      if (match.legs.length >= 2) {
        // second leg: home is higher seed
        teamA = match.legs[1].home;
        teamB = match.legs[1].away;
      }
      const scoreA = hashStringToInt(seed + '|' + teamA + '|' + roundIndex) % 1000;
      const scoreB = hashStringToInt(seed + '|' + teamB + '|' + roundIndex) % 1000;
      const winner = scoreA >= scoreB ? teamA : teamB;
      roundWinners.push(winner);
    }
    winnersByRound.push(roundWinners);
    roundIndex++;
  }

  const champion = winnersByRound.length ? winnersByRound[winnersByRound.length - 1][0] : '';
  return { winnersByRound, champion };
}
