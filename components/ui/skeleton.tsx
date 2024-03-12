const BlogSkeleton = () => {
  return (
    <div className="flex h-fit w-full flex-col md:flex-row">
      <div className="aspect-[4/3] w-full animate-pulse rounded-md bg-muted md:h-36 md:w-auto" />
      <div className="flex h-auto w-full flex-col justify-end gap-y-4 md:gap-y-2 md:py-0">
        <div className="h-6 w-full animate-pulse rounded-md bg-muted md:ml-4 md:w-[80%]" />
        <div className="flex items-center gap-x-3">
          <div className="h-12 w-12 animate-pulse rounded-full bg-muted md:ml-4" />
          <div className="h-14 w-full animate-pulse rounded-md bg-muted md:w-[70%]" />
        </div>
      </div>
    </div>
  );
};

export { BlogSkeleton };
