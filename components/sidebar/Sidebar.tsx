// Components
import { ScrollArea } from "../ui/scroll-area";

// Datas
import { SidebarGeneralItems, SidebarItems } from "@/lib/constants";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  const sortedSidebarItems = SidebarItems.map((item) => ({
    ...item,
    subItems: item.subItems
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name)),
  }));

  return (
    <aside className="flex h-[calc(100vh-73px)] w-fit flex-col border-r md:h-[calc(100vh-105px)]">
      <ScrollArea className="flex h-full flex-col py-4 pr-4 md:py-6 md:pr-8 lg:pr-12">
        {SidebarGeneralItems.map((item, index) => (
          <div key={index} className="mb-5 flex flex-col gap-y-2">
            <h1 className="whitespace-nowrap text-base font-semibold">
              {item.name}
            </h1>
            <ul className="flex flex-col gap-y-1">
              {item.generalItems.map((genItem, index) => (
                <li key={index}>
                  <SidebarButton href={genItem.href}>
                    {genItem.icon && (
                      <genItem.icon className="mr-3 h-3.5 w-3.5" />
                    )}
                    {genItem.name}
                  </SidebarButton>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {sortedSidebarItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col gap-y-2 ${
              index === sortedSidebarItems.length - 1 ? "" : "mb-5"
            }`}
          >
            <h1 className="whitespace-nowrap text-base font-semibold">
              {item.name}
            </h1>
            <ul className="flex flex-col gap-y-1">
              {item.subItems.map((subItem, index) => (
                <li key={index}>
                  <SidebarButton href={subItem.href}>
                    {subItem.icon && (
                      <subItem.icon className="mr-3 h-3.5 w-3.5" />
                    )}
                    {subItem.name}
                  </SidebarButton>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ScrollArea>
    </aside>
  );
};
export default Sidebar;
