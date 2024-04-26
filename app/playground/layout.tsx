import type { Metadata } from "next";

// Components
import Sidebar from "@/components/sidebar/side-bar";
import Breadcrumb from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { BadgeAlert, Star } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Salman | Playground",
  description: "A safe-haven for my experiments and explorations.",
};

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      id="playground"
      className="relative flex h-full w-full grow flex-col md:flex-row"
    >
      <Sidebar />
      <main className="shiki flex w-full grow flex-col overflow-x-hidden px-4 pb-6 md:px-8 md:pb-8 md:pt-6 lg:pb-12 lg:pl-12 lg:pr-0">
        <div className="mb-3">
          <Breadcrumb />
        </div>
        {children}
      </main>
      <div className="hidden h-auto w-1/3 grow flex-col gap-y-2 py-6 pl-12 pr-[8%] lg:flex">
        <Button
          className="flex w-full items-center justify-between gap-x-2 border"
          variant={"secondary"}
          asChild
        >
          <Link href="https://github.com/msafdev/msaf-new" target="_blank">
            Star on GitHub
            <Star size={16} className="" />
          </Link>
        </Button>
        <Button
          className="flex w-full items-center justify-between gap-x-2 border"
          variant={"secondary"}
          asChild
        >
          <Link
            href="https://github.com/msafdev/msaf-new/issues"
            target="_blank"
          >
            Report an Issue
            <BadgeAlert size={16} className="" />
          </Link>
        </Button>
        <Button
          className="flex w-full items-center justify-between gap-x-2 border"
          variant={"secondary"}
          asChild
        >
          <Link
            href="https://github.com/msafdev/msaf-new/issues"
            target="_blank"
          >
            Support the Project
          </Link>
        </Button>
      </div>
    </section>
  );
}
