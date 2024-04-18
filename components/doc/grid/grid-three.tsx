const GridThree = () => {
  return (
    <div className="grid aspect-[2/3] w-full max-w-60 grid-cols-3 grid-rows-4 gap-2 rounded-3xl border bg-popover p-2 md:aspect-[3/2] md:grid-rows-2">
      <div className="col-span-1 rounded-tl-2xl bg-gray-200" />
      <div className="col-span-2 rounded-tr-2xl bg-gray-300" />
      <div className="col-span-3 bg-gray-400 md:col-span-2 md:rounded-bl-2xl" />
      <div className="col-span-3 row-span-2 grid grid-cols-2 grid-rows-2 gap-2 md:col-span-1 md:row-span-1 md:grid-cols-2">
        <div className="bg-neutral-200" />
        <div className="bg-neutral-300" />
        <div className="rounded-bl-2xl bg-neutral-400 md:rounded-bl-none" />
        <div className="rounded-br-2xl bg-neutral-500" />
      </div>
    </div>
  );
};

export default GridThree;
