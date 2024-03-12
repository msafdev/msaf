import Link from "next/link";
import Image from "next/image";

// Types
import { Post } from "@/lib/types/post";

// Utils
import { getBase64 } from "@/lib/blur";

const BlogCard = async ({ post }: { post: { node: Post } }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const image = await getBase64(post.node.thumbnail.url);

  return (
    <div className="group flex h-fit flex-col items-stretch bg-background md:flex-row">
      <div className="anim relative aspect-[4/3] w-full md:h-36 md:w-auto">
        <Image
          placeholder="blur"
          blurDataURL={image}
          priority
          sizes="100% 100%"
          src={post.node.thumbnail.url}
          alt={post.node.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="group flex h-auto grow flex-col justify-end gap-y-2 bg-background md:py-0">
        <Link
          href={`/blog/${post.node.slug}`}
          className="group flex flex-col md:pl-4"
        >
          <h2 className="leading px-2 pt-3 text-[5.5vw] font-semibold leading-tight underline-offset-4 group-hover:underline xs:max-w-none xs:text-[4.5vw] sm:text-[4vw] md:line-clamp-2 md:max-w-64 md:text-balance md:px-0 md:pt-0 md:text-lg">
            {post.node.title}
          </h2>
        </Link>
        <div className="flex w-full items-center gap-x-3 px-3 py-2 md:py-0 md:pl-4 md:pr-0">
          <Image
            src={post.node.person.avatar.url}
            alt={post.node.person.name}
            width={32}
            height={32}
            className="anim rounded-full bg-foreground p-1"
          />
          <div className="flex w-full items-center justify-between md:flex-col md:items-start">
            <p className="anim text-sm font-medium text-foreground sm:text-base">
              {post.node.person.name}
            </p>
            <p className="anim line-clamp-1 text-xs text-muted-foreground sm:text-sm">
              {formatDate(post.node.createdAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
