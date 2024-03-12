import type { Metadata } from "next";

// Components
import Sidebar from "@/components/sidebar/Sidebar";
import Breadcrumb from "@/components/ui/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    <section id="project" className="pad-x flex h-full w-full grow">
      <Sidebar />
      <main className="flex h-[calc(100vh-73px)] w-full md:h-[calc(100vh-105px)] overflow-x-hidden">
        <ScrollArea className="flex h-full w-full flex-col py-20 pl-4 md:py-6 md:pl-8 lg:pl-12">
          <div className="mb-3">
            <Breadcrumb />
          </div>
          {children}
        </ScrollArea>
      </main>
    </section>
  );
}
