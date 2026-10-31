import { NextResponse } from "next/server";

import { requireAgentUser } from "@/lib/agent/require-agent-user";
import { personalAgentsConfigured } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";

const ALLOWED = new Set([
  "chat_send_start",
  "chat_send_ok",
  "chat_send_fail",
  "chat_send_ui_reset",
]);

/** Auth'd client beacons — searchable in Vercel as `[agent-client-event]`. */
export async function POST(request: Request) {
  if (!personalAgentsConfigured()) {
    return NextResponse.json({ error: "agent_backend_unconfigured" }, { status: 503 });
  }
  const auth = await requireAgentUser(request);
  if ("response" in auth) return auth.response;

  const payload = (await request.json().catch(() => null)) as {
    event?: string;
    props?: Record<string, unknown>;
    path?: string;
    at?: string;
  } | null;

  const event = typeof payload?.event === "string" ? payload.event : "";
  if (!ALLOWED.has(event)) {
    return NextResponse.json({ error: "unknown_event" }, { status: 400 });
  }

  const props =
    payload?.props && typeof payload.props === "object" && !Array.isArray(payload.props)
      ? payload.props
      : {};

  // Structured single-line JSON — filter Vercel logs with: agent-client-event chat_send_ui_reset
  console.error(
    "[agent-client-event]",
    JSON.stringify({
      event,
      userId: auth.user.id,
      email: auth.user.email ?? null,
      path: typeof payload?.path === "string" ? payload.path.slice(0, 200) : null,
      clientAt: typeof payload?.at === "string" ? payload.at : null,
      props,
    }),
  );

  return NextResponse.json({ ok: true });
}
