import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileOne = () => {
  return (
    <div className="flex w-fit items-center gap-x-4 rounded-md bg-popover px-4 py-3">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <h2 className="font-semibold text-foreground">John Doe</h2>
        <p className="text-sm text-muted-foreground">m@example.com</p>
      </div>
    </div>
  );
};
export default ProfileOne;
