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

export interface Article {
  slug: string;
  title: string;
  dek: string;
  verdict: Verdict;
  conviction: "low" | "medium" | "high";
  keyTakeaways: string[];
  blocks: ArticleBlock[];
  readMinutes: number;
  publishedAt: string;
  symbol: string;
  /** Display name — multiple articles can share one company. */
  company: string;
  companySlug: string;
  industry: string;
}

/** Catalog source shape before taxonomy enrichment. */
export type CatalogArticle = Omit<Article, "company" | "companySlug" | "industry">;
