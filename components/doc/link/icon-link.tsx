import { cn } from "@/lib/utils";

import Hyperlink from "next/link";
import { ElementType } from "react";

import { RxArrowRight } from "react-icons/rx";

const IconLink = ({
  children = "Link",
  href = "/",
  target = "_blank",
  className = "",
  variant = "primary",
  icon: Icon = RxArrowRight,
}: {
  children: React.ReactNode;
  href: string;
  target?: string;
  className?: string;
  variant?: "primary" | "secondary";
  icon?: ElementType;
}) => {
  const color = variant === "primary" ? "bg-primary" : "bg-secondary";

  return (
    <Hyperlink
      href={href}
      className={cn("group flex flex-col", className)}
      target={target}
    >
      <div className="flex items-center justify-center overflow-hidden">
        {children}
        <Icon className="anim aspect-square h-auto w-0 text-lg text-foreground group-hover:ml-2 group-hover:w-4 group-hover:-rotate-12" />
      </div>
      <div className={`anim h-0.5 w-0 group-hover:w-full ${color}`} />
    </Hyperlink>
  );
};
export default IconLink;
