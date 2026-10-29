"use client";

import { useCallback, useEffect, useState } from "react";

import { AllocationDonut } from "@/components/portfolio/AllocationDonut";
import { PortfolioAgentPanel } from "@/components/portfolio/PortfolioAgentPanel";
import { PortfolioEditor } from "@/components/portfolio/PortfolioEditor";
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
import {
  isPortfolioPreviewEnabled,
  PREVIEW_UI_STATES,
  previewPortfolio,
  type PreviewUiState,
} from "@/lib/portfolio/preview";

type PortfolioMode = "review" | "update";

function SignInGate() {
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

function PreviewStateSwitcher({
  value,
  onChange,
}: {
  value: PreviewUiState;
  onChange: (next: PreviewUiState) => void;
}) {
  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2.5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[12px] font-semibold uppercase tracking-wide text-amber-950">UI preview</p>
        <p className="text-[12px] text-amber-900/80">Local only · not saved</p>
      </div>
      <div
        className="mt-2 inline-flex max-w-full flex-wrap overflow-hidden rounded-lg border border-amber-300 bg-white text-[12px] sm:text-[13px]"
        role="tablist"
        aria-label="Preview account state"
      >
        {PREVIEW_UI_STATES.map((state, i) => (
          <button
            key={state.id}
            type="button"
            role="tab"
            aria-selected={value === state.id}
            className={`px-2.5 py-1.5 font-medium transition-colors sm:px-3 ${
              i > 0 ? "border-l border-amber-200" : ""
            } ${value === state.id ? "bg-ink text-white" : "text-ink-2 hover:bg-paper-2 hover:text-ink"}`}
            onClick={() => onChange(state.id)}
          >
            {state.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function formatAsOf(iso: string | null) {
  if (!iso) return null;
  try {
    return new Intl.DateTimeFormat("en-IN", { dateStyle: "medium", timeStyle: "short" }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function toneClass(value: number | null | undefined) {
  if (value == null || !Number.isFinite(value) || value === 0) return "text-ink-2";
  return value > 0 ? "text-emerald-700" : "text-rose-700";
}

function asPercentPoints(value: number) {
  return Math.abs(value) <= 1 ? value * 100 : value;
}

/** Connect/Sync-style control: Review = look, Update = change/import via 3 options. */
function ModeToggle({
  mode,
  onChange,
  updateOnly,
}: {
  mode: PortfolioMode;
  onChange: (mode: PortfolioMode) => void;
  updateOnly?: boolean;
}) {
  return (
    <div className="inline-flex items-center gap-2">
      <div
        className="inline-flex overflow-hidden rounded-lg border border-line bg-white text-[13px] shadow-[2px_2px_0_#0b0b0b]"
        role="tablist"
        aria-label="Portfolio mode"
      >
        <button
          type="button"
          role="tab"
          aria-selected={mode === "review"}
          disabled={updateOnly}
          className={`px-3.5 py-2 font-semibold transition-colors disabled:opacity-40 ${
            mode === "review" ? "bg-ink text-white" : "text-ink-2 hover:bg-paper-2 hover:text-ink"
          }`}
          onClick={() => onChange("review")}
        >
          Review
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "update"}
          className={`border-l border-line px-3.5 py-2 font-semibold transition-colors ${
            mode === "update" ? "bg-ink text-white" : "text-ink-2 hover:bg-paper-2 hover:text-ink"
          }`}
          onClick={() => onChange("update")}
        >
          Update
        </button>
      </div>
      <p className="hidden text-[12px] text-ink-3 sm:block">
        {mode === "review" ? "See value, mix, and holdings" : "Zerodha · Manual · Upload"}
      </p>
    </div>
  );
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
  const total = rows.reduce((s, h) => s + (h.value ?? 0), 0);

  return (
    <>
      <ul className="space-y-3 sm:hidden">
        {rows.map((row) => {
          const weight = total > 0 && row.value != null ? (row.value / total) * 100 : null;
          const pnl =
            row.pnl != null
              ? row.pnl
              : row.avg != null && row.value != null
                ? row.value - row.avg * row.qty
                : null;
          return (
            <li key={row.ticker} className="rounded-xl border border-line bg-paper-2 px-3 py-3">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate font-medium text-ink">{row.name || row.ticker}</p>
                  <p className="text-meta text-ink-3">
                    {row.ticker} · {row.qty.toLocaleString("en-IN")} sh
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-medium tabular-nums text-ink">
                    {row.value != null ? formatInr(row.value, true) : "—"}
                  </p>
                  {weight != null ? <p className="text-meta text-ink-3">{weight.toFixed(1)}%</p> : null}
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[12px] tabular-nums text-ink-2">
                {row.avg != null ? <span>Avg {formatInr(row.avg, true)}</span> : null}
                {row.price != null ? <span>LTP {formatInr(row.price, true)}</span> : null}
                {pnl != null ? (
                  <span className={toneClass(pnl)}>
                    P&L {formatInr(pnl, true)}
                    {row.pnlPct != null ? ` (${formatPct(row.pnlPct, true)})` : ""}
                  </span>
                ) : null}
                {row.changePct != null ? (
                  <span className={toneClass(row.changePct)}>
                    Day {formatPct(asPercentPoints(row.changePct), true)}
                  </span>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>

      <div className="hidden overflow-x-auto sm:block">
        <table className="w-full min-w-[720px] border-collapse text-left text-[13px]">
          <thead>
            <tr className="border-b border-line text-meta text-ink-3">
              <th className="pb-3 pr-4 font-normal">Holding</th>
              <th className="pb-3 pr-4 text-right font-normal">Qty</th>
              <th className="pb-3 pr-4 text-right font-normal">Avg</th>
              <th className="pb-3 pr-4 text-right font-normal">LTP</th>
              <th className="pb-3 pr-4 text-right font-normal">Value</th>
              <th className="pb-3 pr-4 text-right font-normal">P&L</th>
              <th className="pb-3 pr-4 text-right font-normal">Day</th>
              <th className="pb-3 text-right font-normal">Weight</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const weight = total > 0 && row.value != null ? (row.value / total) * 100 : null;
              const pnl =
                row.pnl != null
                  ? row.pnl
                  : row.avg != null && row.value != null
                    ? row.value - row.avg * row.qty
                    : null;
              return (
                <tr key={row.ticker} className="border-b border-line/80 last:border-0">
                  <td className="py-3 pr-4">
                    <p className="font-medium text-ink">{row.name || row.ticker}</p>
                    <p className="text-meta text-ink-3">{row.ticker}</p>
                  </td>
                  <td className="py-3 pr-4 text-right tabular-nums text-ink-2">
                    {row.qty.toLocaleString("en-IN")}
                  </td>
                  <td className="py-3 pr-4 text-right tabular-nums text-ink-2">
                    {row.avg != null ? formatInr(row.avg, true) : "—"}
                  </td>
                  <td className="py-3 pr-4 text-right tabular-nums text-ink-2">
                    {row.price != null ? formatInr(row.price, true) : "—"}
                  </td>
                  <td className="py-3 pr-4 text-right font-medium tabular-nums text-ink">
                    {row.value != null ? formatInr(row.value, true) : "—"}
                  </td>
                  <td className={`py-3 pr-4 text-right tabular-nums ${toneClass(pnl)}`}>
                    {pnl != null ? formatInr(pnl, true) : "—"}
                  </td>
                  <td className={`py-3 pr-4 text-right tabular-nums ${toneClass(row.changePct)}`}>
                    {row.changePct != null ? formatPct(asPercentPoints(row.changePct), true) : "—"}
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
    </>
  );
}

function ReviewBook({
  portfolio,
  onAskAi,
  onEdit,
}: {
  portfolio: LivePortfolio;
  onAskAi: () => void;
  onEdit: () => void;
}) {
  const holdings = portfolio.holdings;
  const totals = portfolioTotals(holdings);
  const allocation = allocationFromHoldings(holdings);
  const insights = insightsFromHoldings(holdings);
  const asOf = formatAsOf(portfolio.updatedAt);
  const dayTone = totals.dayChange >= 0 ? "up" : "down";
  const unrealizedTone = totals.unrealized >= 0 ? "up" : "down";

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2 text-meta text-ink-3">
        <span className="rounded-full border border-line bg-white px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-ink">
          Live
        </span>
        {asOf ? <span>Updated {asOf}</span> : null}
      </div>

      {/* Keep summary lean — value / invested / day / count. Skip diversification scores & flag taxonomies. */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Portfolio value" value={formatInr(totals.totalValue)} />
        <StatCard
          label="Invested"
          value={formatInr(totals.invested, true)}
          hint={
            totals.invested > 0 ? `Unrealized ${formatInr(totals.unrealized, true)}` : "Add avg cost in Update"
          }
          tone={totals.invested > 0 ? unrealizedTone : "neutral"}
        />
        <StatCard
          label="Today"
          value={
            Number.isFinite(totals.dayChange) ? formatInr(totals.dayChange, true) : "—"
          }
          hint={
            totals.totalValue > 0 && Math.abs(totals.dayChange) > 0
              ? formatPct((totals.dayChange / totals.totalValue) * 100, true)
              : undefined
          }
          tone={Math.abs(totals.dayChange) > 0 ? dayTone : "neutral"}
        />
        <StatCard label="Holdings" value={String(holdings.length)} />
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <section className="rounded-2xl border border-line bg-white p-5 sm:p-6">
          <h2 className="text-headline text-ink">Allocation</h2>
          <div className="mt-5">
            {allocation.length ? (
              <AllocationDonut slices={allocation} />
            ) : (
              <p className="text-[13px] text-ink-3">Values appear once holdings are priced.</p>
            )}
          </div>
        </section>

        <section className="rounded-2xl border border-line bg-white p-5 sm:p-6">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <h2 className="text-headline text-ink">At a glance</h2>
            <button type="button" className="text-[13px] font-semibold text-accent hover:underline" onClick={onAskAi}>
              Ask AI →
            </button>
          </div>
          <ul className="mt-5 space-y-3">
            {insights.map((item) => (
              <li key={item.title} className="rounded-xl border border-line bg-paper-2 px-4 py-3">
                <p className="text-[13px] font-semibold text-ink">{item.title}</p>
                <p className="mt-1 text-[13px] leading-5 text-ink-2">{item.body}</p>
              </li>
            ))}
            {!insights.length ? (
              <li className="text-[13px] text-ink-3">Add priced holdings to see concentration and P&L notes.</li>
            ) : null}
          </ul>
        </section>
      </div>

      <section className="rounded-2xl border border-line bg-white p-5 sm:p-6">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <h2 className="text-headline text-ink">Holdings</h2>
            <p className="mt-1 text-[13px] text-ink-2">Current positions only.</p>
          </div>
          <button type="button" className="text-[13px] font-semibold text-accent hover:underline" onClick={onEdit}>
            Update →
          </button>
        </div>
        <div className="mt-5">
          <HoldingsTable rows={holdings} />
        </div>
      </section>
    </div>
  );
}

export function PortfolioDashboard() {
  const preview = isPortfolioPreviewEnabled();
  const [previewUi, setPreviewUi] = useState<PreviewUiState>("with_holdings");
  const [signedIn, setSignedIn] = useState(false);
  const [ready, setReady] = useState(false);
  const [portfolio, setPortfolio] = useState<LivePortfolio | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [mode, setMode] = useState<PortfolioMode>("review");
  const [showReviewAi, setShowReviewAi] = useState(false);
  const [justSaved, setJustSaved] = useState(false);

  const applyPreviewUi = useCallback((next: PreviewUiState) => {
    setPreviewUi(next);
    setShowReviewAi(false);
    setJustSaved(false);
    if (next === "pre_signup") {
      setSignedIn(false);
      setPortfolio(null);
      setMode("review");
      return;
    }
    setSignedIn(true);
    if (next === "empty") {
      setPortfolio(previewPortfolio(false));
      setMode("update");
      return;
    }
    setPortfolio(previewPortfolio(true));
    setMode("review");
  }, []);

  const refresh = useCallback(async () => {
    if (preview) {
      setReady(true);
      return;
    }
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
  }, [preview]);

  useEffect(() => {
    if (preview) {
      applyPreviewUi("with_holdings");
      setReady(true);
      return;
    }
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
  }, [applyPreviewUi, preview, refresh]);

  const onPortfolioSaved = useCallback(
    (next: LivePortfolio) => {
      setPortfolio(next);
      setMode(next.holdings.length ? "review" : "update");
      setShowReviewAi(false);
      setJustSaved(true);
      window.setTimeout(() => setJustSaved(false), 4000);
      if (preview) {
        setPreviewUi(next.holdings.length ? "with_holdings" : "empty");
        return;
      }
      void refresh();
    },
    [preview, refresh],
  );

  if (!ready) {
    return <p className="text-[14px] text-ink-3">Loading portfolio…</p>;
  }

  if (!preview && !pocketedgeAuthConfigured()) {
    return (
      <p className="text-[14px] text-ink-2">
        Sign-in is not configured, so live holdings cannot load. For local UI, set{" "}
        <code className="rounded bg-paper-2 px-1">NEXT_PUBLIC_PORTFOLIO_PREVIEW=1</code> in{" "}
        <code className="rounded bg-paper-2 px-1">.env.local</code>.
      </p>
    );
  }

  const previewSwitcher = preview ? <PreviewStateSwitcher value={previewUi} onChange={applyPreviewUi} /> : null;

  if ((preview && previewUi === "pre_signup") || (!preview && !signedIn)) {
    return (
      <div className="space-y-5">
        {previewSwitcher}
        <SignInGate />
      </div>
    );
  }

  const holdings = portfolio?.holdings ?? [];
  const empty = !holdings.length;
  const activeMode: PortfolioMode = empty ? "update" : mode;

  return (
    <div className="space-y-5">
      {previewSwitcher}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <ModeToggle
          mode={activeMode}
          updateOnly={empty}
          onChange={(next) => {
            setMode(next);
            if (next === "update") setShowReviewAi(false);
          }}
        />
        {!empty && activeMode === "review" && !showReviewAi ? (
          <button
            type="button"
            className="text-[13px] font-semibold text-accent hover:underline"
            onClick={() => setShowReviewAi(true)}
          >
            Ask AI →
          </button>
        ) : null}
      </div>

      {loadError ? <p className="text-[13px] text-rose-700">{loadError}</p> : null}
      {justSaved ? (
        <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-[13px] text-emerald-900">
          {empty ? "Book cleared." : "Holdings updated. You are in Review."}
        </p>
      ) : null}

      {activeMode === "update" ? (
        <PortfolioEditor
          portfolio={portfolio}
          preview={preview}
          onSaved={onPortfolioSaved}
          onCancel={empty ? undefined : () => setMode("review")}
        />
      ) : (
        <div className={`grid gap-6 ${showReviewAi ? "lg:grid-cols-5" : ""}`}>
          <div className={showReviewAi ? "lg:col-span-3" : ""}>
            {portfolio ? (
              <ReviewBook
                portfolio={portfolio}
                onAskAi={() => setShowReviewAi(true)}
                onEdit={() => setMode("update")}
              />
            ) : null}
          </div>
          {showReviewAi && !preview ? (
            <div className="lg:col-span-2" id="portfolio-ai">
              <PortfolioAgentPanel portfolio={portfolio} mode="review" onPortfolioSaved={onPortfolioSaved} />
            </div>
          ) : null}
          {showReviewAi && preview ? (
            <p className="text-[13px] text-ink-3 lg:col-span-2">
              Ask AI needs a signed-in agent backend. Use Review/Update in preview.
            </p>
          ) : null}
        </div>
      )}
    </div>
  );
}
