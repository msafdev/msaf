import { readFileSync } from "fs";
import { FC, ReactElement, ReactNode } from "react";
import { join } from "path";

// Profile
import ProfileOne from "@/components/doc/profile/profile-one";
import ProfileTwo from "@/components/doc/profile/profile-two";

// Badge
import BadgeOne from "@/components/doc/badge/badge-one";
import BadgeTwo from "@/components/doc/badge/badge-two";

// Imports
const ProfileOneCode = readFileSync(
  join(process.cwd(), "components/doc/profile/profile-one.tsx"),
  "utf8",
);

const ProfileTwoCode = readFileSync(
  join(process.cwd(), "components/doc/profile/profile-two.tsx"),
  "utf8",
);

const BadgeOneCode = readFileSync(
  join(process.cwd(), "components/doc/badge/badge-one.tsx"),
  "utf8",
);

const BadgeTwoCode = readFileSync(
  join(process.cwd(), "components/doc/badge/badge-two.tsx"),
  "utf8",
);

// Types
type Components = {
  component: FC<any>;
  path: string;
  code: string;
  type: string;
  name: string;
};

type Categories = {
  name: string;
  type: string;
  description: string;
  requirement?: string[];
  url: string;
};

// Exports
export const categories: Categories[] = [
  {
    name: "Profile",
    type: "profile",
    description:
      "A profile component is a UI element or module designed to display information related to a user or entity's profile within an application.",
    requirement: ["npx shadcn-ui@latest add avatar"],
    url: "https://github.com/msafdev",
  },
  {
    name: "Badge",
    type: "badge",
    description:
      "A badge component is a UI element or module designed to display a small amount of information or status related to a user or entity within an application.",
    requirement: ["npm install lucide-react"],
    url: "https://github.com/msafdev",
  },
];

export const components: Components[] = [
  {
    component: ProfileOne,
    code: ProfileOneCode,
    path: "profile/profile-one",
    type: "profile",
    name: "Profile One",
  },
  {
    component: ProfileTwo,
    code: ProfileTwoCode,
    path: "profile/profile-two",
    type: "profile",
    name: "Profile Two",
  },
  {
    component: BadgeOne,
    code: BadgeOneCode,
    path: "badge/badge-one",
    type: "badge",
    name: "Badge One",
  },
  {
    component: BadgeTwo,
    code: BadgeTwoCode,
    path: "badge/badge-two",
    type: "badge",
    name: "Badge Two",
  },
];
