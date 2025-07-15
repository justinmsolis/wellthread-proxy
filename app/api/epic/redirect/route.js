// app/api/epic/redirect/route.js

import { NextResponse } from 'next/server';

export async function GET(req) {
  const code = req.nextUrl.searchParams.get('code');
  const error = req.nextUrl.searchParams.get('error');

  const realCallbackUrl = 'https://app.well-thread.com/api/epic/oauth/callback';

  const redirectUrl = new URL(realCallbackUrl);

  if (code) {
    redirectUrl.searchParams.set('code', code);
  }

  if (error) {
    redirectUrl.searchParams.set('error', error);
  }

  console.log('Proxying Epic OAuth redirect to:', redirectUrl.toString());

  return NextResponse.redirect(redirectUrl.toString(), 302);
}
