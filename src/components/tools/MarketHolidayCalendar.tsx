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

function StatusTone({ state }: { state: ReturnType<typeof marketDayStatus>["state"] }) {
  const tone =
    state === "open"
      ? "border-emerald-300 bg-emerald-50 text-emerald-900"
      : state === "muhurat"
        ? "border-amber-300 bg-amber-50 text-amber-950"
        : "border-line bg-paper-2 text-ink";
  return tone;
}

function groupByMonth(holidays: MarketHoliday[]) {
  const groups: { key: string; label: string; items: MarketHoliday[] }[] = [];
  for (const h of holidays) {
    const key = h.date.slice(0, 7);
    const last = groups[groups.length - 1];
    if (last?.key === key) {
      last.items.push(h);
      continue;
    }
    const [y, m] = key.split("-").map(Number);
    const label = new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString("en-IN", {
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });
    groups.push({ key, label, items: [h] });
  }
  return groups;
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
  const visible = useMemo(() => {
    if (!data) return [];
    return showWeekend ? data.holidays : data.holidays.filter((h) => !h.weekend || h.muhurat);
  }, [data, showWeekend]);
  const months = useMemo(() => groupByMonth(visible), [visible]);
  const upcomingCount = useMemo(() => {
    if (!status) return 0;
    return visible.filter((h) => h.date >= status.date && !h.weekend).length;
  }, [visible, status]);

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
          <section className={`rounded-2xl border px-4 py-4 sm:px-5 sm:py-5 ${StatusTone({ state: status.state })}`}>
            <p className="text-meta uppercase tracking-[0.12em] opacity-80">Today · {formatHolidayLong(status.date)}</p>
            <h2 className="mt-1 text-headline">{statusCopy(status.state, status.holiday).label}</h2>
            <p className="mt-1 text-[14px] leading-6 opacity-90">
              {statusCopy(status.state, status.holiday).detail}
            </p>
            {status.nextHoliday ? (
              <p className="mt-3 text-[13px] opacity-90">
                Next listed holiday:{" "}
                <span className="font-semibold">
                  {status.nextHoliday.description} · {formatHolidayLong(status.nextHoliday.date)}
                </span>
              </p>
            ) : null}
          </section>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[13px] text-ink-3">
              {upcomingCount} weekday holiday{upcomingCount === 1 ? "" : "s"} left in {data.year}
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

          {data.note ? (
            <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-[13px] leading-5 text-amber-950">
              {data.note}
            </p>
          ) : null}

          <div className="space-y-5">
            {months.map((month) => (
              <section key={month.key} className="overflow-hidden rounded-2xl border border-line bg-white">
                <div className="border-b border-line bg-paper-2 px-4 py-2.5 sm:px-5">
                  <h3 className="text-[14px] font-semibold text-ink">{month.label}</h3>
                </div>
                <ul className="divide-y divide-line">
                  {month.items.map((h) => {
                    const past = h.date < status.date;
                    const isToday = h.date === status.date;
                    return (
                      <li
                        key={h.date}
                        className={`flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5 ${
                          past ? "opacity-50" : ""
                        } ${isToday ? "bg-amber-50/60" : ""}`}
                      >
                        <div className="min-w-0">
                          <p className="text-[15px] font-semibold text-ink">{h.description}</p>
                          <p className="mt-0.5 text-[13px] text-ink-3">
                            {formatHolidayLong(h.date)}
                            {h.weekend ? " · weekend" : ""}
                            {h.muhurat ? " · Muhurat" : ""}
                          </p>
                        </div>
                        <div className="shrink-0 text-[12px] font-semibold uppercase tracking-wide text-ink-3">
                          {isToday ? "Today" : past ? "Past" : "Upcoming"}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>

          <p className="text-[12px] leading-5 text-ink-3">
            Holidays can change if NSE issues a circular. Special sessions (Muhurat) and segment-specific closures
            may differ from the cash-market list above.
          </p>
        </div>
      ) : null}
    </ToolsFrame>
  );
}
