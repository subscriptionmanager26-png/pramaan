import { NextResponse } from "next/server";

import { ensureAgentUserSynced } from "@/lib/agent/ensure-agent-user";
import { requireAgentUser } from "@/lib/agent/require-agent-user";
import { paFetch, personalAgentsConfigured } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";
export const maxDuration = 30;
export const preferredRegion = ["bom1"];

export async function POST(request: Request) {
  if (!personalAgentsConfigured()) {
    return NextResponse.json({ error: "agent_backend_unconfigured" }, { status: 503 });
  }
  const auth = await requireAgentUser(request);
  if ("response" in auth) return auth.response;
  await ensureAgentUserSynced(auth.user);
  const payload = await request.json().catch(() => ({}));
  try {
    const res = await paFetch(`/api/v1/users/${encodeURIComponent(auth.user.id)}/zerodha`, {
      method: "POST",
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(20_000),
    });
    const body = await res.json().catch(() => ({}));
    return NextResponse.json(body, { status: res.status });
  } catch (err) {
    const timedOut =
      err instanceof Error && (err.name === "TimeoutError" || /aborted due to timeout/i.test(err.message));
    return NextResponse.json(
      {
        error: {
          code: timedOut ? "upstream_timeout" : "zerodha_proxy_failed",
          message: timedOut
            ? "Zerodha took too long to respond. Try again in a minute."
            : err instanceof Error
              ? err.message
              : "Could not reach Zerodha.",
        },
      },
      { status: timedOut ? 504 : 502 },
    );
  }
}
