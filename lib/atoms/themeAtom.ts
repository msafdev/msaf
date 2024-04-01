import { atomWithStorage } from "jotai/utils";

const storedTheme = localStorage.getItem("theme");

export const themeAtom = atomWithStorage(
  "theme",
  storedTheme !== null ? storedTheme : "light",
);
