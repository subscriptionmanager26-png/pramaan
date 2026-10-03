"use client";

import { FormEvent, useState } from "react";
import type { SebiType } from "@/lib/types";

const types: { id: SebiType; label: string }[] = [
  { id: "RIA", label: "Registered Investment Adviser" },
  { id: "RA", label: "Research Analyst" },
  { id: "PMS", label: "Portfolio Manager" },
];

export function AdvisorForm() {
  const [done, setDone] = useState(false);
  const [type, setType] = useState<SebiType>("RIA");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-line bg-white p-6">
        <p className="font-medium text-ink">Request in. This is a mock.</p>
        <p className="mt-2 text-sm text-ink-2">Nothing was sent — there is no backend yet.</p>
        <button type="button" onClick={() => setDone(false)} className="mt-4 text-sm text-accent hover:underline">
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-white p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-ink-2">Name</span>
          <input required name="name" className="mt-1 w-full rounded-xl border border-line bg-paper px-3 py-2 outline-none focus:border-accent/40" />
        </label>
        <label className="block text-sm">
          <span className="text-ink-2">Email</span>
          <input required type="email" name="email" className="mt-1 w-full rounded-xl border border-line bg-paper px-3 py-2 outline-none focus:border-accent/40" />
        </label>
        <label className="block text-sm">
          <span className="text-ink-2">Type</span>
          <select value={type} onChange={(e) => setType(e.target.value as SebiType)} className="mt-1 w-full rounded-xl border border-line bg-paper px-3 py-2 outline-none">
            {types.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="text-ink-2">SEBI number</span>
          <input required name="sebi" className="mt-1 w-full rounded-xl border border-line bg-paper px-3 py-2 font-mono text-sm outline-none focus:border-accent/40" placeholder="INA000013482" />
        </label>
        <p className="text-sm text-ink-2 sm:col-span-2">Channels we index</p>
        <label className="block text-sm">
          <span className="text-ink-2">Twitter</span>
          <input name="twitter" className="mt-1 w-full rounded-xl border border-line bg-paper px-3 py-2 outline-none focus:border-accent/40" placeholder="@handle" />
        </label>
        <label className="block text-sm">
          <span className="text-ink-2">Substack</span>
          <input name="substack" className="mt-1 w-full rounded-xl border border-line bg-paper px-3 py-2 outline-none focus:border-accent/40" placeholder="yours.substack.com" />
        </label>
        <label className="block text-sm">
          <span className="text-ink-2">YouTube</span>
          <input name="youtube" className="mt-1 w-full rounded-xl border border-line bg-paper px-3 py-2 outline-none focus:border-accent/40" placeholder="@channel" />
        </label>
        <label className="block text-sm">
          <span className="text-ink-2">Podcast</span>
          <input name="podcast" className="mt-1 w-full rounded-xl border border-line bg-paper px-3 py-2 outline-none focus:border-accent/40" placeholder="Show name or RSS" />
        </label>
      </div>
      <button
        type="submit"
        className="mt-5 inline-flex rounded-lg bg-accent px-5 py-2.5 text-[13.5px] font-medium text-white hover:opacity-90"
      >
        Request a listing
      </button>
    </form>
  );
}
