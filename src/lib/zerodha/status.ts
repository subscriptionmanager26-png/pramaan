import { getKiteConnection, kiteLoggedInAs } from "@/lib/zerodha/kite";

/** Connections slice — wealth-web style: no deployment-wide "authorize server" gate for Zerodha. */
export async function zerodhaConnectionsView(userId: string) {
  const kiteConn = await getKiteConnection(userId);
  let loggedInAs: string | null = null;
  if (kiteConn) {
    const timeout = new Promise<null>((resolve) => setTimeout(() => resolve(null), 15_000));
    loggedInAs = (await Promise.race([kiteLoggedInAs(userId).catch(() => null), timeout])) ?? null;
  }
  return {
    connected: Boolean(kiteConn),
    loggedInAs,
    sessionActive: Boolean(loggedInAs),
  };
}