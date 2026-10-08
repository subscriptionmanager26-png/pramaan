import { Page } from "@/components/shell/Page";

export default function NewsLoading() {
  return (
    <Page>
      <div className="animate-pulse space-y-8">
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-9 w-20 rounded-full bg-paper-2" />
          ))}
        </div>
        <div className="aspect-[2/1] max-w-3xl rounded-2xl bg-paper-2" />
        <div className="aspect-[16/10] max-w-2xl rounded-2xl bg-paper-2" />
      </div>
    </Page>
  );
}
