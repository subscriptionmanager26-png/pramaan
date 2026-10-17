import { NextResponse } from "next/server";

import { requireAgentUser } from "@/lib/agent/require-agent-user";
import { paFetch, personalAgentsConfigured } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!personalAgentsConfigured()) {
    return NextResponse.json({ error: "agent_backend_unconfigured" }, { status: 503 });
  }
  const auth = await requireAgentUser(request);
  if ("response" in auth) return auth.response;
  const res = await paFetch(`/api/v1/users/${encodeURIComponent(auth.user.id)}/threads`);
  const body = await res.json().catch(() => ({}));
  return NextResponse.json(body, { status: res.status });
}
