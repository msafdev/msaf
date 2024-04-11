// import Highlighter from "@/components/macro/Highlighter";
import Shiki from "@/components/macro/Shiki";

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
    <div className="flex h-full flex-col">
      <h1 className="mb-4 max-w-xl text-2xl font-semibold capitalize text-foreground">
        {params.slug}
      </h1>
      <Shiki
        code={codeString}
        lang="typescript"
        filename={`${params.slug}.tsx`}
      />
    </div>
  );
};
export default Components;
