import { kiteMcpAuthErrorMessage, kiteMcpBearer } from "@/lib/zerodha/kite-mcp-oauth";
import { getKiteConnection, kiteLoggedInAs } from "@/lib/zerodha/kite";

export async function zerodhaConnectionsView(userId: string) {
  const [mcpBearer, kiteConn, mcpBackendMessage] = await Promise.all([
    kiteMcpBearer(),
    getKiteConnection(userId),
    kiteMcpAuthErrorMessage(),
  ]);
  let loggedInAs: string | null = null;
  if (kiteConn) {
    const timeout = new Promise<null>((resolve) => setTimeout(() => resolve(null), 15_000));
    loggedInAs = (await Promise.race([kiteLoggedInAs(userId).catch(() => null), timeout])) ?? null;
  }
  return {
    connected: Boolean(kiteConn),
    loggedInAs,
    sessionActive: Boolean(loggedInAs),
    mcpBackendReady: Boolean(mcpBearer),
    mcpBackendMessage: mcpBearer ? null : mcpBackendMessage,
    mcpBackendPublicUrl: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || null,
  };
}