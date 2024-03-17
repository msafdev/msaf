"use client";

import { useParams } from "next/navigation";

const Components = () => {
  const { slug } = useParams();

  console.log(slug);

  return (
    <div className="flex h-full max-w-xl grow flex-col">
      <h1 className="text-2xl font-semibold text-foreground capitalize">{slug}</h1>
      <p className="mt-3 text-sm text-muted-foreground md:text-base">
        ❌ under construction
      </p>
    </div>
  );
};
export default Components;
