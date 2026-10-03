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

/** Best-effort public Twitter timeline via Jina reader (no official API). */
export async function fetchTwitterViaJina(handle: string, limit = 6): Promise<ParsedItem[]> {
  const screen = handle.replace(/^@/, "");
  const markdown = await fetchText(`https://r.jina.ai/https://x.com/${screen}`);
  const items = parseTwitterJinaMarkdown(markdown, screen, limit);
  if (!items.length) {
    // Older Jina layouts sometimes used a flatter split — keep a soft fallback.
    const marker = `](https://x.com/${screen}) `;
    const chunks = markdown.split(marker).slice(1);
    for (const chunk of chunks) {
      const statusId = chunk.match(
        new RegExp(String.raw`https://(?:x\.com|twitter\.com)/${screen}/status/(\d+)`, "i"),
      )?.[1];
      let text = cleanTweetMarkdown(chunk.split(/\n\*\s+/)[0] ?? chunk);
      if (text.length < 20) continue;
      const title = text.length > 140 ? `${text.slice(0, 137)}…` : text;
      items.push({
        title,
        url: statusId ? `https://x.com/${screen}/status/${statusId}` : `https://x.com/${screen}`,
        summary: text.slice(0, 280),
        publishedAt: statusId ? twitterSnowflakeToIso(statusId) : new Date().toISOString(),
      });
      if (items.length >= limit) break;
    }
  }
  return items;
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
