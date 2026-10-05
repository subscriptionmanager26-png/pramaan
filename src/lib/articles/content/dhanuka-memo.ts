import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const dhanukaMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Dhanuka Agritech Ltd (NSE: DHANUKA, BSE: 507717) is a promoter-led Indian agrochemical company manufacturing and marketing herbicides, insecticides, fungicides, and plant growth regulators through a nationwide dealer network. Promoter holding was about 69.8% as of June 2026 on Screener, with DIIs near 18.7% and FIIs near 1.6%. The stock is in BSE Commodities and related mid-cap indices. At a reference price of ₹935 on 1 October 2026, market capitalisation is about ₹4,168 crore on roughly 4.46 crore shares (face value ₹2). Trailing consolidated price-to-earnings is near 14.3× on FY26 earnings, with book value about ₹311 per share and return on equity near 22%. The quote sits well below the 52-week high of ₹1,585 and above the ₹890 low, reflecting a sharp one-year de-rating even as ROCE stayed near 28%.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Dhanuka earns by selling branded crop protection products to farmers through distributors and retailers, plus select export and institutional channels. Revenue is recognised on dispatch; pricing mixes generic molecules with differentiated 9(3) registrations and innovator tie-ups where Dhanuka can earn better gross margins. Payment cycles follow agrochemical seasonality: kharif and rabi peaks drive inventory and receivable swings, while field marketing and farmer meetings remain a fixed cost through trough quarters. The Dahej technical hub supports domestic supply and export opportunities, but the listed story is still primarily domestic branded agchem volume, price/mix, and operating leverage.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Dhanuka built a research-led portfolio with more than three hundred registrations and about ninety active products across crop protection segments, expanding from a northern India base to nationwide reach over two decades. Consolidated revenue moved from about ₹1,759 crore in FY24 to ₹2,035 crore in FY25 and near ₹2,020 crore in FY26 per BSE filings cited on Screener. PAT rose from ₹239 crore in FY24 to ₹297 crore in FY25 before easing to about ₹287 crore in FY26 as industry volumes softened during an abnormal kharif. Operating profit margin held near 20% in FY26 despite the revenue pause, but the share price fell about 39% over one year on Screener, so the market prices a slower growth path than the ROCE profile suggests.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, company filings)",
    "Conclusion: FY25 step-up; FY26 flat on industry volume headwinds.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Sales", values: [1759, 2035, 2020], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "End demand is millions of farmers reached through thousands of dealers; management emphasises field demonstrations and agronomy support, which spreads customer concentration relative to single-export molecule stories. Dealer credit quality depends on monsoon timing and crop prices, so receivable days can widen in delayed seasons without signalling permanent bad debt. Promoter control above two-thirds aligns product and dividend policy with the Agarwal family, while DII ownership near high teens adds some institutional liquidity. FII ownership near 1.6% in June 2026 is thin, which can amplify volatility when global agchem sentiment weakens.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "In Q2 FY26 management cited insecticides at about 46% of turnover, fungicides 29%, herbicides 9%, and others 16%. Herbicide softness in that quarter hit the top line, while insecticides and specialty formulations carried mix. Recent launches such as Lanevo (insecticide), Miyako (acaricide), and rice herbicide Dinkar aim to shift mix toward higher-margin differentiated products over generics. Fungicides remain a stable contributor through crop disease cycles. The strategic intent is more 9(3) molecules and innovator partnerships over the next two years rather than discount-led volume chasing in commoditised herbicides.",
  },
  seriesChart(
    "Q2 FY26 revenue mix (% of turnover, management)",
    "Conclusion: Insecticides lead; herbicides only 9% in the quarter cited.",
    ["Insecticides", "Fungicides", "Herbicides", "Others"],
    [{ name: "Mix %", values: [46, 29, 9, 16], color: "#c27803" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: FY25 peak; FY26 modest decline on volume.",
    ["FY24", "FY25", "FY26"],
    [{ name: "PAT", values: [239, 297, 287], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Indian monsoon distribution and acreage drive domestic volume; management on the Q2 FY26 discussion cited abnormal kharif weather that reduced industry-wide agrochemical offtake. Global generic active ingredient prices and China supply affect raw material costs, with pass-through lag visible in OPM when herbicides are discounted. Regulatory changes on registrations and 9(3) compliance create both opportunity and delay risk for new launches. Rupee versus dollar moves import parity on technicals. Peer re-rating in crop protection (PI Industries, UPL, Rallis) sets sector sentiment even when Dhanuka is more domestic branded. Working capital and channel inventory ahead of rabi can swing quarterly PAT despite stable full-year margins.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Operating profit reached about ₹417 crore in FY25 and near ₹403 crore in FY26 on Screener consolidated figures, keeping OPM near 20%. Other income near ₹36 crore in FY25 added stability below the line. Depreciation rose with Dahej and formulation capex, but interest expense stayed near ₹5 crore given minimal leverage. ROCE near 28% and ROE near 22% in FY26 remain strong versus many agchem peers, supporting the argument that the de-rated multiple reflects growth fears more than balance sheet stress. Five-year sales CAGR near 13% on Screener contrasts with a flat FY26 year, highlighting cyclicality in the domestic channel.",
  },
  seriesChart(
    "Operating profit vs PAT (₹ crore, consolidated)",
    "Conclusion: OP held near ₹400 cr while PAT eased slightly in FY26.",
    ["FY24", "FY25", "FY26"],
    [
      { name: "OP", values: [327, 417, 403], color: "#1e3a5f" },
      { name: "PAT", values: [239, 297, 287], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Net cash from operating activities was about ₹263 crore in FY25 and near ₹240 crore in FY26 per Screener cash flow tables, after working capital seasonality. CFO to operating profit was near 86% in FY25, indicating acceptable conversion though not as strong as FY23. Inventory days near 132 and debtor days near 82 at March FY25 on Screener show normal agchem working capital intensity. Free cash flow was positive in FY25 and FY26 despite capex on plants and registrations. Until CFO stays above ₹250 crore through a weak monsoon year, headline PAT can overstate near-term distributable cash.",
  },
  seriesChart(
    "Net cash from operations (₹ crore, consolidated)",
    "Conclusion: FY26 CFO remained strong despite flat revenue.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Net CFO", values: [134, 263, 240], color: "#1e3a5f" }],
  ),
  seriesChart(
    "ROCE % (consolidated, Screener)",
    "Conclusion: ROCE near 28% supports quality premium argument.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE", values: [27, 28, 28.3], color: "#c27803" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Dhanuka is almost debt free on Screener with borrowings near ₹70 to ₹74 crore versus reserves above ₹1,390 crore Mar FY25. Liquidity risk is low unless management levered up for a large acquisition, which history suggests is unlikely under promoter control. Working capital blowouts from channel stuffing or receivable slippage in a bad monsoon could still absorb cash without threatening solvency. Capex overruns at Dahej or delayed 9(3) launches would depress ROCE before they break covenants. The main balance sheet sensitivity is opportunity cost of elevated inventory, not refinancing risk.",
  },
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The Agarwal promoter group holds about 70% and has led the company for decades with a farmer-outreach brand strategy. Executive compensation is not load-bearing in our sources, but capital allocation emphasises organic growth, dividends, and maintaining a net cash or near net cash posture. Public float near 10% is small, so minority holders depend on governance quality and disclosure rather than activist pressure. Incentive alignment looks reasonable if management continues to prioritise ROCE and 9(3) mix over reckless volume targets in weak seasons.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "Management entered FY26 targeting high single-digit revenue growth through new launches and deeper field reach. FY26 revenue near ₹2,020 crore missed that volume ambition because abnormal kharif weather cut industry offtake, and guidance was lowered on the Q2 FY26 call. Margin promises fared better: OPM stayed near 20% full year with Q2 at 23% on mix. Product pipeline commitments remain in progress, with Lanevo, Miyako, and Dinkar cited as successful launches in select crops while full-year contribution still builds. Working capital discipline was partial but acceptable: CFO stayed positive even as inventory rose seasonally.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Recovery in domestic agrochemical volumes after normal monsoon distribution is the first lever. Second is scaling 9(3) and specialty formulations that carry better margins than generic herbicides. Third is export and institutional opportunities from Dahej technical capacity as registrations mature. Fourth is fungicide and insecticide depth in rice, cotton, and horticulture where Dhanuka already has brand recall. Fifth is operating leverage on fixed field and R&D spend if revenue re-accelerates toward high single digits. None of these require leverage, which keeps the equity story focused on execution and mix.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Normal monsoon with favourable rabi and kharif distribution lifts volume high single digits without heavy discounting. Raw material inflation passes through with limited lag, holding OPM above 21%. New 9(3) launches gain share quickly in rice and cotton, shifting mix toward insecticides and fungicides above 80% of incremental revenue. Dahej utilisation rises and export lines contribute measurable revenue. Net CFO exceeds ₹280 crore as inventory normalises post season. ROCE re-tests 30% and the market re-rates Dhanuka toward 18× forward earnings. FY27 PAT could approach ₹335 crore and support our bull band near ₹1,350 per share.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Another weak or uneven monsoon keeps industry volumes flat and forces herbicide discounting. Q2-style mix pressure repeats with herbicides stuck below 10% of revenue while generics compress OPM toward 17%. Delayed 9(3) registrations push out launch contributions. Working capital days rise above 180 with CFO below ₹180 crore. Export opportunities from Dahej under-deliver. FY27 PAT could fall toward ₹265 crore and equity toward our bear case near ₹832 per share at 14× earnings.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated PAT with price-to-earnings multiples suited to a high-ROCE domestic agchem franchise (14× bear, 16× base, 18× bull), cross-checked with FY26 operating profit near ₹403 crore at 12× EV/EBITDA less net cash near ₹150 crore implying about ₹897 per share before any quality premium. Bear FY27 PAT ₹265 crore implies about ₹832 per share (-11% vs ₹935 reference). Base PAT ₹300 crore implies about ₹1,076 (+15%). Bull PAT ₹335 crore implies about ₹1,350 (+44%). Base case clears the 15% upside hurdle versus reference, unlike many de-rated agchem names where recovery is already in the quote.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base clears 15% upside; bear reflects prolonged volume weakness.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [832, 1076, 1350, 935], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener)",
    "Conclusion: Mar and Jun 2025 quarters show seasonal pattern; watch Sep 2025 recovery.",
    ["Jun-24", "Sep-24", "Dec-24", "Mar-25"],
    [{ name: "Sales", values: [494, 654, 445, 442], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue and OPM on BSE/NSE results with segment mix commentary on concalls. Monsoon and rabi acreage updates from IMD and Ministry of Agriculture. New 9(3) registration and launch announcements on exchange filings. Debtor and inventory days each quarter on Screener. Dahej plant utilisation or export order commentary when management discloses. Herbicide category pricing versus raw material indices. Promoter holding changes above 70% band. Dividend declarations relative to PAT and capex plans.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Buy at ₹935 reference. Base-case target near ₹1,076 per share offers about 15% upside with confirming volume recovery, stable OPM near 19%, and CFO above ₹220 crore. Upgrade toward bull if two consecutive quarters show revenue above ₹550 crore with YoY growth, OPM above 22%, and herbicide mix stabilising above 12% of revenue while 9(3) launches scale. Downgrade toward Neutral if FY27 revenue stays below ₹2,050 crore with OPM below 18% and CFO below ₹180 crore, cutting base PAT toward ₹280 crore and target below ₹935. Downgrade toward Avoid if PAT falls below ₹240 crore with working capital days above 200 and ROCE below 22% while capex continues without revenue follow-through.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack exchange-uploaded verbatim concall transcripts for every quarter cited; excerpts are curated pending BSE PDF replacement. Dahej plant revenue and export customer concentration are not broken out in free sources used. Exact 9(3) revenue share requires annual report segment notes not yet ingested line by line. Dollar export order book size is not disclosed. Farmer reach and distributor count on Screener insights are login-gated. Update bear, base, and bull when FY26 annual report segment and related-party notes publish.",
  },
];
