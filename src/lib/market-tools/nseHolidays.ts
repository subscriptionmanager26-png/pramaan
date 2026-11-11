import fallback from "@/lib/market-tools/nse-holidays-fallback.json";

export type NseHolidayRow = {
  tradingDate: string;
  weekDay: string;
  description: string;
  morning_session?: string | null;
  evening_session?: string | null;
  Sr_no?: number;
};

export type MarketHoliday = {
  date: string; // YYYY-MM-DD
  weekDay: string;
  description: string;
  weekend: boolean;
  /** NSE marks Muhurat / special session with a trailing * */
  muhurat: boolean;
};

export type MarketHolidaysPayload = {
  year: number;
  segment: "CM";
  source: "nse" | "fallback";
  sourceUrl: string;
  fetchedAt: string;
  holidays: MarketHoliday[];
  note: string | null;
};

const NSE_HOME = "https://www.nseindia.com";
const NSE_HOLIDAYS_PAGE = `${NSE_HOME}/resources/exchange-communication-holidays`;
const NSE_HOLIDAY_API = `${NSE_HOME}/api/holiday-master?type=trading`;
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

const MONTHS: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

export function parseNseTradingDate(raw: string): string | null {
  // e.g. 15-Jan-2026
  const m = /^(\d{1,2})-([A-Za-z]{3})-(\d{4})$/.exec(raw.trim());
  if (!m) return null;
  const day = Number(m[1]);
  const month = MONTHS[m[2]];
  const year = Number(m[3]);
  if (month == null || !Number.isFinite(day) || !Number.isFinite(year)) return null;
  const d = new Date(Date.UTC(year, month, day));
  if (d.getUTCFullYear() !== year || d.getUTCMonth() !== month || d.getUTCDate() !== day) return null;
  return d.toISOString().slice(0, 10);
}

export function normalizeHolidays(rows: NseHolidayRow[]): MarketHoliday[] {
  const out: MarketHoliday[] = [];
  for (const row of rows) {
    const date = parseNseTradingDate(row.tradingDate);
    if (!date) continue;
    const weekDay = String(row.weekDay || "").trim();
    const description = String(row.description || "").trim();
    const weekend = weekDay === "Saturday" || weekDay === "Sunday";
    const muhurat = description.includes("*") || /muhurat|laxmi\s*pujan/i.test(description);
    out.push({ date, weekDay, description: description.replace(/\*+$/, "").trim(), weekend, muhurat });
  }
  out.sort((a, b) => a.date.localeCompare(b.date));
  return out;
}

function cookieHeaderFromSetCookie(setCookies: string[]): string {
  const pairs: string[] = [];
  for (const raw of setCookies) {
    const first = raw.split(";")[0]?.trim();
    if (first && first.includes("=")) pairs.push(first);
  }
  return pairs.join("; ");
}

async function readSetCookies(res: Response): Promise<string[]> {
  const headers = res.headers as Headers & { getSetCookie?: () => string[] };
  if (typeof headers.getSetCookie === "function") return headers.getSetCookie();
  const single = res.headers.get("set-cookie");
  return single ? [single] : [];
}

async function fetchNseCmHolidays(): Promise<NseHolidayRow[]> {
  const baseHeaders: Record<string, string> = {
    "User-Agent": UA,
    Accept: "application/json, text/plain, */*",
    "Accept-Language": "en-US,en;q=0.9",
  };

  let cookie = "";
  try {
    const home = await fetch(NSE_HOME, {
      headers: { ...baseHeaders, Accept: "text/html,application/xhtml+xml" },
      redirect: "follow",
      cache: "no-store",
    });
    cookie = cookieHeaderFromSetCookie(await readSetCookies(home));
  } catch {
    // Cookie warm-up often fails from cloud IPs; API may still respond.
  }

  const api = await fetch(NSE_HOLIDAY_API, {
    headers: {
      ...baseHeaders,
      Referer: NSE_HOLIDAYS_PAGE,
      ...(cookie ? { Cookie: cookie } : {}),
    },
    redirect: "follow",
    cache: "no-store",
  });
  if (!api.ok) throw new Error(`NSE holiday API ${api.status}`);
  const body = (await api.json()) as Record<string, NseHolidayRow[]>;
  const cm = body.CM;
  if (!Array.isArray(cm) || cm.length === 0) throw new Error("NSE holiday API returned no CM rows");
  return cm;
}

export function fallbackHolidaysPayload(): MarketHolidaysPayload {
  const holidays = normalizeHolidays(fallback.holidays as NseHolidayRow[]);
  return {
    year: fallback.year,
    segment: "CM",
    source: "fallback",
    sourceUrl: NSE_HOLIDAYS_PAGE,
    fetchedAt: fallback.fetchedAt,
    holidays,
    note: "Showing a cached NSE cash-market holiday list. Live fetch from NSE was unavailable.",
  };
}

export async function loadMarketHolidays(): Promise<MarketHolidaysPayload> {
  try {
    const rows = await fetchNseCmHolidays();
    const holidays = normalizeHolidays(rows);
    if (!holidays.length) throw new Error("empty holiday list");
    const year = Number(holidays[0]?.date.slice(0, 4)) || new Date().getFullYear();
    const muhurat = holidays.find((h) => h.muhurat);
    return {
      year,
      segment: "CM",
      source: "nse",
      sourceUrl: NSE_HOLIDAYS_PAGE,
      fetchedAt: new Date().toISOString(),
      holidays,
      note: muhurat
        ? `Muhurat trading is typically held on ${muhurat.description} (${formatHolidayLong(muhurat.date)}). Session timings are notified by NSE circular.`
        : null,
    };
  } catch {
    return fallbackHolidaysPayload();
  }
}

/** Calendar date in Asia/Kolkata as YYYY-MM-DD. */
export function istToday(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function formatHolidayLong(isoDate: string): string {
  const [y, m, d] = isoDate.split("-").map(Number);
  if (!y || !m || !d) return isoDate;
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export type MarketDayStatus = {
  date: string;
  state: "open" | "closed" | "weekend" | "muhurat";
  holiday: MarketHoliday | null;
  nextHoliday: MarketHoliday | null;
};

export function marketDayStatus(holidays: MarketHoliday[], today = istToday()): MarketDayStatus {
  const byDate = new Map(holidays.map((h) => [h.date, h]));
  const todayHoliday = byDate.get(today) ?? null;
  const nextHoliday =
    holidays.find((h) => h.date >= today && (!h.weekend || h.muhurat)) ??
    holidays.find((h) => h.date >= today) ??
    null;

  if (todayHoliday?.muhurat) {
    return { date: today, state: "muhurat", holiday: todayHoliday, nextHoliday };
  }
  if (todayHoliday && !todayHoliday.weekend) {
    return { date: today, state: "closed", holiday: todayHoliday, nextHoliday };
  }

  const [y, m, d] = today.split("-").map(Number);
  const dow = new Date(Date.UTC(y, m - 1, d)).getUTCDay(); // 0 Sun .. 6 Sat
  if (dow === 0 || dow === 6) {
    return { date: today, state: "weekend", holiday: todayHoliday, nextHoliday };
  }
  return { date: today, state: "open", holiday: null, nextHoliday };
}
