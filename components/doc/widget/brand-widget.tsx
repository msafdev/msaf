import { cn } from "@/lib/utils";
import { IconBaseProps } from "react-icons/lib";

import { SiApple } from "react-icons/si";

const BrandWidget = ({
  icon: Icon = SiApple,
  name = "Apple",
  sub = "iOS 12",
  className = "",
  color = "bg-popover",
  notification = "Update",
}: {
  icon?: React.ComponentType<IconBaseProps>;
  className?: string;
  name?: string;
  sub?: string;
  color?: string;
  notification?: string;
}) => {
  return (
    <div
      className={cn(
        "relative grid aspect-square w-full max-w-64 grid-cols-1 grid-rows-1 overflow-hidden rounded-3xl border",
        className,
        color,
      )}
    >
      <div className="group flex h-full w-full flex-col p-4">
        <Icon className="anim-slow absolute left-1/2 top-1/2 h-auto w-1/2 min-w-6 -translate-x-1/2 -translate-y-1/2 transform text-foreground group-hover:left-4 group-hover:top-3.5 group-hover:w-1/4 group-hover:-translate-x-0 group-hover:-translate-y-0" />
        <div className="anim-slower absolute bottom-3 left-2.5 flex translate-y-[200%] flex-col gap-y-1 group-hover:translate-y-0">
          <p className="font-semibold leading-none text-foreground [font-size:_clamp(1.4rem,5vw,2.1rem)]">
            {name}
          </p>
          <code className="font-medium leading-none text-muted-foreground [font-size:_clamp(0.6rem,5vw,1rem)]">
            {sub}
          </code>
        </div>
        <div className="anim absolute -top-10 right-0 flex h-8 w-fit items-center justify-center rounded-bl-2xl rounded-tr-3xl bg-primary text-primary-foreground px-3 group-hover:top-0">
          <p className="text-xs font-medium md:text-sm">
            {notification}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandWidget;
