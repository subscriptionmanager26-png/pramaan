export type SourceKind =
  | "annual-report"
  | "screener"
  | "exchange-filing"
  | "investor-presentation"
  | "transcript"
  | "news";

export interface ResearchSource {
  url: string;
  accessedAt: string;
  kind: SourceKind;
  note: string;
}

export interface FinancialRow {
  label: string;
  unit: string;
  periods: Record<string, number | string | null>;
  comment?: string;
}

export type GuidanceOutcome =
  | "met"
  | "beat"
  | "missed"
  | "partial"
  | "pending";

export interface GuidanceRecord {
  period: string;
  promise: string;
  outcome: string;
  status: GuidanceOutcome;
  commentary: string;
}

export interface ValuationScenario {
  label: "bear" | "base" | "bull";
  fiscalYear: string;
  patCrore: number;
  eps: number;
  targetPe: number;
  targetPrice: number;
  vsReferencePct: number;
  assumptions: string;
}

export interface ValuationBlock {
  methodology: string;
  referencePrice: number;
  referenceDate: string;
  sharesCrore: number;
  scenarios: ValuationScenario[];
  crossCheck?: string;
}

export interface TranscriptExcerpt {
  speaker: string;
  role: string;
  topic: string;
  quote: string;
}

export interface TranscriptRef {
  id: string;
  title: string;
  date: string;
  sourceUrl: string;
  excerpts: TranscriptExcerpt[];
}

export interface DeepCompanyResearch {
  articleSlug: string;
  companyName: string;
  nseSymbol: string;
  bseCode: string;
  valueDrivers: string[];
  sources: ResearchSource[];
  financials: FinancialRow[];
  guidanceLog: GuidanceRecord[];
  valuation: ValuationBlock;
  transcripts: TranscriptRef[];
  workflow: string[];
}
