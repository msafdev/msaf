import Link from "next/link";

const EmptyCard = () => {
  return (
    <div className="col-span-full flex h-full w-full grow flex-col items-center justify-center py-8 xs:py-12 md:py-16 lg:py-20">
      <h1 className="text-center text-2xl font-semibold text-foreground">
        Sorry!
      </h1>
      <p className="text-center text-muted-foreground">
        There are no posts in this category, <span className="italic">yet</span>
      </p>
      <Link
        href="/blog"
        aria-label="Go back to /blog"
        className="mt-4 bg-foreground px-4 py-2 text-sm font-medium uppercase text-background"
      >
        Go back
      </Link>
    </div>
  );
};
export default EmptyCard;
