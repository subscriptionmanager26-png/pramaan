import { XMLParser } from "fast-xml-parser";

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  textNodeName: "#text",
  trimValues: true,
});

export type ParsedItem = {
  title: string;
  url: string;
  summary: string;
  publishedAt: string;
  duration?: string;
};

function asArray<T>(value: T | T[] | undefined | null): T[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function textOf(value: unknown): string {
  if (value == null) return "";
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  if (typeof value === "object" && value !== null) {
    const obj = value as Record<string, unknown>;
    if ("#text" in obj) return textOf(obj["#text"]);
    if ("@_href" in obj) return textOf(obj["@_href"]);
  }
  return "";
}

function stripHtml(html: string) {
  return html
    .replace(/<!\[CDATA\[|\]\]>/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#\d+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function toIso(date: string) {
  const d = new Date(date);
  return Number.isNaN(+d) ? new Date().toISOString() : d.toISOString();
}

export async function fetchText(url: string) {
  const res = await fetch(url, {
    headers: {
      "user-agent": "PramaanIngest/0.1 (+https://localhost; research aggregator)",
      accept: "application/rss+xml, application/atom+xml, application/xml, text/xml, text/html, */*",
    },
  });
  if (!res.ok) throw new Error(`Fetch failed ${res.status} for ${url}`);
  return res.text();
}

/** Substack / generic RSS 2.0 */
export function parseRss(xml: string, limit = 8): ParsedItem[] {
  const doc = parser.parse(xml);
  const channel = doc?.rss?.channel ?? doc?.channel;
  const items = asArray(channel?.item).slice(0, limit);
  return items.map((item) => {
    const title = stripHtml(textOf(item.title));
    const url = textOf(item.link) || textOf(item.guid);
    const summary = stripHtml(textOf(item.description) || textOf(item["content:encoded"])).slice(0, 280);
    const publishedAt = toIso(textOf(item.pubDate) || textOf(item["dc:date"]));
    const duration = textOf(item["itunes:duration"]) || undefined;
    return { title, url: url.replace(/^<!\[CDATA\[|\]\]>$/g, "").trim(), summary, publishedAt, duration };
  }).filter((i) => i.title && i.url);
}

/** YouTube Atom feed */
export function parseAtom(xml: string, limit = 8): ParsedItem[] {
  const doc = parser.parse(xml);
  const entries = asArray(doc?.feed?.entry).slice(0, limit);
  return entries.map((entry) => {
    const title = stripHtml(textOf(entry.title));
    const links = asArray(entry.link);
    const alternate = links.find((l) => !l["@_rel"] || l["@_rel"] === "alternate");
    const url = textOf(alternate?.["@_href"] ?? entry.link);
    const summary = stripHtml(textOf(entry["media:group"]?.["media:description"] || entry.summary || entry.content)).slice(0, 280);
    const publishedAt = toIso(textOf(entry.published) || textOf(entry.updated));
    return { title, url, summary, publishedAt };
  }).filter((i) => i.title && i.url);
}

export async function fetchSubstack(publicationUrl: string, limit = 8) {
  const base = publicationUrl.replace(/\/$/, "");
  const xml = await fetchText(`${base}/feed`);
  return parseRss(xml, limit);
}

export async function fetchYoutubeChannel(channelId: string, limit = 8) {
  // Official YouTube Atom/RSS — requires the alphanumeric channel id (UC…)
  // https://www.youtube.com/feeds/videos.xml?channel_id=UC…
  if (!/^UC[\w-]{20,}$/.test(channelId)) {
    throw new Error(`Invalid YouTube channel id (expected UC…): ${channelId}`);
  }
  const xml = await fetchText(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`);
  return parseAtom(xml, limit);
}

/** Prefer configuring `channelId` on the source — HTML scrape is a fallback only. */
export async function resolveYoutubeChannelId(handleOrUrl: string) {
  const url = handleOrUrl.startsWith("http")
    ? handleOrUrl
    : `https://www.youtube.com/@${handleOrUrl.replace(/^@/, "")}`;
  const html = await fetchText(url);
  const match =
    html.match(/"channelId":"(UC[\w-]+)"/) ||
    html.match(/"externalId":"(UC[\w-]+)"/) ||
    html.match(/browse_id=(UC[\w-]+)/);
  if (!match) throw new Error(`Could not resolve YouTube channel id for ${url}`);
  return match[1];
}

export async function fetchPodcastRss(rssUrl: string, limit = 6) {
  const xml = await fetchText(rssUrl);
  return parseRss(xml, limit);
}

/** Twitter snowflake → ISO time (ms since Twitter epoch). */
export function twitterSnowflakeToIso(statusId: string) {
  try {
    const id = BigInt(statusId);
    const ms = Number((id >> BigInt(22)) + BigInt("1288834974657"));
    if (!Number.isFinite(ms) || ms < 1_200_000_000_000) return new Date().toISOString();
    return new Date(ms).toISOString();
  } catch {
    return new Date().toISOString();
  }
}

function cleanTweetMarkdown(raw: string) {
  return raw
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Parse Jina markdown of an x.com profile into tweet items.
 * Prefers per-status URLs and snowflake timestamps when media/status links are present.
 */
export function parseTwitterJinaMarkdown(
  markdown: string,
  handle: string,
  limit = 6,
): ParsedItem[] {
  const screen = handle.replace(/^@/, "");
  // Avatar → profile (not /photo or /header_photo). Covers both list bullets and pinned rows.
  const avatarLink = new RegExp(
    String.raw`\[!\[[^\]]*\]\([^)]+\)\]\(https://(?:x\.com|twitter\.com)/${screen}\)(?!/)`,
    "gi",
  );
  const chunks = markdown.split(avatarLink).slice(1);
  const items: ParsedItem[] = [];
  const seen = new Set<string>();

  for (const chunk of chunks) {
    // Next tweet avatar or section break ends this body
    const body = chunk.split(avatarLink)[0] ?? chunk;
    const ownIds = [
      ...body.matchAll(
        new RegExp(
          String.raw`https://(?:x\.com|twitter\.com)/${screen}/status/(\d+)`,
          "gi",
        ),
      ),
    ].map((m) => m[1]);
    const statusId = ownIds[0];

    let text = cleanTweetMarkdown(body);
    // Image-only posts: keep only if we have a real status URL
    if (!text && statusId) text = "Photo / media";
    if (text.length < 20 && !statusId) continue;
    if (text === "Photo / media") {
      // still useful as a linkable post
    } else if (text.length < 8) {
      continue;
    }

    const key = statusId ?? text.slice(0, 96).toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);

    const title = text.length > 140 ? `${text.slice(0, 137)}…` : text;
    items.push({
      title,
      url: statusId ? `https://x.com/${screen}/status/${statusId}` : `https://x.com/${screen}`,
      summary: text.slice(0, 280),
      publishedAt: statusId ? twitterSnowflakeToIso(statusId) : new Date().toISOString(),
    });
    if (items.length >= limit) break;
  }

  return items;
}

/** Public web guest bearer used by x.com (not an app key). Rotates rarely. */
const TWITTER_GUEST_BEARER =
  "AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA";

/** GraphQL operation IDs change when X ships client updates — try newest first. */
const USER_BY_SCREEN_NAME_IDS = ["sLVLhk0bGj3MVFEKTdax1w", "G3KfjAbKgPskNA9kQsEN9A"];
const USER_TWEETS_IDS = ["E3opETHurmVJflFsUBVuUQ", "VHE91AfJ6JLTa7VTJdJLaA", "HlThdIu6mGbq5WBfJnG0JQ"];

const USER_BY_SCREEN_NAME_FEATURES = {
  hidden_profile_subscriptions_enabled: true,
  rweb_tipjar_consumption_enabled: true,
  responsive_web_graphql_exclude_directive_enabled: true,
  verified_phone_label_enabled: false,
  subscriptions_verification_info_is_identity_verified_enabled: true,
  subscriptions_verification_info_verified_since_enabled: true,
  highlights_tweets_tab_ui_enabled: true,
  responsive_web_twitter_article_notes_tab_enabled: true,
  subscriptions_feature_can_gift_premium: true,
  creator_subscriptions_tweet_preview_api_enabled: true,
  responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
  responsive_web_graphql_timeline_navigation_enabled: true,
} as const;

const USER_TWEETS_FEATURES = {
  rweb_tipjar_consumption_enabled: true,
  responsive_web_graphql_exclude_directive_enabled: true,
  verified_phone_label_enabled: false,
  creator_subscriptions_tweet_preview_api_enabled: true,
  responsive_web_graphql_timeline_navigation_enabled: true,
  responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
  communities_web_enable_tweet_community_results_fetch: true,
  c9s_tweet_anatomy_moderator_badge_enabled: true,
  articles_preview_enabled: true,
  responsive_web_edit_tweet_api_enabled: true,
  graphql_is_translatable_rweb_tweet_is_translatable_enabled: true,
  view_counts_everywhere_api_enabled: true,
  longform_notetweets_consumption_enabled: true,
  responsive_web_twitter_article_tweet_consumption_enabled: true,
  tweet_awards_web_tipping_enabled: false,
  creator_subscriptions_quote_tweet_preview_enabled: false,
  freedom_of_speech_not_reach_fetch_enabled: true,
  standardized_nudges_misinfo: true,
  tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: true,
  rweb_video_timestamps_enabled: true,
  longform_notetweets_rich_text_read_enabled: true,
  longform_notetweets_inline_media_enabled: true,
  responsive_web_enhance_cards_enabled: false,
} as const;

type TwitterGraphqlTweet = {
  rest_id?: string;
  legacy?: {
    id_str?: string;
    full_text?: string;
    created_at?: string;
    retweeted_status_result?: unknown;
  };
  core?: {
    user_results?: {
      result?: {
        legacy?: { screen_name?: string };
      };
    };
  };
};

function decodeTweetText(text: string) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function twitterCreatedToIso(createdAt?: string, statusId?: string) {
  if (createdAt) {
    const ms = Date.parse(createdAt);
    if (!Number.isNaN(ms)) return new Date(ms).toISOString();
  }
  return statusId ? twitterSnowflakeToIso(statusId) : new Date().toISOString();
}

async function twitterGuestToken() {
  const res = await fetch("https://api.twitter.com/1.1/guest/activate.json", {
    method: "POST",
    headers: {
      authorization: `Bearer ${TWITTER_GUEST_BEARER}`,
      "user-agent": "Mozilla/5.0 (compatible; PramaanIngest/0.1)",
    },
  });
  if (!res.ok) throw new Error(`Twitter guest token failed ${res.status}`);
  const data = (await res.json()) as { guest_token?: string };
  if (!data.guest_token) throw new Error("Twitter guest token missing");
  return data.guest_token;
}

async function twitterGraphql<T>(
  operation: string,
  queryIds: string[],
  variables: Record<string, unknown>,
  features: Record<string, boolean>,
  guestToken: string,
): Promise<T> {
  let lastStatus = 0;
  for (const queryId of queryIds) {
    const url = new URL(`https://twitter.com/i/api/graphql/${queryId}/${operation}`);
    url.searchParams.set("variables", JSON.stringify(variables));
    url.searchParams.set("features", JSON.stringify(features));
    const res = await fetch(url, {
      headers: {
        authorization: `Bearer ${TWITTER_GUEST_BEARER}`,
        "x-guest-token": guestToken,
        "x-twitter-active-user": "yes",
        "x-twitter-client-language": "en",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });
    lastStatus = res.status;
    if (res.status === 404) continue;
    if (!res.ok) throw new Error(`Twitter GraphQL ${operation} failed ${res.status}`);
    return (await res.json()) as T;
  }
  throw new Error(`Twitter GraphQL ${operation} query not found (last ${lastStatus})`);
}

function unwrapTweetResult(result: unknown): TwitterGraphqlTweet | null {
  if (!result || typeof result !== "object") return null;
  const row = result as Record<string, unknown>;
  if (row.__typename === "TweetWithVisibilityResults" && row.tweet) {
    return row.tweet as TwitterGraphqlTweet;
  }
  if (row.legacy || row.rest_id) return row as TwitterGraphqlTweet;
  return null;
}

function collectTimelineEntries(node: unknown, out: unknown[] = []): unknown[] {
  if (!node || typeof node !== "object") return out;
  if (Array.isArray(node)) {
    for (const item of node) collectTimelineEntries(item, out);
    return out;
  }
  const obj = node as Record<string, unknown>;
  if (Array.isArray(obj.entries)) out.push(...obj.entries);
  if (obj.entry) out.push(obj.entry);
  for (const value of Object.values(obj)) {
    if (value && typeof value === "object") collectTimelineEntries(value, out);
  }
  return out;
}

/**
 * Best-effort public Twitter timeline via x.com guest GraphQL (no app key / Monid).
 * Query IDs rotate; we try a short fallback list.
 */
export async function fetchTwitterViaGuest(handle: string, limit = 6): Promise<ParsedItem[]> {
  const screen = handle.replace(/^@/, "");
  const guestToken = await twitterGuestToken();

  const userPayload = await twitterGraphql<{
    data?: { user?: { result?: { rest_id?: string } } };
  }>(
    "UserByScreenName",
    USER_BY_SCREEN_NAME_IDS,
    { screen_name: screen, withSafetyModeUserFields: true },
    USER_BY_SCREEN_NAME_FEATURES,
    guestToken,
  );
  const userId = userPayload.data?.user?.result?.rest_id;
  if (!userId) throw new Error(`Twitter user not found: @${screen}`);

  const timelinePayload = await twitterGraphql<unknown>(
    "UserTweets",
    USER_TWEETS_IDS,
    {
      userId,
      count: Math.max(limit * 2, 12),
      includePromotedContent: false,
      withQuickPromoteEligibilityTweetFields: true,
      withVoice: true,
      withV2Timeline: true,
    },
    USER_TWEETS_FEATURES,
    guestToken,
  );

  const entries = collectTimelineEntries(timelinePayload);
  const items: ParsedItem[] = [];
  const seen = new Set<string>();

  for (const entry of entries) {
    if (!entry || typeof entry !== "object") continue;
    const content = (entry as { content?: Record<string, unknown> }).content;
    const itemContent = (content?.itemContent ?? content) as Record<string, unknown> | undefined;
    const tweetResults = itemContent?.tweet_results as { result?: unknown } | undefined;
    const tweet = unwrapTweetResult(tweetResults?.result);
    const legacy = tweet?.legacy;
    if (!legacy?.full_text) continue;
    if (legacy.retweeted_status_result) continue;

    const statusId = legacy.id_str || tweet?.rest_id;
    if (!statusId || seen.has(statusId)) continue;
    seen.add(statusId);

    const author =
      tweet?.core?.user_results?.result?.legacy?.screen_name?.replace(/^@/, "") || screen;
    const text = decodeTweetText(legacy.full_text);
    if (text.length < 8) continue;

    const title = text.length > 140 ? `${text.slice(0, 137)}…` : text;
    items.push({
      title,
      url: `https://x.com/${author}/status/${statusId}`,
      summary: text.slice(0, 280),
      publishedAt: twitterCreatedToIso(legacy.created_at, statusId),
    });
    if (items.length >= limit) break;
  }

  return items;
}

/** @deprecated Prefer fetchTwitterViaGuest — Jina now 403s from many hosts. */
export async function fetchTwitterViaJina(handle: string, limit = 6): Promise<ParsedItem[]> {
  return fetchTwitterViaGuest(handle, limit);
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72);
}

export function guessTopic(title: string, summary: string) {
  const t = `${title} ${summary}`.toLowerCase();
  if (/ipo|promoter/.test(t)) return "IPOs";
  if (/tax|sebi|brokerage|nbFc|nbfc|rbi|auction/.test(t)) return "Taxation";
  if (/mutual fund|flexi|sip|fund|mf\b/.test(t)) return "Mutual funds";
  if (/debt|bond|treasury|fixed income|gold/.test(t)) return "Fixed income";
  if (/nri|retire|epf|nps/.test(t)) return "Retirement";
  if (/smallcap|stock|market|gdp|rupee|india|invest/.test(t)) return "Markets";
  return "Personal finance";
}

export function readingMinutes(summary: string) {
  const words = summary.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 180) || 3)} min read`;
}
