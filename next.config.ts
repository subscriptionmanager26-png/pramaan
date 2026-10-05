import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      { source: "/news", destination: "/research", permanent: false },
      { source: "/advisors", destination: "/research", permanent: false },
      { source: "/advisors/:slug", destination: "/research", permanent: false },
      { source: "/guides", destination: "/research", permanent: false },
      { source: "/guides/:slug", destination: "/research", permanent: false },
      { source: "/discover", destination: "/research", permanent: false },
      { source: "/portfolio", destination: "/research", permanent: false },
      { source: "/creators", destination: "/research", permanent: false },
      { source: "/creators/:slug", destination: "/research", permanent: false },
      { source: "/for-advisors", destination: "/research", permanent: false },
      { source: "/events", destination: "/research", permanent: false },
      { source: "/events/:slug", destination: "/research", permanent: false },
      { source: "/topics", destination: "/research", permanent: false },
      { source: "/topics/:slug", destination: "/research", permanent: false },
      { source: "/search", destination: "/research", permanent: false },
      { source: "/content/:slug", destination: "/research", permanent: false },
    ];
  },
};

export default nextConfig;
