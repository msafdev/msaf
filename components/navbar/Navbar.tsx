import Image from "next/image";

// Import Assets
import Mad from "@/public/images/avatar-mad.png";
import NavLink from "./NavLink";
import NavDrop from "./NavDrop";

// Data
import { NavItems } from "@/lib/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full flex items-center justify-between py-4 md:py-8 pad-x sticky top-0 bg-background border-b">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-x-4">
        <div className="flex flex-col justify-center items-center w-fit h-fit">
          <div className="w-10 h-10 bg-primary rounded-full blur-sm" />
          <Image
            priority
            src={Mad}
            alt="Avatar mad"
            className="w-14 h-14 absolute translate-y-1 translate-x-0.5"
          />
        </div>
        <h1 className="text-lg font-bold text-foreground translate-y-1">
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
