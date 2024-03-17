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

const NavItems = [
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Project",
    href: "/project",
  },
];

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
    name: "Components",
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
        name: "Avatar",
        icon: ArrowRight,
        href: "avatar",
      },
      {
        name: "Modal",
        icon: ArrowRight,
        href: "modal",
      },
      {
        name: "Alert",
        icon: ArrowRight,
        href: "alert",
      },
      {
        name: "Dropdown",
        icon: ArrowRight,
        href: "dropdown",
      },
      {
        name: "Tabs",
        icon: ArrowRight,
        href: "tabs",
      },
      {
        name: "Tooltip",
        icon: ArrowRight,
        href: "tooltip",
      },
      {
        name: "Progress",
        icon: ArrowRight,
        href: "progress",
      },
      {
        name: "Spinner",
        icon: ArrowRight,
        href: "spinner",
      },
      {
        name: "Switch",
        icon: ArrowRight,
        href: "switch",
      },
      {
        name: "Pagination",
        icon: ArrowRight,
        href: "pagination",
      },
      {
        name: "Breadcrumb",
        icon: ArrowRight,
        href: "breadcrumb",
      },
      {
        name: "Status",
        icon: ArrowRight,
        href: "status",
      },
    ],
  },
  {
    name: "Layouts",
    subItems: [
      {
        name: "Typography",
        icon: ArrowRight,
        href: "typography",
      },
      {
        name: "Layout",
        icon: ArrowRight,
        href: "layout",
      },
      {
        name: "Table",
        icon: ArrowRight,
        href: "table",
      },
    ],
  },
];

const FilterItems = [
  {
    name: "All",
    href: "/blog",
  },
  {
    name: "Code",
    href: "/blog/code",
  },
  {
    name: "Learn",
    href: "/blog/learn",
  },
  {
    name: "Personal",
    href: "/blog/personal",
  },
  {
    name: "Tech",
    href: "/blog/tech",
  },
  {
    name: "Design",
    href: "/blog/design",
  },
  {
    name: "Review",
    href: "/blog/review",
  },
];

const Experience = [
  {
    title: "Frontend Engineer",
    company: "FNDC",
    date: "10/2023 - Now",
  },
  {
    title: "Cloud Cohort",
    company: "Dicoding",
    date: "02/2024 - Now",
  },
  {
    title: "Frontend Engineer",
    company: "Kemnaker",
    date: "01/2023 - 03/2023",
  },
  {
    title: "Lab Assistant",
    company: "Undip",
    date: "08/2022 - 12/2023",
  },
];

export { NavItems, FilterItems, Experience, SidebarItems, SidebarGeneralItems };
