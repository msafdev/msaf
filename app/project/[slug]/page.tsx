const Components = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="flex h-full grow flex-col">
      <h1 className="max-w-xl text-2xl font-semibold capitalize text-foreground">
        {params.slug}
      </h1>
      <p className="mb-4 mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
        ❌ under construction
      </p>
      <div className="h-48 w-full border bg-muted"></div>
    </div>
  );
};
export default Components;
