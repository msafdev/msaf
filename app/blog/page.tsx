// Components
import BlogCard from "@/components/macro/blog-card";
import EmptyCard from "@/components/macro/empty-card";

// Fetch
import { getPosts } from "@/lib/gql";

export default async function Page() {
  const posts = await getPosts();

  return (
    <div className="pad-x grid h-fit min-h-fit w-full gap-x-4 gap-y-6 py-4 md:h-full md:grow md:grid-cols-2 md:py-8 xl:grid-cols-3">
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
