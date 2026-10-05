import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const rallisMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Rallis India Ltd (NSE: RALLIS, BSE: 500355) is a Tata group agri-inputs company spanning crop protection formulations, seeds, contract manufacturing for global agchem players, and emerging soil and plant health products. Promoter Tata entities held about 55.1% as of June 2026 on Screener, with FIIs near 9.1% and DIIs near 11.7%. The stock is in Nifty Total Market, Nifty Smallcap 500, and BSE Commodities indices. At a reference price of ₹200 on 1 October 2026, market capitalisation is about ₹3,883 crore on roughly 19.4 crore shares (face value ₹1). Trailing consolidated price-to-earnings is near 24.6× on FY26 earnings, with book value about ₹87 per share and return on equity near 9.6%. The quote sits below the 52-week high of ₹315 and above the ₹197 low, reflecting a multi-year de-rating even as FY26 delivered record EBITDA.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Rallis earns by selling branded crop protection chemicals to farmers through dealers and retailers, marketing hybrid and in-licensed seeds, and running contract synthesis and formulation for export customers at its technical sites and Rallis Innovation Chemistry Hub. Revenue is recognised on dispatch; domestic crop care pricing mixes generics with newer formulations such as ALSTOR and FIPLAM launched in FY26. Seeds carry higher strategic focus with cotton and maize hybrids. Payment cycles follow agrochemical seasonality: kharif and rabi peaks drive inventory and receivable swings, while subsidy exposure is lower than urea-heavy peers because the portfolio is predominantly crop protection and seeds.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Rallis built a nationwide distribution footprint over more than 150 years and repositioned under Tata Chemicals ownership toward integrated agri solutions. Consolidated revenue moved from about ₹2,463 crore in FY24 to ₹2,663 crore in FY25 and ₹2,897 crore in FY26 per audited results cited in the FY26 annual report and April 2026 press release. PAT recovered from ₹125 crore in FY25 to ₹184 crore in FY26 (+47%) as EBITDA reached a record ₹362 crore at a 12.5% margin. That recovery arrived after several years of low single-digit profit growth and a share price CAGR that underperformed the Nifty 500 on Screener, so the market still prices Rallis as a low-ROE agchem name rather than a seeds-led compounder.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, company filings)",
    "Conclusion: Three-year revenue CAGR near 8%; FY26 growth volume-led per management.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Sales", values: [2463, 2663, 2897], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "End demand is millions of farmers reached through thousands of dealers; management claims presence in about 80% of India's districts, which spreads customer concentration risk relative to single-commodity exporters. Export and B2B contract customers add concentration at the molecule level: FY26 commentary noted Metribuzin and Pendimethalin volume declines while domestic crop care grew. Tata promoter control above 55% aligns capital allocation with group agri strategy, including digital platforms such as Saksham GIS and Sampark Plus for village-level targeting. FII ownership fell from about 11.6% in March 2026 to 9.1% in June 2026 on Screener, which can add volatility when global agchem multiples compress.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Crop care remained the largest line at about ₹2,416 crore in FY26 (+8% YoY) with volume growth despite price softness on generics. Seeds rose to about ₹481 crore (+15%) on cotton, maize, and in-licensed hybrids. B2B and export blends contract manufacturing and technical exports; FY26 export revenue de-grew in Q4 on select molecules even as CSM grew 59% in that quarter. Soil and plant health is still emerging but supports the narrative of moving toward biologicals and next-generation chemistries. Mix shift toward seeds and higher-margin launches underpinned the 170 bps EBITDA margin expansion cited by brokers on the FY26 results deck.",
  },
  seriesChart(
    "EBITDA margin % (consolidated)",
    "Conclusion: FY26 margin 12.5% is a five-year high on cost programmes and mix.",
    ["FY24", "FY25", "FY26"],
    [{ name: "EBITDA %", values: [10.1, 10.8, 12.5], color: "#c27803" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: FY26 PAT rebounded sharply after FY25 trough earnings.",
    ["FY24", "FY25", "FY26"],
    [{ name: "PAT", values: [113, 125, 184], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Indian monsoon distribution and acreage drive domestic volume; management on the April 2026 call cited IMD's below-normal 2026 forecast and weak rabi conditions as headwinds. Global generic active ingredient prices and China supply disruptions move raw material costs, with war-related inflation flagged on glyphosate and other generics entering FY27. Regulatory changes such as FCO 2026 on bio stimulants create product opportunity but also compliance cost. Rupee versus dollar affects import parity on actives. Peer re-rating in crop protection (UPL, PI Industries) sets sentiment for the sector even when Rallis is more domestic. Working capital and channel inventory ahead of kharif can swing quarterly PAT despite full-year EBITDA progress.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Operating profit tracked EBITDA after depreciation near ₹117 crore in FY26. Exceptional items netted to about ₹26 crore charge in FY26 per the directors report summary, keeping reported PAT below the pre-exceptional trend but still up strongly YoY. ROCE improved to about 12.8% on Screener versus low teens historically, while ROE near 9.6% remains modest for the multiple. Dividend payout near 29% on Screener with yield about 1.5% at the reference price signals Tata-style shareholder returns without aggressive buybacks. Five-year sales CAGR near 9% on Screener pros lags profit CAGR, highlighting margin volatility more than top-line stagnation.",
  },
  seriesChart(
    "EBITDA vs PAT (₹ crore, consolidated)",
    "Conclusion: FY26 EBITDA scale supports PAT even with exceptional charges.",
    ["FY24", "FY25", "FY26"],
    [
      { name: "EBITDA", values: [250, 287, 362], color: "#1e3a5f" },
      { name: "PAT", values: [113, 125, 184], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Net cash from operating activities was ₹172 crore in FY26 versus ₹295 crore in FY25 per the FY26 cash flow statement in the annual report, after income taxes paid near ₹68 crore. Cash generated from operations before tax was about ₹240 crore in FY26. Management built raw material inventory ahead of kharif and war-related supply risk, which lifted inventory days even as collections remained smooth on the April 2026 call. Liquid balances near ₹541 crore at March 2026 exceed borrowings on Screener snapshots, so PAT quality is acceptable though not as strong as FY25 cash conversion. Until CFO rebounds toward ₹250 crore with stable inventory, headline PAT growth can overstate near-term free cash flow.",
  },
  seriesChart(
    "Net cash from operations (₹ crore, consolidated)",
    "Conclusion: FY26 CFO down on tax and inventory build; still positive.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Net CFO", values: [217, 295, 172], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Liquid balances vs borrowings (₹ crore, Mar FY26)",
    "Conclusion: Liquidity cushion dominates balance sheet risk.",
    ["Mar FY26"],
    [
      { name: "Cash and liquid", values: [541], color: "#1e3a5f" },
      { name: "Borrowings", values: [93], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Rallis is not a leverage story: Screener lists the company as almost debt free with borrowings near ₹93 crore against liquid reserves near ₹541 crore. Risk is earnings and working capital, not solvency. A prolonged generic price war without pass-through could compress EBITDA margin back toward 10% and trap ROCE below 11%. Inventory built for kharif could reverse into write-downs if demand disappoints on a weak monsoon. Export customer loss on key actives would hit utilisation at technical plants. None of this implies imminent distress, but it can keep the stock range-bound near 20× forward earnings if PAT stalls near ₹180 crore while peers with higher ROE trade at premiums.",
  },
  seriesChart(
    "Return on equity % (Screener snapshot)",
    "Conclusion: ROE below 10% limits re-rating versus agchem leaders.",
    ["3Y avg", "Last year"],
    [{ name: "ROE %", values: [12.1, 9.6], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "Dr. Gyanendra Shukla leads as managing director and CEO with CFO Bhaskar Swaminathan; both fronted the April 2026 FY26 concall with detailed segment commentary. Tata promoter ownership above 55% aligns Rallis with group agri strategy and capital discipline, including digital farmer engagement platforms. Executive incentives tie to margin expansion and volume growth rather than balance sheet leverage, consistent with almost debt-free operations. Professional management depth in technical manufacturing and seeds is visible in launch cadence (ALSTOR, FIPLAM, Spiro herbicide registration). Minority shareholders rely on Tata governance and dividend continuity rather than activist pressure.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "Management promised margin-led recovery and seeds acceleration through FY26. Revenue grew 9% with record EBITDA, matching the revenue and margin beat in the dossier guidance log. Seeds delivered 15% growth. Working capital discipline was mixed: collections stayed smooth but inventory rose tactically and net CFO fell YoY. CSM grew in Q4 but full-year export lines were uneven on molecule volumes. Digital initiatives Idea2Impact and Saksham launched as promised. The gap is ROE still near 9.6% despite PAT growth, which keeps the market sceptical on sustainability.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Domestic crop care volume if kharif acreage stabilises and farmers restock after rabi weather damage. Seeds portfolio scaling in cotton and maize plus new hybrid launches. Margin hold near 12% EBITDA as cost programmes offset raw material inflation. CSM and export recovery if global customers reorder Metribuzin, Pendimethalin, and newer registrations. Product launches ALSTOR, FIPLAM, and Spiro for paddy expand addressable wallet per management. Liquid balance deployment into bolt-on acquisitions or capex at RICH without leverage. These drivers can lift FY27 PAT toward our base ₹200 crore but require two consecutive quarters of crop care growth with EBITDA margin above 12% and net CFO above ₹200 crore.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Normal monsoon with favourable distribution lifts herbicide and insecticide volumes double digits. Raw material inflation passes through to pricing with limited lag, holding EBITDA margin near 13.5%. Export B2B rebounds on new global registrations and CSM utilisation above FY25 peaks. Seeds mix shifts toward higher-margin hybrids and biologicals under FCO 2026 clarity. Net CFO exceeds ₹280 crore as inventory normalises post kharif. ROCE re-expands above 14% and the market re-rates Rallis toward 24× forward earnings. FY27 PAT could approach ₹235 crore and support our bull band near ₹290 per share.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Below-normal monsoon cuts acreage and farmer spend on crop protection, repeating FY20-style volume air pockets. Generic price wars compress EBITDA margin toward 10% while inventory built for kharif turns into discounts. Export customers delay orders on China-linked supply shocks. Seeds growth slows if cotton acreage falls. Net CFO falls below ₹120 crore with working capital days rising. PAT stagnates near ₹155 crore and the stock de-rates toward 17× earnings, implying our bear case near ₹136 per share (-32% vs reference).",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated PAT with price-to-earnings multiples suited to a Tata-backed domestic agchem and seeds platform with modest ROE (17× bear, 21× base, 24× bull), cross-checked with FY26 EBITDA ₹362 crore at 11× EV/EBITDA less net cash near ₹450 crore implying about ₹183 per share before any seeds quality premium. Bear FY27 PAT ₹155 crore implies about ₹136 per share (-32% vs ₹200 reference). Base PAT ₹200 crore implies about ₹216 (+8%). Bull PAT ₹235 crore implies about ₹290 (+45%). Base-case upside sits below our 15% Buy threshold, so the reference price embeds part of the FY26 recovery but not a full seeds-led re-rating.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base clears only ~8% upside; bull needs export and margin together.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [136, 216, 290, 200], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly revenue (₹ crore, Q4 FY26)",
    "Conclusion: Q4 revenue +6% YoY despite weak rabi backdrop.",
    ["Q4 FY25", "Q4 FY26"],
    [{ name: "Sales", values: [430, 456], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "IMD monsoon updates and kharif acreage data through July and August 2026. Quarterly crop care versus seeds revenue splits in investor presentations. Raw material price trends on glyphosate, glufosinate, and strobulin fungicides cited on the FY26 call. Inventory days and net CFO each quarter after kharif sell-in. BSE/NSE concall transcripts for order book commentary on CSM. New product uptake metrics for ALSTOR, FIPLAM, and Spiro in paddy. Any Tata group reorganization affecting Rallis listing or capital allocation. Dividend declaration pattern with FY27 PAT trajectory.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹200 reference. Base-case target near ₹216 per share offers about 8% upside versus reference, below our 15% Buy hurdle, while the almost debt-free balance sheet and record FY26 EBITDA keep the name off Avoid unless monsoon and margin assumptions break together. Upgrade to Buy if two consecutive quarters show consolidated revenue growth above 8% YoY with EBITDA margin above 12.5% and net CFO above ₹200 crore, lifting base FY27 PAT toward ₹220 crore and target above ₹230 (+15%). Downgrade to Avoid if TTM PAT falls below ₹150 crore with EBITDA margin below 10% and net CFO below ₹100 crore while inventory days rise without kharif justification.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack machine-readable segment PBIT for crop care, seeds, and B2B for every quarter cited; splits rely on FY26 concall and presentation excerpts. Exact molecule-level export revenue for FY26 full year requires annual report note refresh. R&D spend and innovation turnover metrics on Screener insights are login-gated. Customer concentration percentages for top export CSM clients are not disclosed in free sources. FY24 revenue uses directors report implied base; update if audited FY24 restatement differs. Replace curated concall quotes with BSE verbatim transcripts when uploaded. Update bear, base, and bull when H1 FY27 results publish with monsoon-linked volume data.",
  },
];
