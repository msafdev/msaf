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
        href: "/project",
      },
      {
        name: "Usage",
        icon: CircleHelp,
        href: "/project/usage",
      },
      {
        name: "Donate",
        icon: PiggyBank,
        href: "/project/donate",
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
        href: "/project/button",
      },
      {
        name: "Badge",
        icon: ArrowRight,
        href: "/project/badge",
      },
      {
        name: "Card",
        icon: ArrowRight,
        href: "/project/card",
      },
      {
        name: "Input",
        icon: ArrowRight,
        href: "/project/input",
      },
      {
        name: "Avatar",
        icon: ArrowRight,
        href: "/project/avatar",
      },
      {
        name: "Modal",
        icon: ArrowRight,
        href: "/project/modal",
      },
      {
        name: "Alert",
        icon: ArrowRight,
        href: "/project/alert",
      },
      {
        name: "Dropdown",
        icon: ArrowRight,
        href: "/project/dropdown",
      },
      {
        name: "Tabs",
        icon: ArrowRight,
        href: "/project/tabs",
      },
      {
        name: "Tooltip",
        icon: ArrowRight,
        href: "/project/tooltip",
      },
      {
        name: "Progress",
        icon: ArrowRight,
        href: "/project/progress",
      },
      {
        name: "Spinner",
        icon: ArrowRight,
        href: "/project/spinner",
      },
      {
        name: "Switch",
        icon: ArrowRight,
        href: "/project/switch",
      },
      {
        name: "Pagination",
        icon: ArrowRight,
        href: "/project/pagination",
      },
      {
        name: "Breadcrumb",
        icon: ArrowRight,
        href: "/project/breadcrumb",
      },
      {
        name: "Status",
        icon: ArrowRight,
        href: "/project/status",
      },
    ],
  },
  {
    name: "Layouts",
    subItems: [
      {
        name: "Typography",
        icon: ArrowRight,
        href: "/project/typography",
      },
      {
        name: "Layout",
        icon: ArrowRight,
        href: "/project/layout",
      },
      {
        name: "Table",
        icon: ArrowRight,
        href: "/project/table",
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
