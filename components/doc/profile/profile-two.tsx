import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  ExitIcon,
  GearIcon,
  Pencil2Icon,
  PersonIcon,
} from "@radix-ui/react-icons";

const ProfileTwo = () => {
  return (
    <div className="flex flex-col gap-y-2 rounded-md border bg-popover pb-2 pt-3">
      <div className="mb-1 flex items-center gap-x-3 px-3">
        <Avatar>
          <AvatarImage src="https://github.com/msafdev.png" alt="@msafdev" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="mr-4 flex flex-col md:mr-8">
          <h1 className="text-sm font-medium text-popover-foreground">Msaf</h1>
          <p className="text-xs text-muted-foreground">Software Engineer</p>
        </div>
        <Pencil2Icon className="h-4 w-4 cursor-pointer text-primary" />
      </div>
      <div className="h-[1px] w-full bg-border" />
      <div className="flex flex-col gap-y-1 px-2 text-muted-foreground">
        <button className="flex items-center rounded-sm px-2 py-1 text-left text-sm hover:bg-secondary hover:text-foreground">
          <GearIcon className="mr-2 h-4 w-4" />
          Account Settings
        </button>
        <button className="flex items-center rounded-sm px-2 py-1 text-left text-sm hover:bg-secondary hover:text-foreground">
          <PersonIcon className="mr-2 h-4 w-4" />
          Manage Profile
        </button>
      </div>
      <div className="h-[1px] w-full bg-border" />
      <div className="flex flex-col px-2 text-muted-foreground">
        <button className="flex items-center rounded-sm px-2 py-1 text-left text-sm hover:bg-secondary hover:text-foreground">
          <ExitIcon className="mr-2 h-4 w-4" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileTwo;
