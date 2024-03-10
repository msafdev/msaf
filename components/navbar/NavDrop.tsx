"use client";

import { useState } from "react";

// Components
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import DarkMode from "./DarkMode";

const NavDrop = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="sm:flex hidden items-center">
        <DarkMode />
      </div>
      <Popover>
        <PopoverTrigger className="relative">
          <div className="w-8 flex flex-col justify-center items-end gap-y-1.5 group cursor-pointer sm:hidden">
            <div className="w-full h-0.5 bg-foreground" />
            <div
              className={`h-0.5 bg-foreground group-hover:w-full anim-fast ${
                isOpen ? "w-full" : "w-1/2"
              }`}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-fit mt-6 px-4 py-3 absolute -right-4 flex flex-col gap-3">
          <div className="flex items-center gap-x-12">
            <h1 className="font-medium text-base whitespace-nowrap">
              Dark mode
            </h1>
            <DarkMode />
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};
export default NavDrop;
