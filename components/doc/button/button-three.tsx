import { StarFilledIcon } from "@radix-ui/react-icons";

const ButtonThree = () => {
  return (
    <>
      <button className="rounded-sm bg-primary p-2 text-primary-foreground hover:bg-primary/90">
        <StarFilledIcon className="h-4 w-4" />
      </button>
      <button className="rounded-sm bg-secondary p-2 text-secondary-foreground hover:bg-secondary/90">
        <StarFilledIcon className="h-4 w-4" />
      </button>
      <button className="rounded-sm bg-destructive p-2 text-destructive-foreground hover:bg-destructive/90">
        <StarFilledIcon className="h-4 w-4" />
      </button>
      <button className="bg-bakground rounded-sm border p-2 text-foreground hover:bg-secondary">
        <StarFilledIcon className="h-4 w-4" />
      </button>
    </>
  );
};
export default ButtonThree;
