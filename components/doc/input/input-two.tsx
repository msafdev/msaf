const InputTwo = () => {
  return (
    <div className="relative">
      <input
        type="text"
        name="input"
        className="border-1 anim peer block w-full appearance-none rounded-md border bg-background px-3 py-2 text-foreground autofill:bg-transparent focus:border-primary focus:outline-none focus:ring-0"
        placeholder=" "
      />
      <label
        htmlFor="input"
        className="anim pointer-events-none absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 rounded-md bg-background px-2 text-sm text-muted-foreground peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-primary rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
      >
        Enter your name
      </label>
    </div>
  );
};

export default InputTwo;
