"use client";

import { useState } from "react";

// Components
import { ScrollArea } from "../ui/scroll-area";
import SidebarButton from "./SidebarButton";
import { Input } from "../ui/input";

// Icons
import { X, GanttChart } from "lucide-react";

// Datas
import { SidebarItems, SidebarGeneralItems } from "@/lib/freebies";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const sortedSidebarItems = SidebarItems.map((item) => ({
    ...item,
    subItems: item.subItems
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name)),
  }));

  const handleLink = () => {
    setOpen(false);
  };

  return (
    <>
      {/* mobile sidebar */}
      <aside className="pad-x flex h-fit items-center gap-x-2 py-3 md:hidden">
        <GanttChart
          onClick={() => setOpen(true)}
          className="anim h-9 w-9 cursor-pointer p-0.5 hover:bg-accent"
        />
        <Input placeholder="Search..." className="h-9 w-full" />
        {/* menu */}
        <div
          className={`pad-l absolute left-0 top-0 z-20 flex w-full grow flex-col bg-background ${
            open ? "anim-slow h-full" : "anim h-0"
          }`}
        >
          <X
            onClick={() => setOpen(false)}
            className={`absolute right-4 top-4 z-50 h-6 w-6 cursor-pointer bg-transparent text-foreground ${
              open ? "anim-slower opacity-100" : "anim-fast opacity-0"
            }`}
          />
          <div
            className={`anim no-scrollbar z-10 flex h-fit flex-col gap-y-2 overflow-y-auto bg-background ${
              open ? "py-5 opacity-100" : "py-0 opacity-0"
            }`}
          >
            {SidebarGeneralItems.map((item, index) => (
              <div key={index} className="mb-3 flex flex-col gap-y-2">
                <h1 className="whitespace-nowrap text-base font-semibold">
                  {item.name}
                </h1>
                <ul className="flex flex-col gap-y-1">
                  {item.generalItems.map((genItem, index) => (
                    <li key={index}>
                      <SidebarButton onClick={handleLink} href={genItem.href}>
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
                  index === sortedSidebarItems.length - 1 ? "" : "mb-3"
                }`}
              >
                <h1 className="whitespace-nowrap text-base font-semibold">
                  {item.name}
                </h1>
                <ul className="flex flex-col gap-y-1">
                  {item.subItems.map((subItem, index) => (
                    <li key={index}>
                      <SidebarButton onClick={handleLink} href={subItem.href}>
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
          </div>
        </div>
      </aside>

      {/* normal sidebar */}
      <aside
        className={`pad-l anim relative hidden h-[calc(100svh-73px)] flex-col border-r md:flex md:h-[calc(100svh-105px)] md:w-fit`}
      >
        <ScrollArea className="flex h-full flex-col py-4 pr-6 md:py-6 md:pr-8 lg:pr-12">
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
    </>
  );
};
export default Sidebar;
