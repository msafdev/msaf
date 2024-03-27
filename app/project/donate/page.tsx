import Image from "next/image";

import Avatar1 from "@/public/images/avatar-blow.png";
import Avatar2 from "@/public/images/avatar-cloud.png";
import Avatar3 from "@/public/images/avatar-love.png";

export default function Support() {
  return (
    <div className="flex h-full max-w-xl grow flex-col">
      <h1 className="text-2xl font-semibold text-foreground">Support Me</h1>
      <p className="mt-3 text-sm text-muted-foreground md:text-base">
        This project is open-sourced and free to use. If you find this project
        helpful to you in any way, consider supporting me by buying me a coffee.
      </p>
      <h2 className="mt-6 text-lg font-semibold text-foreground">
        How to support
      </h2>
      <ul className="mt-3 text-sm md:text-base">
        <li>
          <a href="/" className="flex items-center gap-x-2">
            -
            <code className="anim font-medium text-muted-foreground hover:text-foreground">
              kofi
            </code>
          </a>
        </li>
        <li>
          <a href="/" className="flex items-center gap-x-2">
            -
            <code className="anim font-medium text-muted-foreground hover:text-foreground">
              paypal
            </code>
          </a>
        </li>
        <li>
          <a href="/" className="flex items-center gap-x-2">
            -
            <code className="anim font-medium text-muted-foreground hover:text-foreground">
              patreon
            </code>
          </a>
        </li>
      </ul>
      <h2 className="mt-6 text-lg font-semibold text-foreground">Benefits</h2>
      <p className="mt-3 text-sm text-muted-foreground md:text-base">
        Every patrons will get a custom memoji made by me, and of course, my
        deepest gratitude.
      </p>
      <h2 className="mt-6 text-lg font-semibold text-foreground">Patrons</h2>
      <div className="mt-3 flex -space-x-3 rtl:space-x-reverse">
        <div className="group relative aspect-square h-auto w-10 rounded-full border bg-accent p-1">
          <Image src={Avatar1} alt="Avatar placeholder" className="" />
        </div>
        <div className="group relative aspect-square h-auto w-10 rounded-full border bg-accent p-1">
          <Image src={Avatar2} alt="Avatar placeholder" className="" />
        </div>
        <div className="group relative aspect-square h-auto w-10 rounded-full border bg-accent p-1">
          <Image src={Avatar3} alt="Avatar placeholder" className="" />
        </div>
      </div>
      <h2 className="mt-6 text-lg font-semibold text-foreground">Sponsors</h2>
    </div>
  );
}
