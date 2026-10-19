import type { NextConfig } from "next";

const appOrigin = (process.env.POCKETEDGE_APP_ORIGIN || process.env.NEXT_PUBLIC_POCKETEDGE_APP_URL || "")
  .replace(/\/$/, "");
const proxyApp = process.env.POCKETEDGE_APP_PROXY === "1" && Boolean(appOrigin);

const nextConfig: NextConfig = {
  experimental: {
    // Route handlers + multipart uploads (PDFs up to agent limit).
    serverActions: { bodySizeLimit: "10mb" },
    proxyClientMaxBodySize: "10mb",
  },
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async rewrites() {
    if (!proxyApp) return [];
    // Phase B: serve legacy Vite app on same host for unmigrated product paths.
    // Test on pramaan.pocketedge.in before pointing www here. See docs/unification-roadmap.md.
    return [
      // Vite build output — required when serving proxied SPA HTML on www (etf-tracker, etc.).
      { source: "/assets/:path*", destination: `${appOrigin}/assets/:path*` },
      { source: "/logo.png", destination: `${appOrigin}/logo.png` },
      { source: "/manifest.webmanifest", destination: `${appOrigin}/manifest.webmanifest` },
      { source: "/sw.js", destination: `${appOrigin}/sw.js` },
      { source: "/data/:path*", destination: `${appOrigin}/data/:path*` },
      { source: "/feed", destination: `${appOrigin}/feed` },
      { source: "/feed/:path*", destination: `${appOrigin}/feed/:path*` },
      { source: "/ideas", destination: `${appOrigin}/ideas` },
      { source: "/ideas/:path*", destination: `${appOrigin}/ideas/:path*` },
      { source: "/activity", destination: `${appOrigin}/activity` },
      { source: "/settings", destination: `${appOrigin}/settings` },
      { source: "/stock/:path*", destination: `${appOrigin}/stock/:path*` },
      { source: "/etf/:path*", destination: `${appOrigin}/etf/:path*` },
      { source: "/fund/:path*", destination: `${appOrigin}/fund/:path*` },
      { source: "/index/:path*", destination: `${appOrigin}/index/:path*` },
      { source: "/commodity/:path*", destination: `${appOrigin}/commodity/:path*` },
      { source: "/etf-tracker", destination: `${appOrigin}/etf-tracker` },
      { source: "/etf-tracker/:path*", destination: `${appOrigin}/etf-tracker/:path*` },
      { source: "/gold-tracker", destination: `${appOrigin}/gold-tracker` },
      { source: "/gold-tracker/:path*", destination: `${appOrigin}/gold-tracker/:path*` },
      { source: "/markets", destination: `${appOrigin}/markets` },
      { source: "/markets/:path*", destination: `${appOrigin}/markets/:path*` },
      { source: "/explore", destination: `${appOrigin}/explore` },
      { source: "/explore/:path*", destination: `${appOrigin}/explore/:path*` },
      { source: "/resources/:path*", destination: `${appOrigin}/resources/:path*` },
      { source: "/business-model", destination: `${appOrigin}/business-model` },
      { source: "/business-model/:path*", destination: `${appOrigin}/business-model/:path*` },
      { source: "/@:handle", destination: `${appOrigin}/@:handle` },
      { source: "/@:handle/portfolio/:id", destination: `${appOrigin}/@:handle/portfolio/:id` },
      // Pramaan-owned /portfolio (AI reviews) wins over rewrite — more specific routes are defined in app/.
      { source: "/portfolio/holdings", destination: `${appOrigin}/portfolio` },
      { source: "/portfolio/holdings/:path*", destination: `${appOrigin}/portfolio/:path*` },
    ];
  },
  async redirects() {
    return [
      { source: "/discover", destination: "/research", permanent: false },
      { source: "/creators", destination: "/advisors", permanent: false },
      { source: "/creators/:slug", destination: "/advisors", permanent: false },
      { source: "/for-advisors", destination: "/advisors", permanent: false },
      { source: "/events", destination: "/news", permanent: false },
      { source: "/events/:slug", destination: "/news", permanent: false },
      { source: "/topics", destination: "/research", permanent: false },
      { source: "/topics/:slug", destination: "/research", permanent: false },
      { source: "/search", destination: "/news", permanent: false },
      { source: "/content/:slug", destination: "/research", permanent: false },
    ];
  },
};

export default nextConfig;
