import { Button } from "@/components/ui/button";
import Image from "next/image";

const CardOne = () => {
  return (
    <div className="flex max-w-64 flex-col rounded-md border">
      <div className="flex w-full p-2 pb-0">
        <Image
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Placeholder"
          width={300}
          height={200}
          className="rounded-sm object-cover"
        />
      </div>
      <div className="my-2 h-[1px] w-full bg-border" />
      <div className="flex-col p-2 pt-0">
        <h2 className="text-sm font-medium text-foreground md:text-base">
          Card Title
        </h2>
        <p className="mt-1 line-clamp-3 text-xs text-muted-foreground md:text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab,
          deserunt?
        </p>
        <Button className="mt-3 w-full rounded-sm" variant={"secondary"}>
          Learn More
        </Button>
      </div>
    </div>
  );
};
export default CardOne;
