import { NextResponse } from "next/server";

import { requireAgentUser } from "@/lib/agent/require-agent-user";
import { paFetch } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ messageId: string }> };

export async function GET(request: Request, { params }: Params) {
  const auth = await requireAgentUser(request);
  if ("response" in auth) return auth.response;
  const { messageId } = await params;
  const res = await paFetch(
    `/api/v1/users/${encodeURIComponent(auth.user.id)}/messages/${encodeURIComponent(messageId)}/artifacts`,
  );
  const body = await res.json().catch(() => ({}));
  return NextResponse.json(body, { status: res.status });
}
