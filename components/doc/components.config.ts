import { FC } from "react";

// Profile
import ProfileOne from "@/components/doc/profile/profile-one";
import ProfileTwo from "@/components/doc/profile/profile-two";

// Badge
import BadgeOne from "@/components/doc/badge/badge-one";
import BadgeTwo from "@/components/doc/badge/badge-two";

// Interfaces
import { Categories, Components } from "@/lib/types/components";

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
    path: "profile-one",
    type: "profile",
    name: "Profile One",
  },
  {
    component: ProfileTwo,
    path: "profile-two",
    type: "profile",
    name: "Profile Two",
  },
  {
    component: BadgeOne,
    path: "badge-one",
    type: "badge",
    name: "Badge One",
  },
  {
    component: BadgeTwo,
    path: "badge-two",
    type: "badge",
    name: "Badge Two",
  },
];
