import Note from "@/components/macro/note";
import { BadgeInfo } from "lucide-react";
import Link from "next/link";

export default function Introduction() {
  return (
    <div className="flex h-full max-w-xl grow flex-col">
      <h1 className="text-2xl font-semibold text-foreground">Introduction</h1>
      <p className="mt-3 text-sm text-muted-foreground md:text-base">
        Simply built components you can easily{" "}
        <code className="text-xs font-medium text-foreground">⌘ C</code> and{" "}
        <code className="text-xs font-medium text-foreground">⌘ V</code> into
        your project. Adaptable, reusable, and{" "}
        <span className="font-medium text-foreground">obviously</span>{" "}
        open-sourced.
      </p>
      <Note className="mt-3">
        <h4 className="text-lg font-medium text-foreground">
          <BadgeInfo className="mr-2 inline-block h-3 w-3" />
          Note
        </h4>
        <p className="text-muted-foreground text-sm">
          This is a collection of components I have used in my projects. <br />
          This is <span className="font-medium text-foreground">NOT</span> a component library.
        </p>
      </Note>
      <h2 className="mt-6 text-lg font-semibold text-foreground">Reference</h2>
      <p className="mt-3 text-sm text-muted-foreground md:text-base">
        Making this by myself is never possible without the help of others. I
        took inspiration from many sources and I am grateful for that. Here are
        the references and resources I used, if you want to check them out:
      </p>
      <ul className="mt-3 text-sm md:text-base">
        <li>
          <Link href="/" className="flex w-fit items-center gap-x-2">
            -
            <code className="anim font-medium text-foreground underline-offset-2 hover:underline">
              radix-ui
            </code>
          </Link>
        </li>
        <li>
          <Link href="/" className="flex w-fit items-center gap-x-2">
            -
            <code className="anim font-medium text-foreground underline-offset-2 hover:underline">
              shadcn-ui
            </code>
          </Link>
        </li>
        <li>
          <Link href="/" className="flex w-fit items-center gap-x-2">
            -
            <code className="anim font-medium text-foreground underline-offset-2 hover:underline">
              flowbite-ui
            </code>
          </Link>
        </li>
        <li>
          <Link href="/" className="flex w-fit items-center gap-x-2">
            -
            <code className="anim font-medium text-foreground underline-offset-2 hover:underline">
              lucide-icons
            </code>
          </Link>
        </li>
        <li>
          <Link href="/" className="flex w-fit items-center gap-x-2">
            -
            <code className="anim font-medium text-foreground underline-offset-2 hover:underline">
              react-icons
            </code>
          </Link>
        </li>
      </ul>
    </div>
  );
}
