import { NextResponse } from "next/server";

import { completeKiteMcpOAuth } from "@/lib/zerodha/kite-mcp-oauth";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const error = url.searchParams.get("error_description") || url.searchParams.get("error");
  if (error) {
    return NextResponse.redirect(new URL(`/ai/connections?kiteMcp=error&msg=${encodeURIComponent(error)}`, request.url));
  }
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  if (!code || !state) {
    return NextResponse.redirect(new URL("/ai/connections?kiteMcp=error&msg=missing_code", request.url));
  }
  try {
    await completeKiteMcpOAuth({ code, state });
    return NextResponse.redirect(new URL("/ai/connections?kiteMcp=ready", request.url));
  } catch (err) {
    const msg = err instanceof Error ? err.message : "token_exchange_failed";
    return NextResponse.redirect(new URL(`/ai/connections?kiteMcp=error&msg=${encodeURIComponent(msg)}`, request.url));
  }
}