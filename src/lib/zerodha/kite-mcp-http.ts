import { kiteMcpBearer } from "@/lib/zerodha/kite-mcp-oauth";
import { clearKiteSession, getKiteConnection, readKiteSession, saveKiteSession } from "@/lib/zerodha/user-store";

export type ToolResult = { content?: { text?: string }[]; isError?: boolean };

const PROTOCOL = "2025-03-26";
const SESSION_MAX_MS = 11 * 3600_000;
const POST_MS = 30_000;
const SESSION_POST_MS = 12_000;

function kiteUrl() {
  return process.env.KITE_MCP_URL?.trim() || "https://mcp.kite.trade/mcp";
}

type RpcReply = { result?: unknown; error?: { code: number; message: string } };

async function post(sessionId: string | undefined, payload: Record<string, unknown>, timeoutMs = POST_MS) {
  const bearer = await kiteMcpBearer().catch(() => undefined);
  if (!bearer && kiteUrl().includes("mcp.kite.trade")) {
    throw new Error("Complete Connect Zerodha to allow PocketEdge to reach Kite.");
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
  const chunk = res.headers.get("content-type")?.includes("text/event-stream")
    ? text
        .split("\n")
        .filter((l) => l.startsWith("data:"))
        .map((l) => l.slice(5).trim())
        .filter(Boolean)
        .pop()
    : text;
  let body: RpcReply | undefined;
  try {
    body = chunk ? (JSON.parse(chunk) as RpcReply) : undefined;
  } catch {
    body = undefined;
  }
  if (res.status === 401) {
    throw new Error("Kite rejected the request. Disconnect, then Connect Zerodha again.");
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
  const sessionId = init.sessionId;
  const ack = await post(
    sessionId,
    { jsonrpc: "2.0", method: "notifications/initialized" },
    SESSION_POST_MS,
  );
  if (ack.status < 200 || ack.status >= 300) {
    throw new Error(`Kite MCP handshake failed (HTTP ${ack.status}). Try Connect again.`);
  }
  return sessionId;
}

async function sessionFor(userId: string, fresh: boolean) {
  if (!(await getKiteConnection(userId))) throw new Error("Zerodha is not connected.");
  if (!fresh) {
    const cached = await readKiteSession(userId, SESSION_MAX_MS);
    if (cached) return cached;
  }
  if (fresh) await clearKiteSession(userId);
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

export async function kiteHttpCall(
  userId: string,
  name: string,
  args: Record<string, unknown> = {},
  opts?: { preferFresh?: boolean; timeoutMs?: number },
): Promise<ToolResult> {
  return ((await kiteRequest(
    userId,
    "tools/call",
    { name, arguments: args },
    opts,
  )) ?? { content: [] }) as ToolResult;
}

/** One Kite MCP session for login: list tools + call `login` on the same session id (required by Kite). */
export async function kiteHttpLoginTool(userId: string): Promise<ToolResult> {
  if (!(await getKiteConnection(userId))) throw new Error("Zerodha is not connected.");
  await clearKiteSession(userId);
  const sessionId = await openSession();
  await saveKiteSession(userId, sessionId);

  const listRes = await post(sessionId, { jsonrpc: "2.0", id: 2, method: "tools/list", params: {} }, POST_MS);
  if (listRes.body?.error) throw new Error(`Zerodha: ${listRes.body.error.message}`);
  const tools = new Set(
    ((listRes.body?.result as { tools?: { name?: string }[] } | undefined)?.tools ?? [])
      .map((t) => t.name)
      .filter((n): n is string => Boolean(n)),
  );
  if (!tools.has("login")) {
    const preview = [...tools].slice(0, 12).join(", ") || "none";
    throw new Error(
      `Kite did not expose login on this session (tools: ${preview}). Disconnect, then Connect Zerodha again.`,
    );
  }

  const callRes = await post(
    sessionId,
    { jsonrpc: "2.0", id: 3, method: "tools/call", params: { name: "login", arguments: {} } },
    SESSION_POST_MS,
  );
  if (callRes.body?.error) throw new Error(`Zerodha: ${callRes.body.error.message}`);
  return (callRes.body?.result ?? { content: [] }) as ToolResult;
}

export { clearKiteSession };