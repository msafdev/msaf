import Image from "next/image";

// Components
import Counter from "@/components/macro/counter";
import TemplateCard from "@/components/macro/template-card";

const Template = () => {
  const TargetDate = new Date("2024-10-26");

  return (
    <section
      id="template"
      className="flex h-full w-full grow flex-col gap-y-4 py-4 md:gap-y-8 md:py-8 lg:gap-y-12 lg:py-12"
    >
      <div className="pad-x flex h-full w-full flex-col gap-y-2 md:gap-y-4">
        <h1 className="text-2xl font-semibold">Template</h1>
        <Counter targetDate={TargetDate} />
      </div>
      <div className="h-[1px] w-full bg-border" />
      <div className="pad-x grid h-fit w-full grid-cols-1 gap-x-3 gap-y-2 md:grid-cols-2 md:gap-y-4 lg:grid-cols-3">
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
      </div>
    </section>
  );
};
export default Template;
