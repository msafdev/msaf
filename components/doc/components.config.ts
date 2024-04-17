import { FC } from "react";

// Profile
import ProfileOne from "@/components/doc/profile/profile-one";
import ProfileTwo from "@/components/doc/profile/profile-two";

// Badge
import BadgeOne from "@/components/doc/badge/badge-one";
import BadgeTwo from "@/components/doc/badge/badge-two";

// Button
import ButtonOne from "@/components/doc/button/button-one";
import ButtonTwo from "@/components/doc/button/button-two";
import ButtonThree from "@/components/doc/button/button-three";

// Card
import CardOne from "@/components/doc/card/card-one";
import CardTwo from "@/components/doc/card/card-two";
import CardThree from "@/components/doc/card/card-three";

// Input
import InputOne from "@/components/doc/input/input-one";
import InputTwo from "@/components/doc/input/input-two";
import InputThree from "@/components/doc/input/input-three";

// Interfaces
import { Categories, Components } from "@/lib/types/components";

// Exports
export const categories: Categories[] = [
  {
    name: "Profile",
    type: "profile",
    description:
      "A profile component is a UI element or module designed to display information related to a user or entity's profile within an application.",
    requirement: ["# components", "npx shadcn-ui@latest add avatar"],
    url: "https://github.com/msafdev",
  },
  {
    name: "Badge",
    type: "badge",
    description:
      "A badge component is a UI element or module designed to display a small amount of information or status related to a user or entity within an application.",
    requirement: ["# icons", "npm i @radix-ui/react-icons"],
    url: "https://github.com/msafdev",
  },
  {
    name: "Button",
    type: "button",
    description:
      "A button component is a UI element or module designed to trigger an action or event within an application. It is one of the most common components in web development.",
    url: "https://github.com/msafdev",
  },
  {
    name: "Card",
    type: "card",
    description:
      "A card component is a UI element or module designed to display information related to a user or entity within an application.",
    requirement: ["# icons", "npm i react-icons"],
    url: "https://github.com/msafdev",
  },
  {
    name: "Input",
    type: "input",
    description:
      "An input component is a UI element or module designed to accept user input within an application.",
    requirement: ["# icons", "npm i @radix-ui/react-icons"],
    url: "https://github.com/msafdev",
  },
];

export const components: Components[] = [
  {
    component: ProfileOne,
    path: "profile-one",
    type: "profile",
    name: "Profile Chip",
  },
  {
    component: ProfileTwo,
    path: "profile-two",
    type: "profile",
    name: "Profile Card",
  },
  {
    component: BadgeOne,
    path: "badge-one",
    type: "badge",
    name: "Icon Badge",
  },
  {
    component: BadgeTwo,
    path: "badge-two",
    type: "badge",
    name: "Status Badge",
  },
  {
    component: ButtonOne,
    path: "button-one",
    type: "button",
    name: "Default Button",
  },
  {
    component: ButtonTwo,
    path: "button-two",
    type: "button",
    name: "Button /w Icon",
  },
  {
    component: ButtonThree,
    path: "button-three",
    type: "button",
    name: "Icon",
  },
  {
    component: CardOne,
    path: "card-one",
    type: "card",
    name: "Blog Card",
  },
  {
    component: CardTwo,
    path: "card-two",
    type: "card",
    name: "Credit Card",
  },
  {
    component: CardThree,
    path: "card-three",
    type: "card",
    name: "Card Three",
  },
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
];
