"use client";

import type { ReactNode } from "react";
import { Page, PageHeader } from "@/components/shell/Page";

import "./tools-tokens.css";
import "./mf-screener/mfScreener.css";

export function ToolsFrame({
  title,
  description,
  meta,
  children,
}: {
  title: string;
  description?: string;
  meta?: ReactNode;
  children: ReactNode;
}) {
  return (
    <Page width="wide" className="market-tools">
      <PageHeader title={title} description={description} />
      {meta ? <div className="-mt-2 mb-6">{meta}</div> : null}
      {children}
    </Page>
  );
}
