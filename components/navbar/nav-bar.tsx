import Image from "next/image";

// Import Assets
import Mad from "@/public/images/avatar-mad.png";
import NavLink from "./nav-link";
import NavDrop from "./nav-drop";

// Data
import { NavItems } from "@/lib/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="pad-x sticky top-0 z-40 flex w-full items-center justify-between border-b bg-background py-4 md:py-8">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-x-4">
        <div className="flex h-fit w-fit flex-col items-center justify-center">
          <div className="h-10 w-10 rounded-full bg-primary blur-sm" />
          <Image
            src={Mad}
            alt="Avatar mad"
            className="absolute h-14 w-14 translate-x-0.5 translate-y-1"
          />
        </div>
        <h1 className="translate-y-1 text-lg font-bold text-foreground">
          MSAF
        </h1>
      </Link>

      {/* Nav Items */}
      <nav className="flex items-center justify-between">
        <ul className="flex items-center gap-x-8">
          {NavItems.map((item, index) => (
            <li key={index} className="hidden sm:block">
              <NavLink href={item.href} name={item.name} />
            </li>
          ))}
          <li className="flex items-center">
            <NavDrop />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
