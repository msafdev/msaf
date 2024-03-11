const BlogSkeleton = () => {
  return (
    <div className="flex h-fit w-full flex-col md:flex-row">
      <div className="aspect-[4/3] w-full animate-pulse bg-muted md:h-36 md:w-auto" />
      <div className="flex h-auto w-full flex-col justify-end gap-y-4 md:gap-y-2 md:py-0">
        <div className="md:ml-4 h-6 w-full md:w-[60%] animate-pulse bg-muted" />
        <div className="md:ml-4 h-16 w-full md:w-[80%] animate-pulse bg-muted py-4" />
      </div>
    </div>
  );
};

export { BlogSkeleton };
