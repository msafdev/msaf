"use client";

import { FC, useState } from "react";
import Image from "next/image";

import { Button } from "../ui/button";
import Shiki from "@/components/macro/Shiki";

import Avatar from "@/public/images/avatar-cloud.png";

type PreviewProps = {
  codeString?: string;
};

const ProjectMenu: FC<PreviewProps> = ({
  codeString = "console.log('Hello, World!')",
}) => {
  const [preview, setPreview] = useState<boolean>(true);

  return (
    <>
      <div className="mb-4 flex w-full max-w-2xl items-center gap-x-4 border-b">
        <Button
          variant={"link"}
          onClick={() => setPreview(true)}
          className={`anim rounded-none border-b-2 px-1 pb-1.5 text-sm font-medium hover:text-foreground hover:no-underline ${
            preview
              ? "border-foreground text-foreground"
              : "border-transparent text-foreground/60"
          }`}
        >
          Preview
        </Button>
        <Button
          variant={"link"}
          onClick={() => setPreview(false)}
          className={`anim rounded-none border-b-2 px-1 pb-1.5 text-sm font-medium hover:text-foreground hover:no-underline ${
            preview
              ? "border-transparent text-foreground/60"
              : "border-foreground text-foreground"
          }`}
        >
          Code
        </Button>
      </div>
      {preview ? (
        <div className="flex h-40 w-full max-w-2xl items-center justify-center rounded-md border px-6 py-6 md:px-8 md:py-10 lg:px-10 lg:py-12">
          <div className="h-16 w-16 rounded-full border bg-gray-100 p-2">
            <Image
              src={Avatar}
              alt="Avatar's alt"
              className="h-auto w-auto object-cover"
            />
          </div>
        </div>
      ) : (
        <Shiki code={codeString} lang="typescript" />
      )}
    </>
  );
};
export default ProjectMenu;
