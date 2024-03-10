// Text Balancer
import Balancer from "react-wrap-balancer";

// Components
import { DividerHorizontal } from "@/components/ui/divider";
import Breadcrumb from "@/components/ui/breadcrumb";
import Filter from "@/components/filter/Filter";

export default function Blog() {
  return (
    <section
      id="blog"
      className="w-full flex flex-col py-4 md:py-8 lg:py-12 h-full grow"
    >
      <div className="pad-x pb-4 mb-4 md:mb-6 lg:mb-8">
        <h1 className="text-3xl lg:text-4xl md:w-[70%] leading-tight font-semibold text-left">
          <Balancer>Explore my latest thoughts and ideas</Balancer>
        </h1>
        <p className="w-full max-w-lg font-medium text-muted-foreground my-4 md:my-5">
          I write about web development, business, and personal growth. You can
          find my latest articles below.
        </p>
        <Breadcrumb />
      </div>

      <DividerHorizontal />

      <div className="relative flex items-center">
        <div className="h-full w-4 md:w-[4%] lg:w-[8%] bg-muted/10 backdrop-blur-sm absolute left-0 border-r" />
        <div className="h-full w-4 md:w-[4%] lg:w-[8%] bg-muted/10 backdrop-blur-sm absolute right-0 border-l" />
        <Filter />
      </div>

      <DividerHorizontal />
    </section>
  );
}
