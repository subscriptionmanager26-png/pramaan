import { globalInvestingGuides } from "./global-investing";
import { pocketedgeTools } from "./pocketedge-tools";
import type { Guide } from "./types";

export type { Guide, GuideSection } from "./types";

export const guides: Guide[] = [...globalInvestingGuides, ...pocketedgeTools];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
