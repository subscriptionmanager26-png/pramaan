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
  const url = new URL(request.url);
  const threadId = url.searchParams.get("threadId");
  const limit = url.searchParams.get("limit") || "20";
  const qs = new URLSearchParams({ limit });
  if (threadId) qs.set("threadId", threadId);
  const res = await paFetch(
    `/api/v1/users/${encodeURIComponent(auth.user.id)}/messages?${qs.toString()}`,
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
