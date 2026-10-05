export function epsFromPat(patCrore: number, sharesCrore: number): number {
  if (sharesCrore <= 0) return 0;
  return patCrore / sharesCrore;
}

export function priceFromEpsPe(eps: number, pe: number): number {
  return eps * pe;
}

export function pctVsReference(targetPrice: number, referencePrice: number): number {
  if (referencePrice <= 0) return 0;
  return ((targetPrice - referencePrice) / referencePrice) * 100;
}

export function buildPatPeScenario(input: {
  label: "bear" | "base" | "bull";
  fiscalYear: string;
  patCrore: number;
  sharesCrore: number;
  targetPe: number;
  referencePrice: number;
  assumptions: string;
}) {
  const eps = epsFromPat(input.patCrore, input.sharesCrore);
  const targetPrice = priceFromEpsPe(eps, input.targetPe);
  return {
    label: input.label,
    fiscalYear: input.fiscalYear,
    patCrore: input.patCrore,
    eps: Math.round(eps * 100) / 100,
    targetPe: input.targetPe,
    targetPrice: Math.round(targetPrice),
    vsReferencePct: Math.round(pctVsReference(targetPrice, input.referencePrice) * 10) / 10,
    assumptions: input.assumptions,
  };
}

export function equityFromEvEbitda(input: {
  ebitdaCrore: number;
  evMultiple: number;
  netDebtCrore: number;
  sharesCrore: number;
}): number {
  const ev = input.ebitdaCrore * input.evMultiple;
  const equity = ev - input.netDebtCrore;
  return equity / input.sharesCrore;
}
