import type { Metadata } from "next";
import type { ReactNode } from "react";

import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  path: "/account",
  title: "Account",
  description: "Sign in to PocketEdge with Google.",
});

export default function AccountLayout({ children }: { children: ReactNode }) {
  return children;
}