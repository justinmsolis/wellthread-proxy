// For App Router (app/api/epic/redirect/route.ts)
import { NextRequest, NextResponse } from "next/server";

const realCallbackUrl = 'https://app.well-thread.com/api/epic/oauth/callback';

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  const error = req.nextUrl.searchParams.get("error");

  const redirectUrl = new URL(realCallbackUrl);

  if (code) {
    redirectUrl.searchParams.set("code", code);
  }

  if (error) {
    redirectUrl.searchParams.set("error", error);
  }

  console.log("Proxying Epic OAuth redirect to:", redirectUrl.toString());

  return NextResponse.redirect(redirectUrl.toString(), 302);
}