import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileOne = () => {
  return (
    <div className="flex w-fit items-center gap-x-2 rounded-md border bg-popover px-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col border-l py-2 pl-2">
        <h2 className="font-semibold text-foreground">John Doe</h2>
        <p className="text-sm text-muted-foreground">m@example.com</p>
      </div>
    </div>
  );
};
export default ProfileOne;
