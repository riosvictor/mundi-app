import { NextApiRequest, NextApiResponse } from 'next'
import { locals } from '../../../server/local'
import { Data } from '../../../server/local'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(locals)
}