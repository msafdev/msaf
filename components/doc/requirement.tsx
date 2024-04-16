"use client";

import { FC, useEffect, useState } from "react";

import { codeToHtml } from "shiki";

import { themeAtom } from "@/lib/atoms/themeAtom";
import { useAtom } from "jotai";

import { LoaderCircle } from "lucide-react";

interface RequirementsProps {
  requirements?: string[];
}

const Requirements: FC<RequirementsProps> = ({ requirements = [] }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [html, setHtml] = useState<string>("");
  const [mode, setMode] = useAtom(themeAtom);

  const fetchHTML = async () => {
    setLoading(true);
    const html = await codeToHtml(
      `${requirements.map((r) => r).join("\n")}`,
      {
        lang: "shell",
        theme: mode === "dark" ? "github-dark-default" : "github-light-default",
      },
    );
    setHtml(html);
    setLoading(false);
  };

  useEffect(() => {
    fetchHTML();
  }, [mode, html]);

  return (
    <div className="flex flex-col">
      <h2 className="mb-2 max-w-xl text-xl font-medium capitalize text-foreground">
        Requirements
      </h2>
      {requirements.length === 0 && (
        <p className="text-sm text-muted-foreground">
          No requirements
        </p>
      )}
      {requirements.length > 0 && (
        <div className="w-full rounded-md border">
          {loading ? (
            <div className="flex items-center justify-center p-2 text-sm text-primary">
              <LoaderCircle size={24} className="animate-spin" />
            </div>
          ) : (
            <div
              className="rounded-md bg-background text-sm [&>pre]:overflow-x-auto [&>pre]:!rounded-md [&>pre]:py-3 [&>pre]:pl-4 [&>pre]:pr-5 [&>pre]:leading-snug dark:[&>pre]:!bg-background [&_code]:block [&_code]:w-fit [&_code]:min-w-full"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          )}
        </div>
      )}
    </div>
  );
};
export default Requirements;