import { BlogSkeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="pad-x grid h-fit w-full gap-x-4 gap-y-6 py-4 md:h-full md:grow md:grid-cols-2 md:py-8 xl:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <BlogSkeleton key={index} />
      ))}
    </div>
  );
};
export default Loading;
