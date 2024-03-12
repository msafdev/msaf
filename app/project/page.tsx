export default function Introduction() {
  return (
    <div className="flex h-full max-w-xl grow flex-col">
      <h1 className="text-2xl font-semibold text-foreground">Introduction</h1>
      <p className="mt-3 text-sm text-muted-foreground md:text-base">
        Simply built components you can easily <code>copy</code> and{" "}
        <code>paste</code> into your project. Adaptable, reusable, and{" "}
        <span className="font-semibold">obviously</span> open-sourced.
      </p>
      <blockquote className="mt-3 w-fit border-l-2 border-l-primary bg-accent py-2 pl-4 pr-4 text-xs italic text-accent-foreground md:text-sm">
        This is a collection of components I have used in my projects. <br />
        This is <span className="font-semibold">NOT</span> a component library.
      </blockquote>
      <h1 className="mt-6 text-lg font-semibold text-foreground">Reference</h1>
      <p className="mt-3 text-sm text-muted-foreground md:text-base">
        Making this by myself is never possible without the help of others. I
        took inspiration from many sources and I am grateful for that. Here are
        the references and resources I used, if you want to check them out:
      </p>
      <ul className="mt-3 text-sm md:text-base">
        <li>
          <a href="/" className="flex items-center gap-x-2">
            -
            <code className="anim font-medium text-muted-foreground hover:text-foreground">
              radix-ui
            </code>
          </a>
        </li>
        <li>
          <a href="/" className="flex items-center gap-x-2">
            -
            <code className="anim font-medium text-muted-foreground hover:text-foreground">
              shadcn-ui
            </code>
          </a>
        </li>
        <li>
          <a href="/" className="flex items-center gap-x-2">
            -
            <code className="anim font-medium text-muted-foreground hover:text-foreground">
              flowbite-ui
            </code>
          </a>
        </li>
        <li>
          <a href="/" className="flex items-center gap-x-2">
            -
            <code className="anim font-medium text-muted-foreground hover:text-foreground">
              lucide-icons
            </code>
          </a>
        </li>
        <li>
          <a href="/" className="flex items-center gap-x-2">
            -
            <code className="anim font-medium text-muted-foreground hover:text-foreground">
              react-icons
            </code>
          </a>
        </li>
      </ul>
    </div>
  );
}
