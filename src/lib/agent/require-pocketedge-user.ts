import { NextResponse } from "next/server";

import { userHasAgentAccess } from "@/lib/pocketedge/agent-access";
import { accessTokenFromRequest, pocketedgeUserFromRequest } from "@/lib/pocketedge/session";

/** Signed-in PocketEdge user with agent access — no personal-agents backend required. */
export async function requirePocketedgeAgentUser(request: Request) {
  const user = await pocketedgeUserFromRequest(request);
  if (!user) return { response: NextResponse.json({ error: "unauthorized" }, { status: 401 }) };
  const token = accessTokenFromRequest(request);
  if (!(await userHasAgentAccess(user.id, user.metadata, token))) {
    return { response: NextResponse.json({ error: "agent_not_enabled" }, { status: 403 }) };
  }
  return { user, token };
}