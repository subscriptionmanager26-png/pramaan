import { NextResponse } from "next/server";

import { ensureAgentUserSynced } from "@/lib/agent/ensure-agent-user";
import { requireAgentUser } from "@/lib/agent/require-agent-user";
import { paFetch, personalAgentsConfigured } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!personalAgentsConfigured()) {
    return NextResponse.json({ error: "agent_backend_unconfigured" }, { status: 503 });
  }
  const auth = await requireAgentUser(request);
  if ("response" in auth) return auth.response;
  // Portfolio Update does not go through /ai bootstrap — sync before PA reads.
  await ensureAgentUserSynced(auth.user);
  const res = await paFetch(`/api/v1/users/${encodeURIComponent(auth.user.id)}/connections`);
  const body = await res.json().catch(() => ({}));
  return NextResponse.json(body, { status: res.status });
}
