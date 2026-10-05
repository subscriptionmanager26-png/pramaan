import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const cleansciMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Clean Science and Technology Ltd (NSE: CLEAN, BSE: 543782) manufactures specialty performance chemicals including hindered amine light stabilisers (HALS), monomethyl ether of hydroquinone (MEHQ), and newer performance and pharma intermediates through a debt-free, backward-integrated platform. Promoter holding was about 74.9% as of June 2026 on Screener, with FIIs near 7.8% and DIIs near 7.2%. The stock is in Nifty 500 and related mid-cap indices. At a reference price of ₹803 on 1 October 2026, market capitalisation is about ₹8,535 crore on roughly 10.63 crore shares (face value ₹1). Trailing consolidated price-to-earnings is near 34.4 on TTM earnings per share about ₹23.33, with book value about ₹149 per share and return on capital employed near 20.7%. The quote sits below the 52-week high of ₹1,112 and above the ₹652 low after a multi-year de-rating while FY26 profit after tax fell to ₹230 crore from ₹264 crore in FY25.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Clean Science earns formulation margin on catalytic, solvent-free processes for HALS and performance chemicals sold under long customer qualification cycles to global polymer, coatings, and pharma formulators. Revenue is recognised largely on dispatch; hydroquinone, catechol, and energy costs flow through cost of materials with a lag on export contracts, so operating profit margin compresses when Chinese competitors cut prices on established grades. Payment cycles run through debtor days near mid-thirties Mar FY26 and inventory near fifty days, so net cash from operations can trail profit after tax when the company builds stock ahead of Performance Chemical ramp, as FY26 demonstrated when profit after tax was ₹230 crore and net cash from operations ₹278 crore.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Clean Science listed in 2021 after two decades as a private specialty chemical manufacturer with industry-leading margins on HALS. Consolidated revenue moved from ₹791 crore in FY24 to ₹967 crore in FY25 before easing to ₹957 crore in FY26 with TTM sales near ₹982 crore. Operating profit margin peaked near forty-two percent in FY24 before compressing toward thirty-seven percent in FY26 as China export dynamics weighed on legacy products. Reported profit after tax rose from ₹244 crore in FY24 to ₹264 crore in FY25 then fell to ₹230 crore in FY26 with TTM profit after tax near ₹248 crore. Capital work in progress and investments in Clean Fino Chem Ltd. rose sharply while borrowings stayed at zero, signalling Performance Chemical expansion without leverage.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: TTM re-accelerated after FY26 plateau.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "Sales", values: [791, 967, 957, 982], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Paying customers include global polymer stabiliser, coatings, and pharma intermediate buyers that require multi-year validation for HALS and MEHQ grades. Company materials cite export exposure and leadership in select molecules; Screener premium gates exact customer counts and top-account concentration time series. Promoter control near seventy-five percent supports patient capex on Performance Chemical 1 and 2, while FII holding near eight percent leaves re-rating tied to margin proof after the FY26 trough. Concentration risk is moderate: prolonged Chinese dumping on legacy grades or delayed Performance Chemical utilisation can still move consolidated operating profit by tens of crore rupees per quarter.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "The portfolio spans established HALS and MEHQ, performance chemicals under Clean Fino Chem, and newer launches management targets above twenty-five percent of revenue. FY25 investor materials highlighted performance and pharma segments leading growth; FY26 saw softer quarters on legacy products while HALS monthly run-rate improved toward two hundred sixty tons per month in Q2 FY26 per the earnings call. Q1 FY27 revenue ₹268 crore with operating profit margin thirty-six percent shows sequential recovery from the Dec 2025 quarter when OPM touched thirty-three percent. Performance Chemical 1 at ten thousand tons nameplate could add about ₹300 crore revenue at full utilisation and current prices by FY28, not fully in the base case.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: Margin compressed from FY24 peak but stays peer-leading.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "OPM %", values: [42, 40, 37, 36], color: "#2d6a4f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Chinese export pricing on HALS and related intermediates moves Clean Science spreads before customer formula resets catch up. Global polymer and coatings demand drives volume; destocking and competition compressed FY26 earnings while HALS run-rate improved into FY27. Rupee volatility affects export realisations with partial natural hedge on imported raw materials. Indian specialty chemical peer re-rating (Vinati Organics and Galaxy Surfactants in this repo) sets sentiment for premium-niche names. The forty-six percent peak-to-trough share price decline from historical highs can dominate short-term action even when Q1 FY27 profit after tax rebounds.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Five-year revenue compound growth near twenty-two percent on Screener masks the FY26 pause when sales dipped slightly from FY25 despite FY24 starting point ₹791 crore. Operating profit followed: ₹332 crore FY24, ₹388 crore FY25, ₹356 crore FY26. Profit after tax moved ₹244 crore, ₹264 crore, and ₹230 crore across the same years. Return on capital employed fell from high twenties toward twenty-one percent as capital employed rose on subsidiary capex. Dividend payout near one percent yield at reference reflects reinvestment priority on Performance Chemical assets.",
  },
  seriesChart(
    "Reported profit after tax (₹ crore)",
    "Conclusion: PAT troughed in FY26 before TTM recovery.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [244, 264, 230, 248], color: "#c27803" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "FY26 net cash from operating activities ₹278 crore exceeded profit after tax ₹230 crore, with CFO to operating profit near seventy-eight percent. FY25 net cash from operations ₹305 crore and FY24 ₹285 crore show conversion stayed strong despite capex on Clean Fino Chem. Capital expenditure consumed cash but borrowings stayed zero, so free cash flow after dividends depended on how aggressively management spent on Performance Chemical 2. If inventory rebuilds ahead of export shipments, profit after tax can lag net cash from operations temporarily without signalling earnings quality issues.",
  },
  seriesChart(
    "Net cash from operations (₹ crore)",
    "Conclusion: CFO remained solid through FY26 capex.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [285, 305, 278], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings zero Mar FY26 against reserves above ₹1,500 crore leave balance-sheet risk low unless management levered a large acquisition, which is not in guidance. Capital work in progress and investments in the subsidiary tie up cash but are funded from internal accruals and listed cash balances. Contingent liabilities and related-party exposures need annual report footnotes; none flagged in public Screener alerts beyond routine tax disputes typical for exporters. A prolonged stretch of sub-thirty percent operating profit margin with negative free cash flow after capex would be the early warning, not gross leverage.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Debt free.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [0, 0, 0], color: "#c27803" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The Sikchi family founded Clean Science and retains majority control with Siddharth Sikchi as managing director running operations and capex execution. Executive compensation ties to profitability and capacity milestones per annual report norms; detailed pay ratios are in the full filing. Dividend payout near four rupees per share in FY25 offers minority holders modest cash return while promoters reinvest through retained earnings into Performance Chemical lines. Insider trading windows and promoter pledging are monitored on exchange filings; Screener shows no alarming pledge spike as of October 2026. Alignment is reasonable for a family-controlled specialty franchise with global process moats.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY25 guidance for record revenue and high-thirties margins was met with ₹967 crore sales and forty percent OPM. FY26 margin ambition into high-thirties was partially met at thirty-seven percent OPM full year but missed in weak quarters. Balance sheet guidance to stay debt free was met with zero borrowings. FY27 HALS volume ramp and Performance Chemical revenue toward ₹300 crore potential by FY28 is pending; Q1 FY27 revenue ₹268 crore and profit after tax ₹73 crore support volume but need H2 confirmation.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "HALS monthly run-rate above two hundred fifty tons adds high-margin volume without greenfield risk on the core asset base. Performance Chemical 1 utilisation crossing fifty percent adds revenue with backward-integrated spreads when Chinese prices normalise. Hydroquinone and catechol commercialisation moderates raw material cost on downstream grades per management commentary. Operating leverage on fixed catalytic plants drops incremental revenue to profit at high marginal rates when utilisation rises. Debt-free funding keeps return on equity from dilution while capex completes.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "A bull case sees Performance Chemical mix rise, operating profit margin sustain high-thirties in H2 FY27, and export volumes accelerate, lifting profit after tax near ₹360 crore at thirty-three times multiple and re-rating the stock toward ₹1,118 per share as return on capital employed returns toward twenty-six percent. Faster-than-guided FY28 revenue on Performance Chemical 1 at normalized prices adds upside not in the base case.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "A bear case keeps operating profit margin near thirty-two percent on extended China pricing pressure, leaving profit after tax near ₹240 crore at twenty-eight times multiple and ₹632 per share, down roughly twenty-one percent from reference. Prolonged capex delays with free cash flow negative after dividends would force investors to haircut quality multiples despite promoter control.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated profit after tax with price-to-earnings multiples suited to a debt-free green-chemistry leader with HALS moat and Performance Chemical optionality (28× bear, 31× base, 33× bull), cross-checked with TTM operating profit near ₹352 crore at fourteen times EV/EBITDA when net debt is negligible. Bear FY27 profit after tax ₹240 crore implies about ₹632 per share (-21% vs ₹803 reference). Base profit after tax ₹320 crore implies about ₹933 (+16%). Bull profit after tax ₹360 crore implies about ₹1,118 (+39%). Base case clears the fifteen percent upside hurdle versus reference if management delivers high-single-digit FY27 revenue with average operating profit margin near thirty-eight percent and HALS run-rate holds without further China price cuts.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base clears Buy hurdle on PAT × P/E.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [632, 933, 1118, 803], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener consolidated)",
    "Conclusion: Jun 2026 quarter at recent peak.",
    ["Jun-25", "Sep-25", "Dec-25", "Mar-26", "Jun-26"],
    [{ name: "Sales", values: [243, 245, 220, 249, 268], color: "#c27803" }],
  ),
  seriesChart(
    "Return on capital employed %",
    "Conclusion: ROCE fell as capex rose; recovery tied to utilisation.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE %", values: [28, 26, 21], color: "#2d6a4f" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, operating profit margin, and profit after tax on BSE/NSE results. HALS tonnage and Performance Chemical revenue when investor decks publish. China export pricing and forex commentary on concalls. Inventory days, capital work in progress, and subsidiary investments each quarter. Performance Chemical 1 and 2 commissioning updates. Dividend policy and FII holding changes. Hydroquinone and catechol commercialisation milestones.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Buy at ₹803 reference. Base-case target near ₹933 per share implies about sixteen percent upside with confirming high-single-digit FY27 revenue trajectory, average operating profit margin near thirty-eight percent, and net cash from operations above ₹300 crore while borrowings stay zero. Upgrade toward bull if two consecutive quarters show consolidated operating profit margin at or above thirty-eight percent with TTM profit after tax run-rate above ₹300 crore. Downgrade toward Neutral if operating profit margin falls below thirty-four percent with TTM net cash from operations below ₹260 crore. Downgrade toward Avoid if China pricing forces sub-thirty percent OPM for a full year or management levered above ₹200 crore borrowings without matching Performance Chemical revenue.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack verbatim BSE-uploaded concall PDFs for every quarter cited; excerpts are curated from the November 2025 earnings call transcript and MD&A pending full ingestion. HALS versus Performance Chemical revenue splits and export share are login-gated on Screener. Exact utilisation percentages for Performance Chemical 1 need investor presentation updates. Segment profit for Clean Fino Chem Ltd. is not fully disaggregated in free filings. Update bear, base, and bull when consolidated segment EBIT and volume metrics publish in the annual report.",
  },
];
