"use client";

import { codeToHtml } from "shiki";
import type { BundledLanguage, BundledTheme } from "shiki";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { themeAtom } from "@/lib/atoms/themeAtom";
import { LoaderCircle } from "lucide-react";
import CopyButton from "../button/copy-button";

type Props = {
  code: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
};

export default function Shiki({
  code,
  lang = "tsx",
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
    <div className="relative w-full">
      {loading ? (
        <div className="flex items-center justify-center rounded-sm border border-border px-4 py-12 text-sm text-primary">
          <LoaderCircle size={32} className="animate-spin" />
        </div>
      ) : (
        <div
          className="rounded-sm border pt-10 border-border bg-background text-sm [&>pre]:overflow-x-auto [&>pre]:!rounded-sm [&>pre]:py-3 [&>pre]:pl-4 [&>pre]:pr-5 [&>pre]:leading-snug dark:[&>pre]:!bg-background [&_code]:block [&_code]:w-fit [&_code]:min-w-full"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
      <CopyButton codeString={code} className="absolute top-2 right-2"/>
    </div>
  );
}
