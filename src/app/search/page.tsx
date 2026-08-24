import type { Metadata } from "next";
import { Suspense } from "react";
import { SearchResults } from "@/components/SearchResults";

export const metadata: Metadata = {
  title: "Search",
};

export default function SearchPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-navy">Search</h1>
      <p className="mt-2 text-sm text-ink-2">Find a person, topic, piece of work, or SEBI registration number.</p>
      <div className="mt-6">
        <Suspense>
          <SearchResults />
        </Suspense>
      </div>
    </div>
  );
}
