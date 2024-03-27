// Syntax Highlighter
import CopyButton from "@/components/button/CopyButton";
import { Prism as Syntax } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Components = ({ params }: { params: { slug: string } }) => {
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
      <div className="relative mt-3 flex w-full min-w-48 max-w-3xl bg-accent px-1.5">
        <Syntax
          language="tsx"
          className="w-full min-w-48"
          wrapLines={true}
          wrapLongLines={true}
          style={vscDarkPlus}
        >
          {codeString}
        </Syntax>
        <CopyButton codeString={codeString} />
      </div>
    </div>
  );
};
export default Components;
