import type { ContentKind, Creator, SourceKind } from "../types";
import type { ParsedItem } from "./feeds";

/** Platform connection for a creator — add fields as needed per platform. */
export type PlatformSource =
  | {
      kind: "twitter";
      handle: string; // @name or name
      url?: string;
    }
  | {
      kind: "substack";
      /** Publication root, e.g. https://deepakshenoy.substack.com */
      publicationUrl: string;
      handle?: string;
    }
  | {
      kind: "youtube";
      /** Required alphanumeric UC… id for feeds/videos.xml?channel_id= */
      channelId: string;
      handle?: string;
      url?: string;
    }
  | {
      kind: "podcast";
      /** Full RSS URL */
      rssUrl: string;
      handle?: string;
    };

export type IngestCreator = {
  profile: Creator;
  platforms: PlatformSource[];
  limits?: Partial<Record<SourceKind, number>>;
  notes?: Partial<Record<SourceKind, string>>;
};

export type IngestedContent = {
  slug: string;
  creatorSlug: string;
  kind: ContentKind;
  source: SourceKind;
  title: string;
  summary: string;
  topic: string;
  publishedAt: string;
  duration: string;
  url: string;
};

export type PlatformFetchResult = {
  kind: SourceKind;
  items: ParsedItem[];
  error?: string;
};

export type IngestResult = {
  creator: Creator;
  fetchedAt: string;
  platforms: PlatformFetchResult[];
  content: IngestedContent[];
  notes?: Partial<Record<SourceKind, string>>;
};
