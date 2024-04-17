import { PersonIcon } from "@radix-ui/react-icons";

const InputThree = () => {
  return (
    <div className="flex min-w-0 shrink flex-wrap items-center gap-2">
      <div className="flex aspect-square h-10 w-auto items-center justify-center self-stretch rounded-md border bg-muted">
        <PersonIcon className="h-4 w-4" />
      </div>
      <input
        type="text"
        className="w-full max-w-52 rounded-md border bg-background px-3 py-2 text-foreground placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-primary"
        placeholder="Enter your name"
      />
    </div>
  );
};

export default InputThree;
