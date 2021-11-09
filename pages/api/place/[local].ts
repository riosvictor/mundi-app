import type { NextApiRequest, NextApiResponse } from 'next'
import { Data, Error, locals } from '../../../server/local'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const { local } = req.query

  const filtered = locals.filter((p) => p.id === local)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Local ${local} not found.` })
  }
}
