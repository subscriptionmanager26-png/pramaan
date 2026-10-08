export type GuideSection = {
  heading: string;
  paragraphs: string[];
};

export type Guide = {
  slug: string;
  title: string;
  summary: string;
  kind: "guide" | "tool";
  publishedAt: string;
  readMinutes?: number;
  image: string;
  /** Plain paragraphs when `sections` is omitted. */
  body: string[];
  sections?: GuideSection[];
  toolUrl?: string;
  /** Short label for cards, e.g. "Global investing". */
  topic?: string;
};
