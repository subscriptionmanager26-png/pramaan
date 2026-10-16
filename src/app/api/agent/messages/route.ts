import { NextResponse } from "next/server";

import { userHasAgentAccess } from "@/lib/pocketedge/agent-access";
import { pocketedgeUserFromRequest } from "@/lib/pocketedge/session";
import { paFetch, personalAgentsConfigured } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";

async function requireAgentUser(request: Request) {
  const user = await pocketedgeUserFromRequest(request);
  if (!user) return { response: NextResponse.json({ error: "unauthorized" }, { status: 401 }) };
  if (!(await userHasAgentAccess(user.id, user.metadata))) {
    return { response: NextResponse.json({ error: "agent_not_enabled" }, { status: 403 }) };
  }
  return { user };
}

export async function GET(request: Request) {
  if (!personalAgentsConfigured()) {
    return NextResponse.json({ error: "agent_backend_unconfigured" }, { status: 503 });
  }
  const auth = await requireAgentUser(request);
  if ("response" in auth) return auth.response;
  const url = new URL(request.url);
  const threadId = url.searchParams.get("threadId") || "main";
  const limit = url.searchParams.get("limit") || "20";
  const res = await paFetch(
    `/api/v1/users/${encodeURIComponent(auth.user.id)}/messages?threadId=${encodeURIComponent(threadId)}&limit=${limit}`,
  );
  const body = await res.json().catch(() => ({}));
  return NextResponse.json(body, { status: res.status });
}

export async function POST(request: Request) {
  if (!personalAgentsConfigured()) {
    return NextResponse.json({ error: "agent_backend_unconfigured" }, { status: 503 });
  }
  const auth = await requireAgentUser(request);
  if ("response" in auth) return auth.response;
  const payload = await request.json().catch(() => ({}));
  const res = await paFetch(`/api/v1/users/${encodeURIComponent(auth.user.id)}/messages`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  const body = await res.json().catch(() => ({}));
  return NextResponse.json(body, { status: res.status });
}
