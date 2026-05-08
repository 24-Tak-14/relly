import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs/promises'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const raw = await fs.readFile('scripts/output/playoffs.json','utf8');
    const playoffs = JSON.parse(raw);
    res.status(200).json({ playoffs });
  } catch (e) {
    res.status(500).json({ error: 'playoffs not found' });
  }
}
