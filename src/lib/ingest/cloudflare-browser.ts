/**
 * Cloudflare Browser Rendering REST API (markdown/content).
 * Used for Twitter syndication embed timelines when guest GraphQL fails.
 *
 * Env: CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN (Browser Rendering / Browser Run edit).
 */

export type CloudflareBrowserLoadOptions = {
  waitUntil?: "load" | "domcontentloaded" | "networkidle0" | "networkidle2";
  waitForTimeoutMs?: number;
};

type CfApiResponse<T> = {
  success: boolean;
  result?: T;
  errors?: Array<{ code?: number; message?: string }>;
};

function accountId() {
  const id = process.env.CLOUDFLARE_ACCOUNT_ID?.trim();
  if (!id) throw new Error("Missing CLOUDFLARE_ACCOUNT_ID");
  return id;
}

function apiToken() {
  const token =
    process.env.CLOUDFLARE_API_TOKEN?.trim() || process.env.CLOUDFLARE_API_KEY?.trim();
  if (!token) throw new Error("Missing CLOUDFLARE_API_TOKEN");
  return token;
}

export function cloudflareBrowserConfigured() {
  return Boolean(
    process.env.CLOUDFLARE_ACCOUNT_ID?.trim() &&
      (process.env.CLOUDFLARE_API_TOKEN?.trim() || process.env.CLOUDFLARE_API_KEY?.trim()),
  );
}

async function browserRenderingPost<T>(
  endpoint: "markdown" | "content",
  body: Record<string, unknown>,
): Promise<T> {
  const url = `https://api.cloudflare.com/client/v4/accounts/${accountId()}/browser-rendering/${endpoint}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiToken()}`,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  const payload = (await res.json().catch(() => ({}))) as CfApiResponse<T>;
  if (!res.ok || !payload.success) {
    const msg =
      payload.errors?.map((e) => e.message).filter(Boolean).join("; ") ||
      `HTTP ${res.status}`;
    throw new Error(`Cloudflare browser-rendering/${endpoint}: ${msg}`);
  }
  if (payload.result === undefined) {
    throw new Error(`Cloudflare browser-rendering/${endpoint}: empty result`);
  }
  return payload.result;
}

export async function fetchRenderedMarkdown(
  pageUrl: string,
  options: CloudflareBrowserLoadOptions = {},
): Promise<string> {
  const waitForTimeout = options.waitForTimeoutMs ?? 12_000;
  const waitUntil = options.waitUntil ?? "domcontentloaded";
  return browserRenderingPost<string>("markdown", {
    url: pageUrl,
    gotoOptions: { waitUntil },
    waitForTimeout,
  });
}

/** Public embed timeline (no login); rendered via Cloudflare browser. */
export function twitterSyndicationProfileUrl(handle: string) {
  const screen = handle.replace(/^@/, "");
  return `https://syndication.twitter.com/srv/timeline-profile/screen-name/${encodeURIComponent(screen)}`;
}

let lastBrowserCallAt = 0;

/** Minimum spacing between Browser Rendering calls (account rate limits). */
export async function throttleCloudflareBrowser() {
  const minGap = Number(process.env.CF_BROWSER_MIN_INTERVAL_MS ?? 2500);
  const now = Date.now();
  const wait = lastBrowserCallAt + minGap - now;
  if (wait > 0) await new Promise((r) => setTimeout(r, wait));
  lastBrowserCallAt = Date.now();
}
