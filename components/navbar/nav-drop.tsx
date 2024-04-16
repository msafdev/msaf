"use client";

import { useEffect, useState } from "react";

// Components
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import DarkMode from "./dark-mode";
import { DividerHorizontal } from "../ui/divider";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useAtom } from "jotai";
import { themeAtom } from "@/lib/atoms/themeAtom";

const NavDrop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useAtom(themeAtom);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const html = document.querySelector("html");
      if (html) {
        if (theme === "dark") {
          html.classList.add("dark");
        } else {
          html.classList.remove("dark");
        }
      }
    }
  }, [theme]);

  return (
    <>
      <Popover>
        <PopoverTrigger aria-label="Dropdown" className="relative">
          <div
            aria-label="dropdown"
            className="group flex w-8 cursor-pointer flex-col items-end justify-center gap-y-1.5 py-2"
          >
            <div className="h-0.5 w-full bg-foreground" />
            <div
              className={`anim-fast h-0.5 bg-foreground group-hover:w-full ${
                isOpen ? "w-full" : "w-1/2"
              }`}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="absolute -right-4 mt-10 flex w-fit flex-col gap-3 px-0 pb-2.5 pt-3 sm:pb-3 md:mt-5">
          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col gap-y-1 px-1 sm:hidden">
              <div className="mb-1 flex items-center gap-x-12 px-2">
                <h3 className="whitespace-nowrap text-xs font-medium text-muted-foreground">
                  Navigations
                </h3>
              </div>
              <Link
                className={`anim group rounded-sm px-2 py-1 hover:bg-muted ${
                  pathname === "/about" ? "bg-muted" : "bg-transparent"
                }`}
                href="/about"
              >
                <p
                  className={`whitespace-nowrap text-sm font-medium group-hover:text-foreground md:text-base ${
                    pathname === "/about"
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  About
                </p>
              </Link>
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
              <Link
                className={`anim group rounded-sm px-2 py-1 hover:bg-muted ${
                  pathname === "/template" ? "bg-muted" : "bg-transparent"
                }`}
                href="/template"
              >
                <p
                  className={`whitespace-nowrap text-sm font-medium group-hover:text-foreground md:text-base ${
                    pathname === "/template"
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  Template
                </p>
              </Link>
            </div>

            <DividerHorizontal className="sm:hidden" />

            <div className="flex h-fit items-center gap-x-12 px-3 pt-1.5 sm:pt-0">
              <h3 className="whitespace-nowrap text-xs font-medium md:text-sm">
                Dark
              </h3>
              <DarkMode />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};
export default NavDrop;
