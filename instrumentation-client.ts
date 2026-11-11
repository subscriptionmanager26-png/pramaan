import posthog from "posthog-js";

const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com";

function isLocalhost() {
  if (typeof window === "undefined") return true;
  const h = window.location.hostname;
  return h === "localhost" || h === "127.0.0.1" || h === "[::1]";
}

function isPocketEdgeHost() {
  if (typeof window === "undefined") return false;
  const h = window.location.hostname;
  return h === "pocketedge.in" || h.endsWith(".pocketedge.in");
}

if (token && !isLocalhost()) {
  posthog.init(token, {
    api_host: host,
    defaults: "2026-01-30",
    capture_pageview: "history_change",
    person_profiles: "identified_only",
    capture_exceptions: true,
    cross_subdomain_cookie: isPocketEdgeHost(),
    persistence: "localStorage+cookie",
  });
}
