import { cn } from "@/lib/utils";
import Hyperlink from "next/link";

const Link = ({
  children = "Link",
  href = "/",
  target = "_blank",
  className = "",
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  target?: string;
  className?: string;
  variant?: "primary" | "secondary";
}) => {
  const color = variant === "primary" ? "bg-primary" : "bg-secondary";

  return (
    <Hyperlink
      href={href}
      className={cn("group flex flex-col", className)}
      target={target}
    >
      {children}
      <div className={`anim h-0.5 w-0 group-hover:w-full ${color}`} />
    </Hyperlink>
  );
};
export default Link;
