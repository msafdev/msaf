// Components
import TemplateCard from "@/components/macro/template-card";

// Images
import Terma from "@/public/images/templates/terma.png";
import Countify from "@/public/images/templates/countify.png";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

const Templates = [
  {
    name: "Terma",
    url: "https://msaf-terminal.vercel.app",
    image: Terma,
    type: "Open Source",
    stack: ["Next", "Tailwind"],
    price: "Free",
    category: "Portfolio",
  },
  {
    name: "Countify",
    url: "https://countify-wine.vercel.app",
    image: Countify,
    type: "Open Source",
    stack: ["Next", "Tailwind", "Supabase"],
    price: "Free",
    category: "Web App",
  },
];

const Template = () => {
  const TargetDate = new Date("2024-10-26");

  return (
    <section
      id="template"
      className="flex h-full w-full grow flex-col gap-y-4 py-4 md:gap-y-8 md:py-8 lg:gap-y-12 lg:py-12"
    >
      <div className="pad-x flex h-full w-full flex-col gap-y-4 md:gap-y-5">
        <h1 className="text-3xl text-balance text-left leading-tight font-semibold lg:text-4xl">
          Templates
        </h1>
        <p className="max-w-lg w-full text-muted-foreground">
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
export default Template;
