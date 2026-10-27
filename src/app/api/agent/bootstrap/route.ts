import { NextResponse } from "next/server";

import { fetchAgentThreads } from "@/lib/agent/fetch-agent-threads";
import { requireAgentUser } from "@/lib/agent/require-agent-user";
import { personalAgentsConfigured, syncAgentUser } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

/**
 * Lightweight shell bootstrap: sync + thread metadata only.
 * Message history loads via /api/agent/chat-state when a thread is selected.
 */
export async function GET(request: Request) {
  if (!personalAgentsConfigured()) {
    return NextResponse.json({ error: "agent_backend_unconfigured" }, { status: 503 });
  }
  const auth = await requireAgentUser(request);
  if ("response" in auth) return auth.response;

  const [, threadPack] = await Promise.all([
    syncAgentUser(auth.user.id, { name: auth.user.name, email: auth.user.email }, true),
    fetchAgentThreads(auth.user.id),
  ]);

  return NextResponse.json({
    agent: "active",
    threads: threadPack.threads,
    messages: [],
    orders: [],
    files: [],
    errors: {
      threads: threadPack.threadsResOk ? undefined : threadPack.threadsStatus,
    },
  });
}
