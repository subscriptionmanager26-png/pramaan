import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const sumichemMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Sumitomo Chemical India Ltd (NSE: SUMICHEM, BSE: 542920) is a Sumitomo Chemical Company-controlled Indian crop protection and specialty chemicals marketer with proprietary molecules from Japan, biological products from Valent Biosciences, and a broad generics portfolio following the Excel Crop Care integration. Promoter holding was 75.0% as of June 2026 on Screener, with DIIs near 9.3% and FIIs near 3.0%. The stock is in Nifty 500, Nifty Chemicals, and related mid-cap indices. At a reference price of ₹418 on 1 October 2026, market capitalisation is about ₹20,844 crore on roughly 49.9 crore shares (face value ₹10). Trailing consolidated price-to-earnings is near 36.5× on FY26 earnings, with book value about ₹67.9 per share and return on capital employed near 22.1%. The quote sits below the 52-week high of ₹573 and above the ₹363 low, reflecting a de-rating after sluggish five-year sales growth even as operating profit margin held near 21%.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Sumitomo Chemical India earns by selling insecticides, fungicides, herbicides, fumigants, rodenticides, plant nutrition, and bio-rational products to farmers through distributors and retailers, plus animal nutrition and environmental health lines in smaller buckets. Revenue is recognised on dispatch; pricing mixes parent-sourced specialty actives with Excel-acquired generics where pass-through and brand support determine gross margin. Payment cycles follow agrochemical seasonality: kharif and rabi peaks drive inventory and receivable swings, while field marketing and registration costs stay largely fixed through trough quarters. Backward integration on selected technicals and formulation plants support domestic supply, but the listed story is still primarily Indian branded agchem volume, specialty mix, treasury-backed other income, and operating leverage on a large fixed network.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Sumitomo Chemical India listed after combining the Indian marketing arm of Sumitomo Chemical Company with Excel Crop Care, creating one of the larger domestic crop protection platforms by revenue. Consolidated revenue moved from about ₹2,844 crore in FY24 to ₹3,149 crore in FY25 and near ₹3,238 crore in FY26 per Screener. PAT was near ₹370 crore in FY24, ₹506 crore in FY25, and about ₹543 crore in FY26 as operating profit reached ₹671 crore with margin near 21%. Five-year sales CAGR near 4% on Screener is modest for a quality agchem name, so the market prices a premium multiple on margin and balance sheet strength rather than high top-line growth.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: FY26 step-up; five-year sales CAGR near 4%.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Sales", values: [2844, 3149, 3238], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "End demand is millions of farmers reached through thousands of dealers; the Excel integration expanded distributor reach while parent-sourced specialty products anchor pricing in insecticides and fungicides. Dealer credit quality depends on monsoon timing and crop prices, so receivable days near ninety on Screener can widen in delayed seasons without signalling permanent bad debt. Promoter control at 75% aligns product and dividend policy with Sumitomo Chemical Company in Japan, while public float near 25% is large enough for index inclusion but still thin on FII ownership. Export and Africa customers add concentration at the registration level until multiple regions contribute meaningful revenue.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "The portfolio spans conventional chemistry from Sumitomo Chemical Company and biological products from Valent Biosciences, alongside Excel generics in herbicides and other molecules. Q2 FY26 commentary cited specialty insecticide and fungicide portfolios holding up better than herbicide categories exposed to discounting when spraying windows compress. Management emphasises mix shift toward proprietary and specialty lines over volume-only chasing in weak monsoon quarters. Animal nutrition and environmental health remain smaller but stable contributors. Exact specialty revenue share is login-gated on Screener insights, so our base case assumes mix improvement is gradual rather than step-change.",
  },
  seriesChart(
    "Operating profit margin % (consolidated, Screener)",
    "Conclusion: OPM near 21% in FY26; Q2 FY26 near 23%.",
    ["FY24", "FY25", "FY26", "Q2 FY26"],
    [{ name: "OPM %", values: [17, 20, 21, 23], color: "#c27803" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: FY26 PAT ₹543 cr; TTM higher on strong Q1 FY27.",
    ["FY24", "FY25", "FY26"],
    [{ name: "PAT", values: [370, 506, 543], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Indian monsoon distribution and acreage drive domestic volume; industry-wide agrochemical offtake can soften when kharif spraying delays as seen in peer commentary during FY26. Global generic active ingredient prices and China supply affect raw material costs, with pass-through lag visible in operating margin when herbicides are discounted. Regulatory scrutiny on pesticide bans and registration renewals creates both delay risk and opportunity for compliant portfolios. Rupee versus dollar moves import parity on technicals sourced from Japan and other regions. Peer re-rating in crop protection sets sector sentiment even when Sumitomo Chemical India is more specialty-weighted. Treasury yields and mark-to-market on investments move other income and can swing quarterly PAT despite stable operations.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Operating profit reached about ₹671 crore in FY26 on consolidated revenue near ₹3,238 crore, keeping OPM near 21%. Other income near ₹131 crore in FY26 added stability below the line from treasury and investments per Screener. Depreciation near ₹66 crore and interest near ₹8 crore are modest relative to scale. ROCE near 22.1% on Screener supports a quality premium but five-year sales CAGR near 4% caps how far a growth multiple can stretch without volume recovery. FY24 net cash from operations spiked near ₹757 crore on working capital release before normalising near ₹446 crore in FY26.",
  },
  seriesChart(
    "Operating profit vs PAT (₹ crore, consolidated)",
    "Conclusion: PAT growth aided by other income below OP.",
    ["FY24", "FY25", "FY26"],
    [
      { name: "Operating profit", values: [475, 633, 671], color: "#1e3a5f" },
      { name: "PAT", values: [370, 506, 543], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Net cash from operating activities was about ₹757 crore in FY24, ₹452 crore in FY25, and near ₹446 crore in FY26 on Screener cash flow tables, after working capital seasonality typical of agrochemical distributors. CFO to operating profit was near 91% in FY26, indicating acceptable conversion though inventory days near 166 and debtor days near 83 keep the cycle long. Free cash flow near ₹403 crore in FY26 per Screener shows the business still funds dividends and treasury builds without relying on debt. Until CFO stays above ₹450 crore through a weak monsoon year, headline PAT can overstate near-term distributable cash if other income fades.",
  },
  seriesChart(
    "Net cash from operations (₹ crore, consolidated)",
    "Conclusion: FY26 CFO normalised near ₹446 cr after FY24 spike.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Net CFO", values: [757, 452, 446], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Investments on balance sheet (₹ crore, consolidated)",
    "Conclusion: Liquid investments ₹1,153 cr Mar FY26.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Investments", values: [346, 524, 1153], color: "#c27803" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Sumitomo Chemical India is almost debt free on Screener with borrowings near ₹63 crore Mar FY26 against investments above ₹1,100 crore and reserves near ₹2,891 crore. Liquidity risk rises if inventory and receivables balloon simultaneously in two weak monsoon years, absorbing cash despite positive PAT. Large treasury balances introduce mark-to-market and reinvestment rate risk in other income. The main balance sheet sensitivity is working capital absorption and investment portfolio volatility, not refinancing risk, unless management pursued a debt-funded acquisition, which history does not suggest under 75% Japanese promoter control.",
  },
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "Sumitomo Chemical Company holds 75% and supplies proprietary product lines that anchor domestic positioning. Local management runs the Excel-integrated network with emphasis on specialty mix, distributor coverage, and registration pipeline. Dividend payout near 12% in FY26 on Screener is lower than the five-year average near 34% cited in pros, leaving room to reinvest in working capital and registrations. Public float near 25% with rising DII ownership near 9% adds some institutional discipline. Incentive alignment looks reasonable if management prioritises OPM and specialty mix over reckless herbicide volume targets in weak seasons.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "Management entered FY26 targeting steady revenue growth through specialty portfolio and Excel network scale while protecting OPM above 20%. FY26 revenue near ₹3,238 crore delivered modest growth, but five-year sales CAGR near 4% shows the recovery is not yet a high-growth rerating story. Margin promises largely held: OPM near 21% with Q2 FY26 near 23%. International expansion remains in progress with Africa cited as a pillar while free sources lack full revenue split. Balance sheet promises were met with almost debt free metrics and rising investments. Working capital discipline was mixed: cash conversion cycle near 163 days Mar FY26 on Screener.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Recovery in domestic agrochemical volumes after normal monsoon distribution is the first lever. Second is scaling parent-sourced specialty and biological products that carry better margins than generic herbicides. Third is export and Africa merchandise as registrations convert to shipments. Fourth is backward integration and formulation efficiency lowering per-tonne costs as utilisation stabilises. Fifth is disciplined use of treasury and almost debt free balance sheet to fund registrations without equity dilution. None of these require equity issuance, which keeps the story focused on execution, mix, and working capital discipline.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Normal monsoon with favourable rabi and kharif distribution lifts volume mid single digits without heavy discounting. Raw material inflation passes through with limited lag, holding OPM above 22%. Specialty launches gain share quickly in rice and horticulture, shifting mix away from discounted herbicides. Export and Africa lines contribute measurable revenue and diversify domestic weather risk. Net CFO exceeds ₹500 crore as inventory normalises post season. ROCE re-tests 25% and the market sustains a 40× forward earnings multiple. FY27 PAT could approach ₹720 crore and support our bull band near ₹577 per share.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Another weak or uneven monsoon keeps industry volumes flat and forces herbicide discounting. Operating margin compresses toward 17% on fixed field costs. Treasury other income normalises lower, cutting PAT growth despite stable operations. Working capital days rise with CFO below ₹350 crore. FY27 PAT could fall toward ₹480 crore and equity toward our bear case near ₹269 per share at 28× earnings.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated PAT with price-to-earnings multiples suited to a parent-backed specialty agchem franchise (28× bear, 36× base, 40× bull), cross-checked with FY26 operating profit near ₹671 crore at 12× EV/EBITDA less net cash near ₹900 crore implying a much lower operating-earnings floor, so the market clearly pays for quality and treasury optionality. Bear FY27 PAT ₹480 crore implies about ₹269 per share (-36% vs ₹418 reference). Base PAT ₹640 crore implies about ₹462 (+11%). Bull PAT ₹720 crore implies about ₹577 (+38%). Base case does not clear the 15% upside hurdle versus reference at a 36.5× trailing multiple.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base near ₹462; below 15% Buy hurdle at ₹418.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [269, 462, 577, 418], color: "#1e3a5f" }],
  ),
  seriesChart(
    "ROCE % (consolidated, Screener)",
    "Conclusion: ROCE near 22% supports quality premium, not hyper-growth.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE", values: [20, 25, 22.1], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue and OPM on BSE/NSE results with specialty mix commentary on investor decks. Monsoon and rabi acreage updates from IMD and Ministry of Agriculture. Export and Africa registration milestones on exchange filings. Debtor, inventory, and payable days each quarter on Screener. Treasury and investment balance changes affecting other income. Herbicide category pricing versus raw material indices. Promoter holding steady at 75%. Dividend declarations relative to PAT and registration capex. Regulatory updates on pesticide ban lists affecting portfolio molecules. Excel integration cost synergy disclosures if management provides them.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹418 reference. Base-case target near ₹462 per share offers about 11% upside, below the 15% Buy threshold while trailing P/E near 36.5× embeds quality. Upgrade toward Buy if two consecutive quarters show revenue above ₹850 crore with YoY growth, OPM above 22%, and base FY27 PAT revised above ₹680 crore with target above ₹481 (+15%). Downgrade toward Avoid if FY27 revenue stays below ₹3,150 crore with OPM below 18%, other income falls sharply, and PAT trends toward ₹480 crore with CFO below ₹350 crore. Maintain Neutral if specialty mix improves but five-year sales CAGR stays below 6% and the stock trades above 34× forward earnings without volume confirmation.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack exchange-uploaded verbatim concall transcripts for every quarter cited; excerpts are curated pending BSE PDF replacement. Exact specialty versus generic revenue share and herbicide mix require annual report segment notes not yet ingested line by line. Export and Africa order book size and customer concentration are not broken out in free sources used. Plant-wise EBITDA for Excel integration assets is management commentary only. Screener insight fields for branded product share are login-gated. Treasury mark-to-market detail per quarter is not fully parsed. Update bear, base, and bull when FY26 annual report segment and related-party notes publish.",
  },
];
