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
      <ChevronRightIcon className="inline mr-2 -translate-x-1" />
      {slicedPathname.map((part, index) => (
        <div key={index} className="flex items-center">
          <p className="text-sm font-medium">{part}</p>
          {index !== slicedPathname.length - 1 && (
            <ChevronRightIcon className="inline mx-2" />
          )}
        </div>
      ))}
    </div>
  );
};
export default Breadcrumb;
