import { listArticles } from "./catalog";
import { formatRelative } from "@/lib/utils";

/** Small sidebar list without loading memo bodies. */
export function researchRailItems(limit = 5) {
  return [...listArticles()]
    .sort(
      (a, b) =>
        +new Date(b.publishedAt) - +new Date(a.publishedAt) || a.company.localeCompare(b.company),
    )
    .slice(0, limit)
    .map((a) => ({
      href: `/research/${a.slug}`,
      title: a.title,
      meta: `${formatRelative(`${a.publishedAt}T12:00:00+05:30`)} · ${a.readMinutes} min`,
    }));
}
