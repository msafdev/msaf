import Link from "next/link";
import Image from "next/image";

// Assets
import FN from "@/public/images/logos/fndigitalcode.png";
import Kemnaker from "@/public/images/logos/kemnaker.png";
import Bangkit from "@/public/images/logos/bangkit.png";
import Undip from "@/public/images/logos/undip.png";
import Avatar from "@/public/images/avatar-cloud.png";

// Components
import { Button } from "@/components/ui/button";

// Constants
import { Inspiration } from "@/lib/constants";

const About = () => {
  return (
    <section id="about" className="flex h-full w-full grow flex-col">
      <div className="pad-x flex w-full flex-col items-start gap-x-8 gap-y-6 py-4 md:flex-row md:py-8 lg:py-12">
        <h1 className="w-full text-balance text-3xl font-medium leading-tight sm:text-left md:w-1/2 lg:text-4xl">
          I love to create something simple and clean
        </h1>
        <div className="flex w-full flex-col gap-y-4 text-muted-foreground md:w-1/2">
          <p>
            <span className="font-medium text-foreground">MSAF</span> is a{" "}
            <span className="font-medium text-foreground">
              User Interface Designer
            </span>{" "}
            and a{" "}
            <span className="font-medium text-foreground">
              Full-stuck Engineer
            </span>
            , currently living in Jakarta (
            <span className="italic">typical</span>). I love simplistic yet
            functional products. Call me a minimalist, I won't mind.
          </p>
          <p>
            I'd spend hours every day re-exploring design or technical options,
            and refactoring them. If you ever want to see how it goes, check out
            my{" "}
            <Link
              href={"/blog"}
              className="font-medium text-foreground underline"
            >
              blog
            </Link>{" "}
            section.
          </p>
        </div>
      </div>
      <div className="h-[1px] w-full bg-border" />
      <div className="flex h-full w-full grow flex-col md:flex-row">
        <div className="pad-x flex h-auto w-full flex-col justify-center gap-y-4 border-b py-4 md:w-fit md:border-b-0 md:border-r md:py-8 lg:py-12">
          <h2 className="mb-2 text-balance text-left text-2xl font-semibold lg:mb-4">
            Experience
          </h2>
          {/* Work Card */}
          <div className="flex items-center gap-x-4">
            <div className="anim flex h-14 w-14 items-center justify-center rounded-md border border-border bg-popover p-4">
              <Image src={FN} alt="FN Digital Code" className="h-auto w-full" />
            </div>
            <div className="flex w-fit flex-col">
              <h3 className="text-balance text-base font-medium lg:text-lg">
                FN Digital Code
              </h3>
              <p className="text-xs text-muted-foreground md:text-sm">
                Frontend Engineer
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="anim flex h-14 w-14 items-center justify-center rounded-md border border-border bg-popover p-4">
              <Image src={Bangkit} alt="Bangkit" className="h-auto w-full" />
            </div>
            <div className="flex w-fit flex-col">
              <h3 className="text-balance text-base font-medium lg:text-lg">
                Bangkit Dicoding
              </h3>
              <p className="text-xs text-muted-foreground md:text-sm">
                Cloud Computing
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="anim flex h-14 w-14 items-center justify-center rounded-md border border-border bg-popover p-4">
              <Image src={Kemnaker} alt="Kemnaker" className="h-auto w-full" />
            </div>
            <div className="flex w-fit flex-col">
              <h3 className="text-balance text-base font-medium lg:text-lg">
                Ministry of Manpower
              </h3>
              <p className="text-xs text-muted-foreground md:text-sm">
                Frontend Engineer
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="anim flex h-14 w-14 items-center justify-center rounded-md border border-border bg-popover p-4">
              <Image src={Undip} alt="Undip" className="h-auto w-full" />
            </div>
            <div className="flex w-fit flex-col">
              <h3 className="text-balance text-base font-medium lg:text-lg">
                Diponegoro University
              </h3>
              <p className="text-xs text-muted-foreground md:text-sm">
                Lecturer Assistant
              </p>
            </div>
          </div>
          <Button
            asChild
            className="mt-2 bg-popover lg:mt-4"
            variant={"outline"}
          >
            <Link
              href={"https://linkedin.com/in/muhammadsalmoon"}
              target={"_blank"}
            >
              See My LinkedIn
            </Link>
          </Button>
        </div>
        <div className="pad-x flex h-auto w-auto grow flex-col justify-center gap-y-4 self-stretch pb-5 pt-4 md:items-center md:py-8 lg:py-12">
          <h2 className="w-full text-balance text-left text-2xl font-semibold md:max-w-lg">
            Inspiration
          </h2>
          <div className="flex w-full flex-col gap-y-4 md:max-w-lg">
            <p className="text-sm text-muted-foreground">
              Inspirations can come from anywhere. These people shaped my
              journey and I am grateful for that, not only programming-wise but
              also life-wise.
            </p>
            <div className="flex w-full flex-wrap items-center gap-2">
              {Inspiration.map((inspo, index) => (
                <Link
                  key={index}
                  href={`https://twitter.com/${inspo.twitter}`}
                  target="_blank"
                  className="rounded-sm border bg-popover px-2 py-0.5 text-popover-foreground"
                >
                  <code className="text-xs font-medium md:text-sm">
                    {inspo.twitter}
                  </code>
                </Link>
              ))}
              <div className="rounded-sm bg-transparent px-1 py-0.5 text-popover-foreground">
                <code className="text-xs font-medium md:text-sm">...</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
