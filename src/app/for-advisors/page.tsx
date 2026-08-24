import type { Metadata } from "next";
import { AdvisorForm } from "@/components/AdvisorForm";
import { PlatformsRow } from "@/components/PlatformsRow";

export const metadata: Metadata = {
  title: "For advisors",
};

export default function ForAdvisorsPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:items-start">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          Show the work. Keep the channel.
        </h1>
        <p className="mt-4 text-sm leading-7 text-ink-2">
          For SEBI-registered RIAs, research analysts, and PMS. You don’t write on Pramaan. We pull what you already publish on these four platforms.
        </p>
        <PlatformsRow className="mt-4" />
        <p className="mt-5 text-sm leading-7 text-ink-2">
          Events are a listing: title, time, host, format. Tickets and attendance stay on Zoom, YouTube, Twitter, or your own page.
        </p>
      </div>
      <AdvisorForm />
    </div>
  );
}
