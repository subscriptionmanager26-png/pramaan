"use client";

import { useCallback, useEffect, useState } from "react";

import { AllocationDonut } from "@/components/portfolio/AllocationDonut";
import { PortfolioAgentPanel } from "@/components/portfolio/PortfolioAgentPanel";
import {
  allocationFromHoldings,
  formatInr,
  formatPct,
  insightsFromHoldings,
  portfolioTotals,
  type LiveHolding,
  type LivePortfolio,
} from "@/lib/portfolio/holdings";
import { pocketedgeAuthConfigured } from "@/lib/pocketedge/supabase-browser";
import { pocketedgeAuthHeaders } from "@/lib/pocketedge/auth-headers";
import { getPocketedgeSupabase } from "@/lib/pocketedge/supabase-browser";
import { pocketedgeAiUrl } from "@/lib/product-routes";

function formatAsOf(iso: string | null) {
  if (!iso) return null;
  try {
    return new Intl.DateTimeFormat("en-IN", { dateStyle: "medium", timeStyle: "short" }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function StatCard({
  label,
  value,
  hint,
  tone = "neutral",
}: {
  label: string;
  value: string;
  hint?: string;
  tone?: "neutral" | "up" | "down";
}) {
  const hintClass =
    tone === "up" ? "text-emerald-700" : tone === "down" ? "text-rose-700" : "text-ink-3";
  return (
    <div className="rounded-xl border border-line bg-white px-4 py-4 shadow-[2px_2px_0_#0b0b0b]">
      <p className="text-meta text-ink-3">{label}</p>
      <p className="mt-1 text-xl font-semibold tracking-tight text-ink tabular-nums sm:text-2xl">{value}</p>
      {hint ? <p className={`mt-1 text-[13px] tabular-nums ${hintClass}`}>{hint}</p> : null}
    </div>
  );
}

function HoldingsTable({ rows }: { rows: LiveHolding[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse text-left text-[13px]">
        <thead>
          <tr className="border-b border-line text-meta text-ink-3">
            <th className="pb-3 pr-4 font-normal">Holding</th>
            <th className="pb-3 pr-4 text-right font-normal">Qty</th>
            <th className="pb-3 pr-4 text-right font-normal">Value</th>
            <th className="pb-3 text-right font-normal">Weight</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const total = rows.reduce((s, h) => s + (h.value ?? 0), 0);
            const weight = total > 0 && row.value != null ? (row.value / total) * 100 : null;
            return (
              <tr key={row.ticker} className="border-b border-line/80 last:border-0">
                <td className="py-3 pr-4">
                  <p className="font-medium text-ink">{row.name || row.ticker}</p>
                  <p className="text-meta text-ink-3">{row.ticker}</p>
                </td>
                <td className="py-3 pr-4 text-right tabular-nums text-ink-2">
                  {row.qty.toLocaleString("en-IN")}
                </td>
                <td className="py-3 pr-4 text-right font-medium tabular-nums text-ink">
                  {row.value != null ? formatInr(row.value, true) : "—"}
                </td>
                <td className="py-3 text-right tabular-nums text-ink-2">
                  {weight != null ? `${weight.toFixed(1)}%` : "—"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function EmptyBook({ onOpenAi }: { onOpenAi: () => void }) {
  return (
    <div className="rounded-2xl border border-dashed border-line bg-paper-2 px-5 py-10 text-center sm:px-8">
      <h2 className="text-headline text-ink">No holdings yet</h2>
      <p className="mx-auto mt-2 max-w-md text-[14px] leading-6 text-ink-2">
        This page only shows your current book — nothing illustrative. Paste a list, upload a broker CSV, or describe
        positions to the Portfolio AI. Nothing is saved until you confirm.
      </p>
      <button type="button" className="btn-primary mt-5 text-[13px]" onClick={onOpenAi}>
        Set up with AI
      </button>
    </div>
  );
}

export function PortfolioDashboard() {
  const [signedIn, setSignedIn] = useState(false);
  const [ready, setReady] = useState(false);
  const [portfolio, setPortfolio] = useState<LivePortfolio | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [agentFocus, setAgentFocus] = useState(false);

  const refresh = useCallback(async () => {
    if (!pocketedgeAuthConfigured()) {
      setReady(true);
      return;
    }
    try {
      const headers = await pocketedgeAuthHeaders();
      const res = await fetch("/api/portfolio", { headers, cache: "no-store" });
      if (res.status === 401) {
        setSignedIn(false);
        setPortfolio(null);
        setReady(true);
        return;
      }
      if (!res.ok) {
        setLoadError("Could not load portfolio");
        setReady(true);
        return;
      }
      const json = await res.json();
      setSignedIn(true);
      setPortfolio((json.portfolio as LivePortfolio | null) ?? null);
      setLoadError(null);
    } catch {
      setLoadError("Could not load portfolio");
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (!pocketedgeAuthConfigured()) {
      setReady(true);
      return;
    }
    void (async () => {
      const supabase = getPocketedgeSupabase();
      const { data } = await supabase.auth.getSession();
      setSignedIn(Boolean(data.session?.user));
      await refresh();
    })();
  }, [refresh]);

  if (!ready) {
    return <p className="text-[14px] text-ink-3">Loading portfolio…</p>;
  }

  if (!pocketedgeAuthConfigured()) {
    return (
      <p className="text-[14px] text-ink-2">
        Sign-in is not configured, so live holdings cannot load.
      </p>
    );
  }

  if (!signedIn) {
    return (
      <div className="rounded-2xl border border-line bg-white px-5 py-8 text-center">
        <h2 className="text-headline text-ink">Sign in to see your portfolio</h2>
        <p className="mt-2 text-[14px] text-ink-2">We only show your real holdings — never sample data.</p>
        <a href="/account" className="btn-primary mt-5 inline-flex text-[13px]">
          Sign in
        </a>
      </div>
    );
  }

  const holdings = portfolio?.holdings ?? [];
  const totals = portfolioTotals(holdings);
  const allocation = allocationFromHoldings(holdings);
  const insights = insightsFromHoldings(holdings);
  const asOf = formatAsOf(portfolio?.updatedAt ?? null);
  const dayTone = totals.dayChange >= 0 ? "up" : "down";

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className={`space-y-6 ${agentFocus ? "lg:col-span-2" : "lg:col-span-3"}`}>
        {loadError ? <p className="text-[13px] text-rose-700">{loadError}</p> : null}

        {!holdings.length ? (
          <EmptyBook onOpenAi={() => setAgentFocus(true)} />
        ) : (
          <>
            <div className="flex flex-wrap items-center gap-2 text-meta text-ink-3">
              <span className="rounded-full border border-line bg-white px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-ink">
                Live
              </span>
              {asOf ? <span>Updated {asOf}</span> : null}
              <span>· current holdings only</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <StatCard label="Total value" value={formatInr(totals.totalValue)} />
              <StatCard
                label="Invested (cost)"
                value={formatInr(totals.invested, true)}
                hint={
                  totals.invested > 0
                    ? `Unrealized ${formatInr(totals.unrealized, true)}`
                    : "Add average cost via AI to see P&L vs cost"
                }
              />
              {Number.isFinite(totals.dayChange) && Math.abs(totals.dayChange) > 0 ? (
                <StatCard
                  label="Day move (est.)"
                  value={formatInr(totals.dayChange, true)}
                  hint={
                    totals.totalValue > 0
                      ? formatPct((totals.dayChange / totals.totalValue) * 100, true)
                      : undefined
                  }
                  tone={dayTone}
                />
              ) : null}
              <StatCard label="Positions" value={String(holdings.length)} hint="Lines in the current book" />
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <section className="rounded-2xl border border-line bg-white p-5 sm:p-6">
                <h2 className="text-headline text-ink">Asset allocation</h2>
                <p className="mt-1 text-[13px] text-ink-2">From current market value of holdings.</p>
                <div className="mt-6">
                  {allocation.length ? (
                    <AllocationDonut slices={allocation} />
                  ) : (
                    <p className="text-[13px] text-ink-3">Values unavailable until holdings are priced.</p>
                  )}
                </div>
              </section>

              <section className="rounded-2xl border border-line bg-white p-5 sm:p-6">
                <h2 className="text-headline text-ink">Insights</h2>
                <p className="mt-1 text-[13px] text-ink-2">Based only on what is in the book right now.</p>
                <ul className="mt-5 space-y-3">
                  {insights.map((item) => (
                    <li key={item.title} className="rounded-xl border border-line bg-paper-2 px-4 py-3">
                      <p className="text-[13px] font-semibold text-ink">{item.title}</p>
                      <p className="mt-1 text-[13px] leading-5 text-ink-2">{item.body}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[13px] text-ink-2">
                  Deeper research still lives in{" "}
                  <a href={pocketedgeAiUrl()} className="font-semibold text-accent hover:underline">
                    AI chat
                  </a>
                  .
                </p>
              </section>
            </div>

            <section className="rounded-2xl border border-line bg-white p-5 sm:p-6">
              <div className="flex flex-wrap items-end justify-between gap-2">
                <div>
                  <h2 className="text-headline text-ink">Holdings</h2>
                  <p className="mt-1 text-[13px] text-ink-2">Your current positions.</p>
                </div>
                <button
                  type="button"
                  className="text-[13px] font-semibold text-accent hover:underline"
                  onClick={() => setAgentFocus(true)}
                >
                  Edit with AI →
                </button>
              </div>
              <div className="mt-5">
                <HoldingsTable rows={holdings} />
              </div>
            </section>
          </>
        )}
      </div>

      <div className={agentFocus ? "lg:col-span-3" : "lg:col-span-2"} id="portfolio-ai">
        <PortfolioAgentPanel
          portfolio={portfolio}
          onPortfolioSaved={(next) => {
            setPortfolio(next);
            setAgentFocus(false);
          }}
        />
      </div>
    </div>
  );
}
