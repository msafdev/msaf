import type { Metadata } from "next";

// Components
import Sidebar from "@/components/sidebar/side-bar";
import Breadcrumb from "@/components/ui/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Github, MoveUpRight, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Salman | Project",
  description: "A collection of my projects",
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      id="project"
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
          className="flex w-full items-center justify-between gap-x-2"
          variant={"secondary"}
        >
          Visit the Repo
          <MoveUpRight size={16} className="" />
        </Button>
        <Button
          className="flex w-full items-center justify-between gap-x-2"
          variant={"secondary"}
        >
          Star on GitHub
          <Star size={16} className="" />
        </Button>
        <Button
          className="flex w-full items-center justify-between gap-x-2"
          variant={"secondary"}
        >
          Request a Feature
        </Button>
        <Button
          className="flex w-full items-center justify-between gap-x-2"
          variant={"secondary"}
        >
          Report an Issue
        </Button>
        <Button
          className="flex w-full items-center justify-between gap-x-2"
          variant={"secondary"}
        >
          Support the Project
        </Button>
      </div>
    </section>
  );
}
