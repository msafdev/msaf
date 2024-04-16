import type { Metadata } from "next";

// Components
import Sidebar from "@/components/sidebar/sidebar";
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
      <main className="shiki md:pad-r flex grow w-full flex-col overflow-x-hidden px-4 pb-6 md:py-6 md:pl-8 lg:pl-12">
        <div className="mb-3">
          <Breadcrumb />
        </div>
        {children}
      </main>
    </section>
  );
}
