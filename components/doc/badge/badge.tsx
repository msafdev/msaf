import { cn } from "@/lib/utils";

import { StarFilledIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";

const Badge = ({
  children = "Badge",
  icon: Icon = StarFilledIcon,
  className,
  variant = "secondary",
}: {
  children?: React.ReactNode;
  icon?: React.ComponentType<IconProps>;
  className?: string;
  variant?: "primary" | "secondary" | "destructive" | "outline";
}) => {
  const badgeVariant = {
    primary: "bg-primary text-primary-foreground border-primary-foreground/40",
    secondary: "bg-popover text-popover-foreground border-border",
    destructive:
      "bg-destructive text-destructive-foreground border-destructive-foreground/40",
    outline: "border-border bg-transparent text-foreground",
  };

  const borderVariant = {
    primary: "bg-primary-foreground/40",
    secondary: "bg-border",
    destructive: "bg-destructive-foreground/40",
    outline: "bg-border",
  };

  return (
    <div
      className={cn(
        "destr flex h-7 items-center gap-x-2 rounded-sm border px-2 text-sm font-medium",
        className,
        badgeVariant[variant],
      )}
    >
      <Icon className="h-3.5 w-3.5" />
      <div className={cn("h-full w-[1px]", borderVariant[variant])} />
      <span>{children}</span>
    </div>
  );
};

export default Badge;
