import { SiMedium } from "react-icons/si";

const StatsWidget = () => {
  return (
    <div className="relative flex aspect-square h-auto w-full max-w-64 flex-col justify-between gap-y-2 overflow-hidden rounded-3xl border bg-popover pb-2 pt-3 sm:gap-y-3 sm:pb-4 md:pt-4">
      <div className="flex h-auto w-full grow flex-col gap-y-2 px-3 md:px-4 xs:justify-center">
        <div className="flex w-full items-center justify-between gap-x-3">
          <h3 className="font-semibold leading-none text-foreground [font-size:_clamp(1.2rem,5vw,1.7rem)]">
            Stats
          </h3>
          <SiMedium className="absolute right-4 top-4 h-auto w-1/6 max-w-6" />
        </div>
        <code className="font-medium uppercase leading-none text-muted-foreground [font-size:_clamp(0.6rem,5vw,0.9rem)]">
          21 April
        </code>
      </div>
      <div className="flex h-fit w-full flex-col border-y bg-background">
        <div className="flex w-full flex-col gap-y-1 border-b px-3 py-3">
          <div className="flex w-full items-center justify-between gap-x-3">
            <h3 className="font-semibold leading-none text-foreground [font-size:_clamp(0.8rem,5vw,1.4rem)]">
              $1,345
            </h3>
            <code className="font-medium leading-none text-muted-foreground [font-size:_clamp(0.4rem,5vw,0.8rem)] xs:hidden">
              Earned
            </code>
          </div>
          <div className="hidden w-full items-center justify-between gap-x-3 xs:flex">
            <code className="font-medium leading-none text-muted-foreground [font-size:_clamp(0.4rem,5vw,0.8rem)]">
              Earned
            </code>
            <p className="font-medium leading-none text-red-500 [font-size:_clamp(0.4rem,5vw,0.8rem)]">
              -12.3%
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-y-1 px-3 py-3">
          <div className="flex w-full items-center justify-between gap-x-3">
            <h3 className="font-semibold leading-none text-foreground [font-size:_clamp(0.8rem,5vw,1.4rem)]">
              2,345
            </h3>
            <code className="font-medium leading-none text-muted-foreground [font-size:_clamp(0.4rem,5vw,0.8rem)] xs:hidden">
              Views
            </code>
          </div>
          <div className="hidden w-full items-center justify-between gap-x-3 xs:flex">
            <code className="font-medium leading-none text-muted-foreground [font-size:_clamp(0.4rem,5vw,0.8rem)]">
              Views
            </code>
            <p className="font-medium leading-none text-green-500 [font-size:_clamp(0.4rem,5vw,0.8rem)]">
              +4.5%
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto h-1 w-1/4 rounded-full bg-foreground" />
    </div>
  );
};

export default StatsWidget;
