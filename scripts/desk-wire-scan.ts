/** One-off wire scan for desk automation (stdout JSON). */
import { loadAfEnv } from "../src/lib/af/env";
loadAfEnv();
import { getAfSupabase } from "../src/lib/af/supabase";

async function main() {
  const windowStart = process.argv[2] ?? new Date(Date.now() - 12 * 3600 * 1000).toISOString();
  const sb = getAfSupabase();

  const news = await sb
    .from("mn_news_items")
    .select("id,title,summary,published_at,first_seen_at,source,ticker,company_name")
    .or(`published_at.gte.${windowStart},first_seen_at.gte.${windowStart}`)
    .order("published_at", { ascending: false })
    .limit(40);

  const newsIds = (news.data ?? []).map((n: { id: string }) => n.id);
  let summaries: Record<string, unknown>[] = [];
  if (newsIds.length) {
    const s = await sb
      .from("mn_news_ai_summaries")
      .select("news_item_id,bullets,summary")
      .in("news_item_id", newsIds);
    summaries = s.data ?? [];
  }

  const twitter = await sb
    .from("af_content_items")
    .select("id,title,summary,published_at,first_seen_at,url,platform,advisor_name")
    .eq("platform", "twitter")
    .or(`published_at.gte.${windowStart},first_seen_at.gte.${windowStart}`)
    .order("published_at", { ascending: false })
    .limit(30);

  const substack = await sb
    .from("af_content_items")
    .select("id,title,summary,published_at,first_seen_at,url,platform,advisor_name")
    .eq("platform", "substack")
    .or(`published_at.gte.${windowStart},first_seen_at.gte.${windowStart}`)
    .order("published_at", { ascending: false })
    .limit(30);

  console.log(
    JSON.stringify(
      {
        windowStart,
        newsCount: news.data?.length ?? 0,
        newsError: news.error,
        news: news.data,
        summaries,
        twitterCount: twitter.data?.length ?? 0,
        twitter: twitter.data,
        substackCount: substack.data?.length ?? 0,
        substack: substack.data,
      },
      null,
      2,
    ),
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
