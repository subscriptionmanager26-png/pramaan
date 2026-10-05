import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const archeanMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Archean Chemical Industries Ltd (NSE: ACI, BSE: 543657) produces bromine, industrial salt, sulphate of potash, and bromine derivatives from captive brine reserves and port infrastructure on the Gujarat coast, with forward integration through Acume specialty chemicals. Promoter holding was about 53.43% as of June 2026 on Screener, with foreign institutional investors near 11.00% and domestic institutional investors near 24.18%. The stock is in Nifty Smallcap 500, Nifty Microcap 250, and BSE Commodities indices. At a reference price of ₹475 on 1 October 2026, market capitalisation is about ₹5,865 crore on roughly 12.35 crore shares (face value ₹2). Trailing consolidated price-to-earnings is near 60.6 on TTM earnings per share about ₹7.85, with book value about ₹157 per share and return on capital employed near 7.41%. The quote sits below the 52-week high of ₹688 and above the ₹446 low after a thirty percent one-year price fall while TTM profit after tax fell near forty-nine percent year on year.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Archean earns conversion margin on sea brine processed into bromine and industrial salt sold largely to export customers under annual and spot contracts, plus domestic sulphate of potash and derivative sales through Acume. Revenue is recognised on dispatch; power, logistics, and brine handling costs flow through cost of materials, so operating profit margin expands when bromine realisations rise and compresses when global supply normalises after disruption premiums. Payment cycles improved with working capital days near eleven Mar FY26 on Screener, though inventory days spiked in reported ratios when salt stock built ahead of export shipments.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Archean listed after scaling India’s largest bromine export platform, with FY24 representing a post-listing earnings peak near ₹319 crore profit after tax before the FY25 and FY26 cyclical correction. Consolidated revenue moved from ₹1,330 crore in FY24 to ₹1,041 crore in FY25 and ₹1,081 crore in FY26 with TTM sales near ₹1,116 crore. Operating profit followed ₹463 crore, ₹315 crore, and ₹239 crore across the same years with TTM operating profit near ₹228 crore. Reported profit after tax fell from ₹319 crore in FY24 to ₹162 crore in FY25 and ₹105 crore in FY26 with TTM profit after tax near ₹96 crore. Borrowings rose from ₹235 crore toward ₹466 crore Mar FY26 while capital work in progress stood near ₹182 crore as derivatives capacity expanded.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: TTM flat near ₹1,116 cr after FY25 trough.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "Sales", values: [1330, 1041, 1081, 1116], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Paying customers include global bromine consumers, industrial salt buyers, and domestic agriculture channels for sulphate of potash, with export mix historically dominant in company materials. Screener gates exact customer counts and top-account concentration on premium insights. Promoter holding above fifty-three percent supports long-cycle brine investments while institutional ownership above thirty-five percent combined matters for float after the one-year de-rating. Concentration risk is moderate: a two-quarter bromine price correction can move consolidated operating profit by low double-digit crore rupees given operating leverage on fixed port and evaporation assets.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Bromine and industrial salt supplied the primary revenue through FY26 with Acume bromine derivatives and sulphate of potash as the forward integration mix upgrade. Exact volume splits require annual report segment notes; investors should treat bromine realisation per tonne and derivative utilisation above sixty percent as the central swing factors for return on capital employed recovering from seven percent TTM toward mid-teens historical averages.",
  },
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: TTM twenty percent; Mar 2026 quarter trough fifteen percent.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "OPM %", values: [35, 30, 22, 20], color: "#2d6a4f" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: TTM PAT near ₹96 cr; down from FY24 peak.",
    ["FY24", "FY25", "FY26", "TTM Jun26"],
    [{ name: "PAT", values: [319, 162, 105, 96], color: "#c27803" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global bromine supply from Israel and other producers, industrial salt shipping rates, and rupee moves against the dollar affect export realisations before contract resets. Peer re-rating on marine chemical names including Neogen Chemicals and Balaji Amines in this repo sets sentiment for bromine-linked earnings. The move from ₹688 toward ₹446 over fifty-two weeks can dominate short-term action even when quarterly profit after tax stabilises.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Three-year sales compound growth near negative nine percent on Screener reflects the post-FY24 normalisation after the listing-era boom. Operating profit margin fell from forty-four percent FY23 toward twenty percent TTM. Return on capital employed fell toward 7.41% as borrowings funded CWIP while profit after tax compounded down thirty-five percent over three years. Dividend yield near 0.53 percent at reference reflects payout near twenty-nine percent of earnings despite the profit trough.",
  },
  seriesChart(
    "Return on capital employed % (consolidated, Screener)",
    "Conclusion: ROCE seven percent TTM; far below FY24 twenty-five percent.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE %", values: [25, 13, 7], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "FY24 net cash from operating activities ₹379 crore exceeded operating profit ₹463 crore with CFO to operating profit near eighty-two percent after working capital release. FY26 net cash from operations ₹140 crore trailed operating profit ₹239 crore with CFO to operating profit near eighty-three percent while free cash flow turned negative near ₹242 crore TTM as investing outflows near ₹293 crore funded expansion and treasury positions shifted. If working capital days stay near eleven while CWIP capitalises on schedule, profit after tax can align with net cash from operations, but sustained negative free cash flow with borrowings above ₹500 crore would be a warning.",
  },
  seriesChart(
    "Net cash from operations (₹ crore)",
    "Conclusion: FY26 CFO ₹140 cr positive despite FCF pressure.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [379, 176, 140], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings ₹466 crore Mar FY26 against reserves ₹1,910 crore leave interest coverage adequate with interest expense near five crore rupees in the June 2026 quarter, but capital work in progress near ₹182 crore and treasury investments near ₹257 crore mean project slippage or bromine price shocks could force higher leverage. Stock trades near 3.0 times book on Screener. A prolonged stretch of sub-eighteen percent operating profit margin with TTM free cash flow below negative ₹300 crore and borrowings above ₹550 crore would be the early warning.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Leverage rose with derivatives capex.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [98, 235, 466], color: "#9b2226" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "The promoter group holding about fifty-three percent aligns incentives with multi-decade brine asset stewardship while public and institutional holders above forty-six percent combined provide governance pressure after the earnings reset. Executive compensation details sit in the annual report; we have not modelled stock-based pay dilution separately. Related-party disclosures and treasury investment policy should be reviewed each annual report season.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "FY25 stabilisation missed with profit after tax down forty-nine percent year on year. FY26 revenue partially met with profit after tax still down thirty-five percent year on year. Q1 FY27 margin recovery partially met with operating profit margin near twenty-one percent though full-year FY27 remains pending. Derivatives utilisation and net debt to EBITDA targets remain pending with borrowings ₹466 crore Mar FY26.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "Bromine price normalisation off the trough, Acume derivative volumes, sulphate of potash domestic penetration, and operating leverage on captive infrastructure are the primary drivers. Management’s integrated brine-to-derivatives narrative supports revenue compounding if return on capital employed recovers toward double digits.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Bull case assumes FY27 profit after tax near ₹145 crore with operating profit margin sustained above twenty-four percent, quarterly bromine realisations rebounding from Mar 2026 lows, and the market holding a fifty-five times forward multiple on visible recovery, implying a target near ₹646 per share or about thirty-six percent above reference. Triggers include two consecutive quarters with TTM profit after tax above ₹120 crore and derivative utilisation crossing sixty percent with net debt to EBITDA below 1.5 times.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Bear case assumes FY27 profit after tax near ₹85 crore with operating profit margin reverting toward eighteen percent on prolonged bromine softness, with the market applying a forty-two times multiple, implying a target near ₹289 per share or about thirty-nine percent below reference. Triggers include TTM profit after tax falling below ₹90 crore with borrowings above ₹550 crore and Mar 2026-style fifteen percent operating profit margin repeating for three quarters.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value Archean on forward consolidated profit after tax times price-to-earnings, cross-checked against trailing operating profit times enterprise value to EBITDA with net debt near ₹200 crore after treasury investments. Base FY27E profit after tax ₹115 crore at fifty times implies about ₹465 per share, or about two percent below the ₹475 reference. Bear FY27E profit after tax ₹85 crore at forty-two times implies about ₹289. Bull FY27E profit after tax ₹145 crore at fifty-five times implies about ₹646. Trailing price-to-earnings near sixty-one times depressed earnings limits upside until profit after tax compounding resumes.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base roughly in line; earnings trough caps upside.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [289, 465, 646, 475], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly sales (₹ crore, Screener consolidated)",
    "Conclusion: Jun 2026 quarter at ₹327 cr; off FY24 peaks.",
    ["Mar 2025", "Jun 2025", "Sep 2025", "Dec 2025", "Mar 2026", "Jun 2026"],
    [{ name: "Sales", values: [346, 292, 233, 255, 301, 327], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, operating profit margin, and profit after tax on BSE/NSE results. Bromine and salt volume disclosures when published. Acume derivative utilisation and margin commentary on concalls. Net cash from operations and free cash flow trends. Borrowings and credit rating actions. Global bromine spot versus contract spreads. Promoter and institutional shareholding changes.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹475 reference. Base-case target near ₹465 per share implies about two percent downside, below the fifteen percent hurdle for a Buy while trailing multiples remain elevated on trough earnings. Upgrade toward Buy if two consecutive quarters show TTM profit after tax above ₹115 crore with operating profit margin at or above twenty-three percent and return on capital employed trending above ten percent while the base-case target clears ₹546 per share. Downgrade toward Avoid if operating profit margin falls below seventeen percent with TTM profit after tax below ₹85 crore for three quarters. Downgrade toward Avoid if borrowings exceed ₹550 crore while derivative revenue remains immaterial.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack verbatim BSE-uploaded concall PDFs for every quarter cited; excerpts are curated from the August 2026 earnings call and FY26 MD&A pending full ingestion. Bromine and salt volume time series are login-gated on Screener premium insights. Exact Acume derivative EBIT and customer concentration need annual report segment tables. Update bear, base, and bull when standalone volume metrics and derivative revenue publish in the next annual report.",
  },
];
