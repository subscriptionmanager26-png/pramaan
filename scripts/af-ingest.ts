/**
 * Advisor feed ingest → Supabase (india-market-news af_* tables).
 *
 * 1) Scan active af_sources (Twitter + Substack)
 * 2) Upsert post/tweet links (retweets excluded)
 * 3) Fetch bodies for new items
 * 4) Categorize items published or first-seen in the last 3 days
 *
 *   SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... npm run af:ingest
 *
 * Optional:
 *   AF_LIMIT_SOURCES=20     # smoke-test subset
 *   AF_POSTS_PER_SOURCE=6
 *   AF_SKIP_BODIES=1
 *   AF_SKIP_CATEGORIES=1
 */
import { loadAfEnv } from "../src/lib/af/env";
loadAfEnv();

import { fetchSubstack, fetchTwitterTimeline } from "../src/lib/ingest/feeds";
import { fetchContentBody } from "../src/lib/af/bodies";
import { categorizeDiscussion } from "../src/lib/af/categories";
import { getAfSupabase } from "../src/lib/af/supabase";
import { externalIdFromUrl, isRetweetText, twitterHandleFromUrl } from "../src/lib/af/urls";

type SourceRow = {
  id: string;
  advisor_id: string;
  advisor_slug: string;
  advisor_name: string;
  platform: "twitter" | "substack";
  handle_or_url: string;
  canonical_url: string;
};

type Parsed = {
  title: string;
  url: string;
  summary: string;
  publishedAt: string;
};

function daysAgoIso(days: number) {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
}

async function fetchSourcePosts(source: SourceRow, limit: number): Promise<Parsed[]> {
  if (source.platform === "twitter") {
    const handle =
      twitterHandleFromUrl(source.canonical_url) ||
      source.handle_or_url.replace(/^@/, "");
    const posts = await fetchTwitterTimeline(handle, limit);
    return posts.filter((p) => !isRetweetText(p.title) && !isRetweetText(p.summary));
  }
  return fetchSubstack(source.canonical_url, limit);
}

async function main() {
  const postsPer = Number(process.env.AF_POSTS_PER_SOURCE ?? 6);
  const limitSources = process.env.AF_LIMIT_SOURCES
    ? Number(process.env.AF_LIMIT_SOURCES)
    : null;
  const skipBodies = process.env.AF_SKIP_BODIES === "1";
  const skipCategories = process.env.AF_SKIP_CATEGORIES === "1";
  const windowStart = daysAgoIso(3);

  const supabase = getAfSupabase();

  const { data: run, error: runErr } = await supabase
    .from("af_ingest_runs")
    .insert({ status: "running", meta: { postsPer, limitSources, windowStart } })
    .select("id")
    .single();
  if (runErr) throw runErr;
  const runId = run.id as string;

  let sourcesScanned = 0;
  let itemsUpserted = 0;
  let bodiesFetched = 0;
  let categorized = 0;
  const errors: string[] = [];

  try {
    let query = supabase
      .from("af_sources")
      .select("id,advisor_id,advisor_slug,advisor_name,platform,handle_or_url,canonical_url")
      .eq("active", true)
      .order("advisor_name", { ascending: true });
    if (limitSources) query = query.limit(limitSources);

    const { data: sources, error: srcErr } = await query;
    if (srcErr) throw srcErr;

    const newContentIds: string[] = [];

    for (const source of (sources ?? []) as SourceRow[]) {
      sourcesScanned += 1;
      try {
        const posts = await fetchSourcePosts(source, postsPer);
        for (const post of posts) {
          if (source.platform === "twitter" && isRetweetText(post.title)) continue;

          const externalId = externalIdFromUrl(source.platform, post.url);
          const now = new Date().toISOString();
          const row = {
            source_id: source.id,
            platform: source.platform,
            external_id: externalId,
            url: post.url,
            title: post.title,
            summary: post.summary,
            published_at: post.publishedAt,
            is_retweet: false,
            last_seen_at: now,
          };

          const { data: existing } = await supabase
            .from("af_content_items")
            .select("id")
            .eq("url", post.url)
            .maybeSingle();

          if (existing?.id) {
            const { error } = await supabase
              .from("af_content_items")
              .update({
                title: row.title,
                summary: row.summary,
                published_at: row.published_at,
                last_seen_at: now,
              })
              .eq("id", existing.id);
            if (error) throw error;
            itemsUpserted += 1;
          } else {
            const { data: inserted, error } = await supabase
              .from("af_content_items")
              .insert({ ...row, first_seen_at: now })
              .select("id")
              .single();
            if (error) throw error;
            itemsUpserted += 1;
            if (inserted?.id) newContentIds.push(inserted.id);
          }
        }
        console.log(
          `${source.platform} ${source.handle_or_url}: ${posts.length} posts (${source.advisor_name})`,
        );
      } catch (err) {
        const msg = `${source.platform} ${source.handle_or_url}: ${
          err instanceof Error ? err.message : String(err)
        }`;
        errors.push(msg);
        console.warn(msg);
      }
    }

    if (!skipBodies && newContentIds.length) {
      const { data: needBodies, error } = await supabase
        .from("af_content_items")
        .select("id,platform,url,title,summary")
        .in("id", newContentIds);
      if (error) throw error;

      for (const item of needBodies ?? []) {
        const body = await fetchContentBody({
          platform: item.platform as "twitter" | "substack",
          url: item.url,
          title: item.title,
          summary: item.summary,
        });
        const { error: bodyErr } = await supabase.from("af_content_bodies").upsert({
          content_id: item.id,
          body_text: body.bodyText,
          body_html: body.bodyHtml,
          fetch_status: body.fetchStatus,
          fetch_error: body.fetchError ?? null,
          word_count: body.wordCount,
          fetched_at: new Date().toISOString(),
        });
        if (bodyErr) {
          errors.push(`body ${item.url}: ${bodyErr.message}`);
          continue;
        }
        bodiesFetched += 1;
      }
    }

    if (!skipCategories) {
      // New in last 3 days by published_at, else first_seen_at.
      const { data: recent, error } = await supabase
        .from("af_content_items")
        .select("id,title,summary,published_at,first_seen_at,is_retweet")
        .eq("is_retweet", false)
        .or(`published_at.gte.${windowStart},first_seen_at.gte.${windowStart}`);
      if (error) throw error;

      const ids = (recent ?? []).map((r) => r.id);
      const bodyById = new Map<string, string | null>();
      if (ids.length) {
        const { data: bodies } = await supabase
          .from("af_content_bodies")
          .select("content_id,body_text")
          .in("content_id", ids);
        for (const b of bodies ?? []) bodyById.set(b.content_id, b.body_text);
      }

      for (const item of recent ?? []) {
        const result = categorizeDiscussion({
          title: item.title,
          summary: item.summary,
          body: bodyById.get(item.id) ?? null,
        });
        const { error: catErr } = await supabase.from("af_content_categories").upsert(
          {
            content_id: item.id,
            category: result.category,
            confidence: result.confidence,
            model: "rules-v1",
            rationale: result.rationale,
            categorized_at: new Date().toISOString(),
          },
          { onConflict: "content_id" },
        );
        if (catErr) {
          errors.push(`category ${item.id}: ${catErr.message}`);
          continue;
        }
        categorized += 1;
      }
    }

    await supabase
      .from("af_ingest_runs")
      .update({
        status: errors.length ? "ok" : "ok",
        finished_at: new Date().toISOString(),
        sources_scanned: sourcesScanned,
        items_upserted: itemsUpserted,
        bodies_fetched: bodiesFetched,
        categorized,
        error: errors.length ? errors.slice(0, 20).join("\n") : null,
        meta: {
          postsPer,
          limitSources,
          windowStart,
          newContentIds: newContentIds.length,
          errorCount: errors.length,
        },
      })
      .eq("id", runId);

    console.log(
      JSON.stringify(
        {
          runId,
          sourcesScanned,
          itemsUpserted,
          bodiesFetched,
          categorized,
          windowStart,
          errorCount: errors.length,
        },
        null,
        2,
      ),
    );
  } catch (err) {
    await supabase
      .from("af_ingest_runs")
      .update({
        status: "error",
        finished_at: new Date().toISOString(),
        sources_scanned: sourcesScanned,
        items_upserted: itemsUpserted,
        bodies_fetched: bodiesFetched,
        categorized,
        error: err instanceof Error ? err.message : String(err),
      })
      .eq("id", runId);
    throw err;
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
