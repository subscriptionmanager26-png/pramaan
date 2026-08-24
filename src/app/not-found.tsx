import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-navy">That page isn’t on the shelf.</h1>
      <Link href="/" className="offset-btn mt-8 inline-flex rounded-full border border-ink bg-white px-4 py-2 text-sm font-medium">
        Back to Discover
      </Link>
    </div>
  );
}
