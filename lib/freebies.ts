import {
  ArrowRight,
  CircleHelp,
  ClipboardCheck,
  PiggyBank,
} from "lucide-react";
import { ElementType } from "react";

interface SidebarSub {
  name: string;
  href: string;
  icon?: ElementType;
}

interface SidebarGen {
  name: string;
  href: string;
  icon?: ElementType;
}

interface SidebarSubItems {
  name: string;
  subItems: SidebarSub[];
}

interface SidebarGenItems {
  name: string;
  generalItems: SidebarGen[];
}

const SidebarGeneralItems: SidebarGenItems[] = [
  {
    name: "Getting Started",
    generalItems: [
      {
        name: "Introduction",
        icon: ClipboardCheck,
        href: "",
      },
      {
        name: "Usage",
        icon: CircleHelp,
        href: "usage",
      },
      {
        name: "Donate",
        icon: PiggyBank,
        href: "donate",
      },
    ],
  },
];

const SidebarItems: SidebarSubItems[] = [
  {
    name: "Component",
    subItems: [
      {
        name: "Button",
        icon: ArrowRight,
        href: "button",
      },
      {
        name: "Badge",
        icon: ArrowRight,
        href: "badge",
      },
      {
        name: "Card",
        icon: ArrowRight,
        href: "card",
      },
      {
        name: "Input",
        icon: ArrowRight,
        href: "input",
      },
      {
        name: "Profile",
        icon: ArrowRight,
        href: "profile",
      },
      {
        name: "Marquee",
        icon: ArrowRight,
        href: "marquee",
      },
    ],
  },
  {
    name: "Special",
    subItems: [
      {
        name: "Widget",
        icon: ArrowRight,
        href: "widget",
      },
      {
        name: "Tweet",
        icon: ArrowRight,
        href: "tweet",
      },
    ],
  },
];

export { SidebarItems, SidebarGeneralItems };
