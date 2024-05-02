import { SiVercel } from "react-icons/si";

// Assets
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const TemplateStack = ({ stack }: { stack: string[] }) => {
  return (
    <div className="anim absolute -top-full left-0 z-10 flex w-full items-center justify-around border-b bg-popover px-3 group-hover:top-0">
      {stack.map((item, index) => (
        <div className="flex w-full items-center justify-around" key={index}>
          <code className="py-3 text-xs leading-none text-foreground">
            {item}
          </code>
          {index !== stack.length - 1 && (
            <div className="h-auto w-[1px] self-stretch bg-border" />
          )}
        </div>
      ))}
    </div>
  );
};

const TemplateCard = ({
  name,
  url,
  image,
  type,
  stack,
  price,
  category,
}: {
  name: string;
  url: string;
  image: StaticImageData;
  type: string;
  stack: string[];
  price: string;
  category: string;
}) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="anim group relative flex h-fit w-full cursor-pointer flex-col overflow-hidden rounded border bg-popover pt-2.5"
    >
      <div className="absolute right-0 top-0 h-fit rounded-bl-lg rounded-tr bg-accent px-2 py-0.5">
        <code className="text-xs font-medium leading-none text-accent-foreground">
          {category}
        </code>
      </div>
      <div className="flex w-full items-center gap-x-2 overflow-hidden border-b px-3 pb-3">
        <div className="flex aspect-square h-full w-auto items-center justify-center rounded-full border p-2">
          <SiVercel className="h-full w-full text-foreground" />
        </div>
        <div className="flex w-full cursor-pointer flex-col gap-y-1">
          <div className="flex w-full items-center justify-between gap-x-2">
            <h1 className="text-sm font-medium leading-none text-foreground">
              {name}
            </h1>
          </div>
          <p className="text-xs leading-none text-muted-foreground">
            {url.replace("https://", "")}
          </p>
        </div>
      </div>
      <div className="relative flex aspect-[16/11] h-auto w-full items-center justify-center overflow-hidden rounded-b">
        <TemplateStack stack={stack} />
        <Image
          src={image}
          alt={name}
          placeholder="blur"
          className="h-full w-full object-cover group-hover:blur-sm anim"
        />
        <div className="anim absolute -bottom-full left-0 z-10 flex w-full items-center justify-around border-t bg-popover px-3 group-hover:bottom-0">
          {/* Star */}
          <div className="flex items-center gap-x-1 py-3">
            <code className="text-xs leading-none text-accent-foreground">
              {type}
            </code>
          </div>
          <div className="h-auto w-[1px] self-stretch bg-border" />
          <div className="flex items-center gap-x-1 py-3">
            <code className="text-xs leading-none text-accent-foreground underline underline-offset-2">
              {price}
            </code>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default TemplateCard;
