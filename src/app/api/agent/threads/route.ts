import { NextResponse } from "next/server";

import { requireAgentUser } from "@/lib/agent/require-agent-user";
import type { AgentMessage } from "@/lib/agent/types";
import { threadsFromMessages } from "@/lib/agent/threads-from-messages";
import { paFetch, personalAgentsConfigured } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!personalAgentsConfigured()) {
    return NextResponse.json({ error: "agent_backend_unconfigured" }, { status: 503 });
  }
  const auth = await requireAgentUser(request);
  if ("response" in auth) return auth.response;

  const userPath = `/api/v1/users/${encodeURIComponent(auth.user.id)}`;
  const threadsRes = await paFetch(`${userPath}/threads`);
  if (threadsRes.ok) {
    const body = await threadsRes.json().catch(() => ({}));
    const threads = body.threads ?? [];
    if (threads.length) {
      return NextResponse.json({ threads });
    }
  }

  const msgRes = await paFetch(`${userPath}/messages?limit=100`);
  if (!msgRes.ok) {
    const err = await msgRes.json().catch(() => ({}));
    return NextResponse.json(err, { status: msgRes.status });
  }
  const msgBody = await msgRes.json().catch(() => ({}));
  const messages = (msgBody.messages as AgentMessage[]) ?? [];
  return NextResponse.json({ threads: threadsFromMessages(messages) });
}
