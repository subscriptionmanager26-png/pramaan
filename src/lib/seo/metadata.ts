import type { Metadata } from "next";

import { siteUrl } from "@/lib/site-url";

export function truncateMetaDescription(text: string, max = 160): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= max) return normalized;
  const slice = normalized.slice(0, max - 1);
  const lastSpace = slice.lastIndexOf(" ");
  const cut = lastSpace > 80 ? slice.slice(0, lastSpace) : slice;
  return `${cut}…`;
}

/** Absolute URL for a site path (`/` → origin without trailing slash). */
export function absoluteUrl(path: string): string {
  const base = siteUrl();
  if (path === "/" || path === "") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageMetadataOptions = {
  /** Route path used for Open Graph url when canonical is overridden. */
  path: string;
  title?: string;
  description: string;
  /** When set (e.g. tool landing vs guide duplicate), used for `alternates.canonical`. */
  canonicalPath?: string;
  openGraph?: {
    type?: "website" | "article";
    publishedTime?: string;
    modifiedTime?: string;
    images?: string[];
  };
  robots?: Metadata["robots"];
};

export function pageMetadata(options: PageMetadataOptions): Metadata {
  const description = truncateMetaDescription(options.description);
  const canonical = absoluteUrl(options.canonicalPath ?? options.path);
  const ogPath = options.path === "/" ? "/" : options.path;

  return {
    ...(options.title ? { title: options.title } : {}),
    description,
    alternates: { canonical },
    openGraph: {
      type: options.openGraph?.type ?? "website",
      url: absoluteUrl(ogPath),
      ...(options.title ? { title: `${options.title} · PocketEdge` } : {}),
      description,
      ...(options.openGraph?.publishedTime
        ? { publishedTime: options.openGraph.publishedTime }
        : {}),
      ...(options.openGraph?.modifiedTime
        ? { modifiedTime: options.openGraph.modifiedTime }
        : {}),
      ...(options.openGraph?.images?.length
        ? { images: options.openGraph.images.map((url) => ({ url })) }
        : {}),
    },
    ...(options.robots ? { robots: options.robots } : {}),
  };
}

export const privatePageRobots: Metadata["robots"] = {
  index: false,
  follow: false,
};