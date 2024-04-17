import { FcGoogle } from "react-icons/fc";
import { FaCheck } from "react-icons/fa";

const CardThree = () => {
  return (
    <div className="flex w-fit flex-col rounded-md border bg-popover px-5 py-4">
      <div className="lg:gap-x-18 flex w-full items-center justify-between gap-x-6 md:gap-x-12">
        <div className="w-fit rounded-full border p-2">
          <FcGoogle className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-x-2 rounded-sm border bg-secondary px-2 py-1 text-secondary-foreground">
          <span className="text-sm">Applied</span>
          <FaCheck className="h-3 w-3" />
        </div>
      </div>
      <div className="mt-4 flex items-center gap-x-3">
        <h3 className="text-sm font-medium text-foreground md:text-base">
          Google
        </h3>
        <span className="text-xs text-muted-foreground">12 days ago</span>
      </div>
      <p className="mt-3 text-base font-semibold text-foreground md:text-lg">
        Software Engineer
      </p>
      <p className="text-xs text-muted-foreground md:mt-1">Mountain View, CA</p>
      <div className="mt-6 flex w-full items-center justify-between border-t pt-3">
        <div className="flex flex-col">
          <span className="font-medium text-foreground">$150-220k</span>
          <span className="text-xs text-muted-foreground">
            Mountain View, CA
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardThree;
