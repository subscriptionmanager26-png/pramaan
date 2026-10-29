import { NextResponse } from "next/server";

import { fetchLivePortfolio, upsertLiveHoldings } from "@/lib/portfolio/fetch-live";
import { applyHoldingsUpdate, type LivePortfolio } from "@/lib/portfolio/holdings";
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

  const existing = await fetchLivePortfolio(token, user.id);

  // Allow clearing the book (replace → []). Creating a brand-new empty portfolio is not useful.
  if (!draft.length && mode === "replace" && !existing) {
    return NextResponse.json({ error: "holdings_required" }, { status: 400 });
  }

  const next = applyHoldingsUpdate(existing?.holdings ?? [], draft, mode);

  try {
    const portfolio = await upsertLiveHoldings(token, {
      portfolioId: existing?.id ?? null,
      name: existing?.name ?? "My portfolio",
      holdings: next,
    });
    // If the RPC returns null for an empty book, still acknowledge the clear.
    const cleared: LivePortfolio = {
      id: existing?.id ?? "cleared",
      name: existing?.name ?? "My portfolio",
      updatedAt: new Date().toISOString(),
      holdings: [],
    };
    return NextResponse.json({ portfolio: portfolio ?? cleared });
  } catch (error) {
    const message = error instanceof Error ? error.message : "save_failed";
    console.error("[api/portfolio PUT]", error);
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
