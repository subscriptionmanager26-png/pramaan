export const DISCLOSURE_SECTIONS = ["privacy", "terms", "terms-of-service"] as const;
export type DisclosureSection = (typeof DISCLOSURE_SECTIONS)[number];

export function isDisclosureSection(value: string): value is DisclosureSection {
  return (DISCLOSURE_SECTIONS as readonly string[]).includes(value);
}

export const disclosureDocs = [
  {
    id: "privacy" as const,
    title: "Privacy policy",
    href: "/disclosures/privacy",
    summary: "How we collect, use, and protect your personal information.",
  },
  {
    id: "terms" as const,
    title: "Terms and conditions",
    href: "/disclosures/terms",
    summary: "Rules for using PocketEdge, accounts, and community features.",
  },
  {
    id: "terms-of-service" as const,
    title: "Terms of service",
    href: "/disclosures/terms-of-service",
    summary: "Service availability, acceptable use, and liability limits.",
  },
];

export const disclosureLegal: Record<
  DisclosureSection,
  { title: string; updated: string; sections: { heading: string; body: string }[] }
> = {
  privacy: {
    title: "Privacy policy",
    updated: "September 2026",
    sections: [
      {
        heading: "What we collect",
        body:
          "Account details you provide (such as name and email via Google sign-in), portfolio and engagement data you create on PocketEdge, and basic technical logs needed to run and secure the product.",
      },
      {
        heading: "How we use it",
        body:
          "To operate the service, personalize your experience, improve product quality, prevent abuse, and communicate important account updates. We do not sell your personal information.",
      },
      {
        heading: "Promotional emails",
        body:
          "By creating an account or otherwise using PocketEdge, you agree to receive promotional emails from us, including newsletters, product updates, and other marketing messages. Transactional messages about your account may still be sent even if you unsubscribe from promotional mail.",
      },
      {
        heading: "Sharing",
        body:
          "We use trusted processors (for example authentication, hosting, and analytics) solely to deliver PocketEdge. Content you choose to publish may be visible to other users or visitors as designed by the product.",
      },
      {
        heading: "Your choices",
        body:
          "You may request access, correction, or deletion of account data subject to legal and operational requirements. You can opt out of promotional emails using the unsubscribe link in those messages. Contact us through in-app support or the email listed on pocketedge.in.",
      },
    ],
  },
  terms: {
    title: "Terms and conditions",
    updated: "July 2026",
    sections: [
      {
        heading: "Using PocketEdge",
        body:
          "PocketEdge provides market information, community discussion, and portfolio tools for informational purposes. Nothing on the platform is investment advice, a solicitation, or a recommendation to buy or sell any security.",
      },
      {
        heading: "Your responsibilities",
        body:
          "You are responsible for the accuracy of information you submit, for keeping your account secure, and for complying with applicable laws. Do not post unlawful, misleading, or abusive content.",
      },
      {
        heading: "Market data",
        body:
          "Prices, returns, news, and AI-generated summaries may be delayed, incomplete, or incorrect. Always verify critical information with primary sources and licensed advisors before making decisions.",
      },
      {
        heading: "Changes",
        body:
          "We may update these terms as the product evolves. Continued use after changes are posted constitutes acceptance of the revised terms.",
      },
    ],
  },
  "terms-of-service": {
    title: "Terms of service",
    updated: "July 2026",
    sections: [
      {
        heading: "Service scope",
        body:
          "PocketEdge is provided on an “as is” and “as available” basis. Features may change, pause, or be discontinued. We aim for high availability but do not guarantee uninterrupted access.",
      },
      {
        heading: "Acceptable use",
        body:
          "You may not scrape, reverse engineer, overload, or misuse the service; impersonate others; or use PocketEdge to distribute spam or malware.",
      },
      {
        heading: "Limitation of liability",
        body:
          "To the fullest extent permitted by law, PocketEdge and its operators are not liable for investment losses, decisions made using platform content, or indirect / consequential damages arising from use of the service.",
      },
      {
        heading: "Contact",
        body: "Questions about these terms can be sent via the contact options on pocketedge.in.",
      },
    ],
  },
};
