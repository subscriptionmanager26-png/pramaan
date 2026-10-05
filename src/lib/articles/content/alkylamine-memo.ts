import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const alkylamineMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Alkyl Amines Chemicals Ltd (NSE: ALKYLAMINE, BSE: 506767) manufactures aliphatic amines, amine derivatives, acetonitrile, and specialty solvents for pharmaceutical, agrochemical, rubber, water treatment, and electronics customers in India and export markets. Promoter holding was about 46.2% as of June 2026 on Screener, with FIIs near 18.4% and DIIs near 12.1%. The stock is in Nifty 500, Nifty Chemicals, and related mid-cap indices. At a reference price of ₹1,997 on 1 October 2026, market capitalisation is about ₹10,216 crore on roughly 5.12 crore shares (face value ₹2). Trailing consolidated price-to-earnings is near 45 on TTM earnings per share about ₹35.4, with book value about ₹238 per share and return on capital employed near 13.8%. The quote sits below the 52-week high of ₹2,128 and above the ₹1,212 low after a one-year rise near forty percent while FY26 profit after tax was flat near ₹180 crore.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Alkyl Amines earns conversion margin on ammonia and methanol feedstocks processed into methylamines, ethylamines, propylamines, and downstream hydrochlorides and specialty solvents sold under long-standing customer contracts. Revenue is recognised largely on dispatch; ammonia and natural gas costs flow through cost of materials with partial lag on formula pricing, so operating profit margin compresses when Middle East logistics disrupt ammonia supply before customer prices reset. Payment cycles run through debtor days near seventy Mar FY26 and inventory near ninety days, so net cash from operations can dip in shock quarters even though FY26 still delivered positive ₹225 crore net cash from operating activities on ₹295 crore operating profit.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Alkyl Amines built integrated amine capacity at Patalganga and Kurkumbh over four decades, becoming India’s largest domestic methylamine producer and a leading acetonitrile supplier. Consolidated revenue moved from ₹1,482 crore in FY24 to ₹1,572 crore in FY25 before easing to ₹1,536 crore in FY26 with TTM sales near ₹1,540 crore. Operating profit followed ₹285 crore, ₹310 crore, and ₹295 crore across the same years. Reported profit after tax rose from ₹175 crore in FY24 to ₹186 crore in FY25 before easing to ₹180 crore in FY26. Executive director Kirat Patel told investors on the May 2026 call that top line and bottom line were flat within plus or minus one percent versus FY25 as ammonia chains faced volatility.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, exchange filings / Screener)",
    "Conclusion: FY26 paused after FY25 step-up.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "Sales", values: [1482, 1572, 1536, 1540], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Paying customers include domestic and multinational pharmaceutical active ingredient makers, agrochemical formulators, rubber chemical blenders, and water treatment blenders buying amine hydrochlorides and solvents. Annual report narrative cites diversified end markets without naming anchor accounts in public tables; Screener gates exact top-customer revenue share. Promoter Patel family control near forty-six percent supports long-term capacity decisions while FII ownership near high teens adds liquidity. Concentration risk is moderate: prolonged ammonia unavailability can idle methylamine trains and move consolidated operating profit by high single digit crore rupees per quarter.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Aliphatic amines and derivatives supply the majority of revenue with acetonitrile and specialty solvents adding margin when domestic anti-dumping duties improve import substitution economics. Management on the May 2026 call emphasised pharmaceutical and agrochemical steadiness while ammonia-based products restarted gradually after April 2026 supply improved. Investors should treat acetonitrile utilisation moving from roughly sixty-five percent toward the eighty percent FY27 guide and methylamine spread normalisation as the central swing factors for consolidated operating profit margin.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: FY26 average nineteen percent; high-teens through-cycle.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "OPM %", values: [19, 20, 19, 19], color: "#2d6a4f" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: FY26 PAT flat near ₹180 cr.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [175, 186, 180, 181], color: "#c27803" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Ammonia and natural gas pricing, Middle East logistics, and rupee moves against dollar-denominated feedstocks shift methylamine economics before customer pass-through. Anti-dumping duties on acetonitrile imports change domestic price floors and utilisation on Alkyl Amines’ roughly thirty kilotonne per annum plant. Peer re-rating on Indian specialty chemical names including SRF and Atul in this repo sets sentiment even when Alkyl Amines’ balance sheet is cleaner. The move from ₹1,212 toward ₹2,128 over fifty-two weeks can dominate short-term action even when quarterly profit after tax grows slowly.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Ten-year sales compound growth near twelve percent on Screener masks the FY26 pause when revenue fell two percent while profit after tax fell three percent. Operating profit compound growth slowed to low single digits over three years. Return on capital employed fell toward 13.8% as debottlenecking capex rose while earnings flatlined. Dividend yield near 0.76 percent at reference reflects steady payout of ₹10 per share final dividend recommended for FY26 on face value ₹2.",
  },
  seriesChart(
    "Return on capital employed % (consolidated, Screener)",
    "Conclusion: ROCE near 14% TTM after flat PAT year.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE %", values: [16, 17, 14], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "FY24 net cash from operating activities ₹245 crore exceeded operating profit ₹285 crore with CFO to operating profit near eighty-six percent. FY25 net cash from operations ₹210 crore trailed operating profit ₹310 crore as working capital absorbed cash. FY26 net cash from operations ₹225 crore on operating profit ₹295 crore delivered CFO to operating profit near seventy-six percent. Free cash flow remained positive after capex near ₹120 crore as the company funded debottlenecking without incremental long-term borrowings. If inventory days stay below one hundred while debtor days remain near seventy, profit after tax can align with net cash from operations without signalling earnings quality issues.",
  },
  seriesChart(
    "Net cash from operations (₹ crore)",
    "Conclusion: Positive CFO each year; FY26 recovery vs FY25.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [245, 210, 225], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Alkyl Amines carries net cash near ₹40 crore Mar FY26 on Screener with negative net debt, so interest coverage is not the primary risk unlike leveraged CDMO peers in this repo. Capital expenditure on debottlenecking and environmental compliance can still absorb cash if ammonia shocks repeat and operating profit margin falls below seventeen percent for multiple quarters. A prolonged stretch of sub-seventy percent acetonitrile utilisation with TTM net cash from operations below ₹150 crore would be the early warning even without balance-sheet leverage.",
  },
  seriesChart(
    "Net borrowings (₹ crore, negative = net cash)",
    "Conclusion: Net cash balance sheet Mar FY26.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Net debt", values: [-85, -62, -40], color: "#2d6a4f" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The Patel family founded Alkyl Amines and retains significant control with Kirat Patel as executive director and Kanchan Shinde as chief financial officer on public calls. Executive compensation ties to profitability and capacity utilisation per annual report norms. Dividend of ₹10 per share recommended for FY26 offers cash return while promoters reinvest through debottlenecking capex. Promoter holding near forty-six percent with meaningful FII float supports alignment for a quality specialty franchise, though flat FY26 earnings show even well-run amine platforms are not immune to feedstock shocks.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY25 growth guidance on volumes was broadly met with revenue up six percent. FY26 mid-single-digit volume growth guidance was missed with revenue down two percent as ammonia chains disrupted production. Acetonitrile utilisation toward eighty percent was only partially achieved near sixty-five percent through FY26. FY27 five to ten percent volume growth guidance is pending with ammonia restart improving after April 2026. Capex discipline without leverage was met with net cash preserved.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Acetonitrile utilisation rising toward eighty percent adds high-margin volume as import substitution economics improve. Methylamine and derivative debottlenecking adds capacity without greenfield risk. Pharmaceutical and agrochemical customer steady demand supports base load utilisation. Operating leverage drops incremental revenue to profit when ammonia spreads normalise. Net cash balance sheet allows dividend growth or opportunistic buybacks if earnings re-accelerate.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "A bull case sees acetonitrile at full utilisation, operating profit margin sustain twenty-one percent, and profit after tax near ₹245 crore at fifty times multiple, re-rating the stock toward ₹2,393 per share as return on capital employed returns toward eighteen percent. Faster-than-guided FY27 volume growth on restarted ammonia chains adds upside not in the base case.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "A bear case keeps operating profit margin near seventeen percent on repeated ammonia disruption, leaves profit after tax near ₹155 crore at thirty-six times multiple and ₹1,090 per share, down roughly forty-five percent from reference. Prolonged sub-sixty percent acetonitrile utilisation with flat revenue would force investors to de-rate quality multiples despite net cash.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated profit after tax with price-to-earnings multiples suited to a net-cash integrated amines leader with pharma and agrochemical exposure (36× bear, 46× base, 50× bull), cross-checked with TTM operating profit near ₹298 crore at fourteen times EV/EBITDA when net cash near ₹40 crore supports equity between bear and base when margins hold high teens. Bear FY27 profit after tax ₹155 crore implies about ₹1,090 per share (-45% vs ₹1,997 reference). Base profit after tax ₹210 crore implies about ₹1,887 (-5%). Bull profit after tax ₹245 crore implies about ₹2,393 (+20%). Base case does not clear the fifteen percent upside hurdle versus reference while trailing price-to-earnings near forty-five times embeds quality but not growth after a flat FY26.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base offers modest downside; bull clears Buy hurdle.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [1090, 1887, 2393, 1997], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener consolidated)",
    "Conclusion: Q4 FY26 near ₹398 cr; seasonality modest.",
    ["Q1 FY26", "Q2 FY26", "Q3 FY26", "Q4 FY26"],
    [{ name: "Sales", values: [368, 385, 385, 398], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, operating profit margin, and profit after tax on BSE/NSE results. Acetonitrile utilisation and ammonia supply commentary on concalls. Anti-dumping duty and import parity updates on acetonitrile. Net cash from operations and capex each quarter. Dividend declaration and promoter holding changes. Pharmaceutical and agrochemical customer inventory commentary from peers.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹1,997 reference. Base-case target near ₹1,887 per share implies about five percent downside, below the fifteen percent upside hurdle for a Buy, with confirming operating profit margin at or above twenty percent, profit after tax run-rate above ₹52 crore per quarter, and acetonitrile utilisation trending above seventy-five percent while net cash from operations stays above ₹220 crore annualised. Upgrade toward Buy if two consecutive quarters show consolidated operating profit margin at or above twenty percent with TTM profit after tax above ₹210 crore and the base-case target clears ₹2,300 per share on visible acetonitrile ramp. Downgrade toward Avoid if operating profit margin falls below seventeen percent with TTM net cash from operations below ₹150 crore or ammonia outages idle methylamine trains for more than one quarter.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack segment revenue for acetonitrile versus aliphatic amines in public tables used here; investor presentations provide qualitative mix only. Exact customer concentration percentages are login-gated on Screener. Quarterly ammonia cost pass-through lag by product line needs management disclosure. Update bear, base, and bull when FY27 segment profit and acetonitrile volume metrics publish in the annual report.",
  },
];
