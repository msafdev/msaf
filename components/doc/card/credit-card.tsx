import { BiLogoVisa, BiCreditCard, BiMoney } from "react-icons/bi";

const CreditCard = ({
  name = "John Doe",
  number = "6758 2313 4567 1234",
  expiry = "12/24",
  amount = 1234.56,
  currency = "JPY",
}: {
  name?: string;
  number?: string;
  expiry?: string;
  amount?: number;
  currency?: "USD" | "EUR" | "GBP" | "JPY" | "CNY" | "IDR";
}) => {
  const currencySymbol = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
    CNY: "¥",
    IDR: "Rp",
  };

  const formatAmount = (amount: number) => {
    const formattedAmount = amount.toFixed(2);
    const [integerPart, decimalPart] = formattedAmount.split(".");
    const numberWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numberWithCommas;
  };

  return (
    <div className="flex aspect-[8/5] w-64 flex-col rounded-md border pt-1">
      <div className="flex items-center gap-x-2 px-4">
        <BiMoney className="h-4 w-4 text-muted-foreground" />
        <span className="mr-auto text-xs font-medium text-foreground md:text-sm">
          {currencySymbol[currency]} {formatAmount(amount)}
        </span>
        <BiLogoVisa className="h-10 w-10 text-foreground" />
      </div>
      <div className="mt-auto flex w-full items-center justify-between gap-x-2 px-4">
        <code className="font-mono text-xs text-muted-foreground sm:text-sm md:text-base">
          {number}
        </code>
        <BiCreditCard className="h-5 w-5 text-foreground" />
      </div>
      <div className="mt-2 flex w-full items-center justify-between border-t bg-accent px-4 pb-2 pt-2 md:mt-3">
        <span className="text-sm font-medium text-foreground md:text-base ">
          {name}
        </span>
        <span className="text-xs text-muted-foreground md:text-sm">
          {expiry}
        </span>
      </div>
    </div>
  );
};

export default CreditCard;
