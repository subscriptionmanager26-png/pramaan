import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const fluorochemMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Gujarat Fluorochemicals Ltd (NSE: FLUOROCHEM, BSE: 542812) is an INOXGFL Group integrated fluorine chemistry manufacturer spanning fluoropolymers (PTFE and new-age grades), fluorochemicals including refrigerants and hydrogen fluoride derivatives, bulk chemicals, and an emerging battery materials platform for electric vehicles and energy storage. Promoter holding was about 63.80% as of June 2026 on Screener, with FIIs near 4.82% and DIIs near 7.68%. The stock is in Nifty 500, Nifty Midcap 150, Nifty Chemicals, and related indices. At a reference price of ₹4,342 on 1 October 2026, market capitalisation is about ₹47,691 crore on roughly 10.98 crore shares (face value ₹1). Trailing consolidated price-to-earnings is near 77.2 on TTM earnings per share about ₹54.64, with book value about ₹716 per share and return on capital employed near 9.64%. The quote sits below the 52-week high of ₹4,959 and above the ₹2,917 low after a forty-nine percent one-year price rise while TTM profit after tax rose near five percent.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Gujarat Fluorochemicals earns conversion margin on captively produced anhydrous hydrogen fluoride and downstream fluoropolymers and refrigerants sold under long-term supply relationships and spot export channels, plus early battery materials tolling and product sales to cell and module makers. Revenue is recognised largely on dispatch; fluorspar, energy, and freight costs flow through cost of materials with partial lag on indexed contracts, so operating profit margin compresses when input volatility outruns pricing. Payment cycles run through debtor days near seventy Mar FY26 and inventory near one hundred ten days, so net cash from operations can trail operating profit when working capital builds for battery projects, though FY26 still delivered ₹961 crore net cash from operations on ₹1,201 crore operating profit.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Gujarat Fluorochemicals built India’s largest fluoropolymer footprint over three decades under INOXGFL stewardship, with FY24 representing a margin trough near twenty-one percent operating profit margin before FY26 recovered on fluoropolymer realisations and volume. Consolidated revenue moved from ₹4,281 crore in FY24 to ₹4,737 crore in FY25 and ₹4,996 crore in FY26 with TTM sales near ₹5,303 crore. Operating profit followed ₹915 crore, ₹1,100 crore, and ₹1,201 crore across the same years. Reported profit after tax moved from ₹435 crore in FY24 to ₹574 crore in FY26 with TTM profit after tax near ₹600 crore after ₹546 crore in FY25. Borrowings rose toward ₹2,721 crore on Screener’s latest balance sheet while capital work in progress stood near ₹1,900 crore as battery and fluoropolymer projects advanced.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: TTM crossed ₹5,300 cr on fluoropolymer mix.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "Sales", values: [4281, 4737, 4996, 5303], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Paying customers include global fluoropolymer converters, domestic and export refrigerant blenders, semiconductor and EV supply chains buying PVDF and related grades, and anchor battery customers under early offtake for LiPF6 and allied chemistries. Company materials cite export presence across many countries; Screener premium gates exact top-account concentration time series. Promoter holding near sixty-four percent supports patient battery capex while low FII holding near five percent leaves re-rating tied to return on capital employed recovery above ten percent. Concentration risk is moderate: delay in battery materials ramp or a fluoropolymer pricing correction can still move consolidated operating profit by tens of crore rupees per quarter.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Fluoropolymers supplied the primary profit engine through FY26 with management citing full utilisation on key PTFE and new fluoropolymer lines on the Q1 FY27 call, while fluorochemicals including R32 contributed incremental volume after March 2026 commercial start. Bulk chemicals provided stable but lower-margin tonnage. Battery materials remained small on revenue but large on capital work in progress and narrative optionality. Exact segment profit splits require investor presentations; investors should treat fluoropolymer operating profit margin holding near thirty percent and battery materials reaching a three-digit crore quarterly revenue run-rate by Q4 FY27 as the central swing factors for consolidated return on capital employed.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: FY26 average twenty-four percent; TTM at twenty-six percent.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "OPM %", values: [21, 23, 24, 26], color: "#2d6a4f" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: TTM PAT near ₹600 cr; growth slowed vs revenue.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [435, 546, 574, 600], color: "#c27803" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global fluoropolymer demand tied to semiconductors, EVs, and green hydrogen moves realisations before battery materials revenue catches up. Fluorspar, energy, and freight costs affect spreads on HF and refrigerants with partial pass-through on contracts. Rupee volatility affects export realisations on fluoropolymers with partial natural hedge on domestic sales. US tariff and trade policy commentary has moved sentiment on export-heavy fluoropolymer lines. Indian fluorochemical peer re-rating (SRF and Navin Fluorine in this repo) sets multiples for integrated fluorine names even when return on capital employed lags. The move from ₹2,917 toward ₹4,959 over fifty-two weeks can dominate short-term action even when quarterly profit after tax grows slowly.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Five-year revenue compound growth near twelve percent on Screener masks the FY24 margin trough when operating profit margin fell to twenty-one percent before recovering toward twenty-six percent TTM. Operating profit moved from ₹915 crore FY24 toward ₹1,372 crore TTM as utilisation improved. Profit after tax compound growth turned positive but modest TTM after stronger FY25. Return on capital employed stayed in high single digits near 9.64% as battery capex weighed on the denominator. Dividend yield near 0.07 percent at reference reflects reinvestment into battery and fluoropolymer capacity.",
  },
  seriesChart(
    "Return on capital employed % (consolidated, Screener)",
    "Conclusion: ROCE near 9.64% TTM; below fluoropolymer economics.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE %", values: [8, 9, 10], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "FY25 net cash from operating activities ₹545 crore trailed operating profit ₹1,100 crore with CFO to operating profit near fifty percent after working capital build for projects. FY26 net cash from operations ₹961 crore trailed operating profit ₹1,201 crore with CFO to operating profit near eighty percent as collections improved. Free cash flow remained negative near ₹292 crore TTM as cash from investing outflows near ₹1,168 crore funded battery and chemical capex. If debtor days stay below eighty while inventory days remain near one hundred ten, profit after tax can align with net cash from operations without signalling earnings quality issues, but sustained negative free cash flow with borrowings above ₹3,000 crore would be a warning.",
  },
  seriesChart(
    "Net cash from operations (₹ crore)",
    "Conclusion: FY26 CFO rebounded to ₹961 cr despite capex cycle.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [626, 545, 961], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings ₹2,721 crore on Screener’s latest print against reserves ₹7,855 crore leave interest coverage adequate but tightening; interest expense is material relative to operating profit. Capital work in progress near ₹1,900 crore ties up cash and raises execution risk if battery materials plants slip or customer qualification delays revenue. Screener flags book-value multiple near 6.1 times as a watch item. A prolonged stretch of sub-twenty-two percent operating profit margin with TTM net cash from operations below ₹700 crore and borrowings above ₹3,200 crore would be the early warning.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Leverage rose with battery and fluoropolymer capex.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [1556, 2096, 2721], color: "#9b2226" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "Devansh Jain leads as managing director within the INOXGFL promoter group with about sixty-four percent holding as of June 2026, aligning incentives with multi-year battery and fluoropolymer investments though public float near twenty-four percent still matters for liquidity. Executive compensation details sit in the annual report; we have not modelled stock-based pay dilution separately. Board independence and related-party disclosures with other INOXGFL listed entities should be reviewed each annual report season.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY25 revenue growth met with profit after tax up twenty-six percent year on year. FY26 margin restoration met with twenty-four percent operating profit margin and TTM twenty-six percent. R32 commercialisation met with March 2026 start cited on the Q1 FY27 call. FY26 cash conversion partially met with net cash from operations ₹961 crore but free cash flow still negative on investing. FY27 battery capex near ₹2,300 crore remains pending with capital work in progress near ₹1,900 crore and segment revenue still small.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Fluoropolymer debottlenecking and new grade wins in semiconductors and EVs, R32 and refrigerant volume after commercial start, and operating leverage on Dahej integrated HF chain are the primary drivers. Battery materials revenue ramp from FY27 toward FY28 can add tonnage but at lower margin until utilisation stabilises. Return on capital employed recovering toward mid-teens would support the current trailing multiple over time.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Bull case assumes FY27 profit after tax near ₹780 crore with operating profit margin sustained above twenty-six percent, battery materials quarterly revenue crossing one hundred crore rupees by Q4 FY27, and the market holding a low-eighties forward price-to-earnings multiple, implying a target near ₹5,827 per share or about thirty-four percent above reference. Triggers include two consecutive quarters with TTM net cash from operations above ₹1,000 crore and borrowings stabilising below ₹2,800 crore.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Bear case assumes FY27 profit after tax near ₹500 crore with operating profit margin reverting toward twenty-two percent on fluoropolymer pricing softness and battery ramp delays, with the market applying a forty-eight times multiple, implying a target near ₹2,186 per share or about fifty percent below reference. Triggers include TTM profit after tax falling below ₹520 crore with borrowings above ₹3,200 crore and TTM free cash flow remaining deeply negative.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value Gujarat Fluorochemicals on forward consolidated profit after tax times price-to-earnings, cross-checked against trailing operating profit times enterprise value to EBITDA with net debt near ₹2,200 crore. Base FY27E profit after tax ₹650 crore at seventy-seven times implies about ₹4,557 per share, or about five percent above the ₹4,342 reference. Bear FY27E profit after tax ₹500 crore at forty-eight times implies about ₹2,186. Bull FY27E profit after tax ₹780 crore at eighty-two times implies about ₹5,827. Trailing price-to-earnings near seventy-seven times already embeds fluoropolymer recovery while return on capital employed near 9.64% limits margin of safety until battery materials prove returns.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base offers modest upside; ROCE is the constraint.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [2186, 4557, 5827, 4342], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener consolidated)",
    "Conclusion: Jun 2026 quarter at ₹1,588 cr recent peak.",
    ["Mar 2025", "Jun 2025", "Sep 2025", "Dec 2025", "Mar 2026", "Jun 2026"],
    [{ name: "Sales", values: [1225, 1281, 1210, 1136, 1369, 1588], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, operating profit margin, and profit after tax on BSE/NSE results. Fluoropolymer versus fluorochemicals revenue share in investor decks. R32 pricing and fluorspar cost commentary on concalls. Battery materials revenue, qualification, and capex milestones each quarter. Net cash from operations and free cash flow trends. Borrowings and interest expense. US export and tariff headlines affecting fluoropolymer shipments. Promoter holding and any follow-on equity issuance.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹4,342 reference. Base-case target near ₹4,557 per share implies about five percent upside, below the fifteen percent hurdle for a Buy at this trailing multiple and sub-ten percent return on capital employed. Upgrade toward Buy if two consecutive quarters show consolidated operating profit margin at or above twenty-seven percent with TTM profit after tax run-rate above ₹650 crore and return on capital employed trending above twelve percent while the base-case target clears ₹4,990 per share. Downgrade toward Avoid if operating profit margin falls below twenty-two percent with TTM net cash from operations below ₹650 crore. Downgrade toward Avoid if borrowings exceed ₹3,300 crore while battery materials revenue remains below fifty crore rupees per quarter.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack verbatim BSE-uploaded concall PDFs for every quarter cited; excerpts are curated from the August 2026 earnings call and FY25 MD&A pending full ingestion. Fluoropolymer versus fluorochemicals versus battery materials segment EBIT and exact export share are login-gated on Screener. Exact utilisation percentages by Dahej lines need investor presentation updates. Customer concentration for battery materials anchor contracts is not disclosed in public tables used here. Update bear, base, and bull when consolidated segment profit and volume metrics publish in the annual report.",
  },
];
