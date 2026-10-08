export type Verdict = "buy" | "hold" | "avoid" | "neutral";

export interface SeriesChartBlock {
  type: "seriesChart";
  title: string;
  caption: string;
  categories: string[];
  series: { name: string; values: number[]; color: string }[];
}

export interface HeadingBlock {
  type: "h2";
  text: string;
}

export interface ParagraphBlock {
  type: "p";
  text: string;
}

export type ArticleBlock = HeadingBlock | ParagraphBlock | SeriesChartBlock;

export interface ArticleSummary {
  slug: string;
  title: string;
  dek: string;
  verdict: Verdict;
  conviction: "low" | "medium" | "high";
  keyTakeaways: string[];
  readMinutes: number;
  publishedAt: string;
  symbol: string;
  /** Display name — multiple articles can share one company. */
  company: string;
  companySlug: string;
  industry: string;
}

export interface Article extends ArticleSummary {
  blocks: ArticleBlock[];
}

/** Catalog source shape before taxonomy enrichment (memo body loaded separately). */
export type CatalogArticleMeta = Omit<ArticleSummary, "company" | "companySlug" | "industry">;

/** @deprecated Use CatalogArticleMeta */
export type CatalogArticle = CatalogArticleMeta & { blocks: ArticleBlock[] };
