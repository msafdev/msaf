"use client";

import { useEffect, useState } from "react";

// Components
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import DarkMode from "./DarkMode";
import { DividerHorizontal } from "../ui/divider";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavDrop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const html = document.querySelector("html");
      if (html) {
        if (html.classList.contains("dark")) {
          setChecked(true);
        } else {
          setChecked(false);
        }
      }
    }
  }, []);

  return (
    <>
      <Popover>
        <PopoverTrigger className="relative">
          <div className="group flex w-8 cursor-pointer flex-col items-end justify-center gap-y-1.5">
            <div className="h-0.5 w-full bg-foreground" />
            <div
              className={`anim-fast h-0.5 bg-foreground group-hover:w-full ${
                isOpen ? "w-full" : "w-1/2"
              }`}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="absolute -right-4 mt-12 flex w-fit flex-col gap-3 px-0 pb-2.5 pt-3 sm:pb-3 md:mt-5">
          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col gap-y-1 px-1 sm:hidden">
              <div className="mb-1 flex items-center gap-x-12 px-2">
                <h3 className="whitespace-nowrap text-xs font-medium text-muted-foreground">
                  Navigations
                </h3>
              </div>
              <Link
                className={`anim group rounded-sm px-2 py-1 hover:bg-muted ${
                  pathname === "/blog" ? "bg-muted" : "bg-transparent"
                }`}
                href="/blog"
              >
                <p
                  className={`whitespace-nowrap text-sm font-medium group-hover:text-foreground md:text-base ${
                    pathname === "/blog"
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  Blog
                </p>
              </Link>
              <Link
                className={`anim group rounded-sm px-2 py-1 hover:bg-muted ${
                  pathname === "/contact" ? "bg-muted" : "bg-transparent"
                }`}
                href="/contact"
              >
                <p
                  className={`whitespace-nowrap text-sm font-medium group-hover:text-foreground md:text-base ${
                    pathname === "/contact"
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  Contact
                </p>
              </Link>
              <Link
                className={`anim group rounded-sm px-2 py-1 hover:bg-muted ${
                  pathname === "/project" ? "bg-muted" : "bg-transparent"
                }`}
                href="/project"
              >
                <p
                  className={`whitespace-nowrap text-sm font-medium group-hover:text-foreground md:text-base ${
                    pathname === "/project"
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  Project
                </p>
              </Link>
            </div>

            <DividerHorizontal className="sm:hidden" />

            <div className="flex h-fit items-center gap-x-12 px-3 pt-1.5 sm:pt-0">
              <h3 className="whitespace-nowrap text-xs font-medium md:text-sm">
                Dark
              </h3>
              <DarkMode isChecked={checked} />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};
export default NavDrop;
