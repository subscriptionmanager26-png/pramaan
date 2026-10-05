import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const hikalMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Hikal Ltd (NSE: HIKAL, BSE: 524735) is an Indian contract development and manufacturing organisation serving multinational crop protection and pharmaceutical customers from audited sites at Taloja and Mahad (crop protection), Panoli and Jigani (pharma), and Pune (R&D). Promoter holding was about 68.9% as of June 2026 on Screener, with DIIs near 7.2% and FIIs near 1.0%. The stock is in BSE Healthcare and BSE 1000. At a reference price of ₹218 on 1 October 2026, market capitalisation is about ₹2,690 crore on roughly 12.5 crore shares (face value ₹2). Trailing consolidated price-to-earnings is not meaningful on negative TTM earnings per share near ₹2.72, with book value about ₹97.2 per share and return on capital employed near 3.5%. The quote sits below the 52-week high of ₹261 and above the ₹146 low, reflecting FY26 statutory losses and impairment charges even as cash from operations remained strong.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Hikal earns fees and product margins on long-duration CDMO contracts: crop protection active ingredients and intermediates for global innovators, plus pharmaceutical APIs and advanced intermediates for regulated markets. Revenue is recognised on manufacturing milestones and shipment; payment terms follow customer audit cycles and inventory buffers at Taloja and Mahad. Pharmaceutical projects at Panoli and Jigani can carry higher margin but longer validation timelines. The model is capital intensive: reactor volumes, depreciation, and interest matter as much as headline sales growth.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Hikal scaled from a specialty chemicals base into a dual-segment CDMO partner with multinational approvals at key plants. Consolidated revenue moved from about ₹2,023 crore in FY23 to ₹1,785 crore in FY24 as customers destocked, recovered to ₹1,860 crore in FY25 with operating profit margin near 18%, then slipped to ₹1,713 crore in FY26 as utilisation and impairments hit reported profit after tax. PAT fell from ₹78 crore in FY23 to ₹91 crore in FY25 before a FY26 loss near ₹49 crore and TTM loss near ₹34 crore on Screener. Fixed assets reached about ₹1,333 crore Mar FY26 while borrowings eased to ₹684 crore, so the equity story is now about converting operating cash into normalized earnings after the write-down cycle.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: FY25 rebound; FY26 pause; TTM flat.",
    ["FY23", "FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "Sales", values: [2023, 1785, 1860, 1713, 1735], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Paying customers are large crop protection and pharmaceutical multinationals that qualify Hikal plants through audits; free quarterly filings do not name top-five accounts. Concentration risk sits in project timing: one delayed API campaign or crop protection intermediate can move quarterly operating profit margin sharply, as seen in Sep and Dec 2025 quarters. Promoter holding near sixty-nine percent aligns control with the Jhunjhunwala-family legacy, while public float above twenty-two percent still leaves the stock sensitive to CDMO order book updates on concalls.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "The portfolio spans crop protection CDMO (Taloja, Mahad) and pharmaceutical CDMO (Panoli, Jigani) with Pune R&D feeding both. Screener premium insights gate exact CDMO revenue mix percentages; free tables show consolidated margin peaks in FY25 when both segments loaded well. FY26 and Q1 FY27 curated commentary points to weaker crop protection utilisation and pharma campaign timing, compressing operating profit margin toward nine percent in Jun 2026. Investors should treat mix and plant uptime as the swing factors behind volatile quarterly profit after tax.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: FY25 peak; FY26 and Q1 FY27 reset.",
    ["FY23", "FY24", "FY25", "FY26", "Q1 FY27"],
    [{ name: "OPM %", values: [13, 15, 18, 13, 9], color: "#c27803" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: FY25 peak; FY26 loss; TTM still negative.",
    ["FY23", "FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [78, 70, 91, -49, -34], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global crop protection inventory cycles, generic pricing in intermediates, and pharmaceutical customer audit outcomes move utilisation at Taloja and Mahad. Rupee volatility affects export CDMO economics. Rising depreciation and interest after the capex wave weigh on reported profit after tax even when cash from operations stays positive. Peer re-rating in Indian CDMO and agchem names can pull Hikal’s multiple, but FY26 impairments keep fundamental investors focused on normalized earnings power rather than trailing book value alone.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Five-year compounded sales growth is near zero on Screener, while three-year profit growth is deeply negative after FY26. Return on equity fell toward 2% last year. Inventory days rose toward 172 Mar FY26 and cash conversion cycle lengthened versus FY23, so working capital can absorb cash even in CFO-positive years. Dividend payout is modest when profit after tax is positive, reflecting reinvestment and deleveraging priorities.",
  },
  seriesChart(
    "Net cash from operations (₹ crore, consolidated)",
    "Conclusion: CFO resilient despite FY26 PAT loss.",
    ["FY23", "FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [315, 187, 280, 302], color: "#2d6a4f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Yes in FY26 despite the statutory loss: net cash from operations was about ₹302 crore with CFO to operating profit near 144% on Screener, while free cash flow was about ₹154 crore after investing outflows near ₹145 crore. The gap between PAT and CFO reflects depreciation, impairments booked in other income, and working capital releases. Until profit after tax turns positive again, investors should weight CFO and borrowings reduction over headline price-to-earnings.",
  },
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings near ₹684 crore Mar FY26 with interest near ₹62 crore FY26 leave interest coverage thin when operating profit compresses. Further impairments or customer contract losses could force equity dilution if gross debt stalls. Conversely, sustained CFO above ₹250 crore with borrowings below ₹650 crore would de-risk the balance sheet even before PAT fully normalizes.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Down from FY24 peak; still material.",
    ["FY23", "FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [748, 818, 765, 684], color: "#9b2226" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The Jhunjhunwala family retains majority promoter control near sixty-nine percent, supporting long-term CDMO relationships and capex cycles that public markets may discount in down years. Executive compensation and related-party disclosures sit in the annual report; free sources do not show aggressive promoter selling in the Jun 2026 shareholding pattern. Alignment improves when management converts FY26 impairments into stable ROCE rather than pursuing revenue growth with weak margin.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY25 delivered an operating profit margin near eighteen percent and PAT near ₹91 crore, beating the prior year on mix. FY26 guidance implicitly assumed stability, but reported PAT was a ₹49 crore loss with large negative other income in H2. Q1 FY27 promised uptime normalisation yet delivered nine percent operating profit margin and a ₹7.5 crore loss in the Jun 2026 quarter. Deleveraging partially succeeded: borrowings fell while CFO stayed above ₹300 crore.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Growth depends on crop protection CDMO restocking at Taloja and Mahad, pharmaceutical intermediate campaigns at Panoli and Jigani, and R&D wins converting to commercial volumes. Operating leverage from the installed reactor base can lift margin toward mid-teens if utilisation crosses eighty percent. Net debt reduction frees interest for profit after tax. Any new multinational audit approval expands the addressable contract pool.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "A bull case adds pharmaceutical CDMO wins with sixteen percent operating profit margin on ₹1,900 crore revenue, impairments finished, and borrowings below ₹600 crore, lifting FY27 profit after tax toward ₹95 crore. ROCE could re-test ten percent, supporting a higher price-to-earnings multiple near twenty times.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "A bear case keeps revenue flat near ₹1,700 crore with ten percent operating profit margin, more loss quarters, and interest near ₹65 crore, leaving FY27 profit after tax near ₹20 crore at a distressed fourteen times multiple. Further asset write-downs or customer audit failures would push fair value toward our bear band near ₹22 per share.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated profit after tax with price-to-earnings multiples suited to a dual-segment CDMO with recovering but still low ROCE (14× bear, 18× base, 20× bull), cross-checked with TTM operating profit near ₹233 crore at 10× EV/EBITDA less net debt implying equity value near ₹134 per share unless profit after tax normalises faster. Bear FY27 profit after tax ₹20 crore implies about ₹22 per share (-90% vs ₹218 reference). Base profit after tax ₹68 crore implies about ₹98 (-55%). Bull profit after tax ₹95 crore implies about ₹152 (-30%). None of our scenarios meet the fifteen percent upside hurdle for a Buy at the reference price; the quote embeds recovery beyond our base.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: All scenarios below CMP; Avoid.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [22, 98, 152, 218], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener consolidated)",
    "Conclusion: Mar 2026 quarter strongest in recent set.",
    ["Mar-25", "Jun-25", "Sep-25", "Dec-25", "Mar-26", "Jun-26"],
    [{ name: "Sales", values: [552, 380, 319, 494, 519, 403], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, operating profit margin, and profit after tax on BSE/NSE results with segment commentary. Impairment and other income lines each quarter. Borrowings, interest, and CFO versus capex. Customer audit and plant utilisation updates on concalls. Pharmaceutical campaign start dates. Crop protection customer restocking indicators. Peer CDMO multiples.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Avoid at ₹218 reference. Base-case target near ₹98 per share implies about fifty-five percent downside because normalized FY27 earnings do not support the current quote. Upgrade toward Neutral if two consecutive quarters show consolidated operating profit margin above fourteen percent with profit after tax positive and fair value rises above ₹200 on base FY27 profit after tax near ₹75 crore at eighteen times. Downgrade toward deeper Avoid if operating profit margin stays below ten percent with another impairment charge and borrowings rise above ₹750 crore while profit after tax remains negative.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack verbatim BSE-uploaded concall PDFs for every quarter cited; excerpts are curated from results tables and MD&A pending full transcript ingestion. Crop protection versus pharmaceutical CDMO revenue mix and reactor utilisation percentages are login-gated on Screener. Top-five customer concentration requires the annual report. Exact impairment triggers and tax treatment for FY26 need the FY26 annual report notes. Update bear, base, and bull when segment EBIT and order book disclosures publish.",
  },
];
