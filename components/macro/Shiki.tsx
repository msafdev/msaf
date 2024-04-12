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
};

export default function Code({
  code,
  lang = "typescript",
  theme = "github-light-default",
}: Props) {
  const [html, setHtml] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [mode, setMode] = useAtom(themeAtom);

  const fetchHTML = async () => {
    setLoading(true);
    const html = await codeToHtml(code, {
      lang,
      theme: mode === "dark" ? "github-dark-default" : "github-light-default",
    });
    setHtml(html);
    setLoading(false);
  };

  useEffect(() => {
    fetchHTML();
  }, [mode, code, lang]);

  return (
    <div className="w-[calc(100vw-32px)] max-w-2xl md:w-full">
      {loading ? (
        <div className="flex items-center justify-center rounded-sm border border-border bg-popover px-4 py-12 text-sm text-primary">
          <LoaderCircle size={32} className="animate-spin" />
        </div>
      ) : (
        <div
          className="rounded-sm border border-border text-sm [&>pre]:overflow-x-auto [&>pre]:!rounded-sm [&>pre]:!bg-popover [&>pre]:py-3 [&>pre]:pl-4 [&>pre]:pr-5 [&>pre]:leading-snug [&_code]:block [&_code]:w-fit [&_code]:min-w-full"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
    </div>
  );
}
