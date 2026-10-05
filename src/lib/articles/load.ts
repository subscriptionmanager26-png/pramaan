import { getArticle } from "./catalog";
import { getDeepResearchForArticle } from "../research";

export function loadArticleWithResearch(slug: string) {
  const article = getArticle(slug);
  const research = getDeepResearchForArticle(slug);
  const handTier =
    !!article && article.blocks.length > 0 && !!research;
  return { article, research, handTier };
}
