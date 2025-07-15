// For Pages Router (pages/api/epic/redirect.ts)
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code, error } = req.query;

  const realCallbackUrl = new URL('https://app.well-thread.com/api/epic/oauth/callback');

  if (code && typeof code === 'string') {
    realCallbackUrl.searchParams.set('code', code);
  }

  if (error && typeof error === 'string') {
    realCallbackUrl.searchParams.set('error', error);
  }

  console.log('Proxying Epic OAuth redirect to:', realCallbackUrl.toString());

  res.redirect(302, realCallbackUrl.toString());
}