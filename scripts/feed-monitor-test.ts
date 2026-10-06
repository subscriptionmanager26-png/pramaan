/**
 * Advisor feed monitor smoke test — used by the Cursor Automation.
 *
 *   npx tsx scripts/feed-monitor-test.ts
 *
 * Samples the first N advisors with usable Twitter / Substack links,
 * fetches via guest GraphQL → twitter-viewer.com fallback + Substack RSS,
 * writes JSON under tmp/feed-monitor/.
 * Does not commit.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fetchSubstack, fetchTwitterTimeline } from "../src/lib/ingest/feeds";

type AdvisorRow = {
  id: string;
  slug: string;
  name: string;
  twitter: string | null;
  substack: string | null;
};

function twitterHandle(url: string) {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "").toLowerCase();
    if (host !== "x.com" && host !== "twitter.com") return null;
    const part = u.pathname.split("/").filter(Boolean)[0];
    if (!part || part.startsWith("i") || part === "intent") return null;
    return part.replace(/^@/, "");
  } catch {
    return null;
  }
}

function usableSubstack(url: string) {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "").toLowerCase();
    if (host.endsWith("substack.com")) return url;
    return null;
  } catch {
    return null;
  }
}

async function main() {
  const twitterN = Number(process.env.FEED_MONITOR_TWITTER_N ?? 10);
  const substackN = Number(process.env.FEED_MONITOR_SUBSTACK_N ?? 10);
  const postsPer = Number(process.env.FEED_MONITOR_POSTS ?? 6);

  const advisors = JSON.parse(
    readFileSync(join(process.cwd(), "src/data/sebi-advisors.json"), "utf8"),
  ) as AdvisorRow[];

  const twitterRows: { advisor: AdvisorRow; handle: string }[] = [];
  const substackRows: { advisor: AdvisorRow; url: string }[] = [];
  for (const a of advisors) {
    if (twitterRows.length < twitterN && a.twitter) {
      const handle = twitterHandle(a.twitter);
      if (handle) twitterRows.push({ advisor: a, handle });
    }
    if (substackRows.length < substackN && a.substack) {
      const url = usableSubstack(a.substack);
      if (url) substackRows.push({ advisor: a, url });
    }
    if (twitterRows.length >= twitterN && substackRows.length >= substackN) break;
  }

  const startedAt = new Date().toISOString();
  const sources: Record<string, unknown>[] = [];

  for (const row of twitterRows) {
    try {
      const posts = await fetchTwitterTimeline(row.handle, postsPer);
      sources.push({
        advisorId: row.advisor.id,
        advisorName: row.advisor.name,
        advisorSlug: row.advisor.slug,
        platform: "twitter",
        urlOrHandle: `@${row.handle}`,
        helper: "fetchTwitterTimeline (guest GraphQL → twitter-viewer.com)",
        success: true,
        postCount: posts.length,
        posts,
      });
      console.log(`twitter @${row.handle}: ${posts.length} posts`);
    } catch (err) {
      sources.push({
        advisorId: row.advisor.id,
        advisorName: row.advisor.name,
        advisorSlug: row.advisor.slug,
        platform: "twitter",
        urlOrHandle: `@${row.handle}`,
        helper: "fetchTwitterTimeline (guest GraphQL → twitter-viewer.com)",
        success: false,
        error: err instanceof Error ? err.message : String(err),
        postCount: 0,
        posts: [],
      });
      console.warn(`twitter @${row.handle}: FAIL ${err}`);
    }
  }

  for (const row of substackRows) {
    try {
      const posts = await fetchSubstack(row.url, postsPer);
      sources.push({
        advisorId: row.advisor.id,
        advisorName: row.advisor.name,
        advisorSlug: row.advisor.slug,
        platform: "substack",
        urlOrHandle: row.url,
        helper: "fetchSubstack",
        success: true,
        postCount: posts.length,
        posts,
      });
      console.log(`substack ${row.url}: ${posts.length} posts`);
    } catch (err) {
      sources.push({
        advisorId: row.advisor.id,
        advisorName: row.advisor.name,
        advisorSlug: row.advisor.slug,
        platform: "substack",
        urlOrHandle: row.url,
        helper: "fetchSubstack",
        success: false,
        error: err instanceof Error ? err.message : String(err),
        postCount: 0,
        posts: [],
      });
      console.warn(`substack ${row.url}: FAIL ${err}`);
    }
  }

  const finishedAt = new Date().toISOString();
  const outDir = join(process.cwd(), "tmp/feed-monitor");
  mkdirSync(outDir, { recursive: true });
  const stamp = finishedAt.replace(/[:.]/g, "-");
  const outPath = join(outDir, `run-${stamp}.json`);
  const payload = {
    run: {
      startedAt,
      finishedAt,
      helpers: {
        twitter: "fetchTwitterTimeline — guest GraphQL, then twitter-viewer.com",
        substack: "fetchSubstack / RSS",
      },
      selection: {
        twitterCount: twitterRows.length,
        substackCount: substackRows.length,
        postsPerSource: postsPer,
      },
      totals: {
        twitterOk: sources.filter((s) => s.platform === "twitter" && s.success).length,
        twitterFail: sources.filter((s) => s.platform === "twitter" && !s.success).length,
        substackOk: sources.filter((s) => s.platform === "substack" && s.success).length,
        substackFail: sources.filter((s) => s.platform === "substack" && !s.success).length,
      },
    },
    sources,
  };
  writeFileSync(outPath, JSON.stringify(payload, null, 2));
  console.log(`\nwrote ${outPath}`);
  console.log(JSON.stringify(payload.run.totals));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
