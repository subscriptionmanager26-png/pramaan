import { NextResponse } from "next/server";

import { requireAgentUser } from "@/lib/agent/require-agent-user";
import type { AgentMessage } from "@/lib/agent/types";
import { mergeThreadLists, threadsFromMessages } from "@/lib/agent/threads-from-messages";
import { paFetch, personalAgentsConfigured } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!personalAgentsConfigured()) {
    return NextResponse.json({ error: "agent_backend_unconfigured" }, { status: 503 });
  }
  const auth = await requireAgentUser(request);
  if ("response" in auth) return auth.response;

  const userPath = `/api/v1/users/${encodeURIComponent(auth.user.id)}`;

  let fromThreads: ReturnType<typeof threadsFromMessages> = [];
  const threadsRes = await paFetch(`${userPath}/threads`);
  if (threadsRes.ok) {
    const body = await threadsRes.json().catch(() => ({}));
    fromThreads = body.threads ?? [];
  }

  const msgRes = await paFetch(`${userPath}/messages?limit=200`);
  if (!msgRes.ok && !fromThreads.length) {
    const err = await msgRes.json().catch(() => ({}));
    return NextResponse.json(err, { status: msgRes.status });
  }

  let fromMessages: ReturnType<typeof threadsFromMessages> = [];
  if (msgRes.ok) {
    const msgBody = await msgRes.json().catch(() => ({}));
    const messages = (msgBody.messages as AgentMessage[]) ?? [];
    fromMessages = threadsFromMessages(messages, 60);
  }

  const threads = mergeThreadLists(fromThreads, fromMessages);
  return NextResponse.json({ threads });
}
