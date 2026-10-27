import { createHash } from "node:crypto";

import { NextResponse } from "next/server";

import { fetchAgentThreads } from "@/lib/agent/fetch-agent-threads";
import { requireAgentUser } from "@/lib/agent/require-agent-user";
import { personalAgentsConfigured } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const t0 = Date.now();
  let authMs = 0;
  let upstreamMs = 0;
  try {
    if (!personalAgentsConfigured()) {
      return NextResponse.json({ error: "agent_backend_unconfigured" }, { status: 503 });
    }

    const authStart = Date.now();
    const auth = await requireAgentUser(request);
    authMs = Date.now() - authStart;
    if ("response" in auth && auth.response) {
      auth.response.headers.set(
        "Server-Timing",
        `auth;dur=${authMs},total;dur=${Date.now() - t0}`,
      );
      return auth.response;
    }
    if (!("user" in auth)) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }

    const clientInm = request.headers.get("if-none-match");
    const upstreamStart = Date.now();
    const result = await fetchAgentThreads(auth.user.id, { ifNoneMatch: clientInm });
    upstreamMs = Date.now() - upstreamStart;

    const timing = [
      `auth;dur=${authMs}`,
      `upstream;dur=${upstreamMs}`,
      result.serverTiming ? `pa;desc="${result.serverTiming.replace(/"/g, "")}"` : null,
      `total;dur=${Date.now() - t0}`,
    ]
      .filter(Boolean)
      .join(", ");

    if (result.notModified) {
      return new Response(null, {
        status: 304,
        headers: {
          ETag: result.etag || clientInm || "",
          "Cache-Control": "private, no-cache",
          "Server-Timing": timing,
        },
      });
    }

    if (!result.threads.length && result.messagesFailed && !result.threadsResOk) {
      return NextResponse.json(
        {
          error: { code: "agent_threads_failed", message: "Agent backend could not load chat history." },
          threadsStatus: result.threadsStatus,
          messagesStatus: result.messagesStatus,
        },
        {
          status: result.messagesStatus >= 400 ? result.messagesStatus : 502,
          headers: { "Server-Timing": timing },
        },
      );
    }

    const payload = {
      threads: result.threads,
      ...(result.messagesFailed && result.threads.length ? { warnings: ["message_index_unavailable"] } : {}),
    };
    const body = JSON.stringify(payload);
    const etag =
      result.etag ||
      `"p${createHash("sha1").update(body).digest("base64url").slice(0, 16)}"`;

    if (clientInm && clientInm === etag) {
      return new Response(null, {
        status: 304,
        headers: {
          ETag: etag,
          "Cache-Control": "private, no-cache",
          "Server-Timing": timing,
        },
      });
    }

    return new Response(body, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ETag: etag,
        "Cache-Control": "private, no-cache",
        "Server-Timing": timing,
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "threads_route_failed";
    console.error("[api/agent/threads]", error);
    return NextResponse.json(
      { error: { code: "internal_error", message } },
      {
        status: 500,
        headers: {
          "Server-Timing": `auth;dur=${authMs},upstream;dur=${upstreamMs},total;dur=${Date.now() - t0}`,
        },
      },
    );
  }
}
