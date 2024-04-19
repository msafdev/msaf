import { cn } from "@/lib/utils";

const CyberButton = ({
  children = "Button",
  className,
  variant = "secondary",
}: {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "destructive" | "outline";
}) => {
  const buttonVariant = {
    primary: "bg-transparent text-foreground hover:bg-primary/90 hover:text-primary-foreground",
    secondary: "bg-transparent text-foreground hover:bg-secondary/90 hover:text-secondary-foreground",
    destructive: "bg-transparent text-foreground hover:bg-destructive/90 hover:text-destructive-foreground",
    outline: "bg-transparent text-foreground",
  };

  const borderVariant = {
    primary: "border-primary",
    secondary: "border-border",
    destructive: "border-destructive",
    outline: "border-border",
  };

  return (
    <button
      className={cn(
        "anim group relative flex w-fit items-center justify-center gap-x-4 px-4 py-1.5 delay-200",
        className,
        buttonVariant[variant],
      )}
    >
      <div
        className={cn(
          "anim-slow pointer-events-none absolute left-0 top-0 h-2 w-2 border-l-[2px] border-t-[2px] group-hover:h-full group-hover:w-full",
          borderVariant[variant],
        )}
      />
      <div
        className={cn(
          "anim-slow pointer-events-none absolute right-0 top-0 h-2 w-2 border-r-[2px] border-t-[2px] group-hover:h-full group-hover:w-full",
          borderVariant[variant],
        )}
      />
      <div
        className={cn(
          "anim-slow pointer-events-none absolute bottom-0 left-0 h-2 w-2 border-b-[2px] border-l-[2px] group-hover:h-full group-hover:w-full",
          borderVariant[variant],
        )}
      />
      <div
        className={cn(
          "anim-slow pointer-events-none absolute bottom-0 right-0 h-2 w-2 border-b-[2px] border-r-[2px] group-hover:h-full group-hover:w-full",
          borderVariant[variant],
        )}
      />
      <code className="font-mono font-semibold uppercase tracking-wide">
        {children}
      </code>
    </button>
  );
};

export default CyberButton;
