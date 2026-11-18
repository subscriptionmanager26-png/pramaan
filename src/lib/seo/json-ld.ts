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
      "Indian markets news desk, company research, SEBI-registered advisors, and tools for investors.",
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