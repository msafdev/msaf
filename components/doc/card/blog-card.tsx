import Image from "next/image";
import Link from "next/link";

const BlogCard = ({
  title = "Card Title",
  description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, deserunt?",
  image = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  link = "/",
}: {
  title: string;
  description: string;
  image: string;
  link: string;
}) => {
  return (
    <div className="flex max-w-64 flex-col rounded-md border">
      <div className="flex w-full p-2 pb-0">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="rounded-sm object-cover"
        />
      </div>
      <div className="my-2 h-[1px] w-full bg-border" />
      <div className="flex-col p-2 pt-0">
        <h2 className="text-sm font-medium text-foreground md:text-base">
          {title}
        </h2>
        <p className="mt-1 line-clamp-3 text-xs text-muted-foreground md:text-sm">
          {description}
        </p>
      </div>
      <div className="flex w-full border-t p-2">
        <Link
          href={link}
          target="_blank"
          className="anim flex w-full items-center justify-center rounded-sm border bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground hover:bg-secondary/80"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
