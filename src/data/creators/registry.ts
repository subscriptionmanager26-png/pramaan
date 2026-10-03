import type { IngestCreator } from "../../lib/ingest/types";

/**
 * Creator registry for ingest.
 * To add someone later: append an entry with the right platform fields.
 *
 * Required per platform:
 * - twitter:  handle
 * - substack: publicationUrl
 * - youtube:  channelId (UC…)
 * - podcast:  rssUrl
 */
export const ingestRegistry: IngestCreator[] = [
  {
    profile: {
      slug: "deepak-shenoy",
      name: "Deepak Shenoy",
      city: "Bengaluru",
      headline: "Founder of Capitalmind. Writes plainly about Indian markets, funds, and regulation.",
      bio: "CEO of Capitalmind Mutual Fund and founder of Capitalmind. Public writing and podcasts cover Indian markets, mutual funds, and the plumbing of finance. Views in personal posts are his own.",
      sebi: { type: "RA", number: "INH000014003", validTill: "2027-12-31" },
      specialties: ["Markets", "Mutual funds", "Fixed income", "Taxation"],
      sources: [],
      initials: "DS",
      color: "#0C4A6E",
    },
    platforms: [
      { kind: "twitter", handle: "deepakshenoy" },
      { kind: "substack", publicationUrl: "https://deepakshenoy.substack.com", handle: "deepakshenoy" },
      {
        kind: "youtube",
        channelId: "UCM9JulVK4nShhpiMWlEuIGA",
        handle: "@CapitalmindHQ",
        url: "https://www.youtube.com/@CapitalmindHQ",
      },
      {
        kind: "podcast",
        rssUrl: "https://capitalmind.libsyn.com/rss",
        handle: "Capitalmind with Deepak & Shray",
      },
    ],
    notes: {
      twitter: "Best-effort public reader; prefer official API for production.",
      youtube: "Tracked by channel id UCM9JulVK4nShhpiMWlEuIGA (@CapitalmindHQ).",
      substack: "Official publication RSS at deepakshenoy.substack.com/feed.",
    },
  },
];

export function getIngestCreator(slug: string) {
  return ingestRegistry.find((c) => c.profile.slug === slug);
}
