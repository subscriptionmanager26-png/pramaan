import { NextResponse } from "next/server";

import { paFetch, personalAgentsConfigured } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";

/** Kite redirects here after operator OAuth; we finish the token exchange on personal-agents. */
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
  if (!personalAgentsConfigured()) {
    return NextResponse.redirect(new URL("/ai/connections?kiteMcp=error&msg=backend_unconfigured", request.url));
  }
  try {
    const res = await paFetch("/api/v1/kite-mcp/oauth-complete", {
      method: "POST",
      body: JSON.stringify({ code, state }),
      signal: AbortSignal.timeout(25_000),
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok || !(body as { ok?: boolean }).ok) {
      const msg =
        (body as { error?: { message?: string } })?.error?.message || "token_exchange_failed";
      console.error("[kite-mcp-oauth-callback] token exchange failed", { status: res.status, msg });
      return NextResponse.redirect(new URL(`/ai/connections?kiteMcp=error&msg=${encodeURIComponent(msg)}`, request.url));
    }
    console.info("[kite-mcp-oauth-callback] server bearer stored");
    return NextResponse.redirect(new URL("/ai/connections?kiteMcp=ready", request.url));
  } catch (err) {
    console.error("[kite-mcp-oauth-callback] upstream failed", err);
    return NextResponse.redirect(new URL("/ai/connections?kiteMcp=error&msg=upstream_timeout", request.url));
  }
}