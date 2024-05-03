import { cn } from "@/lib/utils";
import { CheckCheck, Info, TriangleAlert, X } from "lucide-react";
import { ElementType } from "react";

const Toast = ({
  title,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  type = "success",
}: {
  title?: string;
  description?: string;
  type?: "error" | "info" | "success" | "warning";
}) => {
  const colors = {
    error: "text-red-400",
    info: "text-blue-400",
    success: "text-green-400",
    warning: "text-yellow-400",
  }[type];

  const Icon = {
    error: X,
    info: Info,
    success: CheckCheck,
    warning: TriangleAlert,
  }[type];

  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-lg border bg-popover p-3 text-popover-foreground lg:p-4">
      <div className="flex gap-x-4">
        <Icon
          className={cn(
            "z-10 h-4 w-4 shrink-0 md:h-5 md:w-5 lg:h-6 lg:w-6",
            colors,
          )}
        />
        <div className="z-10 flex flex-col gap-y-1">
          <h4 className="text-sm font-medium capitalize leading-none text-foreground md:text-base md:leading-none">
            {title || type}
          </h4>
          <p className="text-xs text-muted-foreground md:text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Toast;
