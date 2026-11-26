import { NextResponse } from "next/server";

import { isPocketedgeOperator } from "@/lib/agent/pocketedge-operators";
import { requireAgentUser } from "@/lib/agent/require-agent-user";
import { paFetch, personalAgentsConfigured } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";

/**
 * Operator-only: start hosted mcp.kite.trade OAuth (~24h bearer).
 * Uses the company API key server-side — no studio.pocketedge.in session required.
 */
export async function GET(request: Request) {
  if (!personalAgentsConfigured()) {
    return NextResponse.json({ error: "agent_backend_unconfigured" }, { status: 503 });
  }
  const auth = await requireAgentUser(request);
  if ("response" in auth) return auth.response;
  const email = auth.user.email ?? "";
  if (!isPocketedgeOperator(email)) {
    return NextResponse.json(
      {
        error: {
          code: "forbidden",
          message:
            "Only PocketEdge operators can authorize the Zerodha server. Ask an admin, or set POCKETEDGE_OPERATOR_EMAILS on production.",
        },
      },
      { status: 403 },
    );
  }
  const res = await paFetch("/api/v1/kite-mcp/oauth-url", {
    signal: AbortSignal.timeout(20_000),
  });
  const body = (await res.json().catch(() => ({}))) as { ready?: boolean; url?: string; error?: { message?: string } };
  if (!res.ok) {
    return NextResponse.json(body, { status: res.status });
  }
  if (body.ready) {
    const returnTo = new URL(request.url).searchParams.get("returnTo") || "/ai/connections";
    return NextResponse.redirect(new URL(`${returnTo}${returnTo.includes("?") ? "&" : "?"}kiteMcp=ready`, request.url));
  }
  if (typeof body.url === "string" && body.url.startsWith("http")) {
    return NextResponse.redirect(body.url);
  }
  return NextResponse.json(
    { error: { code: "oauth_url_missing", message: "Personal-agents did not return an OAuth URL." } },
    { status: 502 },
  );
}