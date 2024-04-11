"use client";

import { codeToHtml } from "shiki";
import type { BundledLanguage, BundledTheme } from "shiki";
import CopyButton from "../button/CopyButton";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { themeAtom } from "@/lib/atoms/themeAtom";
import { LoaderCircle } from "lucide-react";

type Props = {
  code: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
  filename?: string;
};

export default function Code({
  code,
  lang = "typescript",
  theme = "github-light-default",
  filename = "file.js",
}: Props) {
  const [html, setHtml] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [mode, setMode] = useAtom(themeAtom);

  const fetchHTML = async () => {
    setLoading(true); // Set loading state to true before fetching HTML
    const html = await codeToHtml(code, {
      lang,
      theme: mode === "dark" ? "github-dark-default" : "github-light",
    });
    setHtml(html);
    setLoading(false);
  };

  useEffect(() => {
    fetchHTML();
  }, [mode, code]);

  return (
    <div className="w-[calc(100vw-32px)] rounded-lg md:w-[calc(100vw-160px-32px-8vw)] lg:w-[calc(100vw-175.7px-48px-16vw)]">
      <div className="overflow-hidden rounded-lg">
        <div className="flex items-center justify-between border-2 border-border bg-border py-1 pl-4 pr-1 text-sm">
          <p className="text-sm font-medium text-foreground underline">{filename}</p>
          <CopyButton codeString={code} />
        </div>
        {loading ? (
          <div className="rounded-b-lg border-2 border-t-0 border-border bg-popover px-4 py-12 flex justify-center items-center text-sm text-primary">
            <LoaderCircle size={32} className="animate-spin"/>
          </div>
        ) : (
          <div
            className="rounded-b-lg border-2 border-t-0 border-border text-sm [&>pre]:overflow-x-auto [&>pre]:!rounded-b-lg [&>pre]:!bg-popover [&>pre]:py-3 [&>pre]:pl-4 [&>pre]:pr-5 [&>pre]:leading-snug [&_code]:block [&_code]:w-fit [&_code]:min-w-full"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </div>
    </div>
  );
}
