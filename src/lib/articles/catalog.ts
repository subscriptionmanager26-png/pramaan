import type { Article, ArticleSummary } from "./types";
import { deepCatalogMeta } from "./deep-catalog-meta";
import { loadMemoBlocks } from "./load-memo-blocks";
import { getMemoTaxonomy } from "./taxonomy";

function enrichMeta(entry: (typeof deepCatalogMeta)[number]): ArticleSummary {
  const tax = getMemoTaxonomy(entry.slug);
  return {
    ...entry,
    company: tax?.company ?? entry.title.split(":")[0]?.trim() ?? entry.symbol,
    companySlug: tax?.companySlug ?? entry.symbol.toLowerCase(),
    industry: tax?.industry ?? "Specialty Chemicals",
    symbol: tax?.symbol ?? entry.symbol,
  };
}

const articleSummaries: ArticleSummary[] = deepCatalogMeta.map(enrichMeta);

export function getArticleSummary(slug: string): ArticleSummary | undefined {
  return articleSummaries.find((a) => a.slug === slug);
}

export async function getArticle(slug: string): Promise<Article | undefined> {
  const summary = getArticleSummary(slug);
  if (!summary) return undefined;
  const blocks = await loadMemoBlocks(slug);
  if (!blocks) return undefined;
  return { ...summary, blocks };
}

/** Lightweight list for index pages (no memo bodies). */
export function listArticles(): ArticleSummary[] {
  return articleSummaries;
}

export function listArticlesByCompany(companySlug: string): ArticleSummary[] {
  return articleSummaries.filter((a) => a.companySlug === companySlug);
}

export function listArticlesByIndustry(industry: string): ArticleSummary[] {
  return articleSummaries.filter((a) => a.industry === industry);
}

export function relatedArticles(slug: string, limit = 6): ArticleSummary[] {
  const current = getArticleSummary(slug);
  if (!current) return [];
  const sameCompany = articleSummaries.filter(
    (a) => a.slug !== slug && a.companySlug === current.companySlug,
  );
  const sameIndustry = articleSummaries.filter(
    (a) =>
      a.slug !== slug &&
      a.companySlug !== current.companySlug &&
      a.industry === current.industry,
  );
  return [...sameCompany, ...sameIndustry].slice(0, limit);
}
