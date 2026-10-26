import { NextResponse } from "next/server";

import { requireAgentUser } from "@/lib/agent/require-agent-user";
import { paFetch, personalAgentsConfigured } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";

/** One auth check + parallel Personal Agents reads for the active thread UI. */
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
  const messagesOnly = url.searchParams.get("scope") === "messages";
  const userPath = `/api/v1/users/${encodeURIComponent(auth.user.id)}`;
  const qs = new URLSearchParams({ limit: messageLimit, threadId });

  const messagesRes = await paFetch(`${userPath}/messages?${qs.toString()}`);
  const messagesBody = await messagesRes.json().catch(() => ({}));

  let ordersRes: Response | undefined;
  let filesRes: Response | undefined;
  let ordersBody: unknown = {};
  let filesBody: unknown = {};

  if (!messagesOnly) {
    [ordersRes, filesRes] = await Promise.all([
      paFetch(`${userPath}/orders`),
      paFetch(`${userPath}/files?limit=${encodeURIComponent(fileLimit)}`),
    ]);
    [ordersBody, filesBody] = await Promise.all([
      ordersRes.json().catch(() => ({})),
      filesRes.json().catch(() => ({})),
    ]);
  }

  const status = messagesRes.ok ? 200 : messagesRes.status;
  return NextResponse.json(
    {
      messages: messagesRes.ok ? (messagesBody as { messages?: unknown }).messages ?? [] : [],
      orders: ordersRes?.ok ? (ordersBody as { orders?: unknown }).orders ?? [] : [],
      files: filesRes?.ok ? (filesBody as { files?: unknown }).files ?? [] : [],
      errors: {
        messages: messagesRes.ok ? undefined : messagesRes.status,
        orders: ordersRes ? (ordersRes.ok ? undefined : ordersRes.status) : undefined,
        files: filesRes ? (filesRes.ok ? undefined : filesRes.status) : undefined,
      },
    },
    { status },
  );
}
