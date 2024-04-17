import { MixIcon } from "@radix-ui/react-icons";

const BadgeOne = () => {
  return (
    <div className="flex items-center gap-x-2 rounded-sm border bg-popover px-3">
      <MixIcon />
      <span className="py-1 text-sm font-medium">Variants</span>
    </div>
  );
}
export default BadgeOne;
