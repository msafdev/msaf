import { atomWithStorage } from "jotai/utils";

let storedTheme = null;

if (typeof window !== "undefined") {
  storedTheme = window.localStorage.getItem("theme");
}

export const themeAtom = atomWithStorage(
  "theme",
  storedTheme !== null ? storedTheme : "light",
);
