import { createClient } from "@supabase/supabase-js";

import { mapPortfolioRow, type LivePortfolio } from "@/lib/portfolio/holdings";

function supabaseUrl() {
  return process.env.POCKETEDGE_SUPABASE_URL || process.env.NEXT_PUBLIC_POCKETEDGE_SUPABASE_URL;
}

function anonKey() {
  return process.env.NEXT_PUBLIC_POCKETEDGE_SUPABASE_ANON_KEY;
}

/** Load the user's single live portfolio using their access token (RLS). */
export async function fetchLivePortfolio(accessToken: string, userId: string): Promise<LivePortfolio | null> {
  const url = supabaseUrl();
  const anon = anonKey();
  if (!url || !anon) return null;
  const supabase = createClient(url, anon, {
    global: { headers: { Authorization: `Bearer ${accessToken}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data, error } = await supabase
    .from("social_portfolios")
    .select("id,kind,name,holdings,updated_at,is_archived,is_draft")
    .eq("owner_id", userId)
    .eq("kind", "live")
    .eq("is_archived", false)
    .eq("is_draft", false)
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (error) {
    console.error("[portfolio] fetch live", error.message);
    return null;
  }
  return mapPortfolioRow(data as Record<string, unknown> | null);
}

export async function upsertLiveHoldings(
  accessToken: string,
  input: {
    portfolioId?: string | null;
    name?: string;
    holdings: { ticker: string; qty: number; avg?: number; name?: string }[];
  },
) {
  const url = supabaseUrl();
  const anon = anonKey();
  if (!url || !anon) throw new Error("portfolio_backend_unconfigured");
  const supabase = createClient(url, anon, {
    global: { headers: { Authorization: `Bearer ${accessToken}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const tickers = input.holdings.map((h) => h.ticker);
  const { data, error } = await supabase.rpc("upsert_social_portfolio", {
    p_id: input.portfolioId ?? null,
    p_kind: "live",
    p_name: input.name ?? "My portfolio",
    p_objective: "",
    p_thesis: "",
    p_is_draft: false,
    p_tickers: tickers,
    p_holdings: input.holdings,
    p_watchlist_base_investment: null,
  });
  if (error) throw new Error(error.message);
  return mapPortfolioRow(data as Record<string, unknown>);
}
