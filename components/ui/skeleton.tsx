const BlogSkeleton = () => {
  return (
    <div className="flex h-fit w-full flex-col md:flex-row">
      <div className="aspect-[4/3] w-full animate-pulse rounded-md bg-muted md:h-36 md:w-auto" />
      <div className="flex h-auto w-full flex-col justify-end gap-y-3 py-3 md:gap-y-3 md:py-0">
        <div className="h-11 w-full animate-pulse rounded-md bg-muted md:ml-3 md:h-6 md:w-[40%]" />
        <div className="h-11 w-full animate-pulse rounded-md bg-muted md:ml-3 md:h-6 md:w-[75%]" />
        <div className="flex items-center gap-x-3">
          <div className="h-8 w-8 animate-pulse rounded-full bg-muted md:ml-3" />
          <div className="h-12 w-full animate-pulse rounded-md bg-muted md:h-9 md:w-[65%]" />
        </div>
      </div>
    </div>
  );
};

export { BlogSkeleton };
