// pages/api/robots.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'text/txt');
  res.write(`
	User-agent: *
	Disallow:
`);
  res.end();
};
