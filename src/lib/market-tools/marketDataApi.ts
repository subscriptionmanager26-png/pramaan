import { getPocketedgeSupabase, pocketedgeAuthConfigured } from "@/lib/pocketedge/supabase-browser";

const IBJA_GOLD_999_KEY = "IBJA-GOLD-999";

export type MarketQuoteRow = {
  symbol: string;
  name: string;
  ltp: number | null;
  price: number | null;
  nav?: number | null;
  nseNav?: number | null;
  amcInav?: number | null;
  changePct?: number | null;
  previousClose?: number | null;
  syncedAt?: string | null;
  amcInavSyncedAt?: string | null;
  asOfDate?: string | null;
  isin?: string | null;
  assetType?: string;
};

/** Single-scan ETF LTP/NAV list for the iNAV tracker. */
export async function listEtfMarketQuotes(): Promise<{
  syncedAt: string | null;
  amcSyncedAt: string | null;
  items: MarketQuoteRow[];
}> {
  if (!pocketedgeAuthConfigured()) {
    return { syncedAt: null, amcSyncedAt: null, items: [] };
  }
  const client = getPocketedgeSupabase();
  const { data, error } = await client.rpc("list_social_market_etf_quotes");
  if (error) throw error;

  let latest: string | null = null;
  let amcLatest: string | null = null;
  const items: MarketQuoteRow[] = [];
  for (const row of data ?? []) {
    const symbol = String(row.asset_key ?? row.assetKey ?? "")
      .trim()
      .toUpperCase();
    if (!symbol) continue;
    const syncedAt = (row.synced_at ?? row.syncedAt ?? null) as string | null;
    const amcInavSyncedAt = (row.amc_inav_synced_at ?? row.amcInavSyncedAt ?? null) as string | null;
    if (syncedAt && (!latest || syncedAt > latest)) latest = syncedAt;
    if (amcInavSyncedAt && (!amcLatest || amcInavSyncedAt > amcLatest)) amcLatest = amcInavSyncedAt;
    const navRaw = row.nav != null ? Number(row.nav) : null;
    const amcRaw = row.amc_inav != null ? Number(row.amc_inav) : null;
    items.push({
      symbol,
      name: row.name || symbol,
      ltp: row.price != null ? Number(row.price) : null,
      price: row.price != null ? Number(row.price) : null,
      nav: navRaw != null && navRaw > 0 ? navRaw : null,
      nseNav: navRaw != null && navRaw > 0 ? navRaw : null,
      amcInav: amcRaw != null && amcRaw > 0 ? amcRaw : null,
      changePct: row.change_pct != null ? Number(row.change_pct) : null,
      previousClose: row.previous_close != null ? Number(row.previous_close) : null,
      syncedAt,
      amcInavSyncedAt,
      assetType: "etf",
    });
  }

  return { syncedAt: latest, amcSyncedAt: amcLatest, items };
}

/** Single-scan SGB LTP + IBJA gold for the SGB tracker. */
export async function listSgbMarketQuotes(): Promise<{
  syncedAt: string | null;
  gold: MarketQuoteRow | null;
  items: MarketQuoteRow[];
}> {
  if (!pocketedgeAuthConfigured()) {
    return { syncedAt: null, gold: null, items: [] };
  }
  const client = getPocketedgeSupabase();
  const { data, error } = await client.rpc("list_social_market_sgb_quotes");
  if (error) throw error;

  let latest: string | null = null;
  let gold: MarketQuoteRow | null = null;
  const items: MarketQuoteRow[] = [];
  for (const row of data ?? []) {
    const symbol = String(row.asset_key ?? row.assetKey ?? "")
      .trim()
      .toUpperCase();
    if (!symbol) continue;
    const syncedAt = (row.synced_at ?? row.syncedAt ?? null) as string | null;
    if (syncedAt && (!latest || syncedAt > latest)) latest = syncedAt;
    const kind = String(row.kind ?? "").toLowerCase();
    const item: MarketQuoteRow = {
      symbol,
      name: row.name || symbol,
      ltp: row.price != null ? Number(row.price) : null,
      price: row.price != null ? Number(row.price) : null,
      changePct: row.change_pct != null ? Number(row.change_pct) : null,
      previousClose: row.previous_close != null ? Number(row.previous_close) : null,
      asOfDate: (row.as_of_date ?? row.asOfDate ?? null) as string | null,
      isin: (row.isin ?? null) as string | null,
      syncedAt,
      assetType: kind === "gold" ? "commodity" : "bond",
    };
    if (kind === "gold" || symbol === IBJA_GOLD_999_KEY) {
      gold = item;
      continue;
    }
    items.push(item);
  }

  return { syncedAt: latest, gold, items };
}
