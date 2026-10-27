import { NextResponse } from "next/server";

import { requireAgentUser } from "@/lib/agent/require-agent-user";
import { paFetch, personalAgentsConfigured } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";

/** One auth check + parallel Personal Agents reads for the active thread UI. */
export async function GET(request: Request) {
  const t0 = Date.now();
  let authMs = 0;
  let upstreamMs = 0;
  if (!personalAgentsConfigured()) {
    return NextResponse.json({ error: "agent_backend_unconfigured" }, { status: 503 });
  }
  const authStart = Date.now();
  const auth = await requireAgentUser(request);
  authMs = Date.now() - authStart;
  if ("response" in auth) {
    if (auth.response) {
      auth.response.headers.set("Server-Timing", `auth;dur=${authMs},total;dur=${Date.now() - t0}`);
    }
    return auth.response;
  }

  const url = new URL(request.url);
  const threadId = url.searchParams.get("threadId") || "main";
  const messageLimit = url.searchParams.get("limit") || "40";
  const fileLimit = url.searchParams.get("fileLimit") || "100";
  const messagesOnly = url.searchParams.get("scope") === "messages";
  const userPath = `/api/v1/users/${encodeURIComponent(auth.user.id)}`;
  const qs = new URLSearchParams({ limit: messageLimit, threadId });

  const upstreamStart = Date.now();
  const fetches = messagesOnly
    ? [paFetch(`${userPath}/messages?${qs.toString()}`)]
    : [
        paFetch(`${userPath}/messages?${qs.toString()}`),
        paFetch(`${userPath}/orders`),
        paFetch(`${userPath}/files?limit=${encodeURIComponent(fileLimit)}`),
      ];
  const [messagesRes, ordersRes, filesRes] = await Promise.all(fetches);
  const [messagesBody, ordersBody, filesBody] = await Promise.all([
    messagesRes.json().catch(() => ({})),
    ordersRes ? ordersRes.json().catch(() => ({})) : Promise.resolve({}),
    filesRes ? filesRes.json().catch(() => ({})) : Promise.resolve({}),
  ]);
  upstreamMs = Date.now() - upstreamStart;

  const paTiming = messagesRes.headers.get("server-timing");
  const timing = [
    `auth;dur=${authMs}`,
    `upstream;dur=${upstreamMs}`,
    paTiming ? `pa;desc="${paTiming.replace(/"/g, "")}"` : null,
    `total;dur=${Date.now() - t0}`,
  ]
    .filter(Boolean)
    .join(", ");

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
    { status, headers: { "Server-Timing": timing, "Cache-Control": "private, no-cache" } },
  );
}
