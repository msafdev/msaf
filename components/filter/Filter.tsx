// Data
import { FilterItems } from "@/lib/constants";

// Components
import FilterButton from "./FilterButton";

const Filter = () => {
  return (
    <div className="flex w-full gap-x-2 divide-x overflow-scroll no-scrollbar pad-x">
      {FilterItems.map((item, index) => (
        <FilterButton key={index} filter={item.name} />
      ))}
    </div>
  );
};
export default Filter;
