"use client";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();

  const slicePathname = (pathname: string) => {
    return pathname.split("/").filter((part) => part !== "");
  };

  const slicedPathname = slicePathname(pathname);

  return (
    <div className="flex items-center">
      <ChevronRightIcon className="mr-2 inline -translate-x-1" />
      {slicedPathname.map((part, index) => (
        <div key={index} className="flex items-center">
          <p
            className={`text-sm ${
              index === slicedPathname.length - 1
                ? "font-semibold text-foreground"
                : "font-medium text-muted-foreground"
            }`}
          >
            {part}
          </p>
          {index !== slicedPathname.length - 1 && (
            <ChevronRightIcon className="mx-2 inline" />
          )}
        </div>
      ))}
    </div>
  );
};
export default Breadcrumb;
