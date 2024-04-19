import { cn } from "@/lib/utils";

const StatusBadge = ({
  children = "Status",
  status = "info",
  className,
}: {
  children?: React.ReactNode;
  status?: "success" | "warning" | "error" | "info";
  className?: string;
}) => {
  const statusColor = {
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  return (
    <div
      className={cn(
        "relative flex items-center gap-x-2.5 rounded-full border bg-popover px-3 py-1",
        className,
      )}
    >
      <div
        className={cn(
          "h-1.5 w-1.5 animate-ping rounded-full",
          statusColor[status],
        )}
      />
      <div
        className={cn(
          "absolute left-3 h-1.5 w-1.5 rounded-full",
          statusColor[status],
        )}
      />
      {children}
    </div>
  );
};

export default StatusBadge;
