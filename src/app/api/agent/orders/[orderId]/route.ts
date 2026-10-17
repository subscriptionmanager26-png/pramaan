import { NextResponse } from "next/server";

import { requireAgentUser } from "@/lib/agent/require-agent-user";
import { paFetch } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ orderId: string }> };

export async function POST(request: Request, { params }: Params) {
  const auth = await requireAgentUser(request);
  if ("response" in auth) return auth.response;
  const { orderId } = await params;
  const payload = await request.json().catch(() => ({}));
  const res = await paFetch(
    `/api/v1/users/${encodeURIComponent(auth.user.id)}/orders/${encodeURIComponent(orderId)}`,
    {
      method: "POST",
      body: JSON.stringify(payload),
    },
  );
  const body = await res.json().catch(() => ({}));
  return NextResponse.json(body, { status: res.status });
}
