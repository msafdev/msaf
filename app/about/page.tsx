import { MoveRight } from "lucide-react";
import Link from "next/link";

// Assets
import FN from "@/public/images/logos/fndigitalcode.png";
import Kemnaker from "@/public/images/logos/kemnaker.png";
import Bangkit from "@/public/images/logos/bangkit.png";
import Undip from "@/public/images/logos/undip.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="flex h-full w-full grow flex-col">
      <div className="pad-x flex w-full flex-col items-start gap-x-8 gap-y-6 py-4 md:flex-row md:py-8 lg:py-12">
        <h1 className="w-full text-balance text-2xl font-semibold leading-tight xs:text-3xl sm:text-left md:w-1/2 lg:text-4xl">
          I love to create something simple and clean
        </h1>
        <div className="flex w-full flex-col gap-y-4 text-xs text-muted-foreground md:w-1/2 md:text-sm">
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
        <div className="pad-x flex h-auto w-full flex-col justify-center gap-y-4 border-b py-4 md:w-fit md:border-b-0 md:border-r md:pt-8 lg:py-12">
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
      </div>
    </section>
  );
};
export default About;
