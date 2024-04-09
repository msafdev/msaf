"use client";

import { useParams } from "next/navigation";

// Data
import { FilterItems } from "@/lib/constants";

// Components
import FilterButton from "./FilterButton";

const Filter = () => {
  const params = useParams();

  return (
    <div className="no-scrollbar pad-x flex w-full gap-x-2 divide-x overflow-scroll">
      {FilterItems.map((item, index) => (
        <FilterButton
          key={index}
          filter={item.name}
          href={item.href}
          active={
            item.href === `/blog${params.category ? `/${params.category}` : ""}`
          }
        />
      ))}
    </div>
  );
};
export default Filter;
