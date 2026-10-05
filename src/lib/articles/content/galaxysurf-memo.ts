import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const galaxysurfMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Galaxy Surfactants Ltd (NSE: GALAXYSURF, BSE: 542724) manufactures performance surfactants and specialty care products used in home care, personal care, hair care, oral care, skin care, and cosmetics, with more than two hundred five product grades supplied to multinational and Indian FMCG brands. Promoter holding was about 70.9% as of June 2026 on Screener, with FIIs near 3.8% and DIIs near 13.5%. The stock is in BSE Commodities and BSE 1000. At a reference price of ₹2,377 on 1 October 2026, market capitalisation is about ₹8,427 crore on roughly 3.55 crore shares (face value ₹10). Trailing consolidated price-to-earnings is near 23.2 on TTM earnings per share about ₹99.79, with book value about ₹774 per share and return on capital employed near 13.5%. The quote sits below the 52-week high of ₹2,659 and above the ₹1,510 low after a six percent one-year price rise while TTM profit after tax rebounded above the FY26 annual print.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Galaxy earns formulation margin on oleochemical-based surfactants and higher-value specialty care actives sold to FMCG formulators in India and abroad. Revenue is recognised largely on dispatch; fatty alcohol, ethylene oxide, and palm-derived feedstock costs flow through cost of materials with a lag, so operating profit margin swings when raw material indices move faster than customer price resets. Payment cycles run through debtor days near fifty-two Mar FY26 and inventory near seventy-six days, so net cash from operations can lag operating profit when management builds inventory ahead of customer qualifications, as FY26 demonstrated when profit after tax fell to ₹267 crore but TTM profit after tax recovered to ₹354 crore after the Jun 2026 quarter.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Galaxy listed in 2018 after decades as a private surfactant leader and scaled into one of India’s largest oleochemical surfactant platforms. Consolidated revenue moved from ₹3,792 crore in FY24 to ₹4,221 crore in FY25 and ₹5,245 crore in FY26 with TTM sales near ₹5,752 crore. Operating profit margin peaked near sixteen percent in FY21 before compressing toward nine percent in FY26 as feedstock volatility and competitive pricing weighed. Reported profit after tax fell from ₹301 crore in FY24 to ₹267 crore in FY26 with TTM profit after tax near ₹354 crore. Borrowings rose modestly from ₹210 crore Mar FY25 to ₹235 crore Mar FY26 while investments reached ₹474 crore and capital work in progress ₹181 crore, signalling continued specialty care expansion without stressing leverage.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: Accelerating TTM growth into FY26.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "Sales", values: [3792, 4221, 5245, 5752], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Paying customers include global and regional home and personal care brands that require long qualification cycles for surfactant and specialty care grades. Company materials cite preferred supplier relationships with leading multinationals and local FMCG names; Screener premium gates exact customer counts and top-account concentration time series. Promoter control near seventy-one percent supports patient capex and R&D, while FII holding near four percent leaves re-rating tied to margin proof after FY26 compression. Concentration risk is moderate: loss of a major global account or a prolonged feedstock down-cycle with delayed pass-through can still move consolidated operating profit by tens of crore rupees per quarter.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Performance surfactants remain the volume base for detergents, shampoos, and home care formulations, while specialty care products carry higher value per tonne in skin care, hair care, and cosmetics actives. FY25 MD&A emphasised faster growth in specialty care even when performance surfactant pricing was competitive. Exact segment revenue splits require investor presentations or premium datasets; investors should treat mix shift toward specialty care and export personal care as the central bull case for margin re-expansion toward the low-to-mid teens band management guides for FY27.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: FY26 trough; Q1 FY27 rebound to fourteen percent.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "OPM %", values: [12, 11, 9, 10], color: "#c27803" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: FY26 dip; TTM recovery on Jun 2026 quarter.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [301, 305, 267, 354], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Fatty alcohol, palm oil, and ethylene oxide linked feedstock prices dominate input costs; management flagged quarterly margin swings of three to four points on raw material timing. Global home and personal care demand and inventory destocking cycles at multinational customers affect volume. INR moves matter on export realisations. Peer multiples for Indian surfactant and specialty chemical names with similar FMCG exposure anchor sentiment. The trailing price-to-earnings near twenty-three times shows the market pays for balance-sheet quality and customer relationships, but FY26 margin compression capped re-rating until Q1 FY27 printed fourteen percent operating profit margin.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Five-year revenue compounded near fourteen percent on Screener while profit compounded near negative two percent over five years, illustrating that volume growth did not fully protect earnings through the FY26 margin trough. FY24 operating profit near ₹462 crore on ₹3,792 crore revenue kept OPM at twelve percent. FY26 operating profit near ₹467 crore on ₹5,245 crore revenue held OPM at nine percent despite higher sales. Return on capital employed fell from seventeen percent FY24 to fourteen percent FY26 as the asset base and investments expanded. Dividend payout near twenty-nine percent FY26 shows management still returns cash while funding specialty care capex.",
  },
  seriesChart(
    "Operating profit (₹ crore, consolidated)",
    "Conclusion: TTM OP recovering with Jun 2026 quarter.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "OP", values: [462, 484, 467, 601], color: "#2d6a4f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Cash conversion softened in FY26 but remained positive. FY25 net cash from operations was ₹421 crore on operating profit ₹484 crore. FY26 net cash from operations fell to ₹333 crore while operating profit was ₹467 crore and free cash flow was ₹198 crore after capex on Screener. Inventory days near seventy-six and strategic builds ahead of qualifications explain part of the gap. Until CFO re-tests at least ninety percent of operating profit with inventory days stable, the market can cap the multiple even if profit after tax prints new highs, but FY26 free cash flow positive status reduces tail risk versus leveraged peers.",
  },
  seriesChart(
    "Net cash from operations (₹ crore)",
    "Conclusion: FY26 CFO below FY24 peak but positive FCF.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [518, 421, 333], color: "#c27803" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings near ₹235 crore Mar FY26 against reserves ₹2,709 crore are manageable, and listed investments near ₹474 crore provide liquidity optionality. If feedstock spikes coincide with customer payment delays and capex on specialty assets accelerates, gross debt could rise above ₹350 crore before new lines contribute cash. Promoter holding stability and decades of internal accrual funding reduce tail risk; this remains one of the lower-leverage surfactant platforms in the Indian mid-cap set, unlike names with borrowings above ₹400 crore in this repo.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Modest leverage versus reserves.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [187, 210, 235], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The Shah family promoter group has led Galaxy since incorporation in 1986 with holding near seventy-one percent, aligning long-cycle customer qualifications and specialty care R&D with insider ownership. Dividend payout near twenty percent over the last decade shows willingness to share cash when margins allow, while FY26 payout rose even as reported profit after tax dipped. Employee and compliance costs trend with scale; revenue per employee should improve if specialty care mix rises without proportional headcount growth.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "Management promised FY25 revenue growth, conservative leverage, and low-teens operating profit margin through FY26. FY25 revenue met at ₹4,221 crore but FY26 margin missed at nine percent OPM. Balance sheet guidance met with borrowings still modest. Q1 FY27 revenue near ₹1,782 crore and operating profit margin near fourteen percent support the FY27 double-digit growth and margin normalisation outlook, but full-year average margin remains pending. The dossier guidance log scores FY26 margin as missed and FY27 outlook as pending.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Volume growth tied to Indian and export home and personal care demand, specialty care grade launches, and customer wins after qualification cycles drive the revenue bridge. Operating profit margin moving from nine percent FY26 toward twelve percent FY27 on mix and pass-through is the main earnings lever. Debottlenecking and specialty care capex from capital work in progress near ₹181 crore Mar FY26 adds capacity without equity dilution in the base case. Revenue near ₹6,500 crore with twelve percent OPM yields operating profit above ₹780 crore and profit after tax above ₹450 crore if tax and interest stay stable.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "A bull case sees specialty care mix rise, operating profit margin sustain mid-teens in H2 FY27, and export volumes accelerate, lifting profit after tax near ₹520 crore at twenty-three times multiple and re-rating the stock toward ₹3,370 per share as return on capital employed returns toward upper teens. Further investment income on the listed portfolio could add non-operating upside not in the base case.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "A bear case keeps operating profit margin near nine percent on feedstock spikes and pricing pressure, leaving profit after tax near ₹340 crore at twenty times multiple and ₹1,915 per share, down roughly nineteen percent from reference. Prolonged inventory builds with CFO below ₹250 crore would force investors to haircut quality multiples despite promoter control.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated profit after tax with price-to-earnings multiples suited to an oleo surfactant leader with specialty care optionality (20× bear, 22× base, 23× bull), cross-checked with TTM operating profit near ₹601 crore at ten times EV/EBITDA when net debt is negligible. Bear FY27 profit after tax ₹340 crore implies about ₹1,915 per share (-19% vs ₹2,377 reference). Base profit after tax ₹455 crore implies about ₹2,820 (+19%). Bull profit after tax ₹520 crore implies about ₹3,370 (+42%). Base case clears the fifteen percent upside hurdle versus reference if management delivers guided revenue growth with average operating profit margin near twelve percent without assuming every quarter matches Jun 2026.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base clears Buy hurdle on PAT × P/E.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [1915, 2820, 3370, 2377], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener consolidated)",
    "Conclusion: Jun 2026 quarter at recent peak.",
    ["Mar-25", "Jun-25", "Sep-25", "Dec-25", "Mar-26", "Jun-26"],
    [{ name: "Sales", values: [1145, 1278, 1326, 1329, 1315, 1782], color: "#c27803" }],
  ),
  seriesChart(
    "Return on capital employed %",
    "Conclusion: ROCE down from FY24 peak.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE %", values: [17, 16, 14], color: "#2d6a4f" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, operating profit margin, and profit after tax on BSE/NSE results. Performance surfactants versus specialty care growth rates when investor decks publish. Fatty alcohol and oleochemical feedstock pass-through commentary on concalls. Inventory days, investments, and borrowings each quarter. Customer qualification wins with global FMCG accounts. Dividend policy and FII holding changes. Capacity commissioning updates from capital work in progress roll-forward.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Buy at ₹2,377 reference. Base-case target near ₹2,820 per share implies about nineteen percent upside with confirming double-digit FY27 revenue trajectory, average operating profit margin near twelve percent, and net cash from operations recovery above ₹380 crore while borrowings stay below ₹300 crore. Upgrade toward bull if two consecutive quarters show consolidated operating profit margin at or above thirteen percent with TTM profit after tax run-rate above ₹400 crore excluding large one-off investment gains. Downgrade toward Neutral if operating profit margin falls below ten percent with TTM net cash from operations below ₹280 crore. Downgrade toward Avoid if feedstock spikes force inventory write-downs or borrowings exceed ₹400 crore without matching specialty care revenue.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack verbatim BSE-uploaded concall PDFs for every quarter cited; excerpts are curated from results tables and MD&A pending full transcript ingestion. Performance surfactants versus specialty care revenue splits, export share, and customer concentration are login-gated on Screener. Exact qualification timelines for new global accounts need investor presentation updates. Mark-to-market on listed investments near ₹474 cr Mar FY26 is not fully disaggregated in free filings. Update bear, base, and bull when segment EBIT and volume metrics publish in the annual report.",
  },
];
