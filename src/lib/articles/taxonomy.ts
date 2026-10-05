/** Auto-enriched company/industry tags for research memos. */
export type ResearchIndustry =
  | "Fertilizers"
  | "Agrochemicals"
  | "Seeds & Agri Inputs"
  | "Specialty Chemicals";

export type MemoTaxonomy = {
  slug: string;
  company: string;
  companySlug: string;
  symbol: string;
  industry: ResearchIndustry;
};

export const memoTaxonomy: MemoTaxonomy[] = [
  { slug: "fact-midcap-memo", company: "Fertilizers and Chemicals Travancore", companySlug: "fact", symbol: "FACT", industry: "Fertilizers" },
  { slug: "chambalfert-midcap-memo", company: "Chambal Fertilisers and Chemicals", companySlug: "chambal", symbol: "CHAMBLFERT", industry: "Fertilizers" },
  { slug: "coromandel-midcap-memo", company: "Coromandel International", companySlug: "coromandel", symbol: "COROMANDEL", industry: "Fertilizers" },
  { slug: "deepakfert-midcap-memo", company: "Deepak Fertilisers and Petrochemicals Corporation", companySlug: "deepakfert", symbol: "DEEPAKFERT", industry: "Fertilizers" },
  { slug: "gnfc-midcap-memo", company: "Gujarat Narmada Valley Fertilizers & Chemicals", companySlug: "gnfc", symbol: "GNFC", industry: "Fertilizers" },
  { slug: "gsfc-midcap-memo", company: "Gujarat State Fertilizers & Chemicals", companySlug: "gsfc", symbol: "GSFC", industry: "Fertilizers" },
  { slug: "rcf-midcap-memo", company: "Rashtriya Chemicals & Fertilizers", companySlug: "rcf", symbol: "RCF", industry: "Fertilizers" },
  { slug: "paradeep-midcap-memo", company: "Paradeep Phosphates", companySlug: "paradeep", symbol: "PARADEEP", industry: "Fertilizers" },
  { slug: "mangalorechem-midcap-memo", company: "Mangalore Chemicals & Fertilizers", companySlug: "mangalorechem", symbol: "MANGCHEFER", industry: "Fertilizers" },
  { slug: "nfl-midcap-memo", company: "National Fertilizers", companySlug: "nfl", symbol: "NFL", industry: "Fertilizers" },
  { slug: "zuariind-midcap-memo", company: "Zuari Industries", companySlug: "zuariind", symbol: "ZUARIIND", industry: "Fertilizers" },
  { slug: "zuariagro-midcap-memo", company: "Zuari Agro Chemicals", companySlug: "zuariagro", symbol: "ZUARI", industry: "Fertilizers" },
  { slug: "piind-midcap-memo", company: "PI Industries", companySlug: "piind", symbol: "PIIND", industry: "Agrochemicals" },
  { slug: "upl-midcap-memo", company: "UPL Ltd", companySlug: "upl", symbol: "UPL", industry: "Agrochemicals" },
  { slug: "rallis-midcap-memo", company: "Rallis India Ltd", companySlug: "rallis", symbol: "RALLIS", industry: "Agrochemicals" },
  { slug: "dhanuka-midcap-memo", company: "Dhanuka Agritech Ltd", companySlug: "dhanuka", symbol: "DHANUKA", industry: "Agrochemicals" },
  { slug: "insecticides-midcap-memo", company: "Insecticides (India) Ltd", companySlug: "insecticides", symbol: "INSECTICID", industry: "Agrochemicals" },
  { slug: "sumichem-midcap-memo", company: "Sumitomo Chemical India Ltd", companySlug: "sumichem", symbol: "SUMICHEM", industry: "Agrochemicals" },
  { slug: "shardacrop-midcap-memo", company: "Sharda Cropchem Ltd", companySlug: "shardacrop", symbol: "SHARDACROP", industry: "Agrochemicals" },
  { slug: "meghmani-midcap-memo", company: "Meghmani Organics Ltd", companySlug: "meghmani", symbol: "MOL", industry: "Agrochemicals" },
  { slug: "bharatras-midcap-memo", company: "Bharat Rasayan Ltd", companySlug: "bharatras", symbol: "BHARATRAS", industry: "Agrochemicals" },
  { slug: "astec-midcap-memo", company: "Astec LifeSciences Ltd", companySlug: "astec", symbol: "ASTEC", industry: "Agrochemicals" },
  { slug: "heranba-midcap-memo", company: "Heranba Industries Ltd", companySlug: "heranba", symbol: "HERANBA", industry: "Agrochemicals" },
  { slug: "indofil-midcap-memo", company: "Indofil Industries Ltd", companySlug: "indofil", symbol: "INDOFIL", industry: "Agrochemicals" },
  { slug: "naclind-midcap-memo", company: "NACL Industries Ltd", companySlug: "naclind", symbol: "NACLIND", industry: "Agrochemicals" },
  { slug: "kaveri-midcap-memo", company: "Kaveri Seed Company Ltd", companySlug: "kaveri", symbol: "KSCL", industry: "Seeds & Agri Inputs" },
  { slug: "nathbiogen-midcap-memo", company: "Nath Bio-Genes (India) Ltd", companySlug: "nathbiogen", symbol: "NATHBIOGEN", industry: "Seeds & Agri Inputs" },
  { slug: "aries-midcap-memo", company: "Aries Agro Ltd", companySlug: "aries", symbol: "ARIES", industry: "Agrochemicals" },
  { slug: "bhagchem-midcap-memo", company: "Bhagiradha Chemicals & Industries Ltd", companySlug: "bhagchem", symbol: "BHAGCHEM", industry: "Agrochemicals" },
  { slug: "bestagro-midcap-memo", company: "Best Agrolife Ltd", companySlug: "bestagro", symbol: "BESTAGRO", industry: "Agrochemicals" },
  { slug: "hikal-midcap-memo", company: "Hikal Ltd", companySlug: "hikal", symbol: "HIKAL", industry: "Specialty Chemicals" },
  { slug: "bhageria-midcap-memo", company: "Bhageria Industries Ltd", companySlug: "bhageria", symbol: "BHAGERIA", industry: "Specialty Chemicals" },
  { slug: "rossari-midcap-memo", company: "Rossari Biotech Ltd", companySlug: "rossari", symbol: "ROSSARI", industry: "Specialty Chemicals" },
  { slug: "fineorg-midcap-memo", company: "Fine Organic Industries Ltd", companySlug: "fineorg", symbol: "FINEORG", industry: "Specialty Chemicals" },
  { slug: "galaxysurf-midcap-memo", company: "Galaxy Surfactants Ltd", companySlug: "galaxysurf", symbol: "GALAXYSURF", industry: "Specialty Chemicals" },
  { slug: "vinatiorga-midcap-memo", company: "Vinati Organics Ltd", companySlug: "vinatiorga", symbol: "VINATIORGA", industry: "Specialty Chemicals" },
  { slug: "cleansci-midcap-memo", company: "Clean Science and Technology Ltd", companySlug: "cleansci", symbol: "CLEAN", industry: "Specialty Chemicals" },
  { slug: "deepaknit-midcap-memo", company: "Deepak Nitrite Ltd", companySlug: "deepaknit", symbol: "DEEPAKNTR", industry: "Specialty Chemicals" },
  { slug: "aartiind-midcap-memo", company: "Aarti Industries Ltd", companySlug: "aartiind", symbol: "AARTIIND", industry: "Specialty Chemicals" },
  { slug: "atul-midcap-memo", company: "Atul Ltd", companySlug: "atul", symbol: "ATUL", industry: "Specialty Chemicals" },
  { slug: "srf-midcap-memo", company: "SRF Ltd", companySlug: "srf", symbol: "SRF", industry: "Specialty Chemicals" },
  { slug: "navinfluor-midcap-memo", company: "Navin Fluorine International Ltd", companySlug: "navinfluor", symbol: "NAVINFLUOR", industry: "Specialty Chemicals" },
  { slug: "fluorochem-midcap-memo", company: "Gujarat Fluorochemicals Ltd", companySlug: "fluorochem", symbol: "FLUOROCHEM", industry: "Specialty Chemicals" },
  { slug: "neogen-midcap-memo", company: "Neogen Chemicals Ltd", companySlug: "neogen", symbol: "NEOGEN", industry: "Specialty Chemicals" },
  { slug: "anupam-midcap-memo", company: "Anupam Rasayan India Ltd", companySlug: "anupam", symbol: "ANURAS", industry: "Specialty Chemicals" },
  { slug: "alkylamine-midcap-memo", company: "Alkyl Amines Chemicals Ltd", companySlug: "alkylamine", symbol: "ALKYLAMINE", industry: "Specialty Chemicals" },
  { slug: "balamines-midcap-memo", company: "Balaji Amines Ltd", companySlug: "balamines", symbol: "BALAMINES", industry: "Specialty Chemicals" },
  { slug: "epigral-midcap-memo", company: "Epigral Ltd", companySlug: "epigral", symbol: "EPIGRAL", industry: "Specialty Chemicals" },
  { slug: "archean-midcap-memo", company: "Archean Chemical Industries Ltd", companySlug: "archean", symbol: "ACI", industry: "Specialty Chemicals" },
  { slug: "tatvchint-midcap-memo", company: "Tatva Chintan Pharma Chem Ltd", companySlug: "tatvchint", symbol: "TATVA", industry: "Specialty Chemicals" },
  { slug: "lxchem-midcap-memo", company: "Laxmi Organic Industries Ltd", companySlug: "lxchem", symbol: "LXCHEM", industry: "Specialty Chemicals" },
  { slug: "jublingrea-midcap-memo", company: "Jubilant Ingrevia Ltd", companySlug: "jublingrea", symbol: "JUBLINGREA", industry: "Specialty Chemicals" },
  { slug: "paushak-midcap-memo", company: "Paushak Ltd", companySlug: "paushak", symbol: "PAUSHAKLTD", industry: "Specialty Chemicals" },
  { slug: "privi-midcap-memo", company: "Privi Speciality Chemicals Ltd", companySlug: "privi", symbol: "PRIVISCL", industry: "Specialty Chemicals" },
  { slug: "chemplast-midcap-memo", company: "Chemplast Sanmar Ltd", companySlug: "chemplast", symbol: "CHEMPLASTS", industry: "Specialty Chemicals" },
];

export function getMemoTaxonomy(slug: string) {
  return memoTaxonomy.find((m) => m.slug === slug);
}

export function listIndustries() {
  return [...new Set(memoTaxonomy.map((m) => m.industry))].sort();
}

export function listCompanies() {
  const map = new Map<string, { company: string; companySlug: string; symbol: string; count: number }>();
  for (const m of memoTaxonomy) {
    const prev = map.get(m.companySlug);
    if (prev) prev.count += 1;
    else map.set(m.companySlug, { company: m.company, companySlug: m.companySlug, symbol: m.symbol, count: 1 });
  }
  return [...map.values()].sort((a, b) => a.company.localeCompare(b.company));
}

