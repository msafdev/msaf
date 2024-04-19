import { Suspense } from "react";
import { getTweet } from "react-tweet/api";

import { type TweetProps } from "react-tweet";
import { CustomTweet } from "@/components/doc/tweet/tweet-components";

import { TwitterLogoIcon } from "@radix-ui/react-icons";

const TweetSkeleton = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-4 rounded-md border bg-popover py-3.5 ">
      <div className="flex w-full items-center gap-x-4 border-b px-3.5 pb-4 [&>div]:animate-pulse">
        <div className="h-10 w-10 rounded-full bg-secondary" />
        <div className="flex w-1/2 flex-col gap-y-1">
          <div className="h-4 w-1/2 rounded bg-secondary" />
          <div className="h-3 w-1/4 rounded bg-secondary" />
        </div>
        <TwitterLogoIcon className="ml-auto h-6 w-6" />
      </div>
      <div className="flex w-full flex-col gap-y-1 px-3.5 [&>div]:animate-pulse">
        <div className="h-3.5 w-4/5 rounded bg-secondary" />
        <div className="h-3.5 w-3/4 rounded bg-secondary" />
        <div className="mb-4 h-3.5 w-3/4 rounded bg-secondary" />

        <div className="h-3.5 w-1/2 rounded bg-secondary" />
        <div className="mb-6 h-3.5 w-3/5 rounded bg-secondary" />
        <div className="h-3 w-1/6 rounded bg-secondary" />
      </div>
      <div className="flex w-full items-center justify-between gap-x-4 border-t px-3.5 pt-4 [&>div]:animate-pulse">
        <div className="h-6 w-20 rounded bg-secondary" />
        <div className="h-6 w-20 rounded bg-secondary" />
        <div className="ml-auto h-6 w-20 rounded bg-secondary" />
      </div>
    </div>
  );
};

const TweetNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-md border bg-popover p-4">
      <TwitterLogoIcon className="h-8 w-8 text-foreground" />
      <p className="font-medium text-muted-foreground">Tweet not found</p>
    </div>
  );
};

const Content = async ({
  id = "1776282373703016801",
  components,
  onError,
}: TweetProps) => {
  const tweet = id
    ? await getTweet(id).catch((err) => {
        if (onError) {
          onError(err);
        } else {
          console.error(err);
        }
      })
    : undefined;

  if (!tweet) {
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound />;
  }

  return <CustomTweet tweet={tweet} components={components} />;
};

const Tweet = ({ fallback = <TweetSkeleton />, ...props }: TweetProps) => {
  return (
    <Suspense fallback={fallback}>
      <Content {...props} />
    </Suspense>
  );
};

export default Tweet;
