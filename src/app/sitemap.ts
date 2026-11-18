import type { MetadataRoute } from "next";

import { listArticles } from "@/lib/articles/catalog";
import { sebiAdvisors } from "@/lib/advisors";
import { deskNotes } from "@/lib/desk-notes";
import { guides } from "@/lib/guides";
import { DISCLOSURE_SECTIONS } from "@/lib/legal/disclosures";
import { researchArticles } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo/metadata";

function entry(
  path: string,
  lastModified?: string | Date,
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] = "weekly",
  priority?: number,
): MetadataRoute.Sitemap[0] {
  return {
    url: absoluteUrl(path),
    lastModified: lastModified ? new Date(lastModified) : new Date(),
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    entry("/", undefined, "daily", 1),
    entry("/news", undefined, "hourly", 0.9),
    entry("/research", undefined, "daily", 0.9),
    entry("/advisors", undefined, "weekly", 0.7),
    entry("/resources", undefined, "weekly", 0.8),
    entry("/disclosures", undefined, "yearly", 0.3),
    entry("/etf-tracker", undefined, "daily", 0.85),
    entry("/gold-tracker", undefined, "daily", 0.75),
    entry("/market-holidays", undefined, "monthly", 0.6),
    entry("/resources/mf-screener", undefined, "weekly", 0.7),
    entry("/portfolio", undefined, "weekly", 0.5),
  ];

  const news = deskNotes.map((note) =>
    entry(`/news/${note.slug}`, note.publishedAt, "weekly", 0.8),
  );

  const memoSlugs = new Set(listArticles().map((a) => a.slug));
  const researchSlugs = new Set([
    ...memoSlugs,
    ...researchArticles.map((a) => a.slug),
  ]);

  const research = [...researchSlugs].map((slug) => {
    const memo = listArticles().find((a) => a.slug === slug);
    const note = researchArticles.find((a) => a.slug === slug);
    const published = memo?.publishedAt ?? note?.publishedAt;
    return entry(`/research/${slug}`, published, "monthly", memo ? 0.75 : 0.65);
  });

  const guidePages = guides
    .filter((g) => g.kind === "guide")
    .map((g) => entry(`/guides/${g.slug}`, g.publishedAt, "monthly", 0.7));

  const advisors = sebiAdvisors.map((a) => entry(`/advisors/${a.slug}`, undefined, "monthly", 0.55));

  const disclosures = DISCLOSURE_SECTIONS.map((section) =>
    entry(`/disclosures/${section}`, undefined, "yearly", 0.25),
  );

  return [...staticPages, ...news, ...research, ...guidePages, ...advisors, ...disclosures];
}