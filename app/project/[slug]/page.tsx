import ProjectMenu from "@/components/macro/ProjectMenu";

const Components = ({ params }: { params: { slug: string } }) => {
  const codeString = `export default function ${params.slug}() {
    {/* Use a static image import for better DX */}
    <div className="h-16 w-16 rounded-full border bg-gray-100 p-2">
      <Image
        src={Avatar}
        alt="Avatar's alt"
        className="h-auto w-auto object-cover"
      />
    </div>;
  }`;

  return (
    <div className="flex h-full flex-col">
      <h1 className="mb-4 max-w-xl text-2xl font-semibold capitalize text-foreground">
        {params.slug}
      </h1>
      <ProjectMenu codeString={codeString} />
    </div>
  );
};
export default Components;
