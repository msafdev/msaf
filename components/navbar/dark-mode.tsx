"use client";

import { useEffect, useState } from "react";

import { Switch } from "@/components/ui/switch";

import { useAtom } from "jotai";
import { themeAtom } from "@/lib/atoms/themeAtom";

const DarkMode = () => {
  const [theme, setTheme] = useAtom(themeAtom);

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

  const handleChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <Switch
      checked={theme === "dark"}
      onCheckedChange={handleChange}
      className="data-[state=unchecked]:bg-yellow-300"
    />
  );
};
export default DarkMode;
