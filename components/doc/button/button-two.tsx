import { StarFilledIcon } from "@radix-ui/react-icons";

const ButtonTwo = () => {
  return (
    <>
      <button className="flex items-center gap-x-2 rounded-sm bg-primary px-3 py-1 text-primary-foreground hover:bg-primary/90">
        <StarFilledIcon className="h-3.5 w-3.5" />
        Button
      </button>
      <button className="flex items-center gap-x-2 rounded-sm bg-secondary px-3 py-1 text-secondary-foreground hover:bg-secondary/90">
        <StarFilledIcon className="h-3.5 w-3.5" />
        Button
      </button>
      <button className="flex items-center gap-x-2 rounded-sm bg-destructive px-3 py-1 text-destructive-foreground hover:bg-destructive/90">
        <StarFilledIcon className="h-3.5 w-3.5" />
        Button
      </button>
      <button className="flex items-center gap-x-2 rounded-sm border bg-background px-3 py-1 text-foreground hover:bg-secondary">
        <StarFilledIcon className="h-3.5 w-3.5" />
        Button
      </button>
    </>
  );
};

export default ButtonTwo;
