// Components
import BlogCard from "@/components/macro/BlogCard";
import EmptyCard from "@/components/macro/EmptyCard";

// Fetch
import { getPostsCategory } from "@/lib/gql";

export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  const posts = await getPostsCategory({ category: params.category });

  return (
    <div className="pad-x grid h-fit w-full gap-x-4 gap-y-6 py-4 md:h-full md:grow md:grid-cols-2 md:py-8 xl:grid-cols-3">
      {posts?.postsConnection?.edges &&
      posts?.postsConnection?.edges?.length > 0 ? (
        posts?.postsConnection?.edges?.map((post, index) => (
          <BlogCard post={post} key={index} />
        ))
      ) : (
        <EmptyCard />
      )}
    </div>
  );
}
