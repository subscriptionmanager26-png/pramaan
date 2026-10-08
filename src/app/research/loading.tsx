import { Page } from "@/components/shell/Page";

export default function ResearchLoading() {
  return (
    <Page>
      <div className="animate-pulse space-y-6">
        <div className="h-8 w-48 rounded-lg bg-paper-2" />
        <div className="h-4 w-full max-w-xl rounded bg-paper-2" />
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-9 w-16 rounded-full bg-paper-2" />
          ))}
        </div>
        <div className="space-y-4 border-t border-line pt-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="grid grid-cols-[140px_1fr] gap-4">
              <div className="aspect-[16/11] rounded-xl bg-paper-2" />
              <div className="space-y-2">
                <div className="h-3 w-24 rounded bg-paper-2" />
                <div className="h-5 w-full max-w-md rounded bg-paper-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
}
