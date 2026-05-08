import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs/promises'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const raw = await fs.readFile('scripts/output/schedule.json','utf8');
    const schedule = JSON.parse(raw);
    res.status(200).json({ schedule });
  } catch (e) {
    res.status(500).json({ error: 'schedule not found' });
  }
}
