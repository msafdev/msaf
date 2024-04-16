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
    <div className="flex w-full flex-col relative">
      <div className="flex items-center gap-x-1 absolute z-10 bg-background px-1 top-2 left-2 border rounded-md">
        <Button
          variant={"secondary"}
          onClick={() => setPreview(true)}
          className={`bg-background rounded-sm hover:bg-accent anim h-fit py-1 px-2 text-sm font-medium ${
            preview
              ? ""
              : ""
          }`}
        >
          Preview
        </Button>
        <div className="w-[1px] h-9 bg-border grow"/>
        <Button
          variant={"secondary"}
          onClick={() => setPreview(false)}
          className={`bg-background rounded-sm hover:bg-accent anim h-fit py-1 px-2 text-sm font-medium ${
            preview
              ? ""
              : ""
          }`}
        >
          Code
        </Button>
      </div>
      {preview ? (
        <div className="flex h-full w-full items-center justify-center rounded-md border px-6 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
          {children}
        </div>
      ) : (
        <Shiki code={codeString} lang="tsx" />
      )}
    </div>
  );
};
export default ProjectCard;
