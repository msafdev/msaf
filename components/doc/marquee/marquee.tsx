import Image from "next/image";

import Facebook from "@/public/images/logos/facebook.svg";
import Amazon from "@/public/images/logos/amazon.svg";
import Netflix from "@/public/images/logos/netflix.svg";
import Google from "@/public/images/logos/google.svg";

const MarqueeItems = [
  {
    id: 1,
    src: Facebook,
    alt: "Facebook",
  },
  {
    id: 2,
    src: Amazon,
    alt: "Amazon",
  },
  {
    id: 3,
    src: Netflix,
    alt: "Netflix",
  },
  {
    id: 4,
    src: Google,
    alt: "Google",
  },
];

const Marquee = () => {
  return (
    <div className="relative flex max-w-full flex-row overflow-hidden py-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex shrink-0 animate-marquee items-center justify-around">
          {MarqueeItems.map((item, index) => (
            <Image
              src={item.src}
              key={index}
              className="h-6 w-auto px-4"
              alt={item.alt}
            />
          ))}
        </div>
      ))}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-1/4 bg-gradient-to-r from-white dark:from-background" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-1/4 bg-gradient-to-l from-white dark:from-background" />
    </div>
  );
};

export default Marquee;
