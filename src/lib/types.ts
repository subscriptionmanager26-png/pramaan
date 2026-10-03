export type SourceKind = "twitter" | "substack" | "youtube" | "podcast";

export type SebiType = "RIA" | "RA" | "PMS";

export type ContentKind = "video" | "newsletter" | "thread" | "podcast";

export type EventFormat = "webinar" | "ama" | "workshop" | "live";

export type SourceLink = {
  kind: SourceKind;
  handle: string;
  url: string;
  /** YouTube only — alphanumeric `UC…` id for `feeds/videos.xml?channel_id=` */
  channelId?: string;
};

export type Creator = {
  slug: string;
  name: string;
  city: string;
  headline: string;
  bio: string;
  sebi: {
    type: SebiType;
    number: string;
    validTill: string;
  };
  specialties: string[];
  sources: SourceLink[];
  initials: string;
  color: string;
};

export type ContentItem = {
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
  featured?: boolean;
};

export type EventItem = {
  slug: string;
  creatorSlug: string;
  title: string;
  summary: string;
  format: EventFormat;
  startsAt: string;
  timezone: string;
  location: string;
  registerUrl: string;
  topic: string;
  seats?: string;
};

export type Topic = {
  slug: string;
  name: string;
  blurb: string;
};
