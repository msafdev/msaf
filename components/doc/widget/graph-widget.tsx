const GraphWidget = () => {
  return (
    <div className="flex aspect-square h-auto w-full max-w-64 flex-col rounded-3xl border bg-popover pt-3 md:pt-4">
      <div className="flex w-full flex-col gap-y-2 px-3 md:px-4">
        <h3 className="font-semibold leading-none text-foreground [font-size:_clamp(1.2rem,5vw,1.7rem)]">
          12,345
        </h3>
        <div className="flex w-full items-center justify-between gap-x-3">
          <code className="font-medium uppercase leading-none text-muted-foreground [font-size:_clamp(0.6rem,5vw,0.9rem)]">
            Graph
          </code>
          <p className="font-medium leading-none text-primary [font-size:_clamp(0.5rem,5vw,0.8rem)]">
            +12.3%
          </p>
        </div>
      </div>
      <div className="mb-1 mt-3 flex h-auto w-full grow items-end justify-between gap-x-2 border-y bg-background px-3 py-2 sm:gap-x-3 md:px-4">
        <div className="h-[41%] w-full rounded-b-md rounded-t-lg bg-green-500" />
        <div className="h-[83%] w-full rounded-b-md rounded-t-lg bg-green-500" />
        <div className="h-[38%] w-full rounded-b-md rounded-t-lg bg-green-500" />
        <div className="h-[46%] w-full rounded-b-md rounded-t-lg bg-green-500" />
        <div className="h-[73%] w-full rounded-b-md rounded-t-lg bg-green-500" />
        <div className="h-[39%] w-full rounded-b-md rounded-t-lg bg-green-500" />
        <div className="h-[32%] w-full rounded-b-md rounded-t-lg bg-green-500" />
      </div>
      <div className="flex w-full items-end justify-between gap-x-2 px-3 pb-2 sm:gap-x-3 md:px-4">
        <code className="w-full text-center text-xs md:text-sm">S</code>
        <code className="w-full text-center text-xs md:text-sm">M</code>
        <code className="w-full text-center text-xs md:text-sm">T</code>
        <code className="w-full text-center text-xs md:text-sm">W</code>
        <code className="w-full text-center text-xs md:text-sm">T</code>
        <code className="w-full text-center text-xs md:text-sm">F</code>
        <code className="w-full text-center text-xs md:text-sm">S</code>
      </div>
    </div>
  );
};

export default GraphWidget;
