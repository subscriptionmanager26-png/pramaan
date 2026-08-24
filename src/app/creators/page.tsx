import type { Metadata } from "next";
import { CreatorsExplorer } from "@/components/CreatorsExplorer";

export const metadata: Metadata = {
  title: "Creators",
};

export default function CreatorsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-navy">Creators</h1>
      <p className="mt-2 max-w-xl text-sm text-ink-2">
        Find a verified voice by the kind of work they publish and the topics they cover.
      </p>
      <div className="mt-8">
        <CreatorsExplorer />
      </div>
    </div>
  );
}
