import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";

import { kiteMcpBearer } from "@/lib/zerodha/kite-mcp-oauth";
import { getKiteConnection, readKiteSession, saveKiteSession } from "@/lib/zerodha/user-store";

const SESSION_MAX_MS = 11 * 3600_000;

function kiteUrl() {
  return process.env.KITE_MCP_URL?.trim() || "https://mcp.kite.trade/mcp";
}

function createTokenAuthProvider(accessToken: string) {
  return {
    redirectUrl: undefined,
    clientMetadata: { client_name: "PocketEdge", redirect_uris: [] as string[] },
    clientInformation: () => undefined,
    tokens: () => ({ access_token: accessToken, token_type: "Bearer" as const }),
    saveTokens: () => {},
    redirectToAuthorization: () => {},
    codeVerifier: () => "",
    saveCodeVerifier: () => {},
  };
}

export type ToolResult = { content?: { text?: string }[]; isError?: boolean };

function toToolResult(result: Awaited<ReturnType<Client["callTool"]>>): ToolResult {
  const blocks = Array.isArray(result.content) ? result.content : [];
  const content = blocks.map((c: { type?: string; text?: string }) => {
    if (c.type === "text") return { text: c.text ?? "" };
    return { text: JSON.stringify(c) };
  });
  return { content, isError: Boolean(result.isError) };
}

export async function withKiteMcpClient<T>(
  userId: string,
  opts: { freshSession?: boolean },
  run: (client: Client) => Promise<T>,
): Promise<T> {
  if (!(await getKiteConnection(userId))) throw new Error("Zerodha is not connected.");
  const bearer = await kiteMcpBearer();
  if (!bearer && kiteUrl().includes("mcp.kite.trade")) {
    throw new Error("Complete Connect Zerodha to allow PocketEdge to reach Kite.");
  }

  const cachedSession = opts.freshSession ? undefined : await readKiteSession(userId, SESSION_MAX_MS);
  const transport = new StreamableHTTPClientTransport(new URL(kiteUrl()), {
    sessionId: cachedSession,
    ...(bearer ? { authProvider: createTokenAuthProvider(bearer) } : {}),
  });
  const client = new Client({ name: "pocketedge", version: "1.0.0" });
  try {
    await client.connect(transport);
    const sessionId = transport.sessionId ?? cachedSession;
    if (sessionId) await saveKiteSession(userId, sessionId);
    return await run(client);
  } finally {
    await client.close().catch(() => undefined);
  }
}

export async function kiteSdkCall(
  userId: string,
  name: string,
  args: Record<string, unknown> = {},
  opts?: { freshSession?: boolean },
): Promise<ToolResult> {
  return withKiteMcpClient(userId, { freshSession: Boolean(opts?.freshSession) }, async (client) => {
    const result = await client.callTool({ name, arguments: args });
    return toToolResult(result);
  });
}

export async function kiteSdkListTools(userId: string, freshSession = false): Promise<Set<string>> {
  return withKiteMcpClient(userId, { freshSession }, async (client) => {
    const { tools } = await client.listTools();
    return new Set(tools.map((t) => t.name).filter(Boolean));
  });
}