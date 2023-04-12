// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

function healthCheck(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ status: 'OK' });
}

export default healthCheck;
