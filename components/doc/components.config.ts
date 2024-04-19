// Interfaces
import { Categories, Components } from "@/lib/types/components";

// Profile
import Profile from "@/components/doc/profile/profile";
import ProfileCard from "@/components/doc/profile/profile-card";

// Badge
import Badge from "@/components/doc/badge/badge";
import StatusBadge from "@/components/doc/badge/status-badge";

// Button
import Button from "@/components/doc/button/button";
import IconWithButton from "@/components/doc/button/w-icon-button";
import IconButton from "@/components/doc/button/icon-button";

// Card
import BlogCard from "@/components/doc/card/blog-card";
import CreditCard from "@/components/doc/card/credit-card";
import JobCard from "@/components/doc/card/job-card";

// Input
import InputOne from "@/components/doc/input/input-one";
import InputTwo from "@/components/doc/input/input-two";
import InputThree from "@/components/doc/input/input-three";

// Grid
import GridOne from "@/components/doc/grid/grid-one";
import GridTwo from "@/components/doc/grid/grid-two";
import GridThree from "@/components/doc/grid/grid-three";

// Marquee
import Marquee from "@/components/doc/marquee/marquee";
import Tweet from "./tweet/tweet";
import CyberButton from "./button/cyberpunk-button";

// Requirement Markdown
const MarqueeRequirement = `// add to tailwind.config.js
extend: {
  keyframes: {
    marquee: {
      "0%": { transform: "translateX(0%)" },
      "100%": { transform: "translateX(-100%)" },
    },
  },
  animation: {
    marquee: "marquee 10s linear infinite",
  },
}`;

const TweetRequirement = `// copy and paste this code into tweet.tsx
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

    const formattedDate = \`\${timeString} · \${dateStringFormatted}\`;

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
      return \`\${(num / 1000).toFixed(1)}K\`;
    }
    return num;
  };

  return (
    <div className="flex w-full gap-x-4 md:gap-x-8 px-3.5 text-sm font-medium text-muted-foreground">
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
        className="flex items-center gap-x-2 ml-auto"
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
          <code className="text-xs text-muted-foreground hidden md:block">
            @{tweet.user.screen_name}
          </code>
        </div>
      </div>
      <QuotedTweetBody tweet={tweet} />
      <div className="flex items-center gap-x-2 gap-y-3 px-3.5">
        {tweet.mediaDetails?.length ? (
          <div
            className={\`grid aspect-video h-auto w-full grid-cols-2 grid-rows-2 gap-0.5 overflow-hidden rounded-md\`}
          >
            {tweet.mediaDetails.map((media, index) => (
              <div
                key={index}
                className={\`relative h-full w-full \${grid} \${
                  tweet.mediaDetails?.length === 3
                    ? index === 1
                      ? "row-span-2"
                      : ""
                    : ""
                }\`}
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
`;

// Exports
export const categories: Categories[] = [
  // Profile
  {
    name: "Profile",
    type: "profile",
    description:
      "A profile component is a UI element or module designed to display information related to a user or entity's profile within an application.",
    requirement: [
      "# icons",
      "npm i @radix-ui/react-icons",
      "",
      "# components",
      "npx shadcn-ui@latest add avatar",
    ],
    url: "https://github.com/msafdev",
  },
  // Badge
  {
    name: "Badge",
    type: "badge",
    description:
      "A badge component is a UI element or module designed to display a small amount of information or status related to a user or entity within an application.",
    requirement: ["# icons", "npm i @radix-ui/react-icons"],
    url: "https://github.com/msafdev",
  },
  // Button
  {
    name: "Button",
    type: "button",
    description:
      "A button component is a UI element or module designed to trigger an action or event within an application.",
    requirement: ["# icons", "npm i react-icons"],
    url: "https://github.com/msafdev",
  },
  // Card
  {
    name: "Card",
    type: "card",
    description:
      "A card component is a UI element or module designed to display information related to a user or entity within an application.",
    requirement: ["# icons", "npm i react-icons"],
    url: "https://github.com/msafdev",
  },
  // Input
  {
    name: "Input",
    type: "input",
    description:
      "An input component is a UI element or module designed to accept user input within an application.",
    requirement: ["# icons", "npm i @radix-ui/react-icons"],
    url: "https://github.com/msafdev",
  },
  // Grid
  {
    name: "Grid",
    type: "grid",
    description:
      "A grid component is a UI element or module designed to display information in a grid layout within an application.",
    url: "https://github.com/msafdev",
  },
  // Marquee
  {
    name: "Marquee",
    type: "marquee",
    description:
      "A marquee component is a UI element or module designed to display information in a scrolling manner within an application.",
    requirement: [MarqueeRequirement],
    reqLang: "ts",
    url: "https://github.com/msafdev",
  },
  // Tweet
  {
    name: "Tweet",
    type: "tweet",
    description:
      "A tweet component is a UI element or module designed to display a tweet within an application. This was made with react-tweet package from Vercel.",
    requirement: [TweetRequirement],
    reqLang: "tsx",
    url: "https://github.com/msafdev",
  },
];

export const components: Components[] = [
  // Profile
  {
    component: Profile,
    path: "profile.tsx",
    type: "profile",
    name: "Profile",
  },
  {
    component: ProfileCard,
    path: "profile-card.tsx",
    type: "profile",
    name: "Profile Card",
  },
  // Badge
  {
    component: Badge,
    path: "badge.tsx",
    type: "badge",
    name: "Icon Badge",
  },
  {
    component: StatusBadge,
    path: "status-badge.tsx",
    type: "badge",
    name: "Status Badge",
  },
  // Button
  {
    component: Button,
    path: "button.tsx",
    type: "button",
    name: "Default Button",
  },
  {
    component: IconWithButton,
    path: "w-icon-button.tsx",
    type: "button",
    name: "Button /w Icon",
  },
  {
    component: IconButton,
    path: "icon-button.tsx",
    type: "button",
    name: "Icon Button",
  },
  {
    component: CyberButton,
    path: "cyberpunk-button.tsx",
    type: "button",
    name: "Cyberpunk Button",
  },
  // Card
  {
    component: BlogCard,
    path: "blog-card.tsx",
    type: "card",
    name: "Blog Card",
  },
  {
    component: CreditCard,
    path: "credit-card.tsx",
    type: "card",
    name: "Credit Card",
  },
  {
    component: JobCard,
    path: "job-card.tsx",
    type: "card",
    name: "Job Card",
  },
  // Input
  {
    component: InputOne,
    path: "input-one",
    type: "input",
    name: "Default Input",
  },
  {
    component: InputTwo,
    path: "input-two",
    type: "input",
    name: "Hover Input",
  },
  {
    component: InputThree,
    path: "input-three",
    type: "input",
    name: "Icon Input",
  },
  // Grid
  {
    component: GridOne,
    path: "grid-one",
    type: "grid",
    name: "4x4 Grid",
  },
  {
    component: GridTwo,
    path: "grid-two",
    type: "grid",
    name: "3x2 Grid",
  },
  {
    component: GridThree,
    path: "grid-three",
    type: "grid",
    name: "Bento Grid",
  },
  // Marquee
  {
    component: Marquee,
    path: "marquee.tsx",
    type: "marquee",
    name: "Infinite Marquee",
  },
  // Tweet
  {
    component: Tweet,
    path: "",
    type: "tweet",
    name: "Twitter Embed",
  },
];
