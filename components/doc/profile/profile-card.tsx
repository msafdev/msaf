import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  ExitIcon,
  GearIcon,
  Pencil2Icon,
  PersonIcon,
} from "@radix-ui/react-icons";

const ProfileContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-y-1 px-2 text-muted-foreground">
      {children}
    </div>
  );
};

const ProfileButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="flex items-center rounded-sm px-2 py-1 text-left text-sm hover:bg-secondary hover:text-foreground">
      {children}
    </button>
  );
};

const ProfileCard = ({
  name = "Msaf",
  sub = "Software Engineer",
  src = "https://github.com/msafdev.png",
  alt = "@msafdev",
  fallback = "MS",
}: {
  name: string;
  sub: string;
  src: string;
  alt: string;
  fallback: string;
}) => {
  return (
    <div className="group flex flex-col gap-y-1 overflow-hidden rounded-md border bg-popover pb-2 pt-4">
      <div className="flex items-center gap-x-3 px-4">
        <Avatar>
          <AvatarImage src={src} alt={alt} />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
        <div className="mr-4 flex flex-col md:mr-8">
          <h1 className="text-sm font-medium text-popover-foreground">
            {name}
          </h1>
          <p className="text-xs text-muted-foreground">{sub}</p>
        </div>
        <Pencil2Icon className="h-4 w-4 cursor-pointer text-primary" />
      </div>
      <div className="mt-2 h-[1px] w-full bg-border" />
      <div className="anim mt-1 flex max-h-0 flex-col gap-y-2 overflow-hidden group-hover:max-h-96">
        <ProfileContent>
          <ProfileButton>
            <PersonIcon className="mr-2 h-4 w-4" />
            Profile
          </ProfileButton>
          <ProfileButton>
            <GearIcon className="mr-2 h-4 w-4" />
            Settings
          </ProfileButton>
        </ProfileContent>
        <div className="h-[1px] w-full bg-border" />
        <ProfileContent>
          <ProfileButton>
            <ExitIcon className="mr-2 h-4 w-4" />
            Logout
          </ProfileButton>
        </ProfileContent>
      </div>
    </div>
  );
};

export default ProfileCard;
