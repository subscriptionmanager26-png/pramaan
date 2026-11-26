import { NextResponse } from "next/server";

import { userHasAgentAccess } from "@/lib/pocketedge/agent-access";
import { accessTokenFromRequest, pocketedgeUserFromRequest } from "@/lib/pocketedge/session";
import { paFetch, personalAgentsConfigured } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";
export const maxDuration = 20;

/** Preload thread metadata on /ai so the first send is faster. */
export async function POST(request: Request) {
  if (!personalAgentsConfigured()) {
    return NextResponse.json({ error: "agent_backend_unconfigured" }, { status: 503 });
  }
  const user = await pocketedgeUserFromRequest(request);
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const token = accessTokenFromRequest(request);
  if (!(await userHasAgentAccess(user.id, user.metadata, token))) {
    return NextResponse.json({ error: "agent_not_enabled" }, { status: 403 });
  }
  const payload = (await request.json().catch(() => ({}))) as { threadId?: string };
  const threadId = typeof payload.threadId === "string" ? payload.threadId.trim() : "";
  if (!threadId) {
    return NextResponse.json({ error: "threadId_required" }, { status: 400 });
  }
  const res = await paFetch(`/api/v1/users/${encodeURIComponent(user.id)}/warm`, {
    method: "POST",
    body: JSON.stringify({ threadId }),
    signal: AbortSignal.timeout(12_000),
  });
  const body = await res.json().catch(() => ({}));
  return NextResponse.json(body, { status: res.status });
}