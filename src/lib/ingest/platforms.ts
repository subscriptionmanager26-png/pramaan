import type { SourceKind } from "../types";
import {
  fetchPodcastRss,
  fetchSubstack,
  fetchTwitterTimeline,
  fetchYoutubeChannel,
  type ParsedItem,
} from "./feeds";
import type { PlatformFetchResult, PlatformSource } from "./types";

export type PlatformAdapter = {
  kind: SourceKind;
  /** What identity fields this platform needs when adding a creator */
  required: string[];
  fetch: (source: PlatformSource, limit: number) => Promise<ParsedItem[]>;
};

async function withRetry<T>(fn: () => Promise<T>, label: string, attempts = 3): Promise<T> {
  let last: unknown;
  for (let i = 1; i <= attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      last = err;
      if (i < attempts) await new Promise((r) => setTimeout(r, 700 * i));
      else break;
    }
  }
  throw last instanceof Error ? last : new Error(`${label} failed`);
}

const DEFAULT_LIMITS: Record<SourceKind, number> = {
  twitter: 5,
  substack: 6,
  youtube: 6,
  podcast: 4,
};

export const platforms: Record<SourceKind, PlatformAdapter> = {
  twitter: {
    kind: "twitter",
    required: ["handle"],
    async fetch(source, limit) {
      if (source.kind !== "twitter") throw new Error("twitter adapter mismatch");
      return withRetry(() => fetchTwitterTimeline(source.handle, limit), "twitter");
    },
  },
  substack: {
    kind: "substack",
    required: ["publicationUrl"],
    async fetch(source, limit) {
      if (source.kind !== "substack") throw new Error("substack adapter mismatch");
      return withRetry(() => fetchSubstack(source.publicationUrl, limit), "substack");
    },
  },
  youtube: {
    kind: "youtube",
    required: ["channelId"],
    async fetch(source, limit) {
      if (source.kind !== "youtube") throw new Error("youtube adapter mismatch");
      return withRetry(() => fetchYoutubeChannel(source.channelId, limit), "youtube");
    },
  },
  podcast: {
    kind: "podcast",
    required: ["rssUrl"],
    async fetch(source, limit) {
      if (source.kind !== "podcast") throw new Error("podcast adapter mismatch");
      return withRetry(() => fetchPodcastRss(source.rssUrl, limit), "podcast");
    },
  },
};

export function defaultLimit(kind: SourceKind) {
  return DEFAULT_LIMITS[kind];
}

/** Fetch one platform source; never throws — errors are returned on the result. */
export async function fetchPlatform(
  source: PlatformSource,
  limit = defaultLimit(source.kind),
): Promise<PlatformFetchResult> {
  const adapter = platforms[source.kind];
  try {
    const items = await adapter.fetch(source, limit);
    return { kind: source.kind, items };
  } catch (err) {
    return {
      kind: source.kind,
      items: [],
      error: err instanceof Error ? err.message : String(err),
    };
  }
}
