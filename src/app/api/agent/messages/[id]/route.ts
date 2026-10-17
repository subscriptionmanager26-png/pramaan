import { NextResponse } from "next/server";

import { userHasAgentAccess } from "@/lib/pocketedge/agent-access";
import { accessTokenFromRequest, pocketedgeUserFromRequest } from "@/lib/pocketedge/session";
import { paFetch, personalAgentsConfigured } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ id: string }> };

export async function GET(request: Request, { params }: Params) {
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
  const res = await paFetch(`/api/v1/users/${encodeURIComponent(user.id)}/messages/${encodeURIComponent(id)}`);
  const body = await res.json().catch(() => ({}));
  return NextResponse.json(body, { status: res.status });
}
