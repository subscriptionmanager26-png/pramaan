import { NextResponse } from "next/server";

import { userHasAgentAccess } from "@/lib/pocketedge/agent-access";
import { accessTokenFromRequest, pocketedgeUserFromRequest } from "@/lib/pocketedge/session";
import { paFetch, personalAgentsConfigured } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";
export const maxDuration = 60;
export const preferredRegion = ["bom1", "iad1"];

type Params = { params: Promise<{ id: string }> };

/** Nudge personal-agents to start Cursor dispatch in this request (don't wait on after()). */
export async function POST(request: Request, { params }: Params) {
  if (!personalAgentsConfigured()) {
    return NextResponse.json({ error: "agent_backend_unconfigured" }, { status: 503 });
  }
  const user = await pocketedgeUserFromRequest(request);
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const token = accessTokenFromRequest(request);
  if (!(await userHasAgentAccess(user.id, user.metadata, token))) {
    return NextResponse.json({ error: "agent_not_enabled" }, { status: 403 });
  }
  const { id } = await params;
  const res = await paFetch(`/api/v1/users/${encodeURIComponent(user.id)}/messages/${encodeURIComponent(id)}/kick`, {
    method: "POST",
    signal: AbortSignal.timeout(25_000),
  });
  const body = await res.json().catch(() => ({}));
  return NextResponse.json(body, { status: res.status });
}