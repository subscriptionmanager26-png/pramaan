import { NextResponse } from "next/server";

import { normalizeThreadSummaries } from "@/lib/agent/normalize-threads";
import { requireAgentUser } from "@/lib/agent/require-agent-user";
import type { AgentMessage } from "@/lib/agent/types";
import { mergeThreadLists, threadsFromMessages } from "@/lib/agent/threads-from-messages";
import { paFetch, personalAgentsConfigured } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    if (!personalAgentsConfigured()) {
      return NextResponse.json({ error: "agent_backend_unconfigured" }, { status: 503 });
    }
    const auth = await requireAgentUser(request);
    if ("response" in auth) return auth.response;

    const userPath = `/api/v1/users/${encodeURIComponent(auth.user.id)}`;

    let fromThreads: ReturnType<typeof threadsFromMessages> = [];
    let threadsResStatus = 0;
    let fromMessages: ReturnType<typeof threadsFromMessages> = [];
    let messagesFailed = false;
    let messagesStatus = 0;

    const [threadsRes, msgRes] = await Promise.all([
      paFetch(`${userPath}/threads`),
      paFetch(`${userPath}/messages?limit=60`),
    ]);
    threadsResStatus = threadsRes.status;
    if (threadsRes.ok) {
      const body = await threadsRes.json().catch(() => ({}));
      fromThreads = normalizeThreadSummaries(body.threads);
    }

    messagesStatus = msgRes.status;
    if (msgRes.ok) {
      const msgBody = await msgRes.json().catch(() => ({}));
      const raw = msgBody.messages;
      const messages = Array.isArray(raw) ? (raw as AgentMessage[]) : [];
      try {
        fromMessages = threadsFromMessages(messages, 60);
      } catch {
        messagesFailed = true;
      }
    } else {
      messagesFailed = true;
    }

    const threads = mergeThreadLists(fromThreads, fromMessages);

    if (!threads.length && messagesFailed && !threadsRes.ok) {
      const err = await msgRes.json().catch(() => ({}));
      const message =
        (err as { error?: { message?: string } })?.error?.message ||
        (typeof (err as { error?: string }).error === "string" ? (err as { error: string }).error : undefined) ||
        "Agent backend could not load chat history.";
      return NextResponse.json(
        { error: { code: "agent_threads_failed", message }, threadsStatus: threadsResStatus, messagesStatus },
        { status: messagesStatus >= 400 ? messagesStatus : 502 },
      );
    }

    return NextResponse.json({
      threads,
      ...(messagesFailed && threads.length ? { warnings: ["message_index_unavailable"] } : {}),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "threads_route_failed";
    console.error("[api/agent/threads]", error);
    return NextResponse.json({ error: { code: "internal_error", message } }, { status: 500 });
  }
}
