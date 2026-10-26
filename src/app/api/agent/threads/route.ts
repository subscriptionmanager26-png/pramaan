import { NextResponse } from "next/server";

import { fetchAgentThreads } from "@/lib/agent/fetch-agent-threads";
import { requireAgentUser } from "@/lib/agent/require-agent-user";
import { personalAgentsConfigured } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    if (!personalAgentsConfigured()) {
      return NextResponse.json({ error: "agent_backend_unconfigured" }, { status: 503 });
    }
    const auth = await requireAgentUser(request);
    if ("response" in auth) return auth.response;

    const { threads, messagesFailed, messagesStatus, threadsStatus: threadsResStatus, threadsResOk } =
      await fetchAgentThreads(auth.user.id);

    if (!threads.length && messagesFailed && !threadsResOk) {
      return NextResponse.json(
        {
          error: { code: "agent_threads_failed", message: "Agent backend could not load chat history." },
          threadsStatus: threadsResStatus,
          messagesStatus,
        },
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
