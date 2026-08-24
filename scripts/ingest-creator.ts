/**
 * Fetch latest public work for a creator and write src/data/ingested/<slug>.json
 *
 * Usage:
 *   npx tsx scripts/ingest-creator.ts
 *
 * Notes:
 * - Substack + YouTube + podcast use official RSS/Atom.
 * - Twitter uses a best-effort public reader (no API key); fragile.
 * - The YouTube handle "@business" resolves to Bloomberg Originals — not Deepak Shenoy.
 *   This script uses CapitalmindHQ for YouTube and deepakshenoy.substack.com for Substack.
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import {
  fetchPodcastRss,
  fetchSubstack,
  fetchTwitterViaJina,
  fetchYoutubeChannel,
  guessTopic,
  readingMinutes,
  resolveYoutubeChannelId,
  slugify,
} from "../src/lib/ingest/feeds";

const creator = {
  slug: "deepak-shenoy",
  name: "Deepak Shenoy",
  city: "Bengaluru",
  headline: "Founder of Capitalmind. Writes plainly about Indian markets, funds, and regulation.",
  bio: "CEO of Capitalmind Mutual Fund and founder of Capitalmind. Public writing and podcasts cover Indian markets, mutual funds, and the plumbing of finance. Views in personal posts are his own.",
  sebi: {
    type: "RA" as const,
    number: "INH000014003",
    validTill: "2027-12-31",
  },
  specialties: ["Markets", "Mutual funds", "Fixed income", "Taxation"],
  sources: [
    { kind: "twitter" as const, handle: "@deepakshenoy", url: "https://x.com/deepakshenoy" },
    { kind: "substack" as const, handle: "deepakshenoy", url: "https://deepakshenoy.substack.com" },
    { kind: "youtube" as const, handle: "@CapitalmindHQ", url: "https://www.youtube.com/@CapitalmindHQ" },
    { kind: "podcast" as const, handle: "Capitalmind with Deepak & Shray", url: "https://capitalmind.libsyn.com" },
  ],
  initials: "DS",
  color: "#0C4A6E",
};

async function main() {
  console.log("Fetching Substack…");
  const substack = await fetchSubstack("https://deepakshenoy.substack.com", 6);

  console.log("Resolving YouTube @CapitalmindHQ…");
  const channelId = await resolveYoutubeChannelId("CapitalmindHQ");
  console.log("YouTube channel id:", channelId);
  const youtube = await fetchYoutubeChannel(channelId, 6);

  console.log("Fetching podcast…");
  const podcast = await fetchPodcastRss("https://capitalmind.libsyn.com/rss", 4);

  console.log("Fetching Twitter (best-effort)…");
  let twitter: Awaited<ReturnType<typeof fetchTwitterViaJina>> = [];
  try {
    twitter = await fetchTwitterViaJina("deepakshenoy", 5);
  } catch (err) {
    console.warn("Twitter ingest failed:", err);
  }

  const content = [
    ...substack.map((item) => ({
      slug: `${creator.slug}-${slugify(item.title)}`,
      creatorSlug: creator.slug,
      kind: "newsletter" as const,
      source: "substack" as const,
      title: item.title,
      summary: item.summary || item.title,
      topic: guessTopic(item.title, item.summary),
      publishedAt: item.publishedAt,
      duration: readingMinutes(item.summary),
      url: item.url,
    })),
    ...youtube.map((item) => ({
      slug: `${creator.slug}-${slugify(item.title)}`,
      creatorSlug: creator.slug,
      kind: "video" as const,
      source: "youtube" as const,
      title: item.title.replace(/&amp;/g, "&"),
      summary: item.summary || item.title,
      topic: guessTopic(item.title, item.summary),
      publishedAt: item.publishedAt,
      duration: "Video",
      url: item.url,
    })),
    ...podcast.map((item) => ({
      slug: `${creator.slug}-${slugify(item.title)}`,
      creatorSlug: creator.slug,
      kind: "podcast" as const,
      source: "podcast" as const,
      title: item.title.replace(/&amp;/g, "&"),
      summary: item.summary || item.title,
      topic: guessTopic(item.title, item.summary),
      publishedAt: item.publishedAt,
      duration: item.duration || "Podcast",
      url: item.url,
    })),
    ...twitter.map((item, i) => ({
      slug: `${creator.slug}-twitter-${i + 1}-${slugify(item.title).slice(0, 40)}`,
      creatorSlug: creator.slug,
      kind: "thread" as const,
      source: "twitter" as const,
      title: item.title,
      summary: item.summary,
      topic: guessTopic(item.title, item.summary),
      publishedAt: item.publishedAt,
      duration: "Post",
      url: item.url,
    })),
  ].sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));

  const outDir = join(process.cwd(), "src/data/ingested");
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, `${creator.slug}.json`);
  writeFileSync(
    outPath,
    JSON.stringify(
      {
        fetchedAt: new Date().toISOString(),
        notes: {
          twitter: "Best-effort public reader; prefer official API for production.",
          youtube: "User-shared @business is Bloomberg Originals; used @CapitalmindHQ instead.",
          substack: "User-shared reboundcapital.substack.com is a different publication; used deepakshenoy.substack.com.",
        },
        creator,
        content,
      },
      null,
      2,
    ),
  );

  console.log(`Wrote ${content.length} items → ${outPath}`);
  console.log(
    Object.entries(
      content.reduce<Record<string, number>>((acc, c) => {
        acc[c.source] = (acc[c.source] ?? 0) + 1;
        return acc;
      }, {}),
    )
      .map(([k, v]) => `${k}:${v}`)
      .join("  "),
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
