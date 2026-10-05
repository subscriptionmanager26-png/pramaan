import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const uplMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "UPL Ltd (NSE: UPL, BSE: 512070) is among the world's largest crop protection and agricultural solutions companies, with formulations, actives, seeds, and biosolutions sold in roughly 140 countries. Promoter holding was about 33.5% as of June 2026 on Screener, with FIIs near 42.4% and DIIs near 14.3%. The stock is in Nifty Midcap 100, Nifty 500, and Nifty Chemicals. At a reference price of ₹517 on 1 October 2026, market capitalisation is about ₹43,613 crore on roughly 84.36 crore shares (face value ₹2). Trailing price-to-earnings is near 47.6× on TTM earnings, with book value about ₹166 per share and return on equity near 6.4%. The quote sits below the 52-week high of ₹812 and above the ₹511 low, reflecting a multi-year sales reset, working capital stretch, and earnings where other income still matters versus operating profit.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "UPL earns by selling crop protection chemicals (insecticides, fungicides, herbicides), biosolutions, and seeds to farmers and distributors globally, plus industrial and speciality chemical intermediates in India. Revenue is recognised on dispatch; pricing mixes generic actives with differentiated NPP (new product portfolio) molecules where UPL can earn better margins. Payment cycles are long in many emerging markets: receivables and channel inventory drive working capital more than plant leverage. The OpenAg model bundles products and services, but the listed P&L is still dominated by crop protection volume, price/mix, and raw material pass-through lag.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "UPL scaled through organic growth and the Arysta acquisition era into a top-five global agchem name, then faced a post-pandemic inventory correction. Consolidated sales on Screener fell from ₹16,449 crore in FY22 toward ₹5,398 crore in FY24 as portfolio and reporting base changed, with FY25 sales ₹5,330 crore and FY26 ₹5,748 crore. Operating margin collapsed to 2.9% in FY25 before recovering to 7% in FY26 and about 10% on TTM. Reported PAT was ₹1,208 crore in FY24, spiked to ₹2,939 crore in FY25 on other income ₹2,552 crore, then normalised to ₹785 crore in FY26 with TTM PAT ₹752 crore. That lumpy PAT history is central: the market capitalisation embeds margin recovery the TTM P&L only partly shows.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: Top line stabilised near ₹5,500 cr after the downcycle; TTM still down about 11% YoY.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [{ name: "Sales", values: [5398, 5330, 5748, 5485], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "End demand is millions of farmers reached through distributors and retailers across Latin America, Europe, North America, and Asia; no single customer dominates the consolidated revenue line in filings summarised on Screener. Concentration risk is geographic and product: Brazil and India seasons move quarterly sales sharply, and generic herbicide pricing can compress margins globally. Promoter Shroff family holding near 33.5% aligns long-term platform strategy with minorities. FII holding rose toward 42% through FY26 while the public float fell below 10%, suggesting global institutions are betting on cycle normalisation despite weak near-term cash conversion.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Crop protection remains the core, with seeds and biosolutions as higher-growth, higher-margin adjacencies. Screener premium insights on differentiated portfolio share are login-gated; management commentary on FY25 and H1 FY26 calls cites NPP and biosolutions as margin levers when channel inventory clears. FY25 mix was distorted by low operating profit while treasury gains lifted PAT. FY26 quarterly pattern showed Sep 2025 OPM near 20% on sales ₹1,512 crore, then Jun 2026 OPM fell to 3.4% on sales ₹1,397 crore, proving mix and seasonality still dominate short-term optics.",
  },
  seriesChart(
    "Operating margin % (consolidated, Screener)",
    "Conclusion: FY25 trough OPM 3% recovered on TTM but remains quarter-volatile.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [{ name: "OPM %", values: [7, 3, 7, 10], color: "#c27803" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: FY25 PAT inflated by other income; FY26 and TTM normalise lower.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [{ name: "PAT", values: [1208, 2939, 785, 752], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global agchem inventory cycles and generic pricing, especially in Latin America, move UPL's volumes and realisations. INR versus USD and BRL affects translation and input costs. Raw material and energy costs pass through with lag on some contracts. Indian monsoon and rabi seasons move domestic quarters. Regulatory bans or re-registrations on actives in export markets can accelerate or delay product launches. Working capital policy at distributors affects debtor days, which Screener shows at 210 at March 2026. Interest rates matter less for solvency given borrowings ₹869 crore versus investments ₹5,967 crore on the Mar FY26 balance sheet snapshot, but negative cash from operations makes treasury and other income politically important in reported PAT.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Operating profit fell from ₹402 crore in FY24 to ₹155 crore in FY25 before rising to ₹422 crore in FY26 with TTM ₹532 crore. PAT followed the other-income-driven FY25 spike then eased. Depreciation is modest near ₹125 crore in FY26 after prior year asset base changes on Screener. ROCE was 1% in FY25 and 9% in FY26, still below the mid-teens achieved in stronger cycle years. Dividend payout was 65% in FY26 with yield near 1.16% at the reference price, signalling shareholder returns even while CFO was deeply negative.",
  },
  seriesChart(
    "Operating profit vs PAT (₹ crore, consolidated)",
    "Conclusion: Other income separates PAT from OP; core recovery lags headline FY25.",
    ["FY24", "FY25", "FY26"],
    [
      { name: "Operating profit", values: [402, 155, 422], color: "#1e3a5f" },
      { name: "PAT", values: [1208, 2939, 785], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Cash from operations was negative ₹411 crore in FY24, negative ₹923 crore in FY25, and negative ₹2,243 crore in FY26 on Screener, while free cash flow was negative ₹1,091 crore, negative ₹1,211 crore, and negative ₹2,309 crore respectively. CFO to operating profit was negative 76% in FY24 and negative 622% in FY26, showing receivable and channel inventory build absorbed cash despite margin recovery in some quarters. Until CFO turns sustainably positive, trailing PAT and treasury-backed other income overstate economic cash generation available to equity holders.",
  },
  seriesChart(
    "Cash from operations (₹ crore, consolidated)",
    "Conclusion: Three consecutive years of negative CFO; WC release is the upgrade gate.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [-411, -923, -2243], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Debtor days vs working capital days",
    "Conclusion: WC days 289 at Mar FY26 versus negative 60 in FY24.",
    ["Mar FY24", "Mar FY26"],
    [
      { name: "Debtor days", values: [152, 210], color: "#1e3a5f" },
      { name: "WC days", values: [-60, 289], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "UPL is not a 2019-style leveraged blow-up on Screener's current snapshot: borrowings were ₹869 crore at March 2026 against investments ₹5,967 crore and reserves above ₹13,800 crore. Risk is liquidity and perception: sustained negative CFO with high debtor days can force working capital financing or asset sales even with low net debt. Generic price wars could keep OPM near 7% and trap ROCE below 10%. A repeat of FY25-style reliance on other income without operating follow-through would erode credibility with FIIs who added share through FY26. None of this implies imminent insolvency, but it can compress multiples from 47× TTM toward high 20s if TTM PAT stalls near ₹750 crore.",
  },
  seriesChart(
    "Borrowings vs investments (₹ crore, Mar FY26 standalone table)",
    "Conclusion: Treasury investments exceed borrowings; solvency cushion is real but CFO is not.",
    ["Mar FY25", "Mar FY26"],
    [
      { name: "Borrowings", values: [597, 869], color: "#c27803" },
      { name: "Investments", values: [5533, 5967], color: "#1e3a5f" },
    ],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The Shroff promoter group holds about 33.5% and has steered UPL from an Indian actives player into a global platform. Professional management runs regional crop protection businesses with incentives tied to market share, margin, and cash metrics in normal years. Promoter holding rose modestly from 32.5% toward 33.5% without pledge flags on Screener pros. Capital allocation balances dividends, R&D, and plants; the market is now focused on working capital discipline as the key execution test rather than another large acquisition.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "Management promised OpenAg growth, deleveraging, and working capital normalisation after the global inventory correction. Sales stabilised and OPM partially recovered, but working capital days rose to 289 and CFO worsened to negative ₹2,243 crore in FY26. FY25 PAT beat on other income while operating profit missed. NPP and biosolutions mix targets are cited on calls but segment proof awaits annual report notes. The dossier guidance log scores working capital as missed and balance sheet deleveraging as beat.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Channel inventory normalisation in Latin America and India as growers restock crop protection. Sustained double-digit OPM quarters like Sep 2025 if price/mix holds. NPP and biosolutions revenue share gains lifting blended margin toward 11% on FY27 sales near ₹6,200 crore. Working capital release if debtor days fall from 210 toward 170, flipping CFO positive. Cost optimisation across 43 manufacturing sites. These drivers can lift FY27 PAT toward our base ₹1,180 crore but require two consecutive quarters of sales above ₹1,550 crore with OPM above 12% and CFO above zero.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Global agchem destocking ends faster and UPL gains share in Brazil and India simultaneously. Sep 2025 style 20% OPM quarters become a run-rate rather than a spike. Biosolutions scale with premium multiples on segment disclosure. CFO exceeds ₹800 crore as WC days fall below 200. ROCE re-expands above 12% and the market re-rates toward 38× forward earnings. FY27 PAT could approach ₹1,550 crore and support our bull band near ₹698 per share.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Generic herbicide pricing collapses again while channel inventory stays elevated. Jun 2026 style 3% OPM quarters repeat through weak seasons. Other income fades without operating offset. Working capital days stay above 250 and CFO remains negative through FY27. PAT drifts toward ₹720 crore and equity toward our bear case near ₹188 per share at 22× earnings.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated PAT with price-to-earnings multiples suited to a global crop protection platform recovering from a trough (22× bear, 34× base, 38× bull), cross-checked with TTM operating profit ₹532 crore at 14× EV/EBITDA plus investments less borrowings implying roughly ₹148 per share if margins never recover. Bear FY27 PAT ₹720 crore implies about ₹188 per share (-64% vs ₹517 reference). Base PAT ₹1,180 crore implies about ₹475 (-8%). Bull PAT ₹1,550 crore implies about ₹698 (+35%). Base-case upside sits below our 15% Buy threshold, so the reference price already embeds substantial recovery beyond TTM PAT ₹752 crore.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base does not clear 15% upside; bull needs OPM and CFO together.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [188, 475, 698, 517], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener)",
    "Conclusion: Sep 2025 was a recovery quarter; Jun 2026 softened seasonally.",
    ["Sep-25", "Dec-25", "Mar-26", "Jun-26"],
    [{ name: "Sales", values: [1512, 1390, 1186, 1397], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly channel inventory commentary on Latin America and India concalls. Debtor days and working capital days each quarter on Screener. Separation of other income versus operating profit in results presentations. BSE/NSE concall transcripts for verbatim NPP and biosolutions metrics. Crop protection raw material cost trends in investor decks. Any change in promoter holding above the 33.5% band. Dividend declaration versus CFO recovery.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹517 reference. Base-case target near ₹475 offers about 8% downside versus reference, below our 15% Buy hurdle, while negative CFO keeps the name off aggressive Avoid unless operating margin collapses again. Upgrade to Buy if two consecutive quarters show consolidated sales above ₹1,550 crore with OPM above 13%, CFO above ₹200 crore, and debtor days falling below 190, lifting base FY27 PAT toward ₹1,350 crore and target above ₹595 (+15%). Downgrade to Avoid if TTM PAT falls below ₹650 crore with OPM below 7%, working capital days above 300, and CFO negative ₹1,500 crore over any trailing twelve-month window while borrowings rise above ₹1,500 crore.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack exchange-uploaded verbatim concall transcripts for every quarter cited; excerpts are curated pending BSE PDF replacement. Crop protection versus biosolutions versus seeds revenue and PBIT splits for FY26 require annual report segment notes not yet ingested in free sources. Screener insights on differentiated portfolio share and pipeline USD values are login-gated. Country-level sales concentration percentages are not modeled in sources used. Exact FY27 manufacturing rationalisation savings are not plant by plant. Consolidated versus standalone borrowings presentation on Screener needs reconciliation with FY26 annual report. Update bear, base, and bull when FY26 annual report segment and related-party notes publish.",
  },
];
