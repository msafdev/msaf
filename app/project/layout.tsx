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
    <section
      id="project"
      className="relative flex h-full w-full grow flex-col md:flex-row"
    >
      <Sidebar />
      <main className="flex h-[calc(100svh-133px)] w-full overflow-x-hidden md:h-[calc(100svh-105px)]">
        <ScrollArea className="scrollarea pad-r overflow-x-hidden flex h-full min-w-0 w-full flex-col pl-4 md:py-6 md:pl-8 lg:pl-12">
          <div className="mb-3">
            <Breadcrumb />
          </div>
          {children}
        </ScrollArea>
      </main>
    </section>
  );
}
