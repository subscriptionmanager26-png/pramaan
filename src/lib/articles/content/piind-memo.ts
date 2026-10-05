import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const piindMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "PI Industries Ltd (NSE: PIIND, BSE: 523642) is among India's largest agrochemical custom synthesis and manufacturing exporters and a scaled domestic formulations player. Promoter holding was about 46.1% as of June 2026 on Screener, with FIIs near 14.8% and DIIs near 31.5%. The stock is in Nifty Midcap 100, Nifty Midcap 150, and Nifty Chemicals. At a reference price of ₹2,236 on 1 October 2026, market capitalisation is about ₹33,924 crore on roughly 15.18 crore shares (face value ₹1). Trailing price-to-earnings is near 24× on TTM earnings, with book value about ₹749 per share and return on equity near 14.2%. The quote sits well below the 52-week high of ₹3,833 and above the ₹2,191 low, reflecting a year of negative TTM sales growth and working capital stretch after a FY25 peak.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "PI earns in two linked buckets. Custom synthesis and manufacturing exports: global agchem innovators pay for process development, scale-up, and long-term supply of active ingredients from multi-purpose plants in Gujarat, with revenue recognised on dispatch and pricing tied to contracts and input costs. Domestic agri-inputs: farmers and dealers pay for PI's branded insecticides, fungicides, herbicides, and plant nutrition through a wide distributor network, including products from the Isagro India acquisition. Payment quality is high on margins but lumpy on timing: export receivables and inventory cycles can widen working capital even when operating margin stays near 30%.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "PI pioneered agchem CSM in India and built integrated R&D, engineering, and manufacturing at Jambusar and Panoli. FY23 consolidated PAT was ₹1,211 crore on sales ₹6,270 crore with OPM 24%. FY24 PAT rose to ₹1,731 crore on sales ₹7,145 crore as OPM reached 29%. FY25 was a peak year with PAT ₹1,866 crore on sales ₹7,571 crore and OPM 32%. FY26 stepped down to PAT ₹1,435 crore on sales ₹6,183 crore as quarterly sales fell from ₹2,131 crore in Sep 2024 toward ₹1,270 crore in Dec 2025 before a partial rebound. TTM PAT was ₹1,312 crore with TTM sales ₹6,012 crore, down about 18% year on year on Screener, which is the setup for this memo: quality franchise at a lower multiple than history, but earnings not yet on a clean upswing.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: FY26 and TTM reflect dispatch and destocking, not a permanent shrink of addressable market.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [{ name: "Sales", values: [7145, 7571, 6183, 6012], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Export CSM customers are a handful of global agchem majors with multi-year contracts; concentration is inherent but relationships are long dated. Domestic end demand is fragmented across millions of farmers reached through thousands of distributors; PI does not depend on a single Indian corporate buyer. Promoter Saluja family control near 46% aligns long-term capex and R&D with listed minorities. FII holding fell from about 20% toward 15% through FY26 while DII rose above 31%, suggesting domestic institutions accumulated the de-rating. Concentration risk is operational: delayed CSM dispatches or export receivable stretch hit consolidated sales and cash together rather than one geography alone.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "CSM exports historically drove growth and margin, while domestic formulations provide brand pull and counter-seasonal balance. FY25 mix favoured exports as sales and OPM peaked. FY26 quarterly pattern showed high OPM near 32% even on lower sales, implying CSM still anchors profitability while domestic volumes were softer in Dec 2025 and Mar 2026 quarters. Isagro biologicals add a niche growth vector integrated into PI's distribution. Premium Screener segment splits are login-gated; management commentary points to order timing as the FY26 revenue gap driver rather than permanent share loss in either bucket.",
  },
  seriesChart(
    "Operating margin % (consolidated, Screener)",
    "Conclusion: Margin resilience despite top-line dip supports CSM mix quality.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [{ name: "OPM %", values: [29, 32, 32, 30], color: "#c27803" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: FY26 PAT down 23% from FY25 peak; TTM still above ₹1,300 cr.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [{ name: "PAT", values: [1731, 1866, 1435, 1312], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global agchem inventory cycles and innovator outsourcing decisions move CSM dispatch schedules. Indian monsoon and crop economics move domestic offtake and channel inventory. Raw material and energy costs pass through with lag on some contracts. INR versus USD affects export realisations. Regulatory changes on active ingredients in export markets can accelerate or delay molecule launches. Working capital policy at global customers affects PI's debtor days, which rose to 80 at March 2026. Interest rates matter less for PI than for leveraged PSUs because borrowings were only ₹65 crore against investments near ₹3,256 crore, but treasury income volatility can swing other income, including the Mar 2026 quarter other income of negative ₹41 crore on Screener.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Operating profit grew from ₹2,038 crore in FY24 to ₹2,389 crore in FY25 before easing to ₹1,962 crore in FY26 with TTM ₹1,821 crore. PAT followed from ₹1,731 crore to ₹1,866 crore to ₹1,435 crore. Depreciation rose to ₹305 crore in FY26 as new assets capitalised. ROCE fell from 25% in FY25 to 18% in FY26 on higher capital employed and lower profit. Return on equity was 14.2% on Screener pros, down from the high teens at peak. Dividend payout rose to 16% in FY26 from 13% in FY25 with yield near 0.67% at the reference price, signalling confidence despite cash conversion softness.",
  },
  seriesChart(
    "Operating profit vs PAT (₹ crore, consolidated)",
    "Conclusion: Depreciation and tax keep PAT below OP; other income adds volatility.",
    ["FY24", "FY25", "FY26"],
    [
      { name: "Operating profit", values: [2038, 2389, 1962], color: "#1e3a5f" },
      { name: "PAT", values: [1731, 1866, 1435], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Cash from operations was ₹2,099 crore in FY24, ₹1,478 crore in FY25, and ₹694 crore in FY26 on Screener, while free cash flow was ₹1,622 crore, ₹771 crore, and negative ₹268 crore respectively. CFO to operating profit was 120% in FY24 and 53% in FY26, showing receivable and inventory build absorbed cash despite strong margins. Net cash flow was negative ₹242 crore in FY26 after investing outflows near ₹680 crore and financing outflows ₹256 crore. Sustained CFO above ₹1,200 crore with debtor days falling below 65 would signal that FY26 profit quality is converting again; until then trailing PAT overstates near-term cash generation.",
  },
  seriesChart(
    "Cash from operations (₹ crore, consolidated)",
    "Conclusion: FY26 cash conversion weakened materially versus FY24 peak.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [2099, 1478, 694], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Debtor days vs working capital days",
    "Conclusion: Receivable stretch drove WC days to 120 at Mar FY26.",
    ["Mar FY25", "Mar FY26"],
    [
      { name: "Debtor days", values: [58, 80], color: "#1e3a5f" },
      { name: "WC days", values: [60, 120], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "PI is not balance-sheet fragile in the PSU sense: borrowings were ₹65 crore at March 2026 against investments ₹3,256 crore and reserves above ₹11,350 crore. Risk is capital allocation and cycle: CWIP reached ₹875 crore as Jambusar expansions progressed; if CSM demand stalls, ROCE could stay near mid-teens and free cash flow negative while capex continues. Export customer concentration could force price concessions on renewals. Domestic channel credit could stretch if monsoon fails. None of these imply solvency stress near-term, but they can compress multiple from 24× toward high teens if PAT drifts toward ₹1,180 crore.",
  },
  seriesChart(
    "CWIP vs borrowings (₹ crore, Mar FY26)",
    "Conclusion: Growth capex is funded from internal accruals and treasury, not leverage.",
    ["Mar FY25", "Mar FY26"],
    [
      { name: "CWIP", values: [444, 875], color: "#1e3a5f" },
      { name: "Borrowings", values: [52, 65], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The Saluja promoter group holds about 46% and has steered PI through multiple agchem cycles with consistent R&D and capex. Professional management runs day-to-day operations with long tenures in commercial and technical roles typical of CSM leaders. Incentives align with long-cycle molecule wins rather than quarter-to-quarter domestic trading profits. Promoter holding has been stable near 46% for several years without pledge flags on Screener pros. Capital allocation favours plants and R&D over buybacks, which suits growth investors but requires patience when dispatch timing creates air pockets in reported sales.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "Management promised CSM order book visibility and Jambusar capacity additions through FY25 and FY26. FY25 delivered record sales and PAT. FY26 missed the prior trend on revenue while holding OPM near 32%, consistent with timing and mix rather than margin collapse. Working capital targets slipped: debtor days rose to 80 and CFO fell sharply. Isagro integration and domestic distributor expansion remain in progress with partial outcomes. R&D intensity stayed strategically high. The dossier guidance log scores working capital as missed and balance sheet discipline as beat.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "CSM export order conversion as global innovators destock and reorder active ingredients. Commercial start-up of Jambusar multi-purpose blocks adding throughput from CWIP near ₹875 crore. Domestic formulations recovery when channel inventory normalises after weak Dec 2025 and Mar 2026 quarters. Isagro biologicals cross-sell through PI distribution. Operating leverage if sales return toward ₹7,500 crore with OPM held above 29%. Working capital release if debtor days revert toward the high 50s seen in FY25. These drivers can lift FY27 PAT toward our base ₹1,520 crore but require evidence in two consecutive quarters of sales growth and CFO recovery.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Global CSM customers accelerate molecule transfers to India as China-plus-one sourcing deepens. Jambusar new trains run above nameplate utilisation with minimal teething issues. Domestic market share gains in rice and horticulture segments lift volumes double digits. CFO exceeds ₹1,400 crore as receivables clear and inventory days fall from 147 toward FY25 levels. ROCE re-expands above 22% and the market re-rates PI toward 25× forward earnings. FY27 PAT could approach ₹1,780 crore and support our bull band near ₹2,930 per share.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Export dispatches slip again in H1 FY27 while customers negotiate tougher pricing on renewals. Domestic destocking persists through a weak monsoon. Mar 2026 style quarters repeat with PAT near ₹200 crore and other income volatility. Working capital days stay above 110 and free cash flow remains negative through another capex year. OPM compresses toward 26% on under-utilised plants. FY27 PAT could fall toward ₹1,180 crore and equity toward our bear case near ₹1,555 per share at 20× earnings.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated PAT with price-to-earnings multiples suited to a global agchem CSM leader with domestic formulations overlay (20× bear, 22× base, 25× bull), cross-checked with TTM operating profit near ₹1,821 crore at 16× EV/EBITDA less net cash near ₹3,190 crore implying about ₹1,710 per share before quality premium. Bear FY27 PAT ₹1,180 crore implies about ₹1,555 per share (-30% vs ₹2,236 reference). Base PAT ₹1,520 crore implies about ₹2,198 (-2%). Bull PAT ₹1,780 crore implies about ₹2,930 (+31%). Base-case upside sits below our 15% Buy threshold, so the reference price already embeds partial recovery from FY26 trough earnings.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base does not clear 15% upside; bull needs CSM and cash together.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [1555, 2198, 2930, 2236], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener)",
    "Conclusion: Dec 2025 and Mar 2026 were trough quarters; Jun 2026 rebounded.",
    ["Sep-25", "Dec-25", "Mar-26", "Jun-26"],
    [{ name: "Sales", values: [1753, 1270, 1391, 1599], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly CSM dispatch and export revenue commentary on concalls. Jambusar CWIP capitalisation and first commercial batch disclosures. Domestic primary sales and channel inventory data in investor presentations. Debtor days and working capital days each quarter on Screener. BSE/NSE concall transcripts for verbatim order book commentary. New molecule commercialisation announcements with global partners. Isagro portfolio cross-sell metrics when segment notes publish. Any change in promoter holding above 46% band.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹2,236 reference. Base-case target near ₹2,198 offers about 2% downside versus reference, below our 15% Buy hurdle, while balance sheet strength keeps the name off Avoid unless CSM orders deteriorate structurally. Upgrade to Buy if two consecutive quarters show consolidated sales above ₹1,850 crore with YoY growth, OPM above 30%, and CFO above ₹350 crore, lifting base FY27 PAT toward ₹1,650 crore and target above ₹2,570 (+15%). Downgrade to Avoid if TTM PAT falls below ₹1,150 crore with sales below ₹5,800 crore TTM, working capital days above 130, and ROCE stuck near 15% while CWIP keeps rising without revenue follow-through.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack exchange-uploaded verbatim concall transcripts for every quarter cited; excerpts are curated pending BSE PDF replacement. CSM versus domestic revenue and PBIT splits for FY26 require annual report segment notes not yet ingested in free sources. Dollar order book size on Screener insights is login-gated. Customer-level concentration percentages are not disclosed in sources used. Exact FY27 Jambusar commercial ramp schedule is not modeled plant by plant. Isagro India standalone contribution needs consolidated note refresh. Update bear, base, and bull when FY26 annual report segment and related-party notes publish.",
  },
];
