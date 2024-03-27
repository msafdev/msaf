// Text Balancer
import Link from "next/link";

// Components
import { Command } from "@/components/macro/CommandDialog";

// Datas
import { Experience } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex h-full w-full grow flex-col pt-4 md:pt-8 lg:pt-12"
      >
        <div className="pad-x relative w-full">
          <h1 className="text-balance text-center text-2xl font-semibold leading-tight xs:text-3xl sm:text-left md:w-[70%] lg:text-4xl">
            Visual Driven<span className="mx-2 text-yellow-400">★</span>Web
            Developer, converting ideas into reality
          </h1>

          <div className="pad-r absolute bottom-0 right-0 hidden flex-col items-end gap-y-2 sm:flex">
            <code className="justify-end gap-x-2 text-xs text-muted-foreground">
              Theme{" "}
              <kbd className="pointer-events-none inline-flex h-fit select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>M
              </kbd>
            </code>
            <code className="justify-end gap-x-2 text-xs text-muted-foreground">
              Command{" "}
              <kbd className="pointer-events-none inline-flex h-fit select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>F
              </kbd>
            </code>
          </div>
        </div>

        <div className="anim my-4 grid h-fit w-full grid-cols-2 grid-rows-3 items-center justify-between border-y md:my-8 md:flex md:grid-rows-1 lg:my-12">
          <div className="md:pad-l anim col-span-1 flex h-fit w-full items-center justify-center py-4 font-medium transition-all duration-200 ease-in-out hover:w-full hover:bg-muted md:w-1/2">
            <p className="text-center text-xs font-medium text-foreground">
              Jira
            </p>
          </div>
          <div className="anim col-span-1 flex h-fit w-full items-center justify-center border-l py-4 font-medium transition-all duration-200 ease-in-out hover:w-full hover:bg-muted md:w-1/2">
            <p className="text-center text-xs font-medium text-foreground">
              Typescript
            </p>
          </div>
          <div className="anim col-span-1 flex h-fit w-full items-center justify-center border-l-0 border-t py-4 font-medium transition-all duration-200 ease-in-out hover:w-full hover:bg-muted md:w-1/2 md:border-l md:border-t-0">
            <p className="text-center text-xs font-medium text-foreground">
              Hygraph
            </p>
          </div>
          <div className="anim col-span-1 flex h-fit w-full items-center justify-center border-l border-t py-4 font-medium transition-all duration-200 ease-in-out hover:w-full hover:bg-muted md:w-1/2 md:border-t-0">
            <p className="text-center text-xs font-medium text-foreground">
              Next
            </p>
          </div>
          <div className="md:pad-r anim col-span-2 flex h-fit w-full items-center justify-center border-t py-4 font-medium transition-all duration-200 ease-in-out hover:w-full hover:bg-muted md:w-1/2 md:border-l md:border-t-0">
            <p className="text-center text-xs font-medium text-foreground">
              Github
            </p>
          </div>
        </div>

        <div className="pad-x flex w-full flex-col justify-center py-4 md:grow">
          <div className="col-span-1 flex w-full max-w-lg flex-col gap-y-2">
            <p className="w-full text-sm font-medium uppercase text-muted-foreground">
              Experience
            </p>
            <h2 className="w-full text-balance text-3xl font-semibold text-foreground md:text-2xl lg:text-3xl">
              I strive to create beatiful and useful things
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2">
            <div className="flex flex-col justify-between pt-6 md:py-6">
              <p className="text-balance text-lg text-muted-foreground md:max-w-sm lg:max-w-lg">
                Ola! My name is <span className="font-semibold">Salman</span>, a very funny-looking
                visual design enthusiast. I do web design, web development,
                product management, project manager, infra, and also a speaker.
                Feel free to surf around 👋
              </p>

              <Link
                href="https://linkedin.com/in/muhammadsalmoon"
                target="_blank"
                className="ml-auto mt-8 font-semibold uppercase text-foreground md:ml-0"
              >
                Visit my LinkedIn
              </Link>
            </div>

            <div className="col-span-1 ml-auto flex w-full flex-col justify-end md:col-start-2 lg:max-w-2xl lg:px-4">
              {Experience.map((exp, index) => (
                <div
                  key={index}
                  className={`grid w-full grid-cols-2 items-center justify-between gap-x-4 py-4 ${
                    index === Experience.length - 1 ? "" : "border-b"
                  }`}
                >
                  <h2 className="text-sm font-semibold uppercase text-foreground md:text-base lg:text-lg">
                    {exp.title}
                  </h2>
                  <div className="flex-col text-right">
                    <p className="mb-1 text-xs font-medium uppercase text-foreground md:text-sm">
                      {exp.company}
                    </p>
                    <p className="text-xs uppercase text-muted-foreground md:text-sm">
                      {exp.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
