import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const astecMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Astec LifeSciences Ltd (NSE: ASTEC, BSE: 533138) is a promoter-led Indian B2B manufacturer of agrochemical technical actives, formulations, intermediates, and CDMO services, historically linked to the Sumitomo Chemical India ecosystem with about 72% promoter holding as of June 2026 on Screener. The stock is in BSE Commodities and related indices. At a reference price of ₹709 on 1 October 2026, market capitalisation is about ₹1,579 crore on roughly 2.23 crore shares (face value ₹10). Trailing consolidated price-to-earnings is not meaningful on TTM losses, with book value about ₹175 per share and return on capital employed near -5%. The quote sits between the 52-week high of ₹942 and low of ₹512, pricing a turnaround after three consecutive loss years even though FY26 operating profit margin was only near breakeven.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "Astec earns by selling technical grade actives such as tebuconazole and propiconazole, herbicides including quizalofop and sulfonylureas, plant growth regulator paclobutrazol, and household insecticide transfluthrin, plus custom synthesis for crop science clients in Europe, Japan, and the US. Revenue is recognised on dispatch to formulators and distributors; pricing follows global generic indices and contract cycles, so operating profit margin collapsed from about 23% in FY22 to negative territory in FY25 before a partial FY26 recovery. Payment cycles are long with debtor days near 202 at March FY26 on Screener. CDMO projects add utilisation at Maharashtra and Gujarat plants but do not yet offset weak triazole realisations. The company does not sell farmer brands at scale; the equity story is B2B manufacturing, exports to about twenty-four countries, and balance sheet repair.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Astec scaled triazole and herbicide technicals through the 2010s, with consolidated revenue peaking near ₹677 crore in FY22 and PAT near ₹90 crore per Screener. Generic price pressure and customer destocking cut revenue to ₹458 crore in FY24 and ₹381 crore in FY25, turning operating profit deeply negative. FY26 revenue recovered to ₹448 crore but reported PAT remained a loss near ₹81 crore as interest near ₹35 crore and depreciation near ₹45 crore absorbed a near-breakeven operating line. Promoter holding rose toward 72% through the stress period, signalling support, while borrowings stayed near ₹449 crore Mar FY26. The market at ₹709 appears to capitalise a return toward FY22 economics faster than recent quarters justify.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: FY24–FY25 trough; FY26 partial rebound.",
    ["FY22", "FY23", "FY24", "FY25", "FY26"],
    [{ name: "Sales", values: [677, 628, 458, 381, 448], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "Customers are export formulators, domestic B2B buyers, and CDMO clients; company disclosures cite sales across roughly twenty-four countries without naming top customers in free quarterly sources. Product concentration in triazoles and selected herbicides means a few molecules drive margins when generic prices move. Promoter control near 72% aligns strategy with the founding group, while public float near 25% is large enough for retail turnover but FII ownership below 0.1% in June 2026 limits institutional support. DII ownership near 3% is modest. Concentration risk sits in molecule pricing and export credit terms rather than a single domestic brand franchise.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "The portfolio spans fungicides (tebuconazole, propiconazole, hexaconazole, difenoconazole), herbicides (quizalofop, imazethapyr, sulfonylureas), paclobutrazol, transfluthrin, and intermediates for third parties. Management emphasises CDMO and custom synthesis to stabilise plant load when commodity technical prices weaken. Mix shift toward higher-margin projects is strategic, but FY26 consolidated OPM near -1% shows execution lag. Domestic formulation volumes remain seasonally volatile, visible in Q1 FY27 revenue near ₹84 crore with a PAT loss near ₹19 crore. Export share is material per company profile but exact quarterly splits require annual report notes not fully ingested here.",
  },
  seriesChart(
    "Reported PAT (₹ crore, consolidated)",
    "Conclusion: Three loss years after FY22 peak.",
    ["FY22", "FY23", "FY24", "FY25", "FY26"],
    [{ name: "PAT", values: [90, 26, -47, -135, -81], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Operating profit margin % (consolidated)",
    "Conclusion: FY26 near breakeven; FY25 deeply negative.",
    ["FY22", "FY23", "FY24", "FY25", "FY26"],
    [{ name: "OPM %", values: [23, 12, -1, -17, -1], color: "#c27803" }],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global generic triazole and herbicide prices, Chinese export supply, and customer inventory cycles set realisations for Astec’s B2B basket. Rupee versus dollar moves affect export revenue and import parity on intermediates. Domestic monsoon timing shifts formulation offtake, hurting Q1 FY27 revenue versus prior year per Screener quarterly tables. Interest rates matter because borrowings near ₹449 crore Mar FY26 keep interest near ₹35 crore annually while PAT is negative. Peer re-rating in Indian technical agchem names sets sentiment, but Astec trades a distressed turnaround rather than a cash-rich export franchise. Debtor days near 202 amplify working capital stress when prices soften.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Operating profit fell from ₹154 crore in FY22 to a loss near ₹66 crore in FY25 before improving to a loss near ₹4 crore at the operating line in FY26 on revenue ₹448 crore. Other income near ₹3 crore in FY26 did not offset interest and depreciation. ROCE moved from 22% in FY22 to -5% in FY26 on Screener. Five-year sales CAGR near -4% highlights structural volume and price pressure, not a one-quarter blip. Mar FY26 quarter showed OPM near 6% with PAT loss near ₹8 crore, proving momentum can inflect within a year but not yet enough for full-year profitability. Reserves per share remain near ₹175 book value, far below the 4× price-to-book multiple implied at ₹709.",
  },
  seriesChart(
    "Operating profit vs PAT (₹ crore, consolidated)",
    "Conclusion: Interest and D&A keep PAT negative in FY26.",
    ["FY24", "FY25", "FY26"],
    [
      { name: "OP", values: [-6, -66, -4], color: "#1e3a5f" },
      { name: "PAT", values: [-47, -135, -81], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Net cash from operating activities was about ₹10 crore in FY24, -₹8 crore in FY25, and -₹81 crore in FY26 per Screener cash flow tables, with free cash flow negative near ₹86 crore in FY26 after capex. Debtor days near 202 and inventory days near 169 at March FY26 show working capital absorbing cash even as revenue rebounded. Until CFO turns sustainably positive, headline PAT recovery will lag if receivables stretch on export customers. FY22 had stronger conversion when OPM was 23%, providing a historical benchmark bulls cite. Q1 FY27 loss reinforces that collections and inventory discipline must improve before the equity deserves a FY22 multiple.",
  },
  seriesChart(
    "Net cash from operations (₹ crore, consolidated)",
    "Conclusion: FY26 CFO deeply negative.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Net CFO", values: [10, -8, -81], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Debtor days (consolidated, Screener)",
    "Conclusion: 202 days at Mar FY26; key watch item.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Debtor days", values: [135, 141, 202], color: "#c27803" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings near ₹449 crore Mar FY26 against reserves and equity capital imply leverage is the primary risk, not immediate insolvency, especially with promoter holding near 72%. Interest coverage is weak while operating profit is near breakeven or negative, and Screener flags low interest coverage as a con. If generic prices weaken again while debtor days stay above 180, borrowings could re-test the FY25 peak near ₹555 crore and force tighter covenants or equity support. Fixed assets near ₹459 crore and CWIP near ₹20 crore limit quick asset sales; the balance sheet breaks through refinancing stress and sustained negative CFO, not through a single quarter loss. Promoter support mitigates but does not eliminate dilution or higher-cost debt risk.",
  },
  seriesChart(
    "Borrowings (₹ crore, consolidated)",
    "Conclusion: Down from FY25 peak; still elevated.",
    ["FY24", "FY25", "FY26"],
    [{ name: "Borrowings", values: [494, 555, 449], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "Promoters increased holding toward 72% through the downturn, which aligns insiders with minority shareholders if support continues via patient capital and working capital funding. Executive compensation is not load-bearing in our sources, but capital allocation emphasises plant utilisation, CDMO wins, and debt reduction over dividends, with payout at 0% in loss years. Public shareholders bear turnaround execution risk while promoters control board outcomes. Incentive alignment improves if management ties capex and credit policy to positive CFO quarters rather than revenue alone.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "Management entered FY26 promising operating margin recovery after FY25’s -17% OPM shock. FY26 delivered near-breakeven operating profit but full-year PAT loss near ₹81 crore, a partial outcome. Working capital promises to cut debtor days missed as days rose to 202. Deleveraging from ₹555 crore borrowings showed partial success at ₹449 crore. FY27 profitability guidance remains pending with Q1 FY27 still loss-making. CDMO pipeline commentary is positive in tone but not yet visible as sustained PAT in consolidated results.",
  },
  { type: "h2", text: "What drives growth for the next 2–3 years?" },
  {
    type: "p",
    text: "First lever is generic triazole and herbicide price normalisation versus FY24–FY25 troughs. Second is CDMO and custom synthesis utilisation filling Maharashtra and Gujarat assets. Third is domestic formulation volume recovery tied to monsoon and channel inventory. Fourth is operating leverage if OPM moves from breakeven toward high single digits while revenue grows mid-single digits. Fifth is working capital release if debtor days fall toward 160, converting OP into CFO. Growth requires no large equity raise if promoters and lenders extend support, but interest near ₹30 crore annually must be covered by operating profit.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Export restocking coincides with CDMO contract wins, lifting OPM toward 12% on revenue above ₹520 crore. Borrowings fall below ₹380 crore with positive CFO near ₹60 crore. FY27 PAT approaches ₹55 crore and the market applies 13× forward earnings, supporting our bull band near ₹321 per share, still below ₹709 reference unless multiples expand further on sentiment.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Generic prices weaken again, revenue stalls near ₹440 crore, and OPM stays near 2%. Debtor days remain above 200 with negative CFO. Borrowings climb back toward ₹500 crore and interest coverage deteriorates. FY27 PAT near ₹5 crore at 8× earnings implies our bear case near ₹18 per share, far below reference.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated PAT with price-to-earnings multiples suited to a leveraged B2B agchem turnaround only after earnings normalise (8× bear, 11× base, 13× bull), cross-checked against net debt near ₹449 crore and FY26 operating profit near breakeven. Bear FY27 PAT ₹5 crore implies about ₹18 per share (-97% vs ₹709 reference). Base PAT ₹22 crore implies about ₹109 (-85%). Bull PAT ₹55 crore implies about ₹321 (-55%). None of our scenarios reach the 15% upside hurdle to reference; CMP embeds a sharper FY22-style rebound and multiple expansion than base case supports.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: All scenarios below CMP; Avoid on base math.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [18, 109, 321, 709], color: "#1e3a5f" }],
  ),
  seriesChart(
    "ROCE % (consolidated, Screener)",
    "Conclusion: Negative ROCE; needs OP recovery.",
    ["FY24", "FY25", "FY26"],
    [{ name: "ROCE", values: [-4, -13, -5], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Quarterly revenue, OPM, and PAT on BSE/NSE results with CDMO commentary. Debtor and inventory days each quarter on Screener. Borrowings and interest expense versus operating profit. Promoter holding and any preferential issuance. Generic triazole price indices versus management realisation remarks. Export customer inventory commentary on concalls. Mar FY26 style quarters with OPM above 6% repeating for four consecutive periods. Any dividend or guidance reinstatement after PAT turns positive. Lender covenant disclosures in annual report.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Avoid at ₹709 reference. Base-case target near ₹109 per share implies about 85% downside versus reference on FY27 PAT ₹22 crore at 11×, far from the 15% upside rule for Buy. Upgrade toward Neutral if two consecutive quarters show consolidated PAT above ₹8 crore with OPM above 8%, debtor days below 170, and net CFO positive ₹25 crore combined. Upgrade toward Buy only if FY27 PAT run-rate exceeds ₹55 crore with borrowings below ₹380 crore and base-case target clears ₹815 (+15% vs reference). Downgrade toward deeper Avoid if borrowings exceed ₹500 crore while PAT remains negative for four quarters or if promoter holding falls without explanation.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack exchange-uploaded verbatim concall transcripts for every quarter cited; excerpts are curated pending BSE PDF replacement. Exact export country and customer concentration requires FY26 annual report notes not yet ingested line by line. CDMO revenue share and project backlog are not quantified in free quarterly sources. Segment EBIT for technicals versus formulations is not broken out. R&D spend as percent of sales is login-gated on Screener insights. Related-party terms with Sumitomo Chemical India entities need annual report verification. Update bear, base, and bull when FY26 annual report and lender maturity schedules publish.",
  },
];
