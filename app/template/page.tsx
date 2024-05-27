// Components
import TemplateCard from "@/components/macro/template-card";

// Images
import NextBase from "@/public/images/templates/nextbase.webp";
import Macintosh from "@/public/images/templates/macintosh.webp";

const Templates = [
  {
    name: "NextBase",
    url: "https://nextbase-demo.vercel.app",
    image: NextBase,
    type: "Open Source",
    stack: ["Next", "Tailwind", "Supabase"],
    price: "Free",
    category: "Starter Kit",
  },
  {
    name: "Macintosh",
    url: "https://msaf-macintosh.vercel.app",
    image: Macintosh,
    type: "Open Source",
    stack: ["Next", "Tailwind"],
    price: "Free",
    category: "Portfolio Template",
  },
];

const Page = () => {
  return (
    <section
      id="template"
      className="flex h-full w-full grow flex-col gap-y-4 py-4 md:gap-y-8 md:py-8 lg:gap-y-12 lg:py-12"
    >
      <div className="pad-x flex h-full w-full flex-col gap-y-4 md:gap-y-5">
        <h1 className="text-balance text-left text-3xl font-semibold leading-tight lg:text-4xl">
          Templates
        </h1>
        <p className="w-full max-w-lg text-muted-foreground">
          Choose from a variety of templates to{" "}
          <span className="font-medium text-foreground">kickstart</span> your
          next project. All templates are{" "}
          <span className="font-medium text-foreground">free</span> and{" "}
          <span className="font-medium text-foreground">open-sourced</span>. You
          can also{" "}
          <span className="font-medium text-foreground">contribute</span> to the
          project by submitting a pull request. If you have any questions or
          need help, feel free to{" "}
          <span className="font-medium text-foreground">reach out</span> to me.
        </p>
      </div>
      <div className="h-[1px] w-full bg-border" />
      <div className="pad-x flex h-full min-h-fit w-full grow flex-col gap-x-4 gap-y-4 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-8 lg:gap-x-12 lg:gap-y-12 xl:grid-cols-3">
        {Templates.map((template, index) => (
          <TemplateCard key={index} {...template} />
        ))}
      </div>
    </section>
  );
};
export default Page;
