import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      { source: "/discover", destination: "/research", permanent: false },
      { source: "/portfolio", destination: "/news", permanent: false },
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
