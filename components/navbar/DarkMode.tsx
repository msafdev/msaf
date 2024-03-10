"use client";

import { useEffect, useState } from "react";
import { Switch } from "../ui/switch";

const DarkMode = () => {
  const fetchDarkMode = () => {
    if (typeof window !== "undefined") {
      const html = document.querySelector("html");
      if (html) {
        if (html.classList.contains("dark")) {
          return true;
        } else {
          return false;
        }
      }
    }
  };

  const [checked, setChecked] = useState(() => fetchDarkMode());

  const handleChange = () => {
    if (typeof window !== "undefined") {
      const html = document.querySelector("html");
      if (html) {
        if (checked) {
          html.classList.remove("dark");
          setChecked(false);
        } else {
          html.classList.add("dark");
          setChecked(true);
        }
      }
    }
  };

  return (
    <Switch
      checked={checked}
      onCheckedChange={handleChange}
      className="data-[state=unchecked]:bg-yellow-300"
    />
  );
};
export default DarkMode;
