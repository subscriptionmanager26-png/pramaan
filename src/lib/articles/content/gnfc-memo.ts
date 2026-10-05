import type { ArticleBlock } from "../types";
import { seriesChart } from "../memo-visuals";

export const gnfcMemoBlocks: ArticleBlock[] = [
  { type: "h2", text: "What is this security?" },
  {
    type: "p",
    text: "Gujarat Narmada Valley Fertilizers & Chemicals Ltd (NSE: GNFC, BSE: 500670) is a Bharuch-based joint-sector chemicals and fertiliser company promoted by Gujarat State Investments and GSFC, with about 41.3% promoter holding in June 2026 on Screener. The stock is in BSE 500, Nifty Total Market, and Nifty Smallcap 500. At a reference price of ₹589 on 1 October 2026, market capitalisation is about ₹8,657 crore on roughly 14.7 crore shares (face value ₹10). Trailing price-to-earnings is near 8.4× on TTM earnings, with book value about ₹620 per share and return on equity near 9.1%. The quote sits below the 52-week high of ₹636 but well above the ₹365 low, reflecting a cyclical recovery in industrial chemicals after FY24 margin trough rather than a deep value trap on leverage.",
  },
  { type: "h2", text: "What does the company do and how does it get paid?" },
  {
    type: "p",
    text: "GNFC manufactures bulk industrial chemicals including methanol, formic acid, acetic acid, toluene di-isocyanate (TDI), nitric acid, ethyl acetate, technical grade urea, and ammonium nitrate, alongside urea and complex fertilisers sold under the Narmada brand. Industrial customers pay market-linked prices for acids and TDI; fertiliser grades depend on government subsidy and reimbursement mechanics for fixed costs and energy. A small IT services line remains non-material. Revenue mixes cyclical chemical spreads with regulated fertiliser volumes. Payment cycles combine faster chemical collections with fertiliser working capital tied to subsidy flows and inventory builds that showed up in FY26 working capital days on Screener.",
  },
  { type: "h2", text: "How did it get here?" },
  {
    type: "p",
    text: "Commissioned in 1982 at Bharuch, GNFC leveraged Gujarat gas access to build an integrated chemical chain. FY22 was a peak profit year with PAT about ₹1,710 crore on revenue ₹8,642 crore and OPM near 28% on Screener as chemical realisations surged. FY23 remained strong at PAT ₹1,472 crore before FY24 normalised sharply to PAT ₹497 crore as chemical prices fell and OPM dropped to 6%. FY25 stabilised at PAT ₹598 crore on revenue ₹7,892 crore. FY26 rebounded to PAT ₹809 crore with OPM 11% and TTM PAT ₹1,037 crore aided by Mar 2026 PAT ₹396 crore and Jun 2026 PAT ₹312 crore. CWIP rose to ₹900 crore by March 2026 while borrowings fell to ₹5 crore, signalling expansion without re-leveraging.",
  },
  seriesChart(
    "Consolidated revenue (₹ crore, Screener)",
    "Conclusion: Top-line was flat FY24 to FY26 before TTM re-accelerated on stronger quarters.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [{ name: "Sales", values: [7930, 7892, 7773, 8410], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who pays them and how concentrated is it?" },
  {
    type: "p",
    text: "End customers span paint and polyurethane makers for TDI, industrial users for acetic acid and nitric acid, defence and mining channels for ammonium nitrate and technical grade urea, and millions of farmers for subsidised urea. No single buyer dominates disclosure, but government fertiliser policy effectively sets urea economics. Promoter stability from Gujarat state-linked entities reduces governance surprise. FII holding fell from near 20% to about 13% between Mar 2024 and Jun 2026 while public float rose, adding liquidity but also trading volatility. Treasury investments on the balance sheet mean reported other income is a recurring feature investors must normalise when valuing core operations.",
  },
  { type: "h2", text: "What do they sell and what is the mix trend?" },
  {
    type: "p",
    text: "Screener premium insights cite chemicals at about 60% of H1 FY25 revenue versus 70% in FY22, with fertilisers filling the gap as chemical realisations fell between FY22 and FY24. Product-wise, methanol, acetic acid, and TDI drive margin swings; urea and ammonium nitrate provide volume anchors. FY26 recovery came with higher OPM in Mar and Jun 2026 quarters when chemical spreads improved. Technical grade urea benefited from wartime-linked demand commentary in secondary research, but segment revenue splits for FY26 are not in the free sources used here. Mix shift back toward chemicals helps when TDI and nitric acid tighten; mix toward urea compresses returns until policy reimburses fixed costs.",
  },
  seriesChart(
    "Operating profit vs PAT (₹ crore, consolidated)",
    "Conclusion: PAT exceeded OP materially because other income stayed near ₹450 to ₹500 crore TTM.",
    ["FY24", "FY25", "FY26", "TTM Jun-26"],
    [
      { name: "Operating profit", values: [502, 615, 879, 1241], color: "#1e3a5f" },
      { name: "PAT", values: [497, 598, 809, 1037], color: "#c27803" },
    ],
  ),
  { type: "h2", text: "What outside force moves the stock?" },
  {
    type: "p",
    text: "Global and domestic chemical prices move TDI, acetic acid, and methanol spreads. Natural gas and ammonia costs feed Bharuch economics. Department of Fertilizers decisions on urea fixed-cost and energy reimbursement directly affect fertiliser profitability. Monsoon and sowing patterns drive urea offtake. Capex execution on the combined cycle power plant and other FY27 projects moves depreciation and future energy costs. Interest rates matter less near-term because borrowings are minimal, but opportunity cost of large treasury balances affects other income. Peer re-rating among Gujarat chemical names can pull GNFC multiples even when fundamentals are unchanged.",
  },
  { type: "h2", text: "Financial history" },
  {
    type: "p",
    text: "Operating margin collapsed from 28% in FY22 to 6% in FY24 before recovering to 11% in FY26 and 15% TTM on Screener. ROCE fell from 33% in FY22 to 8% in FY24 and recovered to 12% in FY26. Three-year profit CAGR is negative on headline metrics because FY22 was an exceptional base. ROE averaged about 7% over three years, below cost of equity, so the market rightly treats GNFC as cyclical rather than a steady compounder. Investors should normalise Mar and Jun 2026 quarterly PAT when using trailing multiples near 8.4×.",
  },
  seriesChart(
    "Operating margin % (consolidated, Screener)",
    "Conclusion: Margin mean-reverted after FY22 peak; TTM reflects recovery quarters.",
    ["FY22", "FY24", "FY26", "TTM Jun-26"],
    [{ name: "OPM %", values: [28, 6, 11, 15], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Does reported profit turn into cash?" },
  {
    type: "p",
    text: "Cash from operations collapsed to ₹31 crore in FY24 despite ₹502 crore operating profit, then recovered to ₹605 crore in FY25 and ₹654 crore in FY26 on Screener. CFO to operating profit improved to about 111% in FY26, but working capital days jumped to 157 in FY26 from 61 in FY25, a warning flag. Free cash flow was ₹108 crore in FY26 after investing outflows ₹230 crore. Other income flatterers PAT versus pure operating cash generation. Dividend payout near 38% in FY26 signals board confidence, but sustained CFO above ₹600 crore is needed to fund ₹2,800 crore FY27 capex guidance without liquidating investments.",
  },
  seriesChart(
    "Cash from operations (₹ crore, consolidated)",
    "Conclusion: FY24 was an outlier trough; FY25 and FY26 normalised but WC days worsened.",
    ["FY24", "FY25", "FY26"],
    [{ name: "CFO", values: [31, 605, 654], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "What can break the balance sheet?" },
  {
    type: "p",
    text: "Borrowings of ₹5 crore at March 2026 are not the risk vector. The balance sheet risk is capex execution and opportunity cost: CWIP ₹900 crore plus FY27 spend guidance near ₹2,800 crore could absorb cash if chemical spreads reverse while projects continue. Investments fell from ₹3,030 crore in FY24 to ₹1,693 crore in FY26 as treasury was used, reducing future other income if not replenished. A simultaneous TDI price collapse and urea reimbursement delay would cut PAT toward our bear band without threatening solvency. Equity impairment is unlikely; dividend cuts and capex slowdown would come first.",
  },
  seriesChart(
    "CWIP vs investments (₹ crore, Mar FY26)",
    "Conclusion: Expansion is funded from internal resources; treasury decline funds CWIP build.",
    ["CWIP", "Investments"],
    [{ name: "Mar FY26", values: [900, 1693], color: "#1e3a5f" }],
  ),
  { type: "h2", text: "Who runs it and do incentives match shareholders?" },
  {
    type: "p",
    text: "Leadership operates under joint-sector oversight with Gujarat promoter entities holding a stable 41% stake. Incentives emphasise plant uptime, energy efficiency, and dividend continuity visible in payout ratios near 40%. That aligns with income-oriented shareholders but can encourage maintenance capex even when spreads are weak. Independent directors and audit committees follow listed company norms. Management communication on policy engagement is explicit in curated call excerpts, which helps investors track urea reimbursement risk rather than hiding it inside blended margins.",
  },
  { type: "h2", text: "What did they promise and what happened?" },
  {
    type: "p",
    text: "Management promised chemical stabilisation after FY24, debt reduction, sustained dividends, and a heavy FY27 capex wave with CCPP benefits. Chemical margins recovered partially into FY26. Debt is effectively gone on consolidated metrics. Dividends continued. Capex and CCPP remain pending full profit contribution with CWIP rising. Urea reimbursement promises remain outstanding per Q2 FY26 excerpts. Working capital deterioration partially offset CFO improvement. Overall, delivery is mixed: balance sheet stronger, policy and spread outcomes still open.",
  },
  { type: "h2", text: "What drives growth for the next 2 to 3 years?" },
  {
    type: "p",
    text: "Volume: higher utilisation of nitric acid, TDI, and ammonium nitrate when domestic industrial demand holds. Margin: acetic acid and methanol spreads if supply tightens. Policy: urea fixed-cost revision would lift fertiliser segment ROCE. Energy: CCPP synchronization lowering power cost from H2 FY27. Capex: new capacity coming online from the ₹2,800 crore programme. Treasury: redeploying investments into projects without equity dilution. These drivers are partially priced at 8.4× TTM earnings, so FY27 must show operating PAT closer to ₹900 crore excluding one-off other income spikes to justify re-rating toward bull scenarios.",
  },
  { type: "h2", text: "What could go better than base case?" },
  {
    type: "p",
    text: "Government implements urea energy and fixed-cost revisions, lifting fertiliser segment profit without volume change. TDI and technical grade urea realisations stay firm on export and defence-linked demand. CCPP synchronizes on time, cutting energy cost and boosting OPM 200 basis points. Chemical volume grows high single digits with stable spreads. Other income holds near ₹450 crore while operating profit rises. FY27 PAT could approach ₹1,150 crore and support our bull band near ₹860 per share.",
  },
  { type: "h2", text: "What could go worse than base case?" },
  {
    type: "p",
    text: "Acetic acid and methanol prices fall in a global oversupply wave while GNFC carries inventory. Urea reimbursement stays delayed through FY27. CCPP slips into FY28, raising CWIP without energy savings. Other income drops as investments are liquidated to fund capex. Working capital days stay above 120, keeping CFO near ₹400 crore despite accounting PAT. FY27 PAT could fall toward ₹720 crore and compress equity toward our bear case near ₹392 per share at 8× earnings.",
  },
  { type: "h2", text: "Valuation: bear, base, bull" },
  {
    type: "p",
    text: "We value FY27 consolidated PAT with price-to-earnings multiples suited to a joint-sector cyclical chemicals and fertiliser name (8× bear, 9.5× base, 11× bull), cross-checked with TTM operating profit near ₹1,241 crore at 8× EV/EBITDA implying about ₹675 per share before recovery premium. Bear FY27 PAT ₹720 crore implies about ₹392 per share (-33% vs ₹589 reference). Base PAT ₹980 crore implies about ₹633 (+7.5%). Bull PAT ₹1,150 crore implies about ₹860 (+46%). Base-case upside sits below our 15% Buy threshold, so the reference price already embeds much of the chemical recovery unless policy and CCPP outperform.",
  },
  seriesChart(
    "Scenario target price vs reference (₹ per share)",
    "Conclusion: Base does not clear 15% upside; bull needs policy and spread wins together.",
    ["Bear", "Base", "Bull", "Reference CMP"],
    [{ name: "Target / CMP", values: [392, 633, 860, 589], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Quarterly PAT (₹ crore, Screener)",
    "Conclusion: Mar and Jun 2026 quarters drove TTM; normalise before using 8× trailing P/E.",
    ["Dec-25", "Mar-26", "Jun-26"],
    [{ name: "PAT", values: [150, 396, 312], color: "#1e3a5f" }],
  ),
  seriesChart(
    "Reported PAT (₹ crore, annual)",
    "Conclusion: Earnings remain cyclical versus FY22 peak; FY26 marked recovery.",
    ["FY22", "FY24", "FY26", "TTM Jun-26"],
    [{ name: "PAT", values: [1710, 497, 809, 1037], color: "#c27803" }],
  ),
  { type: "h2", text: "Catalysts to watch" },
  {
    type: "p",
    text: "Department of Fertilizers notifications on urea fixed-cost and energy norms. CCPP synchronization date and first-month fuel savings disclosure. Monthly TDI and acetic acid realisation commentary in investor presentations. CWIP roll-forward versus ₹2,800 crore FY27 capex guidance. Working capital days and inventory build each quarter. Segment revenue mix when FY26 annual report publishes. BSE/NSE concall transcripts for verbatim volume guidance. Dividend declaration relative to PAT normalised for other income.",
  },
  { type: "h2", text: "Verdict and triggers (upgrade / downgrade)" },
  {
    type: "p",
    text: "Verdict: Neutral at ₹589 reference. Base-case target near ₹633 offers about 7.5% upside, below our 15% Buy hurdle, while low leverage and dividend yield near 3.6% keep the name off Avoid unless policy and spreads both fail. Upgrade to Buy if urea reimbursement is implemented and two consecutive quarters show consolidated OPM above 14% with CFO above ₹200 crore, lifting base PAT toward ₹1,050 crore and target above ₹678. Downgrade to Avoid if TTM PAT falls below ₹750 crore with OPM under 9% and working capital days stay above 140 while CCPP delays beyond FY27.",
  },
  { type: "h2", text: "What we do not know (gaps)" },
  {
    type: "p",
    text: "We lack exchange-uploaded verbatim concall transcripts for every quarter cited; excerpts are curated pending BSE PDF replacement. Segment revenue and PBIT splits for chemicals versus fertilisers for FY26 are not in the free sources used. Ammonia, TDI, and acetic acid production KMT series on Screener require premium login. Exact FY27 capex phasing by project is not modeled line by line. Treasury gain breakdown inside other income needs note-level reconciliation. IT services revenue contribution is immaterial but not stripped in our operating view. Update bear, base, and bull when FY26 annual report segment notes publish.",
  },
];
