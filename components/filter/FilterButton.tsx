import { FC } from "react";

interface FilterButtonProps {
  filter?: string;
}

const FilterButton: FC<FilterButtonProps> = ({ filter = "Name" }) => {
  return (
    <button className="px-6 w-fit py-4 group">
      <p className="text-foreground text-sm font-medium uppercase flex flex-col">
        {filter}
        <span className="anim w-0 group-hover:w-full h-0.5 border-b border-foreground transition-all duration-200 ease-in-out" />
      </p>
    </button>
  );
};
export default FilterButton;
