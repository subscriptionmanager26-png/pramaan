import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const navinfluorMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Navin Fluorine International Ltd (NSE: NAVINFLUOR, BSE: 532504) is a Padmanabh Mafatlal Group specialty fluorochemicals manufacturer spanning contract development and manufacturing (CDMO/CRAMS), high performance products (refrigerants and inorganic fluorides), and specialty organofluorines for agrochemical, pharmaceutical, aluminium, and industrial customers. Promoter holding was about 27.08% as of June 2026 on Screener, with FIIs near 23.73% and DIIs near 28.46%. The stock is in Nifty 500, Nifty Chemicals, Nifty Smallcap 100, and related indices. At a reference price of ₹8,136 on 1 October 2026, market capitalisation is about ₹41,752 crore on roughly 5.13 crore shares (face value ₹2). Trailing consolidated price-to-earnings is near 52.5 on TTM earnings per share about ₹154.05, with book value about ₹775 per share and return on capital employed near 21.0%. The quote sits below the 52-week high of ₹8,950 and above the ₹4,521 low after a seventy-seven percent one-year price rise while TTM profit after tax rose near one hundred twenty-four percent.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Navin Fluorine earns conversion margin on fluorination chemistry executed under multi-year supply agreements with global innovators and on catalogue refrigerant and inorganic fluoride sales to domestic and export channels. Revenue is recognised largely on dispatch; fluorspar, energy, and specialty intermediate costs flow through cost of materials with partial lag on CDMO contracts indexed to input baskets, so operating profit margin compresses when input volatility outruns pricing. Payment cycles run through debtor days near eighty-three Mar FY26 and inventory near one hundred twenty-one days, so net cash from operations can trail operating profit when working capital builds, though FY26 still delivered ₹894 crore net cash from operations on ₹1,082 crore operating profit.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Navin Fluorine pioneered Indian refrigerant manufacturing in 1967 and expanded into CDMO and specialty organofluorines over two decades, with FY24 representing a margin trough near nineteen percent operating profit margin before FY26 re-rated on utilisation and pricing. Consolidated revenue moved from ₹2,065 crore in FY24 to ₹2,349 crore in FY25 and ₹3,314 crore in FY26 with TTM sales near ₹3,634 crore. Operating profit followed ₹399 crore, ₹534 crore, and ₹1,082 crore across the same years. Reported profit after tax rebounded from ₹270 crore in FY24 to ₹664 crore in FY26 with TTM profit after tax near ₹790 crore after FY25 dipped to ₹289 crore on interest and mix. Borrowings stood near ₹1,272 crore Mar FY26 while capital work in progress fell toward ₹143 crore as major greenfield converted to fixed assets.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: TTM crossed ₹3,600 cr on CDMO and specialty mix.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "Sales", values: [2065, 2349, 3314, 3634], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Paying customers include global agrochemical and pharmaceutical innovators under CDMO contracts, domestic refrigerant blenders, aluminium smelters buying inorganic fluorides, and export buyers of specialty organofluorines. Company materials cite export presence across many countries; Screener premium gates exact top-account concentration time series. Promoter holding near twenty-seven percent leaves re-rating tied to return on capital employed holding near twenty-one percent and FII holding above twenty-three percent. Concentration risk is moderate: loss or deferral of one large CDMO molecule can still move consolidated operating profit by tens of crore rupees per quarter.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "The CDMO and CRAMS business supplied the fastest revenue growth through FY26 with management citing record order books on the August 2026 call, while high performance products and specialty organofluorines provided pricing leverage when refrigerant lines normalised. Exact segment profit splits require investor presentations; investors should treat CDMO share of profit after tax above fifty percent and Surat utilisation above eighty-five percent as the central swing factors for consolidated margin, with legacy refrigerants providing volume stability when specialty pricing softens.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: FY26 average thirty-three percent; Q1 FY27 at thirty-four percent.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "OPM %", values: [19, 23, 33, 34], color: "#2d6a4f" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: TTM PAT +124% YoY on Screener.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [270, 289, 664, 790], color: "#c27803" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global agrochemical and pharmaceutical inventory cycles move CDMO order timing before domestic refrigerant demand catches up. Fluorspar, energy, and hydrogen fluoride costs affect spreads on specialty organofluorines with partial pass-through on indexed contracts. Rupee volatility affects export realisations on CDMO shipments with partial natural hedge on imported inputs. Indian fluorochemical peer re-rating (SRF, Aarti Industries, and Deepak Nitrite in this repo) sets sentiment for integrated and CDMO-heavy names at high trailing multiples. The move from ₹4,521 toward ₹8,950 over fifty-two weeks can dominate short-term action even when quarterly profit after tax sets new highs.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Five-year revenue compound growth near twenty-three percent on Screener masks the FY24 margin trough when operating profit margin fell to nineteen percent before recovering toward thirty-four percent TTM. Operating profit moved from ₹534 crore FY25 toward ₹1,232 crore TTM as utilisation improved. Profit after tax compound growth turned sharply positive TTM after muted FY25. Return on capital employed recovered from eleven percent FY25 toward twenty-one percent FY26. Dividend yield near 0.19 percent at reference reflects reinvestment into CDMO and specialty capacity.",
  },
  seriesChart(
    "Return on capital employed % (consolidated)",
    "Conclusion: ROCE recovered to twenty-one percent FY26.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE %", values: [11, 11, 21], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "FY25 net cash from operating activities ₹571 crore trailed operating profit ₹534 crore modestly with CFO to operating profit near one hundred twenty-two percent after working capital release. FY26 net cash from operations ₹894 crore trailed operating profit ₹1,082 crore modestly with CFO to operating profit near ninety-seven percent as inventory days fell toward one hundred twenty-one. Free cash flow reached ₹404 crore in FY26 after capex as capital work in progress declined. If debtor days stay below ninety while inventory days remain near one hundred twenty, profit after tax can align with net cash from operations without signalling earnings quality issues.",
  },
  seriesChart(
    "Net cash from operations (₹ crore)",
    "Conclusion: FY26 CFO held above ₹850 cr despite prior capex cycle.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [750, 571, 894], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings ₹1,272 crore Mar FY26 against reserves ₹3,964 crore leave interest coverage adequate; interest expense TTM near ₹120 crore is material but manageable relative to operating profit. Capital work in progress near ₹143 crore is lower than prior years but execution risk remains on incremental Gujarat debottlenecking. Screener flags book-value multiple near 10.5 times as a watch item. A prolonged stretch of sub-twenty-six percent operating profit margin with TTM net cash from operations below ₹700 crore and borrowings above ₹1,400 crore would be the early warning.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Leverage eased from FY25 peak toward FY26.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [1368, 1466, 1272], color: "#9b2226" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "Vishad Mafatlal leads as managing director with decades in textiles and chemicals under Mafatlal Group stewardship; promoter holding near twenty-seven percent aligns incentives with long-cycle CDMO investments though the stake is lower than many family-controlled Indian chemical peers. Executive compensation details sit in the annual report; we have not modelled stock-based pay dilution separately. Board independence and related-party disclosures should be reviewed each annual report season.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY25 revenue growth partially met with profit after tax lagging on margin and interest. FY26 margin restoration met with thirty-three percent operating profit margin and TTM thirty-four percent. Capex commissioning largely met with capital work in progress down to ₹143 crore Mar FY26. FY26 cash conversion met with net cash from operations ₹894 crore. FY27 high-teens revenue growth with low-thirties operating profit margin remains pending with Q1 FY27 revenue ₹1,045 crore and operating profit margin thirty-four percent as an encouraging start.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Commercial supply ramp on late-stage CDMO molecules, specialty organofluorine export wins, and operating leverage on Surat and Dewas fixed costs are the primary drivers. Refrigerant lines provide volume stability. Gujarat incremental capacity and debottlenecking through FY27 can add mid-single-digit revenue without proportional opex. Return on capital employed holding near twenty percent would support the current book-value multiple over time.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Bull case assumes FY27 profit after tax near ₹1,000 crore with operating profit margin sustained above thirty-two percent, CDMO share of profit after tax above fifty-five percent, and the market holding a low-fifties forward price-to-earnings multiple, implying a target near ₹10,526 per share or about twenty-nine percent above reference. Triggers include two consecutive quarters with operating profit margin at or above thirty-five percent and TTM net cash from operations above ₹1,000 crore.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Bear case assumes FY27 profit after tax near ₹720 crore with operating profit margin reverting toward twenty-six percent on refrigerant pricing softness and CDMO order deferrals, with the market applying a forty times multiple, implying a target near ₹5,614 per share or about thirty-one percent below reference. Triggers include TTM profit after tax falling below ₹650 crore with borrowings above ₹1,400 crore and TTM net cash from operations below ₹600 crore.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value Navin Fluorine on forward consolidated profit after tax times price-to-earnings, cross-checked against trailing operating profit times enterprise value to EBITDA with net debt near ₹900 crore. Base FY27E profit after tax ₹900 crore at fifty times implies about ₹8,772 per share, or about eight percent above the ₹8,136 reference. Bear FY27E profit after tax ₹720 crore at forty times implies about ₹5,614. Bull FY27E profit after tax ₹1,000 crore at fifty-four times implies about ₹10,526. Trailing price-to-earnings near fifty-two times already embeds much of the FY26 earnings step-up, so upside requires either higher forward earnings or multiple expansion.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base offers modest upside; multiple is the constraint.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [5614, 8772, 10526, 8136], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener consolidated)",
    "Conclusion: Jun 2026 quarter at recent peak.",
    ["Jun-25", "Sep-25", "Dec-25", "Mar-26", "Jun-26"],
    [{ name: "Sales", values: [725, 758, 892, 938, 1045], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, operating profit margin, and profit after tax on BSE/NSE results. CDMO order book and molecule commercialisation commentary on concalls. High performance products versus specialty organofluorines revenue share in investor decks. Net cash from operations and free cash flow each quarter. Borrowings and interest expense trends. Fluorspar and energy cost pass-through on indexed contracts. FII holding changes and any follow-on equity issuance.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹8,136 reference. Base-case target near ₹8,772 per share implies about eight percent upside, below the fifteen percent hurdle for a Buy at this trailing multiple. Upgrade toward Buy if two consecutive quarters show consolidated operating profit margin at or above thirty-five percent with TTM profit after tax run-rate above ₹850 crore and the base-case target clears ₹9,350 per share on unchanged shares. Downgrade toward Avoid if operating profit margin falls below twenty-six percent with TTM net cash from operations below ₹650 crore. Downgrade toward Avoid if trailing price-to-earnings remains above fifty times while TTM profit after tax growth turns negative for two quarters.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack verbatim BSE-uploaded concall PDFs for every quarter cited; excerpts are curated from the August 2026 earnings call transcript and FY25 MD&A pending full ingestion. CDMO versus high performance products segment EBIT and exact export share are login-gated on Screener. Exact utilisation percentages by Surat, Dewas, and Gujarat sites need investor presentation updates. Customer concentration for top CDMO contracts is not disclosed in public tables used here. Update bear, base, and bull when consolidated segment profit and volume metrics publish in the annual report.",
  },
];
