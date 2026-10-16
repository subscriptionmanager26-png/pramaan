import { PramaanAgentChat } from "@/components/agent/PramaanAgentChat";

const prompts = [
  "What did today’s Nvidia move mean for Asia tech?",
  "Explain the RBI pause in plain English",
  "Summarise my holdings and flag concentration risk",
  "How should an India investor think about LRS this quarter?",
];

export default function AIPage() {
  return (
    <div>
      <section className="grid-paper border-b border-line">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-16">
          <p className="text-meta uppercase tracking-[0.16em]">Pramaan AI</p>
          <h1 className="text-display mt-4 text-ink">Your Pocketedge agent.</h1>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-7 text-ink-2">
            Real answers from your private agent — holdings, research, and Pramaan context — not a static demo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <PramaanAgentChat />
        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-2">
          {prompts.map((p) => (
            <span
              key={p}
              className="rounded-full border border-line bg-white px-3.5 py-2 text-[13px] font-medium text-ink-2"
            >
              {p}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
