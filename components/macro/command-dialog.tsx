"use client";

import { useState, useEffect } from "react";

import { CheckCheck } from "lucide-react";
import { TbMail, TbCalendar, TbMoon } from "react-icons/tb";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import DarkMode from "@/components/navbar/dark-mode";

import { useToast } from "@/components/ui/use-toast";
import { useTheme } from "next-themes";

const email = "salmanalfarisi261002@gmail.com";

export function Command() {
  const [open, setOpen] = useState(false);

  const { toast } = useToast();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "m" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setTheme(theme === "dark" ? "light" : "dark");
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [theme]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "f" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setOpen(false);
    toast({
      title: "Copied to clipboard!",
      description: "salmanalfarisi261002@gmail.com",
      icon: <CheckCheck className="h-6 w-6 text-green-500" />,
    });
  };

  return (
    <>
      <code className="justify-end gap-x-2 text-xs text-muted-foreground">
        Theme{" "}
        <kbd className="pointer-events-none inline-flex h-fit select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>M
        </kbd>
      </code>
      <code
        onClick={() => {
          setOpen(true);
        }}
        className="cursor-pointer justify-end gap-x-2 text-xs text-muted-foreground"
      >
        Command{" "}
        <kbd className="pointer-events-none inline-flex h-fit select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>F
        </kbd>
      </code>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="px-0 py-1">
          <CommandEmpty className="flex flex-col items-center justify-center px-4 py-8">
            <p className="text-center font-medium text-muted-foreground">
              Oops! No results found
            </p>
          </CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem className="anim group cursor-pointer hover:bg-muted">
              <TbCalendar className="anim h-4 w-4 text-muted-foreground group-hover:text-foreground" />
              <BookButton />
            </CommandItem>
            <CommandItem className="anim group cursor-pointer hover:bg-muted">
              <TbMail
                className="anim h-4 w-4 text-muted-foreground group-hover:text-foreground"
                onClick={handleCopy}
              />
              <EmailButton onClick={handleCopy} />
            </CommandItem>
          </CommandGroup>
          <CommandSeparator className="my-1" />
          <CommandGroup heading="Settings">
            <CommandItem className="anim group">
              <TbMoon className="anim h-4 w-4 text-muted-foreground" />
              <DarkModeButton />
              <span className="ml-auto">
                <DarkMode />
              </span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

const BookButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="w-full px-3 text-left font-medium text-muted-foreground group-hover:text-foreground"
    >
      <span className="inline">Book a meet</span>
    </button>
  );
};

const EmailButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="w-full px-3 text-left font-medium text-muted-foreground group-hover:text-foreground"
    >
      <span className="inline">Copy my email</span>
    </button>
  );
};

const DarkModeButton = () => {
  return (
    <button className="cursor-default pl-3 text-left font-medium text-muted-foreground">
      <span className="inline">Dark mode</span>
    </button>
  );
};
