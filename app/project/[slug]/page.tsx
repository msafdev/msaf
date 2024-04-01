"use client";

import { useEffect } from "react";

// Components
import CopyButton from "@/components/button/CopyButton";
import { themeAtom } from "@/lib/atoms/themeAtom";
import { useAtom } from "jotai";

// Syntax Highlighter
import { Prism as Syntax } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

const Components = ({ params }: { params: { slug: string } }) => {
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const html = document.querySelector("html");
      if (html) {
        if (theme === "dark") {
          html.classList.add("dark");
        } else {
          html.classList.remove("dark");
        }
      }
    }
  }, [theme]);

  const codeString = `export default function ${params.slug}() {
    return (
      <div className="flex h-full max-w-xl grow flex-col">
        <p className="mt-3 text-sm text-muted-foreground md:text-base">
          ❌ under construction
        </p>
      </div>
    );
  }`;

  return (
    <div className="flex h-full grow flex-col">
      <h1 className="max-w-xl text-2xl font-semibold capitalize text-foreground">
        {params.slug}
      </h1>
      <div className="relative mt-3 flex w-full min-w-0 max-w-3xl">
        <Syntax
          language="tsx"
          className="w-full min-w-0 overflow-x-hidden"
          wrapLines={true}
          wrapLongLines={true}
          style={theme === "dark" ? oneDark : oneLight}
        >
          {codeString}
        </Syntax>
        <CopyButton
          className="absolute right-1 top-3 rounded-sm"
          codeString={codeString}
        />
      </div>
    </div>
  );
};
export default Components;
