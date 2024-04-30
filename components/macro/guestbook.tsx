import Image from "next/image";

import { createAdminClient, createClient } from "@/utils/supabase/server";

import { RocketIcon } from "@radix-ui/react-icons";

const GuestbookCard = async ({
  content,
  user_id,
  createdAt,
  index,
}: {
  content: string;
  user_id: string;
  createdAt: string;
  index?: number;
}) => {
  const supabase = createAdminClient();

  const { data: user, error } = await supabase.auth.admin.getUserById(user_id);

  const formatTimestamp = (timestamp: string) => {
    const currentDate = new Date();
    const createdAtDate = new Date(timestamp);

    const timeDiff = currentDate.getTime() - createdAtDate.getTime();
    const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
    const daysDiff = Math.floor(hoursDiff / 24);

    if (daysDiff > 1) {
      return `${daysDiff} days ago`;
    } else if (daysDiff === 1) {
      return "yesterday";
    } else if (hoursDiff > 0) {
      return `${hoursDiff} hours ago`;
    } else {
      return "less than an hour ago";
    }
  };

  return (
    <div className="group relative z-10 flex h-fit w-full flex-col gap-y-2 pl-8">
      <div className="flex w-full items-center gap-4">
        <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-secondary md:h-10 md:w-10">
          <Image
            src={user?.user?.user_metadata.avatar_url}
            alt={user?.user?.user_metadata.user_name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-xs font-semibold md:text-sm">
            {user?.user?.user_metadata.user_name}
          </p>
          <p className="text-xs text-muted-foreground">
            {formatTimestamp(createdAt)}
          </p>
        </div>
      </div>
      <code className="h-auto">{content}</code>
      <div className="anim-slow absolute -left-4 top-2 flex h-8 w-8 items-center justify-center rounded-full border bg-popover text-popover-foreground group-hover:border-primary">
        <RocketIcon className="h-4 w-4" />
      </div>
    </div>
  );
};

const Guestbook = async () => {
  const supabase = createClient();
  const { data: guestbook } = await supabase.from("guestbook").select("*");

  return (
    <div className="flex h-fit w-full flex-col-reverse gap-6 md:gap-8">
      {/* Content */}
      {guestbook &&
        guestbook.map((item, index) => {
          return (
            <GuestbookCard
              content={item.content}
              user_id={item.user_id as string}
              key={index}
              createdAt={item.created_at as string}
              index={index}
            />
          );
        })}
    </div>
  );
};

export default Guestbook;
