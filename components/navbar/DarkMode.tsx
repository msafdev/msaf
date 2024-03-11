"use client";

import { useEffect, useState } from "react";
import { Switch } from "../ui/switch";

const DarkMode = ({ isChecked = false }: { isChecked?: boolean }) => {
  const [checked, setChecked] = useState<boolean>(isChecked);

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
  }, [isChecked]);

  const handleChange = () => {
    const newValue = !checked;
    const html = document.querySelector("html");
    if (html) {
      if (newValue) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    }
    setChecked(newValue);
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
