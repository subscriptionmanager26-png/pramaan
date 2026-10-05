import type { Article, CatalogArticle } from "./types";
import { deepCatalogArticles } from "./deep-catalog";
import { getMemoTaxonomy } from "./taxonomy";

function enrich(article: CatalogArticle): Article {
  const tax = getMemoTaxonomy(article.slug);
  return {
    ...article,
    company: tax?.company ?? article.title.split(":")[0]?.trim() ?? article.symbol,
    companySlug: tax?.companySlug ?? article.symbol.toLowerCase(),
    industry: tax?.industry ?? "Specialty Chemicals",
    symbol: tax?.symbol ?? article.symbol,
  };
}

const articles: Article[] = deepCatalogArticles.map(enrich);

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function listArticles(): Article[] {
  return articles;
}

export function listArticlesByCompany(companySlug: string): Article[] {
  return articles.filter((a) => a.companySlug === companySlug);
}

export function listArticlesByIndustry(industry: string): Article[] {
  return articles.filter((a) => a.industry === industry);
}

export function relatedArticles(slug: string, limit = 6): Article[] {
  const current = getArticle(slug);
  if (!current) return [];
  const sameCompany = articles.filter(
    (a) => a.slug !== slug && a.companySlug === current.companySlug,
  );
  const sameIndustry = articles.filter(
    (a) =>
      a.slug !== slug &&
      a.companySlug !== current.companySlug &&
      a.industry === current.industry,
  );
  return [...sameCompany, ...sameIndustry].slice(0, limit);
}
