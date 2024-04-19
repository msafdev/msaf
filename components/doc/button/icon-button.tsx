import { cn } from "@/lib/utils";

import { StarFilledIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";

const IconButton = ({
  children: Icon = StarFilledIcon,
  className,
  variant = "secondary",
}: {
  children?: React.ComponentType<IconProps>;
  className?: string;
  variant?: "primary" | "secondary" | "destructive" | "outline";
}) => {
  const buttonVariant = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 border-primary",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 border-border",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90 border-destructive",
    outline: "border bg-background text-foreground hover:bg-secondary border-border",
  };

  return (
    <button
      className={cn(
        "anim rounded-sm border p-2",
        className,
        buttonVariant[variant],
      )}
    >
      {Icon && <Icon className="h-5 w-5" />}
    </button>
  );
};

export default IconButton;
