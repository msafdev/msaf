import Image from "next/image";

import Facebook from "@/public/images/logos/facebook.svg";
import Amazon from "@/public/images/logos/amazon.svg";
import Netflix from "@/public/images/logos/netflix.svg";
import Google from "@/public/images/logos/google.svg";
import Nike from "@/public/images/logos/nike.svg";
import Microsoft from "@/public/images/logos/microsoft.svg";

const MarqueeOne = () => {
  return (
    <div className="relative flex overflow-hidden rounded-md border bg-popover">
      <div className="animate-marquee grid grid-cols-6 items-center whitespace-nowrap py-12">
        <Image src={Facebook} className="px-1 sm:px-2 md:px-3 lg:px-3.5 xl:px-4" alt="Facebook" />
        <Image src={Amazon} className="px-1 sm:px-2 md:px-3 lg:px-3.5 xl:px-4" alt="Amazon" />
        <Image src={Netflix} className="px-1 sm:px-2 md:px-3 lg:px-3.5 xl:px-4" alt="Netflix" />
        <Image src={Google} className="px-1 sm:px-2 md:px-3 lg:px-3.5 xl:px-4" alt="Google" />
        <Image src={Nike} className="px-1 sm:px-2 md:px-3 lg:px-3.5 xl:px-4" alt="Nike" />
        <Image src={Microsoft} className="px-1 sm:px-2 md:px-3 lg:px-3.5 xl:px-4" alt="Microsoft" />
      </div>

      <div className="animate-marquee2 absolute top-0 grid grid-cols-6 items-center whitespace-nowrap py-12">
        <Image src={Facebook} className="px-1 sm:px-2 md:px-3 lg:px-3.5 xl:px-4" alt="Facebook" />
        <Image src={Amazon} className="px-1 sm:px-2 md:px-3 lg:px-3.5 xl:px-4" alt="Amazon" />
        <Image src={Netflix} className="px-1 sm:px-2 md:px-3 lg:px-3.5 xl:px-4" alt="Netflix" />
        <Image src={Google} className="px-1 sm:px-2 md:px-3 lg:px-3.5 xl:px-4" alt="Google" />
        <Image src={Nike} className="px-1 sm:px-2 md:px-3 lg:px-3.5 xl:px-4" alt="Nike" />
        <Image src={Microsoft} className="px-1 sm:px-2 md:px-3 lg:px-3.5 xl:px-4" alt="Microsoft" />
      </div>
      <div className="pointer-events-none absolute left-0 z-10 h-full w-1/4 bg-gradient-to-r from-white dark:from-popover" />
      <div className="pointer-events-none absolute right-0 z-10 h-full w-1/4 bg-gradient-to-l from-white dark:from-popover" />
    </div>
  );
};

export default MarqueeOne;
