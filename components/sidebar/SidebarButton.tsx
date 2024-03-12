"use client";

import { FC, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarButtonProps {
  children?: ReactNode;
  href?: string;
}

const SidebarButton: FC<SidebarButtonProps> = ({ children, href }) => {
  const currentPath = usePathname();
  return (
    <button
      className={`anim group group flex w-fit cursor-pointer items-center border-b py-1 hover:border-b-primary ${
        currentPath === href ? "border-b-primary" : "border-b-transparent"
      }`}
    >
      <Link
        href={`${href}`}
        className={`anim flex w-full items-center text-sm font-medium group-hover:text-foreground ${
          currentPath === href ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        {children}
      </Link>
    </button>
  );
};
export default SidebarButton;
