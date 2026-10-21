import Link from "next/link";

import { AllocationDonut } from "@/components/portfolio/AllocationDonut";
import { PerformanceChart } from "@/components/portfolio/PerformanceChart";
import {
  DEMO_PORTFOLIO_SNAPSHOT,
  formatInr,
  formatPct,
  type HoldingRow,
} from "@/lib/portfolio/dashboard-data";
import { pocketedgeAiUrl, pocketedgePortfolioTrackingUrl } from "@/lib/product-routes";

const snapshot = DEMO_PORTFOLIO_SNAPSHOT;
const AI_HREF = pocketedgeAiUrl();
const HOLDINGS_HREF = pocketedgePortfolioTrackingUrl();

function formatAsOf(iso: string) {
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

function HoldingsTable({ rows }: { rows: HoldingRow[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-left text-[13px]">
        <thead>
          <tr className="border-b border-line text-meta text-ink-3">
            <th className="pb-3 pr-4 font-normal">Holding</th>
            <th className="pb-3 pr-4 font-normal">Class</th>
            <th className="pb-3 pr-4 text-right font-normal">Qty</th>
            <th className="pb-3 pr-4 text-right font-normal">Value</th>
            <th className="pb-3 pr-4 text-right font-normal">Day</th>
            <th className="pb-3 text-right font-normal">Weight</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const dayTone = row.dayChangePct >= 0 ? "text-emerald-700" : "text-rose-700";
            return (
              <tr key={row.symbol} className="border-b border-line/80 last:border-0">
                <td className="py-3 pr-4">
                  <p className="font-medium text-ink">{row.name}</p>
                  <p className="text-meta text-ink-3">{row.symbol}</p>
                </td>
                <td className="py-3 pr-4 text-ink-2">{row.assetClass}</td>
                <td className="py-3 pr-4 text-right tabular-nums text-ink-2">
                  {row.quantity.toLocaleString("en-IN")}
                </td>
                <td className="py-3 pr-4 text-right font-medium tabular-nums text-ink">
                  {formatInr(row.value, true)}
                </td>
                <td className={`py-3 pr-4 text-right tabular-nums ${dayTone}`}>
                  {formatPct(row.dayChangePct, true)}
                </td>
                <td className="py-3 text-right tabular-nums text-ink-2">{row.weightPct.toFixed(1)}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function SectorBars() {
  const max = Math.max(...snapshot.sectors.map((s) => s.weightPct));
  return (
    <ul className="space-y-3">
      {snapshot.sectors.map((sector) => (
        <li key={sector.name}>
          <div className="mb-1 flex justify-between text-[13px]">
            <span className="text-ink">{sector.name}</span>
            <span className="tabular-nums text-ink-2">{sector.weightPct}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full border border-line bg-paper-2">
            <div
              className="h-full rounded-full bg-accent"
              style={{ width: `${(sector.weightPct / max) * 100}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export function PortfolioDashboard() {
  const dayUp = snapshot.dayChange >= 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-2xl border border-line bg-accent-2/50 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <div className="min-w-0">
          <p className="text-[14px] font-semibold text-ink">Questions about your portfolio?</p>
          <p className="mt-1 text-[13px] leading-5 text-ink-2">
            This page is a read-only dashboard. Ask for reviews, rebalancing ideas, or statement analysis in AI chat.
          </p>
        </div>
        <Link href={AI_HREF} className="btn-primary shrink-0 text-[13px]">
          Open AI assistant
        </Link>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-line bg-highlight px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-ink">
          Sample view
        </span>
        <span className="text-meta text-ink-3">As of {formatAsOf(snapshot.asOf)} · illustrative data for layout</span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total value" value={formatInr(snapshot.totalValue)} />
        <StatCard
          label="Today"
          value={formatInr(snapshot.dayChange, true)}
          hint={formatPct(snapshot.dayChangePct, true)}
          tone={dayUp ? "up" : "down"}
        />
        <StatCard
          label="Invested"
          value={formatInr(snapshot.invested, true)}
          hint={`Unrealized ${formatInr(snapshot.unrealizedGain, true)}`}
        />
        <StatCard label="XIRR (1Y)" value={formatPct(snapshot.xirrPct)} hint="Annualized, demo" />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border border-line bg-white p-5 sm:p-6">
          <h2 className="text-headline text-ink">Asset allocation</h2>
          <p className="mt-1 text-[13px] text-ink-2">How your wealth is split across asset classes.</p>
          <div className="mt-6">
            <AllocationDonut slices={snapshot.allocation} />
          </div>
        </section>

        <section className="rounded-2xl border border-line bg-white p-5 sm:p-6">
          <h2 className="text-headline text-ink">Performance</h2>
          <p className="mt-1 text-[13px] text-ink-2">Indexed portfolio value over the last 12 months.</p>
          <div className="mt-6">
            <PerformanceChart points={snapshot.performance} caption="Index: 100 at start of period (demo)" />
          </div>
        </section>
      </div>

      <div className="grid gap-4 lg:grid-cols-5">
        <section className="rounded-2xl border border-line bg-white p-5 sm:p-6 lg:col-span-3">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <div>
              <h2 className="text-headline text-ink">Holdings</h2>
              <p className="mt-1 text-[13px] text-ink-2">Largest positions by current value.</p>
            </div>
            <a href={HOLDINGS_HREF} className="text-[13px] font-semibold text-accent hover:underline">
              Full holdings &amp; import →
            </a>
          </div>
          <div className="mt-5">
            <HoldingsTable rows={snapshot.holdings} />
          </div>
        </section>

        <section className="rounded-2xl border border-line bg-white p-5 sm:p-6 lg:col-span-2">
          <h2 className="text-headline text-ink">Equity sectors</h2>
          <p className="mt-1 text-[13px] text-ink-2">Exposure within listed equity (demo).</p>
          <div className="mt-6">
            <SectorBars />
          </div>
        </section>
      </div>

      <section className="grid-paper rounded-2xl border border-line p-5 sm:p-6">
        <h2 className="text-headline text-ink">Activity</h2>
        <p className="mt-1 text-[13px] text-ink-2">Recent portfolio events — live feed when broker is linked.</p>
        <ul className="mt-5 space-y-3">
          {[
            { when: "Today, 10:12", text: "SIP executed · Parag Parikh Flexi Cap · ₹25,000" },
            { when: "Yesterday", text: "Dividend credited · HDFC Bank · ₹1,840" },
            { when: "18 Oct", text: "Corporate action · NIFTYBEES · units adjusted" },
            { when: "15 Oct", text: "Zerodha sync · 42 positions updated" },
          ].map((item) => (
            <li
              key={item.when + item.text}
              className="flex flex-col gap-0.5 rounded-xl border border-line bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-[14px] text-ink">{item.text}</span>
              <time className="text-meta text-ink-3 sm:shrink-0">{item.when}</time>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[13px] text-ink-2">
          Connect Zerodha in{" "}
          <Link href={AI_HREF} className="font-semibold text-accent hover:underline">
            AI → Connections
          </Link>{" "}
          to replace sample numbers with your account.
        </p>
      </section>
    </div>
  );
}
