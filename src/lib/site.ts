export type NewsItem = {
  slug: string;
  headline: string;
  summary: string;
  source: string;
  publishedAt: string;
  topic: "markets" | "economy" | "companies" | "policy";
  url: string;
  image: string;
};

export type ResearchArticle = {
  slug: string;
  title: string;
  summary: string;
  category: "industry" | "company";
  companyOrSector: string;
  publishedAt: string;
  readMinutes: number;
  image: string;
  body: string[];
};

export type Advisor = {
  slug: string;
  name: string;
  license: string;
  startedIn: number;
  social: { label: string; url: string }[];
};

export type Guide = {
  slug: string;
  title: string;
  summary: string;
  kind: "guide" | "tool";
  publishedAt: string;
  readMinutes?: number;
  body: string[];
  toolUrl?: string;
};

/** Production has no demo news — only real research memos ship. */
export const newsFeed: NewsItem[] = [];

/** Legacy stub type retained for old routes; content lives in `@/lib/articles`. */
export const researchArticles: ResearchArticle[] = [];

export const advisors: Advisor[] = [];

export const guides: Guide[] = [];

export function getResearch(slug: string) {
  return researchArticles.find((a) => a.slug === slug);
}

export function getAdvisor(slug: string) {
  return advisors.find((a) => a.slug === slug);
}

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
