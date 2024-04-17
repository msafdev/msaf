const BadgeTwo = () => {
  const status = "online";
  const className = status === "online" ? "bg-green-500" : "bg-red-500";

  return (
    <div className="relative flex items-center gap-x-2 rounded-full border bg-popover px-3 py-1">
      <div className={`h-1.5 w-1.5 animate-ping rounded-full ${className}`} />
      <div
        className={`absolute left-3 h-1.5 w-1.5 rounded-full ${className}`}
      />
      <span className="text-sm font-medium">Status</span>
    </div>
  );
};
export default BadgeTwo;
