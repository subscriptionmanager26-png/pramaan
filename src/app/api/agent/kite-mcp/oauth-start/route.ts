import { NextResponse } from "next/server";

import { requireAgentUser } from "@/lib/agent/require-agent-user";
import { paFetch, personalAgentsConfigured } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";

function authRequestFrom(request: Request, formToken?: string) {
  const headers = new Headers(request.headers);
  const token = formToken?.trim();
  if (token && !headers.get("authorization")) {
    headers.set("authorization", `Bearer ${token}`);
  }
  return new Request(request.url, { headers, method: "GET" });
}

async function startKiteMcpOAuth(request: Request) {
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

/**
 * Start hosted mcp.kite.trade operator OAuth.
 * Callback returns to pocketedge.in (not personal-agents.vercel.app).
 */
export async function GET(request: Request) {
  return startKiteMcpOAuth(request);
}

/** Same as GET but accepts `access_token` in form body (browser auth is often localStorage-only). */
export async function POST(request: Request) {
  const form = await request.formData().catch(() => null);
  const formToken = String(form?.get("access_token") || "");
  return startKiteMcpOAuth(authRequestFrom(request, formToken));
}