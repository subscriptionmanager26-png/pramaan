import { NextResponse } from "next/server";

import { ensureAgentUserSynced } from "@/lib/agent/ensure-agent-user";
import { requireAgentUser } from "@/lib/agent/require-agent-user";
import { paFetch, personalAgentsConfigured } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";
/** Bound wait for PA enqueue so the browser never hangs past ~60s. */
export const maxDuration = 60;

const PA_POST_MS = 55_000;

export async function GET(request: Request) {
  if (!personalAgentsConfigured()) {
    return NextResponse.json({ error: "agent_backend_unconfigured" }, { status: 503 });
  }
  const auth = await requireAgentUser(request);
  if ("response" in auth) return auth.response;
  await ensureAgentUserSynced(auth.user);
  const url = new URL(request.url);
  const threadId = url.searchParams.get("threadId");
  const limit = url.searchParams.get("limit") || "20";
  const clientSendId = url.searchParams.get("clientSendId");
  const qs = new URLSearchParams({ limit });
  if (threadId) qs.set("threadId", threadId);
  if (clientSendId) qs.set("clientSendId", clientSendId);
  const res = await paFetch(
    `/api/v1/users/${encodeURIComponent(auth.user.id)}/messages?${qs.toString()}`,
    { signal: AbortSignal.timeout(20_000) },
  );
  const body = await res.json().catch(() => ({}));
  return NextResponse.json(body, { status: res.status });
}

export async function POST(request: Request) {
  const t0 = Date.now();
  if (!personalAgentsConfigured()) {
    return NextResponse.json({ error: "agent_backend_unconfigured" }, { status: 503 });
  }
  const auth = await requireAgentUser(request);
  if ("response" in auth) return auth.response;
  let syncMs = 0;
  let paMs = 0;
  try {
    const syncStart = Date.now();
    await ensureAgentUserSynced(auth.user);
    syncMs = Date.now() - syncStart;
    const payload = await request.json().catch(() => ({}));
    const clientSendId =
      typeof (payload as { clientSendId?: unknown }).clientSendId === "string"
        ? (payload as { clientSendId: string }).clientSendId.trim()
        : typeof (payload as { idempotencyKey?: unknown }).idempotencyKey === "string"
          ? (payload as { idempotencyKey: string }).idempotencyKey.trim()
          : "";
    const threadId =
      typeof (payload as { threadId?: unknown }).threadId === "string"
        ? (payload as { threadId: string }).threadId
        : "";
    const idempotencyKey =
      clientSendId && threadId ? `${threadId}:${clientSendId}` : clientSendId || undefined;

    const paStart = Date.now();
    const res = await paFetch(`/api/v1/users/${encodeURIComponent(auth.user.id)}/messages`, {
      method: "POST",
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(PA_POST_MS),
      headers: idempotencyKey ? { "Idempotency-Key": idempotencyKey } : undefined,
    });
    paMs = Date.now() - paStart;
    const body = await res.json().catch(() => ({}));
    const line = {
      userId: auth.user.id,
      email: auth.user.email ?? null,
      status: res.status,
      ok: res.ok,
      syncMs,
      paMs,
      totalMs: Date.now() - t0,
      threadId: threadId || null,
      clientSendId: clientSendId || null,
      errorCode:
        body && typeof body === "object" && body.error && typeof body.error === "object"
          ? (body.error as { code?: string }).code ?? null
          : typeof (body as { error?: unknown })?.error === "string"
            ? (body as { error: string }).error
            : null,
    };
    if (!res.ok || line.totalMs >= 8_000) {
      console.error("[agent-messages-post]", JSON.stringify(line));
    } else {
      console.info("[agent-messages-post]", JSON.stringify(line));
    }
    return NextResponse.json(body, { status: res.status });
  } catch (error) {
    const timedOut =
      error instanceof Error && (error.name === "TimeoutError" || /timeout/i.test(error.message));
    console.error(
      "[agent-messages-post]",
      JSON.stringify({
        userId: auth.user.id,
        email: auth.user.email ?? null,
        status: 0,
        ok: false,
        syncMs,
        paMs,
        totalMs: Date.now() - t0,
        error: timedOut ? "pa_post_timeout" : error instanceof Error ? error.message : "messages_post_failed",
      }),
    );
    if (timedOut) {
      return NextResponse.json(
        { error: { code: "upstream_timeout", message: "Send timed out. Check the thread; the message may still have been accepted." } },
        { status: 504 },
      );
    }
    throw error;
  }
}
