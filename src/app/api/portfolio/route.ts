import { NextResponse } from "next/server";

import { fetchLivePortfolio, upsertLiveHoldings } from "@/lib/portfolio/fetch-live";
import { applyHoldingsUpdate } from "@/lib/portfolio/holdings";
import { accessTokenFromRequest, pocketedgeUserFromRequest } from "@/lib/pocketedge/session";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const user = await pocketedgeUserFromRequest(request);
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const token = accessTokenFromRequest(request);
  if (!token) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const portfolio = await fetchLivePortfolio(token, user.id);
  return NextResponse.json({ portfolio });
}

export async function PUT(request: Request) {
  const user = await pocketedgeUserFromRequest(request);
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const token = accessTokenFromRequest(request);
  if (!token) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const mode = body.mode === "merge" ? "merge" : "replace";
  const rawHoldings = Array.isArray(body.holdings) ? body.holdings : [];
  const draft: { ticker: string; qty: number; avg?: number; name?: string }[] = [];
  for (const row of rawHoldings) {
    if (!row || typeof row !== "object") continue;
    const r = row as Record<string, unknown>;
    const ticker = String(r.ticker ?? "")
      .trim()
      .toUpperCase();
    const qty = Number(r.qty);
    if (!ticker || !Number.isFinite(qty) || qty < 0) continue;
    const item: { ticker: string; qty: number; avg?: number; name?: string } = { ticker, qty };
    if (typeof r.avg === "number" && Number.isFinite(r.avg)) item.avg = r.avg;
    if (typeof r.name === "string") item.name = r.name;
    draft.push(item);
  }

  if (!draft.length && mode === "replace") {
    return NextResponse.json({ error: "holdings_required" }, { status: 400 });
  }

  const existing = await fetchLivePortfolio(token, user.id);
  const next = applyHoldingsUpdate(existing?.holdings ?? [], draft, mode);
  if (!next.length) {
    return NextResponse.json({ error: "empty_portfolio" }, { status: 400 });
  }

  try {
    const portfolio = await upsertLiveHoldings(token, {
      portfolioId: existing?.id ?? null,
      name: existing?.name ?? "My portfolio",
      holdings: next,
    });
    return NextResponse.json({ portfolio });
  } catch (error) {
    const message = error instanceof Error ? error.message : "save_failed";
    console.error("[api/portfolio PUT]", error);
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
