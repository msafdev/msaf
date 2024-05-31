import Image from "next/image";

// Import Assets
import Mad from "@/public/images/icon.svg";
import NavLink from "./nav-link";
import NavDrop from "./nav-drop";

// Data
import { NavItems } from "@/lib/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="pad-x sticky top-0 z-40 flex w-full items-center justify-between border-b bg-background py-4">
      {/* Logo */}
      <Link href="/" className="flex items-center">
          <Image
            src={Mad}
            alt="Avatar mad"
            className="h-10 w-10"
          />
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
