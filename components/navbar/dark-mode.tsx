"use client";

import { useEffect, useState } from "react";

import { Switch } from "@/components/ui/switch";

import { useTheme } from "next-themes";

const DarkMode = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
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
