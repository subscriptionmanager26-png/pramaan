"use client";

import Link from "next/link";
import { useState } from "react";

const prompts = [
  "What did today’s Nvidia move mean for Asia tech?",
  "Explain the RBI pause in plain English",
  "Compare HDFC Bank franchise quality vs loan growth",
  "How should an India investor think about LRS this quarter?",
];

const sample = {
  question: "What did today’s Nvidia move mean for Asia tech?",
  answer: [
    "Nvidia’s beat and raised guidance reopened the AI-capex narrative. In Asia, that usually lifts semiconductor suppliers, ADR baskets, and a few domestic design/OSAT names first.",
    "Treat it as a risk-on impulse, not a blank cheque: watch whether financials and rate-sensitive India midcaps follow, or whether the move stays trapped in US mega-cap AI.",
    "Practical next step: if you already hold broad tech/semiconductor exposure, avoid chasing overnight. If you don’t, size via a diversified sleeve rather than a single name.",
  ],
};

export default function AIPage() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState<string | null>(null);

  function onAsk(value?: string) {
    const q = (value ?? query).trim();
    if (!q) return;
    setQuery(q);
    setSubmitted(q);
  }

  return (
    <div>
      <section className="grid-paper border-b border-line">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <p className="text-meta uppercase tracking-[0.16em]">Pramaan AI</p>
          <h1 className="text-display mt-4 text-ink">Ask the market anything.</h1>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-7 text-ink-2">
            Turn news and research into a clear answer — then follow the source trail yourself.
          </p>

          <form
            className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              onAsk();
            }}
          >
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about rates, sectors, or a company…"
              className="h-12 flex-1 rounded-full border border-ink/20 bg-white px-5 text-[15px] outline-none ring-accent focus:ring-2"
            />
            <button type="submit" className="btn-primary h-12 px-6">
              Ask AI
            </button>
          </form>

          <div className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2">
            {prompts.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => onAsk(p)}
                className="rounded-full border border-line bg-white px-3.5 py-2 text-left text-[13px] font-medium text-ink-2 transition-colors hover:border-accent/40 hover:text-accent"
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        {submitted ? (
          <article className="animate-fade-up rounded-2xl border border-line bg-white p-6 sm:p-8">
            <p className="text-meta uppercase tracking-[0.14em] text-accent">AI brief</p>
            <h2 className="mt-3 text-[1.35rem] font-bold tracking-tight text-ink">{submitted}</h2>
            <div className="mt-6 space-y-4 text-[15px] leading-7 text-ink-2">
              {(submitted === sample.question ? sample.answer : [
                "Here’s a grounded read based on today’s Pramaan wire and research desk notes.",
                "Markets are pricing the headline move first; second-order effects usually show up in rates, FX, and sector leadership over the next sessions.",
                "Use this as a starting brief — then open the linked news and research to verify.",
              ]).map((para) => (
                <p key={para.slice(0, 32)}>{para}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/news" className="btn-secondary text-[13px]">
                Read the news
              </Link>
              <Link href="/research" className="btn-ghost">
                Open research
              </Link>
            </div>
            <p className="text-meta mt-6">
              Demo response for design preview. Not investment advice.
            </p>
          </article>
        ) : (
          <div className="rounded-2xl border border-dashed border-line bg-paper-2 px-6 py-12 text-center">
            <p className="text-[15px] text-ink-2">Pick a prompt above, or type your own question.</p>
          </div>
        )}
      </section>
    </div>
  );
}
