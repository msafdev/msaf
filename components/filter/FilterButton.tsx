import Link from "next/link";

import { FC } from "react";

interface FilterButtonProps {
  filter?: string;
  href?: string;
  active?: boolean;
}

const FilterButton: FC<FilterButtonProps> = ({
  filter = "Name",
  href = "/",
  active = false,
}) => {
  return (
    <Link href={href} className="group w-fit px-6 py-4">
      <p className="flex flex-col text-sm font-medium uppercase text-foreground">
        {filter}
        <span
          className={`anim h-0.5 border-b border-foreground transition-all duration-200 ease-in-out group-hover:w-full ${
            active ? "w-full" : "w-0"
          }`}
        />
      </p>
    </Link>
  );
};
export default FilterButton;
