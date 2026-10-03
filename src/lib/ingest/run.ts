import type { ContentKind, Creator, SourceKind, SourceLink } from "../types";
import { guessTopic, readingMinutes, slugify } from "./feeds";
import { defaultLimit, fetchPlatform } from "./platforms";
import type { IngestCreator, IngestedContent, IngestResult, PlatformSource } from "./types";

const KIND_BY_SOURCE: Record<SourceKind, ContentKind> = {
  twitter: "thread",
  substack: "newsletter",
  youtube: "video",
  podcast: "podcast",
};

function toSourceLinks(platforms: PlatformSource[]): SourceLink[] {
  return platforms.map((p) => {
    if (p.kind === "twitter") {
      const handle = p.handle.startsWith("@") ? p.handle : `@${p.handle}`;
      return {
        kind: "twitter",
        handle,
        url: p.url ?? `https://x.com/${handle.replace(/^@/, "")}`,
      };
    }
    if (p.kind === "substack") {
      return {
        kind: "substack",
        handle: p.handle ?? new URL(p.publicationUrl).hostname.split(".")[0] ?? "substack",
        url: p.publicationUrl,
      };
    }
    if (p.kind === "youtube") {
      return {
        kind: "youtube",
        handle: p.handle ?? p.channelId,
        url: p.url ?? `https://www.youtube.com/channel/${p.channelId}`,
        channelId: p.channelId,
      };
    }
    return {
      kind: "podcast",
      handle: p.handle ?? "Podcast",
      url: p.rssUrl.replace(/\/rss\/?$/, "") || p.rssUrl,
    };
  });
}

function mapItems(
  creatorSlug: string,
  source: SourceKind,
  items: IngestResult["platforms"][0]["items"],
): IngestedContent[] {
  return items.map((item, i) => {
    const title = item.title.replace(/&amp;/g, "&");
    const summary = item.summary || title;
    const statusId = item.url.match(/\/status\/(\d+)/)?.[1];
    // Include source so cross-posted podcast/YouTube titles don't collide.
    const baseSlug =
      source === "twitter"
        ? statusId
          ? `${creatorSlug}-twitter-${statusId}`
          : `${creatorSlug}-twitter-${i + 1}-${slugify(title).slice(0, 40)}`
        : `${creatorSlug}-${source}-${slugify(title)}`;

    let duration = "Post";
    if (source === "substack") duration = readingMinutes(summary);
    if (source === "youtube") duration = "Video";
    if (source === "podcast") duration = item.duration || "Podcast";

    return {
      slug: baseSlug,
      creatorSlug,
      kind: KIND_BY_SOURCE[source],
      source,
      title,
      summary,
      topic: guessTopic(title, summary),
      publishedAt: item.publishedAt,
      duration,
      url: item.url,
    };
  });
}

/** Ensure profile.sources mirrors platforms config. */
export function withLinkedSources(creator: IngestCreator): Creator {
  return {
    ...creator.profile,
    sources: toSourceLinks(creator.platforms),
  };
}

/** Run all platform adapters for one creator. Failures on one platform don't block others. */
export async function ingestCreator(creator: IngestCreator): Promise<IngestResult> {
  const profile = withLinkedSources(creator);
  const results = await Promise.all(
    creator.platforms.map((source) =>
      fetchPlatform(source, creator.limits?.[source.kind] ?? defaultLimit(source.kind)),
    ),
  );

  const content = results
    .flatMap((r) => mapItems(profile.slug, r.kind, r.items))
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));

  return {
    creator: profile,
    fetchedAt: new Date().toISOString(),
    platforms: results,
    content,
    notes: creator.notes,
  };
}

export async function ingestCreators(creators: IngestCreator[]): Promise<IngestResult[]> {
  const out: IngestResult[] = [];
  for (const creator of creators) {
    out.push(await ingestCreator(creator));
  }
  return out;
}
