import * as fs from 'fs/promises';

async function main(){
  const scheduleRaw = await fs.readFile('scripts/output/schedule.json','utf8');
  const playoffsRaw = await fs.readFile('scripts/output/playoffs.json','utf8');
  const schedule = JSON.parse(scheduleRaw);
  const playoffs = JSON.parse(playoffsRaw);
  if (!Array.isArray(schedule)) throw new Error('schedule.json must be an array');
  if (!Array.isArray(playoffs)) throw new Error('playoffs.json must be an array of rounds');
  // simple checks
  if (schedule.length === 0) throw new Error('schedule.json is empty');
  if (playoffs.length === 0) throw new Error('playoffs.json is empty');
  // check fields
  const s0 = schedule[0];
  if (!('week' in s0) || !('home' in s0) || !('away' in s0)) throw new Error('schedule entries missing fields');
  const p0 = playoffs[0];
  if (!Array.isArray(p0)) throw new Error('playoffs should be array of rounds');
  console.log('Validation OK');
}

main().catch(e=>{ console.error(e); process.exit(2); });
