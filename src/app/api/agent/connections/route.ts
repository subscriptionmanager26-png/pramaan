import { NextResponse } from "next/server";

import { requirePocketedgeAgentUser } from "@/lib/agent/require-pocketedge-user";
import { paFetch, personalAgentsConfigured } from "@/lib/personal-agents";
import { zerodhaConnectionsView } from "@/lib/zerodha/status";
import { zerodhaStoreConfigured } from "@/lib/zerodha/supabase";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(request: Request) {
  const auth = await requirePocketedgeAgentUser(request);
  if ("response" in auth) return auth.response;

  const zerodha = zerodhaStoreConfigured()
    ? await zerodhaConnectionsView(auth.user.id)
  : {
        connected: false,
        loggedInAs: null,
        sessionActive: false,
        mcpBackendReady: false,
        mcpBackendMessage: "Zerodha is not configured on PocketEdge.",
        mcpBackendPublicUrl: null,
      };

  if (!personalAgentsConfigured()) {
    return NextResponse.json({
      zerodha,
      mcp: [],
      vaultCount: 0,
    });
  }

  try {
    const res = await paFetch(`/api/v1/users/${encodeURIComponent(auth.user.id)}/connections`, {
      signal: AbortSignal.timeout(45_000),
    });
    const body = (await res.json().catch(() => ({}))) as Record<string, unknown>;
    if (!res.ok) {
      return NextResponse.json({ ...body, zerodha }, { status: res.status });
    }
    return NextResponse.json({ ...body, zerodha });
  } catch {
    return NextResponse.json({
      zerodha,
      mcp: [],
      vaultCount: 0,
    });
  }
}