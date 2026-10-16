import { NextResponse } from "next/server";

import { userHasAgentAccess } from "@/lib/pocketedge/agent-access";
import { pocketedgeUserFromRequest } from "@/lib/pocketedge/session";
import { personalAgentsConfigured, syncAgentUser } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!personalAgentsConfigured()) {
    return NextResponse.json({ error: "agent_backend_unconfigured" }, { status: 503 });
  }
  const user = await pocketedgeUserFromRequest(request);
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const allowed = await userHasAgentAccess(user.id, user.metadata);
  const result = await syncAgentUser(
    user.id,
    { name: user.name, email: user.email },
    allowed,
  );
  if (!result.ok && result.status !== 404) {
    return NextResponse.json({ error: "sync_failed", status: result.status }, { status: 502 });
  }
  return NextResponse.json({
    userId: user.id,
    agent: allowed ? "active" : "disabled",
    synced: result.ok,
  });
}
