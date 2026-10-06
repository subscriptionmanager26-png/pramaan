import { fetchText } from "../ingest/feeds";

export type BodyFetchResult = {
  bodyText: string | null;
  bodyHtml: string | null;
  fetchStatus: "ok" | "partial" | "unreadable" | "error";
  fetchError?: string;
  wordCount: number;
};

function stripHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function wordCount(text: string) {
  return text.split(/\s+/).filter(Boolean).length;
}

function finalize(text: string | null, html: string | null, fallbackSummary?: string | null): BodyFetchResult {
  const body = (text || "").trim();
  const words = wordCount(body);
  if (words >= 80) {
    return { bodyText: body, bodyHtml: html, fetchStatus: "ok", wordCount: words };
  }
  if (words >= 20) {
    return { bodyText: body, bodyHtml: html, fetchStatus: "partial", wordCount: words };
  }
  if (fallbackSummary && fallbackSummary.trim().length >= 20) {
    const s = fallbackSummary.trim();
    return {
      bodyText: s,
      bodyHtml: html,
      fetchStatus: "partial",
      wordCount: wordCount(s),
    };
  }
  if (body) {
    return { bodyText: body, bodyHtml: html, fetchStatus: "unreadable", wordCount: words };
  }
  return {
    bodyText: null,
    bodyHtml: html,
    fetchStatus: "unreadable",
    wordCount: 0,
  };
}

/** Best-effort body fetch. Substack paywalls / JS shells often yield partial/unreadable. */
export async function fetchContentBody(input: {
  platform: "twitter" | "substack";
  url: string;
  title?: string | null;
  summary?: string | null;
}): Promise<BodyFetchResult> {
  try {
    if (input.platform === "twitter") {
      // Prefer summary/title already scraped from timeline; hydrate lightly via FxTwitter if possible.
      const statusId = input.url.match(/status\/(\d+)/)?.[1];
      if (statusId) {
        const res = await fetch(`https://api.fxtwitter.com/status/${statusId}`, {
          headers: { "user-agent": "PramaanAfIngest/0.1", accept: "application/json" },
        });
        if (res.ok) {
          const data = (await res.json()) as { tweet?: { text?: string } };
          const text = data.tweet?.text?.trim();
          if (text) return finalize(text, null, input.summary);
        }
      }
      return finalize(
        [input.title, input.summary].filter(Boolean).join("\n\n"),
        null,
        input.summary,
      );
    }

    // Substack: try post page HTML, fall back to summary from RSS.
    const html = await fetchText(input.url);
    const article =
      html.match(/<article[\s\S]*?<\/article>/i)?.[0] ||
      html.match(/<div[^>]+class="[^"]*body[^"]*"[\s\S]*?<\/div>/i)?.[0] ||
      "";
    const text = stripHtml(article || html).slice(0, 20000);
    return finalize(text, article ? article.slice(0, 200000) : null, input.summary);
  } catch (err) {
    const fallback = [input.title, input.summary].filter(Boolean).join("\n\n");
    if (fallback.trim().length >= 20) {
      return {
        bodyText: fallback.trim(),
        bodyHtml: null,
        fetchStatus: "partial",
        fetchError: err instanceof Error ? err.message : String(err),
        wordCount: wordCount(fallback),
      };
    }
    return {
      bodyText: null,
      bodyHtml: null,
      fetchStatus: "error",
      fetchError: err instanceof Error ? err.message : String(err),
      wordCount: 0,
    };
  }
}
