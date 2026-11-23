import { POCKETEDGE_USER_SURVEY_RATING, POCKETEDGE_WEB_OFFER } from "@/lib/seo/user-survey-rating";
import { siteUrl } from "@/lib/site-url";

export function organizationJsonLd() {
  const url = siteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PocketEdge",
    url,
    logo: `${url}/icon.png`,
    description:
      "PocketEdge gives you a team of smart AI Agents that can help you with anything from mutual funds to complex options trading",
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PocketEdge",
    url: siteUrl(),
    inLanguage: "en-IN",
  };
}

/** Web product (pocketedge.in) — not a Play Store-only app card. */
export function webApplicationJsonLd() {
  const url = siteUrl();
  const { ratingValue, ratingCount, bestRating, worstRating } = POCKETEDGE_USER_SURVEY_RATING;
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "PocketEdge",
    url,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript",
    description:
      "Free AI-powered finance tools for India (INR). PocketEdge gives you smart AI agents for mutual funds, markets, and research.",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: String(POCKETEDGE_WEB_OFFER.price),
      priceCurrency: POCKETEDGE_WEB_OFFER.priceCurrency,
      description: "Free to use",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(ratingValue),
      ratingCount,
      bestRating: String(bestRating),
      worstRating: String(worstRating),
    },
  };
}

export function newsArticleJsonLd(input: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  image?: string;
}) {
  const url = absoluteArticleUrl(input.path);
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: input.headline,
    description: input.description,
    url,
    mainEntityOfPage: url,
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    publisher: {
      "@type": "Organization",
      name: "PocketEdge",
      logo: { "@type": "ImageObject", url: `${siteUrl()}/icon.png` },
    },
    ...(input.image
      ? { image: [input.image.startsWith("http") ? input.image : `${siteUrl()}${input.image}`] }
      : {}),
  };
}

export function researchArticleJsonLd(input: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  image?: string;
}) {
  const url = absoluteArticleUrl(input.path);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    url,
    mainEntityOfPage: url,
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    author: { "@type": "Organization", name: "PocketEdge Research" },
    publisher: {
      "@type": "Organization",
      name: "PocketEdge",
      logo: { "@type": "ImageObject", url: `${siteUrl()}/icon.png` },
    },
    ...(input.image
      ? { image: [input.image.startsWith("http") ? input.image : `${siteUrl()}${input.image}`] }
      : {}),
  };
}

function absoluteArticleUrl(path: string) {
  const base = siteUrl();
  return path.startsWith("/") ? `${base}${path}` : `${base}/${path}`;
}