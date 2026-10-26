import { NextResponse } from "next/server";

import { fetchAgentThreads } from "@/lib/agent/fetch-agent-threads";
import { requireAgentUser } from "@/lib/agent/require-agent-user";
import { paFetch, personalAgentsConfigured, syncAgentUser } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

/**
 * One signed-in check + sync + parallel PA reads for initial /ai load.
 * Replaces separate sync, threads, and chat-state round trips from the browser.
 */
export async function GET(request: Request) {
  if (!personalAgentsConfigured()) {
    return NextResponse.json({ error: "agent_backend_unconfigured" }, { status: 503 });
  }
  const auth = await requireAgentUser(request);
  if ("response" in auth) return auth.response;

  const url = new URL(request.url);
  const threadId = url.searchParams.get("threadId") || "main";
  const messageLimit = url.searchParams.get("limit") || "50";
  const fileLimit = url.searchParams.get("fileLimit") || "100";
  const userPath = `/api/v1/users/${encodeURIComponent(auth.user.id)}`;
  const msgQs = new URLSearchParams({ limit: messageLimit, threadId });

  const [, threadPack, messagesRes, ordersRes, filesRes] = await Promise.all([
    syncAgentUser(auth.user.id, { name: auth.user.name, email: auth.user.email }, true),
    fetchAgentThreads(auth.user.id),
    paFetch(`${userPath}/messages?${msgQs.toString()}`),
    paFetch(`${userPath}/orders`),
    paFetch(`${userPath}/files?limit=${encodeURIComponent(fileLimit)}`),
  ]);

  const [messagesBody, ordersBody, filesBody] = await Promise.all([
    messagesRes.json().catch(() => ({})),
    ordersRes.json().catch(() => ({})),
    filesRes.json().catch(() => ({})),
  ]);

  const status = messagesRes.ok ? 200 : messagesRes.status;
  return NextResponse.json(
    {
      agent: "active",
      threads: threadPack.threads,
      messages: messagesRes.ok ? (messagesBody as { messages?: unknown }).messages ?? [] : [],
      orders: ordersRes.ok ? (ordersBody as { orders?: unknown }).orders ?? [] : [],
      files: filesRes.ok ? (filesBody as { files?: unknown }).files ?? [] : [],
      warnings: threadPack.messagesFailed && threadPack.threads.length ? ["message_index_unavailable"] : undefined,
      errors: {
        messages: messagesRes.ok ? undefined : messagesRes.status,
        orders: ordersRes.ok ? undefined : ordersRes.status,
        files: filesRes.ok ? undefined : filesRes.status,
        threads: threadPack.threadsResOk ? undefined : threadPack.threadsStatus,
      },
    },
    { status },
  );
}
