import type { Metadata } from "next";

// Components
import Filter from "@/components/filter/filter-menu";
import Breadcrumb from "@/components/ui/breadcrumb";
import { DividerHorizontal } from "@/components/ui/divider";

export const metadata: Metadata = {
  title: "Salman | Blog",
  description: "Read what I've wrote",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      id="blog"
      className="flex h-full w-full grow flex-col pt-4 md:pt-8 lg:pt-12"
    >
      <div className="pad-x mb-4 pb-4 md:mb-6 lg:mb-8">
        <h1 className="text-balance text-left text-3xl font-medium leading-tight md:w-[60%] lg:text-4xl">
          Writing on software engineering and personal anecdotes
        </h1>
        <p className="my-4 w-full max-w-lg text-muted-foreground md:my-5">
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
      {children}
    </section>
  );
}
