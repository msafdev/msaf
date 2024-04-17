import { categories, components } from "@/components/doc/components.config";

import Requirements from "@/components/doc/requirement";
import ProjectCard from "@/components/macro/project-card";
import { getProject } from "@/lib/gql";

import { Components as ComponentType } from "@/lib/types/components";

const Components = async ({ params }: { params: { slug: string } }) => {
  const category = categories.filter((c) => c.type === params.slug);
  const component = components.filter((c) => c.type === params.slug);

  const projects = await getProject({ slug: category[0].type });
  const project = projects.projectsConnection.edges.map((p) => p.node);

  return (
    <div className="flex h-full flex-col gap-y-8 md:max-w-2xl">
      <div className="flex flex-col">
        <h1 className="mb-2 max-w-xl text-2xl font-semibold capitalize text-foreground">
          {params.slug}
        </h1>
        <p className="mb-4 text-base text-muted-foreground">
          {category.map((c) => c.description)}
        </p>
        <div className="flex h-6 w-fit items-center gap-x-2 rounded-sm border bg-muted px-2 text-xs font-medium text-muted-foreground dark:bg-popover dark:text-popover-foreground">
          <p>{component.length}</p>
          <div className="h-full w-[1px] bg-border" />
          <p>{component.length > 1 ? "Variants" : "Variant"}</p>
        </div>
      </div>
      <Requirements
        requirements={category.length > 0 ? category[0].requirement : []}
      />
      <div className="flex w-full flex-col">
        <h2 className="mb-3 max-w-xl text-xl font-medium capitalize text-foreground">
          Example
        </h2>
        <div className="grid w-full grid-cols-1 gap-4">
          {component.map((c: ComponentType, index: number) => (
            <ProjectCard
              key={index}
              name={c.name}
              codeString={project[index].code.raw.children[0].children[0].text}
            >
              <c.component />
            </ProjectCard>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Components;
