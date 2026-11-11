"use client";

import { useEffect, useMemo, useState } from "react";
import { Loader2 } from "lucide-react";
import { ToolsFrame } from "@/components/tools/ToolsFrame";
import {
  formatHolidayLong,
  marketDayStatus,
  type MarketHoliday,
  type MarketHolidaysPayload,
} from "@/lib/market-tools/nseHolidays";

function statusCopy(state: ReturnType<typeof marketDayStatus>["state"], holiday: MarketHoliday | null) {
  switch (state) {
    case "open":
      return { label: "Markets open", detail: "NSE cash market is scheduled to trade today." };
    case "closed":
      return {
        label: "Market holiday",
        detail: holiday ? `Closed for ${holiday.description}.` : "NSE cash market is closed today.",
      };
    case "weekend":
      return { label: "Weekend", detail: "NSE cash market does not trade on Saturday or Sunday." };
    case "muhurat":
      return {
        label: "Muhurat session",
        detail: holiday
          ? `Special Muhurat trading day for ${holiday.description}. Check NSE circular for timings.`
          : "Special Muhurat trading day. Check NSE circular for timings.",
      };
  }
}

function statusTone(state: ReturnType<typeof marketDayStatus>["state"]) {
  if (state === "open") return "border-emerald-300 bg-emerald-50 text-emerald-900";
  if (state === "muhurat") return "border-amber-300 bg-amber-50 text-amber-950";
  return "border-line bg-paper-2 text-ink";
}

function formatShortDate(isoDate: string): string {
  const [y, m, d] = isoDate.split("-").map(Number);
  if (!y || !m || !d) return isoDate;
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function MarketHolidayCalendar() {
  const [data, setData] = useState<MarketHolidaysPayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [showWeekend, setShowWeekend] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/market-holidays", { cache: "no-store" });
        if (!res.ok) throw new Error(`Could not load holidays (${res.status})`);
        const json = (await res.json()) as MarketHolidaysPayload;
        if (!cancelled) {
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : "Could not load holidays");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const status = useMemo(() => (data ? marketDayStatus(data.holidays) : null), [data]);

  const { upcoming, past } = useMemo(() => {
    if (!data || !status) return { upcoming: [] as MarketHoliday[], past: [] as MarketHoliday[] };
    const filtered = showWeekend
      ? data.holidays
      : data.holidays.filter((h) => !h.weekend || h.muhurat);
    return {
      upcoming: filtered.filter((h) => h.date >= status.date),
      past: filtered.filter((h) => h.date < status.date).slice().reverse(),
    };
  }, [data, status, showWeekend]);

  const upcomingMuhurat = upcoming.find((h) => h.muhurat) ?? null;

  return (
    <ToolsFrame
      title="Market holidays"
      description="NSE cash-market holiday calendar for the current year, pulled from the exchange holiday master."
      meta={
        <p className="text-[13px] text-ink-3">
          Source:{" "}
          <a
            href="https://www.nseindia.com/resources/exchange-communication-holidays"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-accent hover:underline"
          >
            NSE Market Timings &amp; Holidays
          </a>
          {data ? ` · ${data.year}` : null}
        </p>
      }
    >
      {loading ? (
        <div className="flex items-center gap-2 text-[14px] text-ink-2">
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
          Loading NSE holiday list…
        </div>
      ) : null}

      {error && !data ? <p className="text-[14px] text-rose-700">{error}</p> : null}

      {data && status ? (
        <div className="space-y-6">
          <section className={`rounded-2xl border px-4 py-4 sm:px-5 sm:py-5 ${statusTone(status.state)}`}>
            <p className="text-meta uppercase tracking-[0.12em] opacity-80">Today · {formatHolidayLong(status.date)}</p>
            <h2 className="mt-1 text-headline">{statusCopy(status.state, status.holiday).label}</h2>
            <p className="mt-1 text-[14px] leading-6 opacity-90">
              {statusCopy(status.state, status.holiday).detail}
            </p>
          </section>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[13px] text-ink-3">
              {upcoming.filter((h) => !h.weekend).length} upcoming
              {data.source === "fallback" ? " · cached list" : " · live from NSE"}
            </p>
            <label className="inline-flex cursor-pointer items-center gap-2 text-[13px] text-ink-2">
              <input
                type="checkbox"
                checked={showWeekend}
                onChange={(e) => setShowWeekend(e.target.checked)}
                className="rounded border-line"
              />
              Show weekend holidays
            </label>
          </div>

          {upcomingMuhurat ? (
            <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-[13px] leading-5 text-amber-950">
              Muhurat trading is typically held on {upcomingMuhurat.description} (
              {formatHolidayLong(upcomingMuhurat.date)}). Session timings are notified by NSE circular.
            </p>
          ) : null}

          <section className="overflow-hidden rounded-2xl border border-line bg-white">
            <div className="border-b border-line bg-paper-2 px-4 py-2.5 sm:px-5">
              <h3 className="text-[14px] font-semibold text-ink">Upcoming</h3>
            </div>
            {upcoming.length ? (
              <ul className="divide-y divide-line">
                {upcoming.map((h) => {
                  const isToday = h.date === status.date;
                  return (
                    <li
                      key={h.date}
                      className={`flex flex-col gap-0.5 px-4 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 sm:px-5 ${
                        isToday ? "bg-amber-50/60" : ""
                      }`}
                    >
                      <p className="text-[15px] font-semibold text-ink">{h.description}</p>
                      <p className="shrink-0 text-[13px] text-ink-3">
                        {formatHolidayLong(h.date)}
                        {h.muhurat ? " · Muhurat" : ""}
                        {isToday ? " · Today" : ""}
                      </p>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="px-4 py-4 text-[14px] text-ink-3 sm:px-5">No upcoming holidays left this year.</p>
            )}
          </section>

          {past.length ? (
            <section className="overflow-hidden rounded-2xl border border-line bg-white">
              <div className="border-b border-line bg-paper-2 px-4 py-2.5 sm:px-5">
                <h3 className="text-[14px] font-semibold text-ink">Past</h3>
              </div>
              <ul className="divide-y divide-line">
                {past.map((h) => (
                  <li
                    key={h.date}
                    className="flex items-baseline justify-between gap-3 px-4 py-2.5 text-ink-3 sm:px-5"
                  >
                    <p className="min-w-0 truncate text-[14px]">{h.description}</p>
                    <p className="shrink-0 text-[13px] tabular-nums">{formatShortDate(h.date)}</p>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      ) : null}
    </ToolsFrame>
  );
}
