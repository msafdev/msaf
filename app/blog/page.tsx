import Link from "next/link";

// Text Balancer
import Balancer from "react-wrap-balancer";

// Components
import { DividerHorizontal } from "@/components/ui/divider";
import Breadcrumb from "@/components/ui/breadcrumb";
import Filter from "@/components/filter/Filter";
import BlogCard from "@/components/macro/BlogCard";
import { BlogSkeleton } from "@/components/ui/skeleton";

// Fetch
import { getPosts } from "@/lib/gql";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <section
      id="blog"
      className="flex h-full w-full grow flex-col pt-4 md:pt-8 lg:pt-12"
    >
      <div className="pad-x mb-4 pb-4 md:mb-6 lg:mb-8">
        <h1 className="text-left text-3xl font-semibold leading-tight md:w-[70%] lg:text-4xl">
          <Balancer>Explore my latest thoughts and ideas 🌟</Balancer>
        </h1>
        <p className="my-4 w-full max-w-lg font-medium text-muted-foreground md:my-5">
          I write about web development, business, and personal growth. You can
          find my latest articles below.
        </p>
        <Breadcrumb />
      </div>

      <DividerHorizontal />

      <div className="relative flex items-center">
        <div className="absolute left-0 h-full w-4 border-r bg-muted/10 backdrop-blur-sm md:w-[4%] lg:w-[8%]" />
        <div className="absolute right-0 h-full w-4 border-l bg-muted/10 backdrop-blur-sm md:w-[4%] lg:w-[8%]" />
        <Filter />
      </div>

      <DividerHorizontal />

      <div className="pad-x grid w-full md:grow gap-x-4 gap-y-6 py-4 md:grid-cols-2 md:py-8 xl:grid-cols-3">
        {!posts ? (
          Array.from({ length: 6 }).map((_, index) => (
            <BlogSkeleton key={index} />
          ))
        ) : posts?.postsConnection?.edges &&
          posts?.postsConnection?.edges?.length > 0 ? (
          posts?.postsConnection?.edges?.map((post, index) => (
            <BlogCard post={post} key={index} />
          ))
        ) : (
          <div className="col-span-full flex h-full w-full grow flex-col items-center justify-center py-8 xs:py-12 md:py-16 lg:py-20">
            <h1 className="text-center text-2xl font-semibold text-foreground">
              Sorry!
            </h1>
            <p className="text-center text-muted-foreground">
              There are no posts in this category,{" "}
              <span className="italic">yet</span>
            </p>
            <Link
              href="/blog"
              aria-label="Go back to /blog"
              className="mt-4 bg-foreground px-4 py-2 text-sm font-medium uppercase text-background"
            >
              Go back
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
