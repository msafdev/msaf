const GridOne = () => {
  return (
    <div className="grid aspect-square w-full max-w-60 grid-cols-2 grid-rows-2 gap-2 rounded-3xl border bg-popover p-2">
      <div className="rounded-tl-2xl bg-lime-200" />
      <div className="rounded-tr-2xl bg-lime-300" />
      <div className="rounded-bl-2xl bg-lime-400" />
      <div className="rounded-br-2xl bg-lime-500" />
    </div>
  );
};

export default GridOne;
