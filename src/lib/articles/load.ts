import { getArticle } from "./catalog";
import { getDeepResearchForArticle } from "../research";

export async function loadArticleWithResearch(slug: string) {
  const article = await getArticle(slug);
  const research = getDeepResearchForArticle(slug);
  const handTier = !!article && article.blocks.length > 0 && !!research;
  return { article, research, handTier };
}
