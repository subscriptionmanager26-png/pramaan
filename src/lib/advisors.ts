import advisorsData from "@/data/sebi-advisors.json";

export type SebiAdvisorCategory = "RA" | "RIA" | "PMS";

export type SebiAdvisor = {
  id: string;
  slug: string;
  name: string;
  category: SebiAdvisorCategory;
  entityType: string;
  registration: string;
  website: string | null;
  twitter: string | null;
  substack: string | null;
  email: string | null;
  phone: string | null;
  contactPerson: string | null;
  globalAdvisory: boolean;
  globalInvesting: boolean;
  isAif: boolean;
};

export const sebiAdvisors = advisorsData as SebiAdvisor[];

export function getSebiAdvisor(slug: string) {
  return sebiAdvisors.find((a) => a.slug === slug);
}

export function listGlobalAdvisory() {
  return sebiAdvisors.filter((a) => a.globalAdvisory).sort((a, b) => a.name.localeCompare(b.name));
}

export function categoryLabel(category: SebiAdvisorCategory) {
  if (category === "RIA") return "RIA";
  if (category === "RA") return "RA";
  return "PMS";
}

export function categoryFullLabel(category: SebiAdvisorCategory) {
  if (category === "RIA") return "Registered Investment Adviser";
  if (category === "RA") return "Research Analyst";
  return "Portfolio Manager";
}
