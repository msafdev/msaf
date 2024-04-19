import Image from "next/image";
import Link from "next/link";

import type { Tweet } from "react-tweet/api";
import {
  type TwitterComponents,
  TweetMedia,
  enrichTweet,
  EnrichedTweet,
  EnrichedQuotedTweet,
  TweetBody,
  Verified,
  QuotedTweetBody,
} from "react-tweet";

import {
  ChatBubbleIcon,
  HeartIcon,
  EyeOpenIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

type Props = {
  tweet: Tweet;
  components?: TwitterComponents;
};

const TweetContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full flex-col gap-y-4 overflow-hidden rounded-md border bg-popover py-3.5 [&>p]:!px-3.5">
      {children}
    </div>
  );
};

const TweetHeader = ({ tweet }: { tweet: EnrichedTweet }) => {
  return (
    <div className="flex w-full items-center gap-x-4 border-b px-3.5 pb-4">
      <Image
        src={tweet.user.profile_image_url_https}
        alt="profile"
        className="rounded-full"
        width={40}
        height={40}
      />
      <div className="flex flex-col">
        <Link
          href={tweet.user.url}
          className="flex items-center text-sm font-medium leading-snug text-foreground underline-offset-2 hover:underline md:text-base"
        >
          {tweet.user.name}
          <span className="ml-1">
            <Verified />
          </span>
        </Link>
        <code className="text-xs leading-snug text-muted-foreground md:text-sm">
          @{tweet.user.screen_name}
        </code>
      </div>
      <TwitterLogoIcon className="ml-auto h-6 w-6" />
    </div>
  );
};

const TweetInReplyTo = ({ tweet }: { tweet: EnrichedTweet }) => {
  return (
    <p className="cursor-pointer text-sm font-medium text-muted-foreground underline-offset-2 hover:underline">
      Replying to @{tweet.in_reply_to_screen_name}
    </p>
  );
};

const TweetInfo = ({ tweet }: { tweet: EnrichedTweet }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    const timeString = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const dateStringFormatted = date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });

    const formattedDate = `${timeString} · ${dateStringFormatted}`;

    return formattedDate;
  };

  return (
    <div className="flex items-center justify-between gap-x-2 text-muted-foreground">
      <code className="text-xs text-muted-foreground">
        {formatDate(tweet.created_at)}
      </code>
      <code className="text-sm font-medium">
        {tweet.isEdited ? "Edited" : null}
      </code>
    </div>
  );
};

const TweetActions = ({ tweet }: { tweet: EnrichedTweet }) => {
  const formatThousand = (num: number) => {
    if (num > 999) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num;
  };

  return (
    <div className="flex w-full gap-x-4 px-3.5 text-sm font-medium text-muted-foreground md:gap-x-8">
      <Link
        target="_blank"
        href={tweet.like_url}
        className="flex items-center gap-x-1"
      >
        <HeartIcon className="h-4 w-4 text-primary" />
        <p>{formatThousand(tweet.favorite_count)}</p>
      </Link>
      <Link
        target="_blank"
        href={tweet.reply_url}
        className="flex items-center gap-x-2"
      >
        <ChatBubbleIcon className="h-4 w-4 text-blue-500" />
        <p>{formatThousand(tweet.conversation_count)}</p>
      </Link>
      <Link
        target="_blank"
        href={tweet.url}
        className="ml-auto flex items-center gap-x-2"
      >
        <EyeOpenIcon className="h-4 w-4 text-foreground" />
        <p>Read</p>
      </Link>
    </div>
  );
};

const QuotedTweet = ({ tweet }: { tweet: EnrichedQuotedTweet }) => {
  const grid =
    tweet.mediaDetails?.length === 1
      ? "col-span-2 row-span-2"
      : tweet.mediaDetails?.length === 2
        ? "col-span-1 row-span-2"
        : tweet.mediaDetails?.length === 4
          ? "col-span-1 row-span-1"
          : "";

  return (
    <div className="flex flex-col gap-y-3 rounded-sm border pb-3.5 pt-3 [&>p]:text-sm">
      <div className="flex items-center gap-x-3 border-b px-3.5 pb-3">
        <Image
          src={tweet.user.profile_image_url_https}
          alt="quoted profile"
          className="rounded-full"
          width={30}
          height={30}
        />
        <div className="flex items-center gap-x-2">
          <p className="flex items-center gap-x-1 text-sm font-medium text-foreground">
            {tweet.user.name}
            <span>
              <Verified />
            </span>
          </p>
          <code className="hidden text-xs text-muted-foreground md:block">
            @{tweet.user.screen_name}
          </code>
        </div>
      </div>
      <QuotedTweetBody tweet={tweet} />
      <div className="flex items-center gap-x-2 gap-y-3 px-3.5">
        {tweet.mediaDetails?.length ? (
          <div
            className={`grid aspect-video h-auto w-full grid-cols-2 grid-rows-2 gap-0.5 overflow-hidden rounded-md`}
          >
            {tweet.mediaDetails.map((media, index) => (
              <div
                key={index}
                className={`relative h-full w-full ${grid} ${
                  tweet.mediaDetails?.length === 3
                    ? index === 1
                      ? "row-span-2"
                      : ""
                    : ""
                }`}
              >
                <Image
                  src={media.media_url_https}
                  alt="media"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export const CustomTweet = ({ tweet: t, components }: Props) => {
  const tweet = enrichTweet(t);

  return (
    <TweetContainer>
      <TweetHeader tweet={tweet} />
      <div className="flex flex-col gap-y-1 px-3.5 [&>p]:text-sm">
        {tweet.in_reply_to_status_id_str && <TweetInReplyTo tweet={tweet} />}
        {tweet.entities[0].text !== "" && <TweetBody tweet={tweet} />}
      </div>
      <div className="flex flex-col gap-y-3 border-b px-3.5 pb-4 [&>div]:!mt-0">
        {tweet.mediaDetails?.length ? (
          <TweetMedia tweet={tweet} components={components} />
        ) : null}
        {tweet.quoted_tweet && <QuotedTweet tweet={tweet.quoted_tweet} />}
        <TweetInfo tweet={tweet} />
      </div>
      <TweetActions tweet={tweet} />
    </TweetContainer>
  );
};
