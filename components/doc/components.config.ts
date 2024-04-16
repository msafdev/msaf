import { readFileSync } from "fs";
import { FC, ReactElement, ReactNode } from "react";
import path, { join } from "path";

// Profile
import ProfileOne from "@/components/doc/profile/profile-one";
import ProfileTwo from "@/components/doc/profile/profile-two";

// Badge
import BadgeOne from "@/components/doc/badge/badge-one";
import BadgeTwo from "@/components/doc/badge/badge-two";

// Resolve Directory
const __dirname = path.resolve();

function readFileSyncSafe(filePath: string): string {
  try {
    return readFileSync(filePath, "utf8");
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return "Invalid file content";
  }
}

// Paths
const profileOnePath = path.resolve(__dirname, "./components/doc/profile/profile-one.tsx");
const profileTwoPath = path.resolve(__dirname, "./components/doc/profile/profile-two.tsx");
const badgeOnePath = path.resolve(__dirname, "./components/doc/badge/badge-one.tsx");
const badgeTwoPath = path.resolve(__dirname, "./components/doc/badge/badge-two.tsx");

// Codes
const ProfileOneCode = readFileSyncSafe(profileOnePath);
const ProfileTwoCode = readFileSyncSafe(profileTwoPath);
const BadgeOneCode = readFileSyncSafe(badgeOnePath);
const BadgeTwoCode = readFileSyncSafe(badgeTwoPath);

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
