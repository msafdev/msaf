import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { RxDrawingPin, RxHeart, RxPencil1 } from "react-icons/rx";

const Bubble = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="w-fit rounded-sm bg-secondary px-2 py-1 text-sm text-secondary-foreground">
      {children}
    </span>
  );
};

const Receiver = ({
  children = "Chat message here...",
  avatar = "https://github.com/shadcn.png",
  fallback = "CN",
  name = "Shad",
}: {
  children?: React.ReactNode;
  avatar?: string;
  fallback?: string;
  name?: string;
}) => {
  return (
    <div className="flex gap-x-3">
      <Avatar className="h-8 w-8">
        <AvatarImage src={avatar} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      <div className="group flex flex-col items-start gap-y-2">
        <span className="text-base font-medium leading-none">{name}</span>
        <div className="flex max-w-sm flex-col items-start gap-y-1">
          {children}
        </div>
        <Actions />
      </div>
    </div>
  );
};

const Sender = ({
  children = "Chat message here...",
  avatar = "https://github.com/msafdev.png",
  fallback = "MS",
  name = "Msaf",
}: {
  children?: React.ReactNode;
  avatar?: string;
  fallback?: string;
  name?: string;
}) => {
  return (
    <div className="flex flex-row-reverse gap-x-3">
      <Avatar className="h-8 w-8">
        <AvatarImage src={avatar} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      <div className="group flex flex-col items-end gap-y-2 text-right">
        <span className="text-base font-medium leading-none">{name}</span>
        <div className="flex max-w-sm flex-col items-end gap-y-1">
          {children}
        </div>
        <Actions />
      </div>
    </div>
  );
};

const Actions = () => {
  return (
    <div className="anim flex w-fit gap-x-1 text-muted-foreground opacity-0 group-hover:opacity-100">
      <RxHeart />
      <RxDrawingPin />
      <RxPencil1 />
    </div>
  );
};

const Chat = () => {
  return (
    <div className="flex w-full flex-col gap-y-1">
      <Receiver>
        <Bubble>Hi Msaf, how are you?</Bubble>
      </Receiver>
      <Sender>
        <Bubble>Hi Shad, I'm good.</Bubble>
        <Bubble>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Bubble>
      </Sender>
    </div>
  );
};

export default Chat;
