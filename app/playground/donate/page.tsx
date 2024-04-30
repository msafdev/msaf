import Image from "next/image";
import Link from "next/link";

import Avatar1 from "@/public/images/avatar-blow.png";
import Avatar2 from "@/public/images/avatar-cloud.png";
import Avatar3 from "@/public/images/avatar-love.png";

export default function Page() {
  return (
    <div className="flex h-full max-w-xl grow flex-col">
      <h1 className="text-2xl font-semibold text-foreground">Support Me</h1>
      <p className="mt-3 text-sm text-muted-foreground md:text-base">
        This project is{" "}
        <span className="font-medium text-foreground">open-sourced</span> and{" "}
        <span className="font-medium text-foreground">free</span> to use. If
        you find this project helpful to you in any way, consider supporting me
        by buying me a coffee.
      </p>
      <h2 className="mt-6 text-lg font-semibold text-foreground">
        How to support
      </h2>
      <ul className="mt-3 text-sm md:text-base">
        <li>
          <Link href="/" className="flex w-fit items-center gap-x-2">
            -
            <code className="anim font-medium text-foreground underline-offset-2 hover:underline">
              kofi
            </code>
          </Link>
        </li>
        <li>
          <Link href="/" className="flex w-fit items-center gap-x-2">
            -
            <code className="anim font-medium text-foreground underline-offset-2 hover:underline">
              paypal
            </code>
          </Link>
        </li>
        <li>
          <Link href="/" className="flex w-fit items-center gap-x-2">
            -
            <code className="anim font-medium text-foreground underline-offset-2 hover:underline">
              patreon
            </code>
          </Link>
        </li>
      </ul>
      <h2 className="mt-6 text-lg font-semibold text-foreground">Benefits</h2>
      <p className="mt-3 text-sm text-muted-foreground md:text-base">
        Every <span className="font-medium text-foreground">patrons</span>{" "}
        will get a custom memoji made by me, and of course, my deepest
        gratitude.
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
