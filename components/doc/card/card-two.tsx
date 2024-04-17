import { BiLogoVisa, BiCreditCard, BiMoney } from "react-icons/bi";

const CardTwo = () => {
  return (
    <div className="flex aspect-[8/5] w-64 flex-col rounded-md border pt-1">
      <div className="flex items-center gap-x-2 px-4">
        <BiMoney className="h-4 w-4 text-muted-foreground" />
        <span className="mr-auto text-sm font-medium text-foreground md:text-base">
          $1,234
        </span>
        <BiLogoVisa className="h-10 w-10 text-foreground" />
      </div>
      <div className="mt-auto flex w-full items-center justify-between gap-x-2 px-4">
        <code className="font-mono text-xs text-muted-foreground sm:text-sm md:text-base">
          6758 2314 5678 1234
        </code>
        <BiCreditCard className="h-5 w-5 text-foreground" />
      </div>
      <div className="mt-2 flex w-full items-center justify-between border-t bg-accent px-4 pb-2 pt-2 md:mt-3">
        <span className="text-sm font-medium text-foreground md:text-base ">
          John Doe
        </span>
        <span className="text-xs text-muted-foreground md:text-sm">12/24</span>
      </div>
    </div>
  );
};

export default CardTwo;
