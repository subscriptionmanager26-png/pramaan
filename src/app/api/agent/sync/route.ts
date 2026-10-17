import { NextResponse } from "next/server";

import {
  agentAccessDefinitelyDisabled,
  persistAgentAccessGranted,
  userHasAgentAccess,
} from "@/lib/pocketedge/agent-access";
import { accessTokenFromRequest, pocketedgeUserFromRequest } from "@/lib/pocketedge/session";
import { personalAgentsConfigured, syncAgentUser } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!personalAgentsConfigured()) {
    return NextResponse.json({ error: "agent_backend_unconfigured" }, { status: 503 });
  }
  const user = await pocketedgeUserFromRequest(request);
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const token = accessTokenFromRequest(request);
  const allowed = await userHasAgentAccess(user.id, user.metadata, token);
  if (allowed) await persistAgentAccessGranted(user.id);
  let result = { ok: true, status: 200 };
  if (allowed) {
    result = await syncAgentUser(user.id, { name: user.name, email: user.email }, true);
  } else if (await agentAccessDefinitelyDisabled(user.id)) {
    result = await syncAgentUser(user.id, { name: user.name, email: user.email }, false);
  }
  if (!result.ok && result.status !== 404) {
    return NextResponse.json({ error: "sync_failed", status: result.status }, { status: 502 });
  }
  return NextResponse.json({
    userId: user.id,
    agent: allowed ? "active" : "disabled",
    synced: result.ok,
  });
}
