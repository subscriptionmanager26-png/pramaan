import { kiteMcpAuthErrorMessage, kiteMcpBearer } from "@/lib/zerodha/kite-mcp-oauth";
import {
  connectKite,
  disconnectKite,
  getKiteConnection,
  readKiteSession,
  readKiteSessionEnc,
  saveKiteSession,
} from "@/lib/zerodha/user-store";

export type ToolResult = { content?: { text?: string }[]; isError?: boolean };

const PROTOCOL = "2025-03-26";
const SESSION_MAX_MS = 11 * 3600_000;
const POST_MS = 30_000;
const SESSION_POST_MS = 12_000;
const LOGIN_HOSTS = new Set(["kite.zerodha.com", "kite.trade", "mcp.kite.trade", "www.kite.trade"]);

function kiteUrl() {
  return process.env.KITE_MCP_URL?.trim() || "https://mcp.kite.trade/mcp";
}

type RpcReply = { result?: unknown; error?: { code: number; message: string } };

async function post(sessionId: string | undefined, payload: Record<string, unknown>, timeoutMs = POST_MS) {
  const bearer = await kiteMcpBearer();
  if (!bearer && kiteUrl().includes("mcp.kite.trade")) {
    throw new Error((await kiteMcpAuthErrorMessage()) || "Kite MCP bearer token is missing.");
  }
  const res = await fetch(kiteUrl(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/event-stream",
      "Mcp-Protocol-Version": PROTOCOL,
      ...(bearer ? { Authorization: `Bearer ${bearer}` } : {}),
      ...(sessionId ? { "Mcp-Session-Id": sessionId } : {}),
    },
    body: JSON.stringify(payload),
    cache: "no-store",
    signal: AbortSignal.timeout(timeoutMs),
  });
  const text = await res.text();
  const json = res.headers.get("content-type")?.includes("text/event-stream")
    ? text
        .split("\n")
        .filter((l) => l.startsWith("data:"))
        .map((l) => l.slice(5).trim())
        .filter(Boolean)
        .pop()
    : text;
  let body: RpcReply | undefined;
  try {
    body = json ? (JSON.parse(json) as RpcReply) : undefined;
  } catch {
    body = undefined;
  }
  if (res.status === 401 && kiteUrl().includes("mcp.kite.trade")) {
    throw new Error((await kiteMcpAuthErrorMessage()) || "Kite MCP rejected the bearer token.");
  }
  return { status: res.status, body, sessionId: res.headers.get("mcp-session-id") ?? undefined };
}

async function openSession() {
  const init = await post(
    undefined,
    {
      jsonrpc: "2.0",
      id: 1,
      method: "initialize",
      params: {
        protocolVersion: PROTOCOL,
        capabilities: {},
        clientInfo: { name: "pocketedge", version: "1.0.0" },
      },
    },
    SESSION_POST_MS,
  );
  if (init.status !== 200 || !init.sessionId) {
    throw new Error(`Zerodha is not reachable right now (HTTP ${init.status}).`);
  }
  await post(init.sessionId, { jsonrpc: "2.0", method: "notifications/initialized" }, SESSION_POST_MS).catch(
    () => undefined,
  );
  return init.sessionId;
}

async function sessionFor(userId: string, fresh: boolean) {
  if (!(await getKiteConnection(userId))) throw new Error("Zerodha is not connected.");
  if (!fresh) {
    const cached = await readKiteSession(userId, SESSION_MAX_MS);
    if (cached) return cached;
  }
  const sessionId = await openSession();
  await saveKiteSession(userId, sessionId);
  return sessionId;
}

async function kiteRequest(
  userId: string,
  method: string,
  params?: Record<string, unknown>,
  opts?: { preferFresh?: boolean; timeoutMs?: number },
) {
  const sessionId = await sessionFor(userId, Boolean(opts?.preferFresh));
  const res = await post(
    sessionId,
    { jsonrpc: "2.0", id: 1, method, params },
    opts?.timeoutMs ?? POST_MS,
  );
  if (res.status >= 200 && res.status < 300 && res.body) {
    if (res.body.error) throw new Error(`Zerodha: ${res.body.error.message}`);
    return res.body.result;
  }
  throw new Error(`Zerodha request failed (HTTP ${res.status}).`);
}

async function kiteCall(userId: string, name: string, args: Record<string, unknown> = {}) {
  return ((await kiteRequest(userId, "tools/call", { name, arguments: args })) ?? { content: [] }) as ToolResult;
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

export async function kiteLogin(userId: string): Promise<{ loggedInAs: string } | { url: string }> {
  const raw = await kiteRequest(
    userId,
    "tools/call",
    { name: "login", arguments: {} },
    { preferFresh: true, timeoutMs: SESSION_POST_MS },
  );
  const result = (raw ?? { content: [] }) as ToolResult;
  const text = toolResultText(result);
  const already = text.match(/already logged in as (.+)$/im);
  if (already) return { loggedInAs: already[1].trim() };
  const url = extractKiteLoginUrl(text);
  if (!url) throw new Error("Zerodha did not return a login link. Try again in a minute.");
  return { url };
}

export async function kiteLoggedInAs(userId: string) {
  const result = await kiteCall(userId, "get_profile");
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
  /log ?in first|login required|not logged in|session (has )?expired|invalid (access )?token|failed to execute\s+get_/i;

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
  const equityResult = await kiteCall(userId, "get_holdings", {});
  const equityText = toolResultText(equityResult);
  if (callNeedsLogin(equityResult, equityText)) {
    return {
      needsLogin: true,
      message: "Your Zerodha session expired. Log in again, then fetch holdings.",
    };
  }
  const byKey = new Map<string, KiteHoldingDraft>();
  for (const raw of parseHoldingsJson(equityText)) {
    const draft = draftFromEquityRow(raw);
    if (draft) byKey.set(draft.ticker, draft);
  }
  try {
    const mfResult = await kiteCall(userId, "get_mf_holdings", {});
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
  await disconnectKite(userId);
}