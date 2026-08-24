import type { Metadata } from "next";
import { EventsExplorer } from "@/components/EventsExplorer";

export const metadata: Metadata = {
  title: "Events",
};

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-navy">Events</h1>
      <p className="mt-2 max-w-xl text-sm leading-6 text-ink-2">
        A short list of useful sessions from verified voices. Pramaan lists the details; sign-up and attendance happen on the host’s page.
      </p>
      <div className="mt-8">
        <EventsExplorer />
      </div>
    </div>
  );
}
