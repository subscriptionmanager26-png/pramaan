import type { DeepCompanyResearch } from "./types";
import { factDeepResearch } from "./companies/fact";
import { chambalDeepResearch } from "./companies/chambal";
import { coromandelDeepResearch } from "./companies/coromandel";
import { deepakfertDeepResearch } from "./companies/deepakfert";
import { gnfcDeepResearch } from "./companies/gnfc";
import { gsfcDeepResearch } from "./companies/gsfc";
import { rcfDeepResearch } from "./companies/rcf";
import { paradeepDeepResearch } from "./companies/paradeep";
import { mangalorechemDeepResearch } from "./companies/mangalorechem";
import { nflDeepResearch } from "./companies/nfl";
import { zuariindDeepResearch } from "./companies/zuariind";
import { zuariagroDeepResearch } from "./companies/zuariagro";
import { piindDeepResearch } from "./companies/piind";
import { uplDeepResearch } from "./companies/upl";
import { rallisDeepResearch } from "./companies/rallis";
import { dhanukaDeepResearch } from "./companies/dhanuka";
import { insecticidesDeepResearch } from "./companies/insecticides";
import { sumichemDeepResearch } from "./companies/sumichem";
import { shardacropDeepResearch } from "./companies/shardacrop";
import { meghmaniDeepResearch } from "./companies/meghmani";
import { bharatrasDeepResearch } from "./companies/bharatras";
import { astecDeepResearch } from "./companies/astec";
import { heranbaDeepResearch } from "./companies/heranba";
import { indofilDeepResearch } from "./companies/indofil";
import { ariesDeepResearch } from "./companies/aries";
import { naclindDeepResearch } from "./companies/naclind";
import { kaveriDeepResearch } from "./companies/kaveri";
import { nathbiogenDeepResearch } from "./companies/nathbiogen";
import { bhagchemDeepResearch } from "./companies/bhagchem";
import { bestagroDeepResearch } from "./companies/bestagro";
import { hikalDeepResearch } from "./companies/hikal";
import { bhageriaDeepResearch } from "./companies/bhageria";
import { rossariDeepResearch } from "./companies/rossari";
import { fineorgDeepResearch } from "./companies/fineorg";
import { galaxysurfDeepResearch } from "./companies/galaxysurf";
import { vinatiorgaDeepResearch } from "./companies/vinatiorga";
import { cleansciDeepResearch } from "./companies/cleansci";
import { deepaknitDeepResearch } from "./companies/deepaknit";
import { aartiindDeepResearch } from "./companies/aartiind";
import { atulDeepResearch } from "./companies/atul";
import { srfDeepResearch } from "./companies/srf";
import { navinfluorDeepResearch } from "./companies/navinfluor";
import { fluorochemDeepResearch } from "./companies/fluorochem";
import { neogenDeepResearch } from "./companies/neogen";
import { anupamDeepResearch } from "./companies/anupam";
import { alkylamineDeepResearch } from "./companies/alkylamine";
import { balaminesDeepResearch } from "./companies/balamines";
import { epigralDeepResearch } from "./companies/epigral";
import { archeanDeepResearch } from "./companies/archean";
import { tatvchintDeepResearch } from "./companies/tatvchint";
import { lxchemDeepResearch } from "./companies/lxchem";
import { jublingreaDeepResearch } from "./companies/jublingrea";
import { paushakDeepResearch } from "./companies/paushak";
import { priviDeepResearch } from "./companies/privi";
import { chemplastDeepResearch } from "./companies/chemplast";

const registry: Record<string, DeepCompanyResearch> = {
  "fact-midcap-memo": factDeepResearch,
  "chambalfert-midcap-memo": chambalDeepResearch,
  "coromandel-midcap-memo": coromandelDeepResearch,
  "deepakfert-midcap-memo": deepakfertDeepResearch,
  "gnfc-midcap-memo": gnfcDeepResearch,
  "gsfc-midcap-memo": gsfcDeepResearch,
  "rcf-midcap-memo": rcfDeepResearch,
  "paradeep-midcap-memo": paradeepDeepResearch,
  "mangalorechem-midcap-memo": mangalorechemDeepResearch,
  "nfl-midcap-memo": nflDeepResearch,
  "zuariind-midcap-memo": zuariindDeepResearch,
  "zuariagro-midcap-memo": zuariagroDeepResearch,
  "piind-midcap-memo": piindDeepResearch,
  "upl-midcap-memo": uplDeepResearch,
  "rallis-midcap-memo": rallisDeepResearch,
  "dhanuka-midcap-memo": dhanukaDeepResearch,
  "insecticides-midcap-memo": insecticidesDeepResearch,
  "sumichem-midcap-memo": sumichemDeepResearch,
  "shardacrop-midcap-memo": shardacropDeepResearch,
  "meghmani-midcap-memo": meghmaniDeepResearch,
  "bharatras-midcap-memo": bharatrasDeepResearch,
  "astec-midcap-memo": astecDeepResearch,
  "heranba-midcap-memo": heranbaDeepResearch,
  "indofil-midcap-memo": indofilDeepResearch,
  "naclind-midcap-memo": naclindDeepResearch,
  "kaveri-midcap-memo": kaveriDeepResearch,
  "nathbiogen-midcap-memo": nathbiogenDeepResearch,
  "aries-midcap-memo": ariesDeepResearch,
  "bhagchem-midcap-memo": bhagchemDeepResearch,
  "bestagro-midcap-memo": bestagroDeepResearch,
  "hikal-midcap-memo": hikalDeepResearch,
  "bhageria-midcap-memo": bhageriaDeepResearch,
  "rossari-midcap-memo": rossariDeepResearch,
  "fineorg-midcap-memo": fineorgDeepResearch,
  "galaxysurf-midcap-memo": galaxysurfDeepResearch,
  "vinatiorga-midcap-memo": vinatiorgaDeepResearch,
  "cleansci-midcap-memo": cleansciDeepResearch,
  "deepaknit-midcap-memo": deepaknitDeepResearch,
  "aartiind-midcap-memo": aartiindDeepResearch,
  "atul-midcap-memo": atulDeepResearch,
  "srf-midcap-memo": srfDeepResearch,
  "navinfluor-midcap-memo": navinfluorDeepResearch,
  "fluorochem-midcap-memo": fluorochemDeepResearch,
  "neogen-midcap-memo": neogenDeepResearch,
  "anupam-midcap-memo": anupamDeepResearch,
  "alkylamine-midcap-memo": alkylamineDeepResearch,
  "balamines-midcap-memo": balaminesDeepResearch,
  "epigral-midcap-memo": epigralDeepResearch,
  "archean-midcap-memo": archeanDeepResearch,
  "tatvchint-midcap-memo": tatvchintDeepResearch,
  "lxchem-midcap-memo": lxchemDeepResearch,
  "jublingrea-midcap-memo": jublingreaDeepResearch,
  "paushak-midcap-memo": paushakDeepResearch,
  "privi-midcap-memo": priviDeepResearch,
  "chemplast-midcap-memo": chemplastDeepResearch,
};

export function getDeepResearchForArticle(
  articleSlug: string,
): DeepCompanyResearch | undefined {
  return registry[articleSlug];
}

export function listDeepResearchSlugs(): string[] {
  return Object.keys(registry);
}
