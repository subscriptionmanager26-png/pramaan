import { NextResponse } from "next/server";

import { requireAgentUser } from "@/lib/agent/require-agent-user";
import { paFetch, personalAgentsConfigured } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";

/**
 * Start hosted mcp.kite.trade operator OAuth.
 * Callback returns to pocketedge.in (not personal-agents.vercel.app).
 */
export async function GET(request: Request) {
  if (!personalAgentsConfigured()) {
    return NextResponse.json({ error: "agent_backend_unconfigured" }, { status: 503 });
  }
  const auth = await requireAgentUser(request);
  if ("response" in auth) return auth.response;

  const callback = new URL("/api/agent/kite-mcp/oauth-callback", request.url).toString();
  const res = await paFetch(
    `/api/v1/kite-mcp/oauth-url?redirect_uri=${encodeURIComponent(callback)}`,
    { signal: AbortSignal.timeout(20_000) },
  );
  const body = (await res.json().catch(() => ({}))) as { ready?: boolean; url?: string; error?: { message?: string } };
  if (!res.ok) {
    return NextResponse.json(body, { status: res.status });
  }
  if (body.ready) {
    return NextResponse.redirect(new URL("/ai/connections?kiteMcp=ready", request.url));
  }
  if (typeof body.url === "string" && body.url.startsWith("http")) {
    return NextResponse.redirect(body.url);
  }
  return NextResponse.json(
    { error: { code: "oauth_url_missing", message: "Personal-agents did not return an OAuth URL." } },
    { status: 502 },
  );
}