export default function Introduction() {
  return (
    <div className="flex h-full grow flex-col">
      <h1 className="text-2xl font-semibold text-foreground">Introduction</h1>
      <p className="mt-4 text-sm text-muted-foreground md:text-base">
        Simply built components you can easily <code>copy</code> and{" "}
        <code>paste</code> into your project. Adaptable, reusable, and{" "}
        <span className="font-semibold">obviously</span> open-sourced.
      </p>
      <blockquote className="mt-4 w-fit border-l-2 border-l-primary bg-accent py-2 pl-4 pr-4 text-xs italic text-accent-foreground md:text-sm">
        This is a collection of components I have used in my projects. <br />
        This is <span className="font-semibold">NOT</span> a component library.
      </blockquote>
    </div>
  );
}
