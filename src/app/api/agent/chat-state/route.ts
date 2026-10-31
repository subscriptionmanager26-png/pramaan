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
  // Cap upstream wait — a hung PA list previously left the client on "Loading conversation…".
  const upstreamSignal = AbortSignal.timeout(20_000);
  const fetches = messagesOnly
    ? [paFetch(`${userPath}/messages?${qs.toString()}`, { signal: upstreamSignal })]
    : [
        paFetch(`${userPath}/messages?${qs.toString()}`, { signal: upstreamSignal }),
        paFetch(`${userPath}/orders`, { signal: upstreamSignal }),
        paFetch(`${userPath}/files?limit=${encodeURIComponent(fileLimit)}`, { signal: upstreamSignal }),
      ];
  let messagesRes: Response;
  let ordersRes: Response | undefined;
  let filesRes: Response | undefined;
  try {
    [messagesRes, ordersRes, filesRes] = await Promise.all(fetches);
  } catch (error) {
    const timedOut =
      error instanceof Error && (error.name === "TimeoutError" || error.name === "AbortError");
    return NextResponse.json(
      {
        messages: [],
        orders: [],
        files: [],
        errors: { messages: timedOut ? 504 : 502 },
      },
      {
        status: timedOut ? 504 : 502,
        headers: {
          "Server-Timing": `auth;dur=${authMs},upstream;dur=${Date.now() - upstreamStart},total;dur=${Date.now() - t0}`,
          "Cache-Control": "private, no-cache",
        },
      },
    );
  }
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
