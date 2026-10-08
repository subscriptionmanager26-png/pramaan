import type { Guide } from "./types";

const IMG = {
  globe:
    "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80",
  remit:
    "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80",
  avenues:
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
  tax:
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
};

/** Explainers on investing in global markets as a resident Indian. Not tax or legal advice. */
export const globalInvestingGuides: Guide[] = [
  {
    slug: "global-markets-through-india",
    title: "Global markets through India: the map",
    summary:
      "Why Indians look abroad, what RBI’s Liberalised Remittance Scheme (LRS) actually controls, and how the main routes (direct US listing, India-listed ETFs and funds, and GIFT City) fit together.",
    kind: "guide",
    topic: "Global investing",
    publishedAt: "2026-10-08T10:00:00+05:30",
    readMinutes: 12,
    image: IMG.globe,
    body: [],
    sections: [
      {
        heading: "Why invest outside India at all?",
        paragraphs: [
          "Most Indian wealth already sits in rupee assets: domestic equity, fixed deposits, real estate, and local mutual funds. That is not wrong. It is simply concentrated in one economy, one currency, and one regulatory regime.",
          "Global investing is usually about diversification, not abandoning India. You are adding exposure to sectors under-represented on Nifty (large global tech platforms, healthcare innovators, defence primes), to currencies that move differently from the rupee, and to markets that can be cheap or expensive on a different cycle than India.",
          "From India you do not get a blank cheque. The Reserve Bank of India (RBI) routes overseas money movement through FEMA rules and the Liberalised Remittance Scheme (LRS). Your broker, bank, or platform is responsible for filings; you are responsible for staying inside limits and reporting correctly in your income-tax return.",
        ],
      },
      {
        heading: "The three buckets most Indians use",
        paragraphs: [
          "Bucket 1 — Send rupees abroad under LRS and hold assets overseas. Typical use: US stocks and ETFs via an Indian broker’s global desk, or dedicated apps (Vested, INDmoney, etc.). You own securities in a US (or other) custodial account. Currency conversion happens at remittance.",
          "Bucket 2 — Stay in rupees, buy a global wrapper listed in India. International mutual funds (fund of funds), ETFs such as Nasdaq 100 or S&P 500 feeders, gold or Hang Seng trackers. You trade on NSE/BSE in INR; the fund house handles underlying foreign assets.",
          "Bucket 3 — GIFT City (IFSC) products for residents who want offshore-style funds with a Gujarat wrapper. Useful for certain dollar products and AIF structures; paperwork and minimums differ from retail MF.",
          "Most beginners start in Bucket 2 (simple, INR ticketing) or a small Bucket 1 ticket via LRS once they understand conversion cost and US tax forms.",
        ],
      },
      {
        heading: "Who regulates what?",
        paragraphs: [
          "RBI / FEMA: whether you may remit, how much per financial year, and permitted purposes (investment is allowed; gambling and margin debt abroad are not).",
          "SEBI: Indian mutual funds, ETFs, and registered intermediaries marketing global access from India.",
          "US SEC / IRS (if you hold US securities): broker KYC, W-8BEN, and potential withholding on dividends. India–US DTAA may reduce withholding if forms are filed.",
          "Income Tax Department: worldwide income for residents; Schedule FA for foreign assets; capital gains on sale; TCS already collected on LRS may appear on your Form 26AS.",
        ],
      },
      {
        heading: "A sensible order of operations",
        paragraphs: [
          "Fix your domestic emergency fund and core equity/debt allocation first. Global is a satellite, not a substitute for rupee goals due in the next three years.",
          "Pick a route: INR ETF/MF for small monthly SIPs; LRS for direct US names you want to hold for years.",
          "Budget all-in cost: spread on FX, platform fee, US dividend withholding, and Indian tax on gains — not just “zero brokerage”.",
          "Set calendar reminders: advance tax if gains are large; Schedule FA before filing; renew W-8BEN when your broker asks.",
        ],
      },
    ],
  },
  {
    slug: "lrs-costs-and-limits",
    title: "LRS: limits, costs, and TCS",
    summary:
      "The $250,000 per financial year cap, what banks and brokers charge on top of the FX spread, and how tax collected at source (TCS) on high remittances shows up later.",
    kind: "guide",
    topic: "Global investing",
    publishedAt: "2026-10-08T10:15:00+05:30",
    readMinutes: 10,
    image: IMG.remit,
    body: [],
    sections: [
      {
        heading: "The limit (and what counts)",
        paragraphs: [
          "Under LRS, a resident individual may remit up to USD 250,000 per financial year (April–March) for permitted current or capital account transactions, including overseas direct investment.",
          "The limit is per person, not per account. Education, travel, and gifts abroad also consume the same bucket. Track the total across all banks and brokers.",
          "Minors have their own LRS cap in practice through a guardian; family pooling to evade limits is not permitted.",
        ],
      },
      {
        heading: "Where the money goes on each remittance",
        paragraphs: [
          "FX spread: Banks quote a rupee rate worse than the interbank mid — often 0.25%–1% for retail, wider for small tickets. Brokers with bundled FX may show “commission free” but embed spread.",
          "Outward remittance charges: Many banks charge a flat fee (roughly ₹500–₹1,500) plus GST per SWIFT transfer. Some fintech stacks absorb this on larger tickets.",
          "GST: Currently 18% on the bank’s service charge component (not on the full remitted amount).",
          "Correspondent fees: Occasionally a small intermediary fee is deducted in USD before credit to your US broker.",
          "Ongoing US costs: SEC/FINRA pass-through, ADR custody fees on some names, and bid–ask on ETFs.",
        ],
      },
      {
        heading: "TCS on LRS (high level)",
        paragraphs: [
          "If you remit for overseas tour packages or other non-education/medical LRS purposes, TCS may apply once aggregate LRS outflows cross thresholds set in the Finance Act (rates and thresholds change — verify for the year you remit).",
          "For remittances specifically for overseas investment, rules have shifted across budgets; your bank will deduct TCS if applicable and issue a certificate.",
          "TCS is not extra tax by default — it is collected upfront and can usually be adjusted against your final income-tax liability or claimed as credit when you file, subject to your CA’s reading of your facts.",
          "Keep Form 26AS / AIS and bank certificates; mismatches trigger notices.",
        ],
      },
      {
        heading: "How to compare platforms fairly",
        paragraphs: [
          "Ask for an all-in quote on ₹5 lakh: rupees debited, USD credited, time to settle, and whether you can repatriate dividends back to India easily.",
          "Check outbound and inbound: selling US stock and bringing money home is a second FX leg with its own spread.",
          "For recurring SIPs, prefer auto-debit only after you have verified annual LRS headroom.",
        ],
      },
    ],
  },
  {
    slug: "avenues-global-investing-india",
    title: "Avenues: US stocks, ETFs, and India-listed wrappers",
    summary:
      "Direct US access via LRS, international mutual funds, and NSE/BSE ETFs — with trade-offs on cost, minimums, liquidity, and complexity.",
    kind: "guide",
    topic: "Global investing",
    publishedAt: "2026-10-08T10:30:00+05:30",
    readMinutes: 14,
    image: IMG.avenues,
    body: [],
    sections: [
      {
        heading: "Route A — US brokerage via LRS",
        paragraphs: [
          "How it works: Complete KYC with an Indian entity tied to a US broker (or a standalone global platform). Remit under LRS; USD lands in your brokerage account; you buy US-listed stocks and ETFs.",
          "Best for: Specific US companies, broad ETFs (VT, VOO, QQQ), and tax-loss harvesting in US wrappers where supported.",
          "Watch-outs: FX on every funding event; US estate-tax exposure for large US situs assets (seek advice if net worth is material); fractional shares may have odd tax lots.",
          "Examples of access patterns Indians use: full-service banks with global desks, discount brokers with US tie-ups, and app-first platforms marketing zero-commission US trades.",
        ],
      },
      {
        heading: "Route B — International mutual funds (India domiciled)",
        paragraphs: [
          "How it works: You buy units of a fund registered in India that invests overseas (often via a feeder into a Luxembourg or US mother fund). SIP in INR; no annual LRS tracking for the underlying investment.",
          "Best for: Hands-off global equity or debt, small ticket sizes, investors who do not want a US brokerage login.",
          "Costs: Total expense ratio (TER) often 0.5%–1.5% plus embedded fund charges; less transparent than a single ETF TER but simpler operationally.",
          "Liquidity: Redemptions settle in rupees on T+3-ish cycles; NAV is once daily.",
        ],
      },
      {
        heading: "Route C — India-listed ETFs",
        paragraphs: [
          "How it works: Buy an ETF on NSE/BSE that tracks a foreign index (Nasdaq 100, S&P 500, Hang Seng, gold, etc.). Trades like a stock; iNAV vs market price can diverge intraday.",
          "Best for: Tactical allocation, intraday liquidity, pairing with existing demat account.",
          "Costs: TER + brokerage + tracking error; premium/discount to iNAV matters — use live iNAV tools before large orders.",
          "Tax: Treated as equity or non-equity depending on the ETF’s underlying classification — confirm with the factsheet; misclassification hurts at redemption.",
        ],
      },
      {
        heading: "Route D — GIFT City (IFSC)",
        paragraphs: [
          "How it works: Invest through funds or platforms operating in Gujarat’s International Financial Services Centre with USD books.",
          "Best for: Specific offshore funds, some AIFs, and investors already working with private bankers.",
          "Watch-outs: Separate KYC, minimum ticket sizes, and a thinner product shelf than US markets.",
        ],
      },
      {
        heading: "Choosing among routes",
        paragraphs: [
          "Monthly ₹10,000–₹25,000 global SIP: international MF or India-listed ETF usually beats repeated LRS micro-transfers.",
          "Concentrated US tech sleeve: LRS into US ETF.",
          "Need to see live premium to iNAV: India-listed ETF with an iNAV tracker.",
          "You already file Schedule FA: any route works; pick the one with cleanest statements for your CA.",
        ],
      },
    ],
  },
  {
    slug: "taxation-global-investments-india",
    title: "Taxation for residents: gains, dividends, and Schedule FA",
    summary:
      "How Indian tax law treats overseas stocks, funds, and ETFs; foreign tax credits; and the annual foreign-asset disclosure most investors miss until their CA asks.",
    kind: "guide",
    topic: "Global investing",
    publishedAt: "2026-10-08T10:45:00+05:30",
    readMinutes: 11,
    image: IMG.tax,
    body: [],
    sections: [
      {
        heading: "Residency drives everything",
        paragraphs: [
          "If you are a resident and ordinarily resident (ROR) in India, you pay Indian tax on worldwide income. Global investing does not move you outside that frame.",
          "Non-resident Indians (NRIs) have different rules; this guide focuses on residents investing from India.",
        ],
      },
      {
        heading: "Capital gains — overseas direct stocks",
        paragraphs: [
          "Gains on US (or other foreign) shares are typically taxed in India as capital gains. Holding period and rate depend on whether the asset is treated as equity-oriented under the Income-tax Act for that year’s rules.",
          "US securities held directly are usually non-equity for Indian tax — shorter holding periods can attract slab rates; longer holds may get indexation benefits only where applicable law allows (verify each year’s Finance Act).",
          "Keep trade confirms in USD and INR; your CA will convert at RBI reference rates for the transaction date.",
        ],
      },
      {
        heading: "Capital gains — India-listed international funds & ETFs",
        paragraphs: [
          "If the Indian fund or ETF qualifies as equity-oriented (≥65% domestic equity test or as defined for overseas funds in that year’s rules), long-term gains may get the equity LTCG treatment; otherwise debt-like rates apply.",
          "Read the latest factsheet classification — fund houses state whether the scheme is equity or other for tax.",
        ],
      },
      {
        heading: "Dividends and withholding",
        paragraphs: [
          "US dividends often arrive net of 25% withholding under default rules; India–US DTAA can reduce to 15% or 25% depending on forms (W-8BEN) and entity type.",
          "Report gross dividend in India; claim foreign tax credit per Section 90/91 with proof of US tax withheld.",
          "India-listed funds: dividends taxed at slab for residents (post-2020 regime) unless reinvested in a growth plan.",
        ],
      },
      {
        heading: "Schedule FA (foreign assets)",
        paragraphs: [
          "If you hold foreign assets above de minimis thresholds, disclose them in Schedule FA of the ITR — including overseas brokerage accounts, foreign stock, and some foreign retirement accounts.",
          "Missing FA when required is a common source of compliance pain; automate a year-end export from your US broker.",
        ],
      },
      {
        heading: "Practical filing checklist",
        paragraphs: [
          "April: tally LRS used vs USD 250k cap.",
          "Year-end: download US 1099 / broker gain-loss report.",
          "Before ITR due date: reconcile TCS credits, FA schedule, and advance tax if gains are large.",
          "Work with a CA the first year you sell — template yourself only after you understand the pattern.",
        ],
      },
    ],
  },
];
