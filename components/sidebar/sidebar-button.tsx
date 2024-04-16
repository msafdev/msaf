"use client";

import { FC, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarButtonProps {
  children?: ReactNode;
  href?: string;
  onClick?: () => void;
}

const SidebarButton: FC<SidebarButtonProps> = ({ children, href, onClick }) => {
  const currentPath = usePathname();

  if (href === "") {
    return (
      <button
        onClick={onClick}
        className={`anim group group flex w-fit cursor-pointer items-center border-b py-1 hover:border-b-primary ${
          currentPath === `/project`
            ? "border-b-primary"
            : "border-b-transparent"
        }`}
      >
        <Link
          href={{
            pathname: `/project`,
          }}
          className={`anim flex w-full items-center text-sm font-medium group-hover:text-foreground ${
            currentPath === `/project`
              ? "text-foreground"
              : "text-muted-foreground"
          }`}
        >
          {children}
        </Link>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`anim group group flex w-fit cursor-pointer items-center border-b py-1 hover:border-b-primary ${
        currentPath === `/project/${href}`
          ? "border-b-primary"
          : "border-b-transparent"
      }`}
    >
      <Link
        href={{
          pathname: `/project/${href}`,
        }}
        className={`anim flex w-full items-center text-sm font-medium group-hover:text-foreground ${
          currentPath === `/project/${href}`
            ? "text-foreground"
            : "text-muted-foreground"
        }`}
      >
        {children}
      </Link>
    </button>
  );
};
export default SidebarButton;
