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
  bio: string;
  image: string;
  social: { label: string; url: string }[];
};

export type Guide = {
  slug: string;
  title: string;
  summary: string;
  kind: "guide" | "tool";
  publishedAt: string;
  readMinutes?: number;
  image: string;
  body: string[];
  toolUrl?: string;
};

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const LOREM_SHORT =
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const LOREM_MID =
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.";

/** Placeholder wire. Sections stay; copy is lorem until real news lands. */
export const newsFeed: NewsItem[] = [
  {
    slug: "lorem-markets-open",
    headline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    summary: LOREM_SHORT,
    source: "Placeholder Wire",
    publishedAt: "2026-10-05T10:00:00+05:30",
    topic: "markets",
    url: "#",
    image: "https://picsum.photos/seed/pramaan-news-1/1200/750",
  },
  {
    slug: "lorem-economy-print",
    headline: "Sed do eiusmod tempor incididunt ut labore et dolore",
    summary: LOREM_MID,
    source: "Placeholder Desk",
    publishedAt: "2026-10-05T08:00:00+05:30",
    topic: "economy",
    url: "#",
    image: "https://picsum.photos/seed/pramaan-news-2/1200/750",
  },
  {
    slug: "lorem-company-update",
    headline: "Ut enim ad minim veniam, quis nostrud exercitation",
    summary: LOREM,
    source: "Sample Source",
    publishedAt: "2026-10-05T06:30:00+05:30",
    topic: "companies",
    url: "#",
    image: "https://picsum.photos/seed/pramaan-news-3/1200/750",
  },
  {
    slug: "lorem-policy-note",
    headline: "Duis aute irure dolor in reprehenderit in voluptate",
    summary: LOREM_SHORT,
    source: "Placeholder Policy",
    publishedAt: "2026-10-04T18:00:00+05:30",
    topic: "policy",
    url: "#",
    image: "https://picsum.photos/seed/pramaan-news-4/1200/750",
  },
  {
    slug: "lorem-flows-day",
    headline: "Excepteur sint occaecat cupidatat non proident sunt",
    summary: LOREM_MID,
    source: "Placeholder Markets",
    publishedAt: "2026-10-03T16:00:00+05:30",
    topic: "markets",
    url: "#",
    image: "https://picsum.photos/seed/pramaan-news-5/1200/750",
  },
  {
    slug: "lorem-rates-watch",
    headline: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    summary: LOREM,
    source: "Sample Wire",
    publishedAt: "2026-10-03T12:00:00+05:30",
    topic: "economy",
    url: "#",
    image: "https://picsum.photos/seed/pramaan-news-6/1200/750",
  },
  {
    slug: "lorem-ipo-calendar",
    headline: "Neque porro quisquam est qui dolorem ipsum quia",
    summary: LOREM_SHORT,
    source: "Placeholder IPO",
    publishedAt: "2026-10-03T09:00:00+05:30",
    topic: "markets",
    url: "#",
    image: "https://picsum.photos/seed/pramaan-news-7/1200/750",
  },
  {
    slug: "lorem-global-futures",
    headline: "At vero eos et accusamus et iusto odio dignissimos",
    summary: LOREM_MID,
    source: "Placeholder Global",
    publishedAt: "2026-10-02T21:00:00+05:30",
    topic: "companies",
    url: "#",
    image: "https://picsum.photos/seed/pramaan-news-8/1200/750",
  },
];

/** Legacy magazine stubs (home/news sidebars). Real memos live in `@/lib/articles`. */
export const researchArticles: ResearchArticle[] = [
  {
    slug: "lorem-industry-margins",
    title: "Lorem ipsum: industry margins from here",
    summary: LOREM_SHORT,
    category: "industry",
    companyOrSector: "Placeholder sector",
    publishedAt: "2026-10-01T10:00:00+05:30",
    readMinutes: 12,
    image: "https://picsum.photos/seed/pramaan-stub-1/1200/750",
    body: [LOREM, LOREM_MID, LOREM_SHORT],
  },
  {
    slug: "lorem-funding-costs",
    title: "Sed do eiusmod: funding costs after the squeeze",
    summary: LOREM_MID,
    category: "industry",
    companyOrSector: "Placeholder lenders",
    publishedAt: "2026-09-28T09:00:00+05:30",
    readMinutes: 10,
    image: "https://picsum.photos/seed/pramaan-stub-2/1200/750",
    body: [LOREM_SHORT, LOREM, LOREM_MID],
  },
];

export const advisors: Advisor[] = [
  {
    slug: "lorem-advisor-one",
    name: "Lorem Ipsum",
    license: "SEBI RIA · PLACEHOLDER",
    startedIn: 2016,
    bio: LOREM,
    image: "https://picsum.photos/seed/pramaan-adv-1/640/640",
    social: [
      { label: "LinkedIn", url: "#" },
      { label: "X", url: "#" },
    ],
  },
  {
    slug: "lorem-advisor-two",
    name: "Dolor Sit Amet",
    license: "SEBI PMS · PLACEHOLDER",
    startedIn: 2014,
    bio: LOREM_SHORT,
    image: "https://picsum.photos/seed/pramaan-adv-2/640/640",
    social: [
      { label: "LinkedIn", url: "#" },
      { label: "Website", url: "#" },
    ],
  },
  {
    slug: "lorem-advisor-three",
    name: "Consectetur Elit",
    license: "SEBI RIA · PLACEHOLDER",
    startedIn: 2018,
    bio: LOREM_MID,
    image: "https://picsum.photos/seed/pramaan-adv-3/640/640",
    social: [
      { label: "LinkedIn", url: "#" },
      { label: "Substack", url: "#" },
    ],
  },
  {
    slug: "lorem-advisor-four",
    name: "Adipiscing Tempor",
    license: "SEBI RIA · PLACEHOLDER",
    startedIn: 2019,
    bio: LOREM,
    image: "https://picsum.photos/seed/pramaan-adv-4/640/640",
    social: [
      { label: "LinkedIn", url: "#" },
      { label: "X", url: "#" },
    ],
  },
];

export const guides: Guide[] = [
  {
    slug: "lorem-start-guide",
    title: "Lorem ipsum: how to start from scratch",
    summary: LOREM_SHORT,
    kind: "guide",
    publishedAt: "2026-09-26T10:00:00+05:30",
    readMinutes: 8,
    image: "https://picsum.photos/seed/pramaan-guide-1/1200/750",
    body: [LOREM, LOREM_MID, LOREM_SHORT],
  },
  {
    slug: "lorem-read-filing",
    title: "Ut enim ad minim: read a filing in 30 minutes",
    summary: LOREM_MID,
    kind: "guide",
    publishedAt: "2026-09-18T09:00:00+05:30",
    readMinutes: 6,
    image: "https://picsum.photos/seed/pramaan-guide-2/1200/750",
    body: [LOREM_SHORT, LOREM, LOREM_MID],
  },
  {
    slug: "lorem-checklist-tool",
    title: "Duis aute: remittance checklist",
    summary: LOREM,
    kind: "tool",
    publishedAt: "2026-09-10T10:00:00+05:30",
    image: "https://picsum.photos/seed/pramaan-guide-3/1200/750",
    toolUrl: "#checklist",
    body: [LOREM_SHORT, LOREM_MID, LOREM],
  },
  {
    slug: "lorem-allocation-tool",
    title: "Excepteur sint: simple allocation worksheet",
    summary: LOREM_SHORT,
    kind: "tool",
    publishedAt: "2026-09-05T10:00:00+05:30",
    image: "https://picsum.photos/seed/pramaan-guide-4/1200/750",
    toolUrl: "#worksheet",
    body: [LOREM, LOREM_SHORT, LOREM_MID],
  },
];

export function getResearch(slug: string) {
  return researchArticles.find((a) => a.slug === slug);
}

export function getAdvisor(slug: string) {
  return advisors.find((a) => a.slug === slug);
}

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
