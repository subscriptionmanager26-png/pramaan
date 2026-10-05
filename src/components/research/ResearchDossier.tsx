import type { DeepCompanyResearch } from "@/lib/research/types";

export function ResearchDossier({ research }: { research: DeepCompanyResearch }) {
  return (
    <section className="mt-14 border-t border-line pt-10">
      <p className="text-meta uppercase tracking-[0.14em] text-ink-3">Research dossier</p>
      <h2 className="text-section mt-2 text-ink">{research.companyName}</h2>
      <p className="text-meta mt-2">
        {research.nseSymbol}
        {research.bseCode ? ` · BSE ${research.bseCode}` : null}
      </p>

      <div className="mt-8">
        <h3 className="text-[1.05rem] font-black italic tracking-tight text-ink">VALUE DRIVERS</h3>
        <ul className="mt-3 space-y-2">
          {research.valueDrivers.map((d) => (
            <li key={d} className="text-[15px] leading-6 text-ink-2">
              <span className="mr-2 text-accent">•</span>
              {d}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h3 className="text-[1.05rem] font-black italic tracking-tight text-ink">
          VALUATION · {research.valuation.methodology}
        </h3>
        <p className="text-meta mt-2">
          Ref ₹{research.valuation.referencePrice.toLocaleString("en-IN")} ·{" "}
          {research.valuation.referenceDate}
        </p>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
          <table className="min-w-full text-left text-[13.5px]">
            <thead className="bg-paper-2 text-ink-3">
              <tr>
                <th className="px-4 py-3 font-semibold">Case</th>
                <th className="px-4 py-3 font-semibold">FY PAT (₹ cr)</th>
                <th className="px-4 py-3 font-semibold">P/E</th>
                <th className="px-4 py-3 font-semibold">Target (₹)</th>
                <th className="px-4 py-3 font-semibold">vs ref</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {research.valuation.scenarios.map((s) => (
                <tr key={s.label} className="bg-white">
                  <td className="px-4 py-3 font-semibold capitalize text-ink">{s.label}</td>
                  <td className="px-4 py-3 text-ink-2">{s.patCrore.toLocaleString("en-IN")}</td>
                  <td className="px-4 py-3 text-ink-2">{s.targetPe}×</td>
                  <td className="px-4 py-3 font-semibold text-ink">
                    ₹{s.targetPrice.toLocaleString("en-IN")}
                  </td>
                  <td
                    className={`px-4 py-3 font-medium ${
                      s.vsReferencePct >= 0 ? "text-accent" : "text-ink-3"
                    }`}
                  >
                    {s.vsReferencePct > 0 ? "+" : ""}
                    {s.vsReferencePct}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {research.valuation.crossCheck ? (
          <p className="mt-3 text-[14px] leading-6 text-ink-2">{research.valuation.crossCheck}</p>
        ) : null}
      </div>

      {research.sources.length ? (
        <div className="mt-10">
          <h3 className="text-[1.05rem] font-black italic tracking-tight text-ink">SOURCES</h3>
          <ul className="mt-3 space-y-2">
            {research.sources.slice(0, 8).map((s) => (
              <li key={s.url + s.note} className="text-[13.5px] leading-5 text-ink-2">
                <a href={s.url} target="_blank" rel="noreferrer" className="font-medium text-accent hover:underline">
                  {s.kind}
                </a>
                <span className="text-ink-3"> — {s.note}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
