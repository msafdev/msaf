import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = ({
  name = "Msaf",
  email = "m@example.com",
  src = "https://github.com/msafdev.png",
  alt = "@msafdev",
  fallback = "MS",
}: {
  name: string;
  email: string;
  src: string;
  alt: string;
  fallback: string;
}) => {
  return (
    <div className="flex flex-col gap-y-2 rounded-md border bg-popover pb-2 pt-3">
      <div className="mb-1 flex items-center gap-x-3 px-3">
        <Avatar>
          <AvatarImage src={src} alt={alt} />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
        <div className="mr-4 flex flex-col md:mr-8">
          <h1 className="text-sm font-medium text-popover-foreground">
            {name}
          </h1>
          <p className="text-xs text-muted-foreground">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
