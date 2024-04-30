const Window = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between sm:justify-center gap-x-6 rounded-t-sm border bg-popover pl-2 pr-1 py-1 relative">
        <div className="flex items-center gap-x-1.5 sm:absolute left-2">
          <div className="h-2 w-2 rounded-full bg-red-500" />
          <div className="h-2 w-2 rounded-full bg-yellow-500" />
          <div className="h-2 w-2 rounded-full bg-green-500" />
        </div>
        <div className="sm:mx-auto w-full max-w-60 rounded-sm bg-background py-1 text-center">
          <p className="text-xs font-light text-foreground">localhost<span className="text-muted-foreground">:3000</span></p>
        </div>
      </div>
      <div className="rounded-b-sm bg-background p-4 border border-t-0 flex items-center justify-center aspect-video">
        <p className="text-xs font-light text-muted-foreground">
          Window Content
        </p>
      </div>
    </div>
  );
};
export default Window;
