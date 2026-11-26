import { NextResponse } from "next/server";

import { requirePocketedgeAgentUser } from "@/lib/agent/require-pocketedge-user";
import {
  connectKite,
  disconnectKiteWithSession,
  getKiteConnection,
  kiteHoldings,
  kiteLogin,
} from "@/lib/zerodha/kite";
import { zerodhaStoreConfigured } from "@/lib/zerodha/supabase";

export const dynamic = "force-dynamic";
export const maxDuration = 60;
export const preferredRegion = ["bom1"];

export async function POST(request: Request) {
  if (!zerodhaStoreConfigured()) {
    return NextResponse.json(
      { error: { code: "zerodha_unconfigured", message: "Zerodha is not configured on this server." } },
      { status: 503 },
    );
  }
  const auth = await requirePocketedgeAgentUser(request);
  if ("response" in auth) return auth.response;
  const userId = auth.user.id;
  const payload = (await request.json().catch(() => ({}))) as { action?: string };
  const action = typeof payload.action === "string" ? payload.action : "";

  try {
    if (action === "connect") {
      await connectKite(userId);
      const login = await kiteLogin(userId);
      if ("url" in login) return NextResponse.json({ ok: true, url: login.url });
      return NextResponse.json({ ok: true, loggedInAs: login.loggedInAs });
    }
    if (action === "disconnect") {
      await disconnectKiteWithSession(userId);
      return NextResponse.json({ ok: true });
    }
    if (action === "login") {
      const login = await kiteLogin(userId);
      if ("url" in login) return NextResponse.json({ url: login.url });
      return NextResponse.json({ loggedInAs: login.loggedInAs });
    }
    if (action === "holdings") {
      if (!(await getKiteConnection(userId))) {
        return NextResponse.json(
          { error: { code: "zerodha_not_connected", message: "Connect Zerodha first." } },
          { status: 404 },
        );
      }
      const result = await kiteHoldings(userId);
      if ("needsLogin" in result) {
        return NextResponse.json(
          { needsLogin: true, error: { code: "zerodha_login_required", message: result.message } },
          { status: 401 },
        );
      }
      return NextResponse.json({ ok: true, holdings: result.holdings });
    }
    return NextResponse.json(
      { error: { code: "invalid_action", message: "action must be connect, disconnect, login, or holdings." } },
      { status: 400 },
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Zerodha action failed.";
    return NextResponse.json({ error: { code: "zerodha_failed", message } }, { status: 502 });
  }
}