import type { ContentKind, EventFormat, SebiType, SourceKind } from "./types";

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(iso));
}

export function formatDay(iso: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
  }).format(new Date(iso));
}

export function formatMonth(iso: string) {
  return new Intl.DateTimeFormat("en-IN", {
    month: "short",
  }).format(new Date(iso)).toUpperCase();
}

export function formatWeekday(iso: string) {
  return new Intl.DateTimeFormat("en-IN", {
    weekday: "short",
  }).format(new Date(iso));
}

export function formatTime(iso: string) {
  return new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  }).format(new Date(iso));
}

export function formatRelative(iso: string, now = new Date("2026-10-05T12:00:00+05:30")) {
  const then = new Date(iso);
  const diffMs = now.getTime() - then.getTime();
  const diffMin = Math.round(diffMs / 60000);
  if (diffMin < 0) return formatDate(iso);
  if (diffMin < 60) return `${Math.max(1, diffMin)}m ago`;
  const diffHr = Math.round(diffMin / 60);
  if (diffHr < 24) return `${diffHr}h ago`;
  const diffDay = Math.round(diffHr / 24);
  if (diffDay === 1) return "Yesterday";
  if (diffDay < 14) return `${diffDay}d ago`;
  return formatDate(iso);
}

export function sebiLabel(type: SebiType) {
  if (type === "RIA") return "Registered Investment Adviser";
  if (type === "RA") return "Research Analyst";
  return "Portfolio Manager";
}

export function sebiShort(type: SebiType) {
  if (type === "RIA") return "RIA";
  if (type === "RA") return "RA";
  return "PMS";
}

export function sourceLabel(kind: SourceKind) {
  if (kind === "youtube") return "YouTube";
  if (kind === "substack") return "Substack";
  if (kind === "twitter") return "Twitter";
  return "Podcast";
}

export function sourceCta(kind: SourceKind) {
  if (kind === "youtube") return "Watch on YouTube";
  if (kind === "substack") return "Read on Substack";
  if (kind === "twitter") return "Open on Twitter";
  return "Listen to episode";
}

export function kindLabel(kind: ContentKind) {
  if (kind === "video") return "Video";
  if (kind === "newsletter") return "Newsletter";
  if (kind === "thread") return "Thread";
  return "Podcast";
}

/** Unfurl-style headline: title if present, else first 100 chars of body. Never the full post. */
export function previewHeadline(title: string, body = "") {
  const t = title.replace(/\s+/g, " ").trim();
  const b = body.replace(/\s+/g, " ").trim();
  if (t) return t.length > 100 ? `${t.slice(0, 100).trimEnd()}…` : t;
  if (!b) return "Untitled";
  return b.length > 100 ? `${b.slice(0, 100).trimEnd()}…` : b;
}

export function previewSnippet(text: string, max = 100) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (!clean) return "";
  return clean.length > max ? `${clean.slice(0, max).trimEnd()}…` : clean;
}

export function youtubeThumb(url: string) {
  const m = url.match(/(?:v=|youtu\.be\/|shorts\/)([\w-]{6,})/);
  return m ? `https://i.ytimg.com/vi/${m[1]}/hqdefault.jpg` : null;
}

export function eventSignupCta(location: string) {
  const place = location.toLowerCase();
  if (place.includes("zoom")) return "Sign up on Zoom";
  if (place.includes("youtube")) return "Sign up on YouTube";
  if (place.includes("twitter") || place === "x live") return "Sign up on Twitter";
  if (place.includes("google")) return "Sign up on Google Meet";
  if (place.includes("substack")) return "Sign up on Substack";
  return "Sign up with the host";
}

export function formatLabel(format: EventFormat) {
  if (format === "webinar") return "Webinar";
  if (format === "ama") return "AMA";
  if (format === "workshop") return "Workshop";
  return "Live";
}

export function topicSlug(name: string) {
  return name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-");
}
