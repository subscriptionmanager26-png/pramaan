/** User satisfaction survey (on-site / product). Keep JSON-LD and visible UI in sync. */
export const POCKETEDGE_USER_SURVEY_RATING = {
  ratingValue: 4.4,
  /** Respondents who completed the survey (200+). Update when you have an exact audited count. */
  ratingCount: 200,
  bestRating: 5,
  worstRating: 1,
} as const;

/** Matches WebApplication `offers` in JSON-LD — keep in sync. */
export const POCKETEDGE_WEB_OFFER = {
  price: 0,
  priceCurrency: "INR",
} as const;

export function userSurveyRatingLabel() {
  const { ratingValue, ratingCount } = POCKETEDGE_USER_SURVEY_RATING;
  return `${ratingValue.toFixed(1)}/5 from ${ratingCount}+ user survey responses`;
}

export function pocketedgeFreeOfferLabel() {
  return "Free to use · INR (₹0)";
}

/** Visible footer copy aligned with structured data. */
export function pocketedgeTrustFooterLine() {
  return `Rated ${userSurveyRatingLabel()}. ${pocketedgeFreeOfferLabel()}.`;
}