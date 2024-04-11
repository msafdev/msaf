import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getPost } from "@/lib/gql";
import { Prism as Syntax } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

import Image from "next/image";
import CopyButton from "@/components/button/CopyButton";

export default async function Read({ params }: { params: { slug: string } }) {
  const post = await getPost({ slug: params.slug });

  const detail = post?.postsConnection?.edges[0].node;

  const date = new Date(detail?.createdAt || "");
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  const renderChildren = (children: any[]) => {
    return children.map((child: any, index: number) => {
      switch (child.type) {
        case "heading-one":
          return (
            <h1 className="pb-6 pt-2 text-4xl font-bold" key={index}>
              {child.children[0].text}
            </h1>
          );
        case "heading-two":
          return (
            <h2 className="py-4 text-2xl font-semibold" key={index}>
              {child.children[0].text}
            </h2>
          );
        case "heading-three":
          return (
            <h3 className="py-3 text-xl font-semibold" key={index}>
              {child.children[0].text}
            </h3>
          );
        case "paragraph":
          return (
            <p
              className="pb-4 text-base leading-[1.75rem] text-foreground/70"
              key={index}
            >
              {renderInlineStyles(child.children)}
            </p>
          );
        case "block-quote":
          return (
            <blockquote
              className="mb-3 border-l-2 border-primary py-1 pl-4 font-medium text-foreground/60"
              key={index}
            >
              {child.children[0].text}
            </blockquote>
          );
        case "code-block":
          return (
            <div
              key={index}
              className="group relative mb-3 flex w-full min-w-0 max-w-3xl"
            >
              <Syntax
                language="tsx"
                className="w-full min-w-0 overflow-x-hidden"
                wrapLines={true}
                wrapLongLines={true}
                style={oneDark}
              >
                {child.children[0].text}
              </Syntax>
              <CopyButton
                className="anim absolute right-1 top-3 translate-y-[1px] scale-0 rounded-sm opacity-0 group-hover:scale-100 group-hover:opacity-100"
                codeString={child.children[0].text}
              />
            </div>
          );
        case "image":
          return (
            <div key={index} className="mb-3 aspect-auto max-w-xl">
              <Image
                src={child.src || ""}
                alt={child.title || "alt text"}
                title={child.title || ""}
                width={child.width}
                height={child.height}
                className="object-cover"
              />
            </div>
          );
        default:
          return null;
      }
    });
  };

  const renderInlineStyles = (children: any[]) => {
    return children.map((child: any, index: number) => {
      let element = child.text;
      if (child.bold) {
        element = (
          <span key={index} className="font-semibold text-foreground">
            {element}
          </span>
        );
      }
      if (child.italic) {
        element = (
          <em key={index} className="text-foreground/80">
            {element}
          </em>
        );
      }
      if (child.underline) {
        element = (
          <u key={index} className="text-foreground/80">
            {element}
          </u>
        );
      }
      if (child.code) {
        element = (
          <code key={index} className="text-foreground/80">
            {element}
          </code>
        );
      }
      if (child.href) {
        element = (
          <a
            key={index}
            className="text-primary underline"
            href={child.href}
            target={child.openInNewTab ? "_blank" : "_self"}
          >
            {child.children[0].text}
          </a>
        );
      }
      return element;
    });
  };

  return (
    <section className="flex flex-col items-center py-6 md:py-12">
      <h1 className="mb-6 w-full max-w-xl px-5 text-3xl font-bold md:mb-12 md:text-4xl lg:text-5xl lg:leading-normal">
        {detail?.title}
      </h1>
      {detail ? (
        <pre className="w-full max-w-xl whitespace-pre-wrap text-wrap px-5 text-sm text-foreground/70 md:text-base lg:text-lg">
          {detail.excerpt}
        </pre>
      ) : (
        <p className="w-full max-w-xl text-center text-base text-foreground/70 md:text-lg">
          •••
        </p>
      )}
      <div className="mt-6 h-[1px] w-full rounded-full bg-border md:mt-12" />
      <div className="pad-x flex w-full flex-col items-center justify-between gap-y-2 py-4 pb-0 sm:flex-row">
        <div className="flex flex-col items-center gap-x-2 sm:flex-row">
          <Avatar className="p-0.5">
            <AvatarImage src={detail?.person.avatar.url} />
            <AvatarFallback>SL</AvatarFallback>
          </Avatar>
          <p className="text-base font-medium">{detail?.person?.name}</p>
        </div>
        <div className="mb-2 flex items-center gap-x-2 sm:mb-0">
          {detail?.category.map((category, index) => (
            <code
              key={index}
              className="rounded-full border border-border bg-popover px-4 py-1 text-sm font-medium text-popover-foreground"
            >
              {category}
            </code>
          ))}
        </div>
        <p className="text-sm font-medium text-foreground">{formattedDate}</p>
      </div>
      <div className="read flex max-w-xl flex-col px-5 pb-6 pt-4">
        {detail?.content.raw.children &&
          renderChildren(detail.content.raw.children)}
      </div>
    </section>
  );
}
