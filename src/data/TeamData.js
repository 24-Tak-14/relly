// CommonJS shim for GitHub Actions runtime that may not resolve TS files via require
function getTeamData() {
  const divisions = [
    'NorthEastern/Soul', 'SouthWestern/Flame', 'Midwest/Steel', 'Pacific/Blue', 'Central/Heart', 'Coastal/Zephyr'
  ];
  const out = {};
  let idx = 1;
  for (let d = 0; d < divisions.length; d++) {
    for (let i = 0; i < 6; i++) {
      const name = `HFL City ${idx}`;
      out[`team${idx}`] = { name, depotAllegiance: divisions[d] };
      idx++;
    }
  }
  return out;
}

module.exports = { getTeamData };
