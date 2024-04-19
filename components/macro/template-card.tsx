import { SiVercel } from "react-icons/si";
import CyberButton from "../doc/button/cyberpunk-button";

const TemplateCard = () => {
  return (
    <div className="anim group flex w-full cursor-pointer flex-col gap-y-2 rounded border bg-popover py-2 hover:bg-popover/60">
      <div className="flex w-full items-center gap-x-3 overflow-hidden px-3">
        <div className="flex aspect-square h-full w-auto items-center justify-center rounded-full border p-3">
          <SiVercel className="h-full w-full" />
        </div>
        <div className="flex w-full cursor-pointer flex-col gap-y-1">
          <div className="flex w-full items-center justify-between gap-x-2">
            <h1 className="text-sm font-medium leading-none text-foreground">
              Name
            </h1>
            <div className="rounded-full border bg-accent px-1.5 py-0.5">
              <p className="text-xs leading-none text-accent-foreground">
                Portfolio
              </p>
            </div>
          </div>
          <p className="text-xs leading-none text-muted-foreground">
            asdjwandnsaoindiojwaioj
          </p>
        </div>
      </div>
      <div className="h-[1px] w-full bg-border" />
      <div className="flex w-full gap-x-2 px-2">
        <CyberButton className="w-full" variant="secondary">
            Buy
        </CyberButton>
      </div>
    </div>
  );
};
export default TemplateCard;
