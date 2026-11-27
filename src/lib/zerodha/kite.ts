import { kiteMcpBearer } from "@/lib/zerodha/kite-mcp-oauth";
import { clearKiteSession, kiteHttpCall, kiteHttpLoginTool, type ToolResult } from "@/lib/zerodha/kite-mcp-http";
import {
  connectKite,
  disconnectKite,
  getKiteConnection,
  readKiteSessionEnc,
} from "@/lib/zerodha/user-store";

const LOGIN_HOSTS = new Set(["kite.zerodha.com", "kite.trade", "mcp.kite.trade", "www.kite.trade"]);

function kiteUrl() {
  return process.env.KITE_MCP_URL?.trim() || "https://mcp.kite.trade/mcp";
}

function toolResultText(result: ToolResult) {
  return (result.content ?? []).map((c) => c.text ?? "").join("\n");
}

function safeKiteLoginUrl(raw: string | undefined) {
  if (!raw) return undefined;
  try {
    const url = new URL(raw);
    return url.protocol === "https:" && LOGIN_HOSTS.has(url.hostname) ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

function extractKiteLoginUrl(text: string): string | undefined {
  const candidates = [
    text.match(/\]\((https:\/\/mcp\.kite\.trade\/authorize[^)\s]*)\)/i)?.[1],
    text.match(/https:\/\/mcp\.kite\.trade\/authorize[^\s)\]"'<>]+/i)?.[0],
    text.match(/\]\((https:\/\/kite\.zerodha\.com\/connect\/login[^)\s]*)\)/i)?.[1],
    text.match(/https:\/\/kite\.zerodha\.com\/connect\/login[^\s)\]"'<>]+/i)?.[0],
    text.match(/\]\((https:[^)\s]+)\)/)?.[1],
    text.match(/https:\/\/[^\s)\]"'<>]+/i)?.[0],
  ];
  for (const raw of candidates) {
    const url = safeKiteLoginUrl(raw?.replace(/[.,;]+$/, ""));
    if (url) return url;
  }
  return undefined;
}

export { connectKite, disconnectKite, getKiteConnection };
export type { ToolResult };

export async function kiteLogin(
  userId: string,
  opts?: { skipProfileCheck?: boolean },
): Promise<{ loggedInAs: string } | { url: string }> {
  if (!opts?.skipProfileCheck) {
    const loggedIn = await kiteLoggedInAs(userId).catch(() => undefined);
    if (loggedIn) return { loggedInAs: loggedIn };
  }

  const result = await kiteHttpLoginTool(userId);
  const text = toolResultText(result);
  const already = text.match(/already logged in as (.+)$/im);
  if (already) return { loggedInAs: already[1].trim() };
  const url = extractKiteLoginUrl(text);
  if (!url) throw new Error("Zerodha did not return a login link. Try again in a minute.");
  return { url };
}

export async function kiteLoggedInAs(userId: string) {
  const result = await kiteHttpCall(userId, "get_profile", {});
  if (result.isError) return undefined;
  const text = toolResultText(result);
  try {
    const profile = JSON.parse(text) as { user_name?: string; user_shortname?: string; user_id?: string };
    return profile.user_name || profile.user_shortname || profile.user_id || "your account";
  } catch {
    return "your account";
  }
}

const NEEDS_LOGIN =
  /log ?in first|login required|not logged in|session (has )?expired|invalid (access )?token|failed to execute\s+get_|unknown tool/i;

export type KiteHoldingDraft = {
  ticker: string;
  qty: number;
  avg?: number;
  name?: string;
  source?: string;
  assetType?: string;
};

function parseHoldingsJson(text: string): Record<string, unknown>[] {
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    return [];
  }
  if (Array.isArray(parsed)) return parsed as Record<string, unknown>[];
  if (!parsed || typeof parsed !== "object") return [];
  const obj = parsed as Record<string, unknown>;
  const rowsRaw = obj.data ?? obj.holdings ?? obj.result;
  return Array.isArray(rowsRaw) ? (rowsRaw as Record<string, unknown>[]) : [];
}

function draftFromEquityRow(raw: Record<string, unknown>): KiteHoldingDraft | null {
  const ticker = String(raw.tradingsymbol ?? raw.trading_symbol ?? raw.symbol ?? raw.ticker ?? "")
    .trim()
    .toUpperCase();
  const realised = Number(raw.realised_quantity ?? 0);
  const t1 = Number(raw.t1_quantity ?? 0);
  const qty = Number(raw.quantity ?? raw.qty ?? (Number.isFinite(realised) || Number.isFinite(t1) ? realised + t1 : 0));
  if (!ticker || !Number.isFinite(qty) || qty <= 0) return null;
  const avg = Number(raw.average_price ?? raw.average ?? raw.avg ?? raw.avgPrice);
  const name = typeof raw.name === "string" ? raw.name.trim() : undefined;
  const draft: KiteHoldingDraft = { ticker, qty, source: "zerodha", assetType: "equity" };
  if (Number.isFinite(avg) && avg > 0) draft.avg = avg;
  if (name) draft.name = name;
  return draft;
}

function draftFromMfRow(raw: Record<string, unknown>): KiteHoldingDraft | null {
  const ticker = String(raw.tradingsymbol ?? raw.trading_symbol ?? raw.isin ?? "")
    .trim()
    .toUpperCase();
  const qty = Number(raw.quantity ?? raw.qty ?? 0);
  if (!ticker || !Number.isFinite(qty) || qty <= 0) return null;
  const avg = Number(raw.average_price ?? raw.average ?? raw.avg);
  const fund = typeof raw.fund === "string" ? raw.fund.trim() : undefined;
  const name = fund || (typeof raw.name === "string" ? raw.name.trim() : undefined);
  const folio = raw.folio != null && String(raw.folio).trim() ? String(raw.folio).trim() : "";
  const key = folio ? `${ticker}:${folio}` : ticker;
  return {
    ticker: key,
    qty,
    source: "zerodha",
    assetType: "fund",
    ...(Number.isFinite(avg) && avg > 0 ? { avg } : {}),
    ...(name ? { name } : {}),
  };
}

function callNeedsLogin(result: ToolResult, text: string) {
  return Boolean(result.isError || NEEDS_LOGIN.test(text));
}

export async function kiteHoldings(
  userId: string,
): Promise<{ holdings: KiteHoldingDraft[] } | { needsLogin: true; message: string }> {
  if (!(await getKiteConnection(userId))) {
    throw new Error("Zerodha is not connected.");
  }
  const loggedIn = await kiteLoggedInAs(userId).catch(() => undefined);
  if (!loggedIn) {
    return {
      needsLogin: true,
      message: "Log in on Zerodha first, then fetch holdings again.",
    };
  }

  let equityResult: ToolResult;
  let equityText: string;
  try {
    equityResult = await kiteHttpCall(userId, "get_holdings", {});
    equityText = toolResultText(equityResult);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    if (NEEDS_LOGIN.test(msg)) {
      return { needsLogin: true, message: "Log in on Zerodha first, then fetch holdings again." };
    }
    throw err;
  }
  if (callNeedsLogin(equityResult, equityText)) {
    return { needsLogin: true, message: "Your Zerodha session expired. Log in again, then fetch holdings." };
  }
  const byKey = new Map<string, KiteHoldingDraft>();
  for (const raw of parseHoldingsJson(equityText)) {
    const draft = draftFromEquityRow(raw);
    if (draft) byKey.set(draft.ticker, draft);
  }
  try {
    const mfResult = await kiteHttpCall(userId, "get_mf_holdings", {});
    const mfText = toolResultText(mfResult);
    if (!callNeedsLogin(mfResult, mfText)) {
      for (const raw of parseHoldingsJson(mfText)) {
        const draft = draftFromMfRow(raw);
        if (draft) byKey.set(draft.ticker, draft);
      }
    }
  } catch {
    // equity-only ok
  }
  const holdings = [...byKey.values()];
  return { holdings };
}

export async function disconnectKiteWithSession(userId: string) {
  const sessionId = await readKiteSessionEnc(userId).catch(() => undefined);
  if (sessionId) {
    const bearer = await kiteMcpBearer().catch(() => undefined);
    await fetch(kiteUrl(), {
      method: "DELETE",
      headers: {
        ...(bearer ? { Authorization: `Bearer ${bearer}` } : {}),
        "Mcp-Session-Id": sessionId,
      },
      signal: AbortSignal.timeout(10_000),
    }).catch(() => undefined);
  }
  await clearKiteSession(userId);
  await disconnectKite(userId);
}