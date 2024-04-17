"use client";

import { FC, useState } from "react";

import Shiki from "@/components/macro/shikijs";

// UI
import { Button } from "../ui/button";

type PreviewProps = {
  codeString?: string;
  children?: React.ReactNode;
  name?: string;
};

const ProjectCard: FC<PreviewProps> = ({
  codeString = "console.log('Hello, World!')",
  children,
  name,
}) => {
  const [preview, setPreview] = useState<boolean>(true);

  return (
    <div className="relative flex w-full flex-col">
      <div className="anim absolute left-2 top-2 z-10 flex items-center gap-x-1 rounded-md border bg-background px-1">
        <Button
          variant={"secondary"}
          onClick={() => setPreview(true)}
          className={`anim h-fit rounded-sm bg-background px-2 py-1 text-sm font-medium hover:bg-accent ${
            preview ? "" : ""
          }`}
        >
          Preview
        </Button>
        <div className="h-9 w-[1px] grow bg-border" />
        <Button
          variant={"secondary"}
          onClick={() => setPreview(false)}
          className={`anim h-fit rounded-sm bg-background px-2 py-1 text-sm font-medium hover:bg-accent ${
            preview ? "" : ""
          }`}
        >
          Code
        </Button>
      </div>
      {preview ? (
        <div className="flex h-full w-full flex-wrap items-center justify-center gap-3 rounded-md border px-6 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
          {children}
        </div>
      ) : (
        <Shiki code={codeString} lang="tsx" />
      )}
      <div className="absolute bottom-2 left-3">
        {name && preview && (
          <code className="text-sm font-medium text-foreground md:text-base">
            {name}
          </code>
        )}
      </div>
    </div>
  );
};
export default ProjectCard;
