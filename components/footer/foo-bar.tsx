import { ChevronRight } from "lucide-react";

import {
  TbBrandGithub,
  TbBrandDribbble,
  TbBrandFigma,
  TbBrandFiverr,
  TbBrandInstagram,
  TbBrandTwitter,
} from "react-icons/tb";

import {
  HoverCard,
  HoverItem,
  HoverItems,
  HoverLinks,
  HoverTitle,
} from "./hover-card";

import Email from "./email-form";
import { Command } from "@/components/macro/command-dialog";

const Footer = () => {
  return (
    <footer className="z-40 flex h-fit min-h-[100svh] w-full flex-col bg-background text-foreground">
      <div className="grid grid-cols-3 border-t sm:grid-cols-6 lg:grid-cols-10 xl:grid-cols-12">
        {/* Footer */}
        <div className="col-span-3 flex items-center justify-center border-b px-4 py-8 sm:col-span-6 md:border-r lg:col-span-4 lg:border-b-0 lg:py-4 xl:col-span-6">
          <p className="text-center text-sm font-semibold uppercase text-foreground">
            Follow me
          </p>
          <div className="relative mx-4 flex h-[2px] w-full max-w-12 items-center rounded-full bg-foreground xs:max-w-14 sm:max-w-16 md:max-w-32">
            <ChevronRight className="absolute right-0 h-auto w-6 translate-x-2 text-foreground" />
          </div>
          <p className="text-center text-sm font-semibold uppercase text-foreground">
            Here
          </p>
        </div>

        {/* Social Icons */}
        <div className="anim group col-span-1 flex h-auto w-full cursor-pointer items-center justify-center py-6 hover:bg-primary sm:aspect-video sm:py-8">
          <TbBrandTwitter className="anim h-6 w-6 text-foreground group-hover:rotate-12 group-hover:scale-125 group-hover:text-primary-foreground" />
        </div>
        <div className="anim group col-span-1 flex h-auto w-full cursor-pointer items-center justify-center py-6 hover:bg-primary sm:aspect-video sm:py-8">
          <TbBrandInstagram className="anim h-6 w-6 text-foreground group-hover:-rotate-12 group-hover:scale-125 group-hover:text-primary-foreground" />
        </div>
        <div className="anim group col-span-1 flex h-auto w-full cursor-pointer items-center justify-center py-6 hover:bg-primary sm:aspect-video sm:py-8">
          <TbBrandDribbble className="anim h-6 w-6 text-foreground group-hover:-rotate-45 group-hover:scale-125 group-hover:text-primary-foreground" />
        </div>
        <div className="anim group col-span-1 flex h-auto w-full cursor-pointer items-center justify-center py-6 hover:bg-primary sm:aspect-video sm:py-8">
          <TbBrandFigma className="anim h-6 w-6 text-foreground group-hover:rotate-6 group-hover:scale-125 group-hover:text-primary-foreground" />
        </div>
        <div className="anim group col-span-1 flex h-auto w-full cursor-pointer items-center justify-center py-6 hover:bg-primary sm:aspect-video sm:py-8">
          <TbBrandGithub className="anim h-6 w-6 text-foreground group-hover:rotate-6 group-hover:scale-125 group-hover:text-primary-foreground" />
        </div>
        <div className="anim group col-span-1 flex h-auto w-full cursor-pointer items-center justify-center py-6 hover:bg-primary sm:aspect-video sm:py-8">
          <TbBrandFiverr className="anim h-6 w-6 text-foreground group-hover:-rotate-12 group-hover:scale-125 group-hover:text-primary-foreground" />
        </div>
      </div>

      {/* Footer */}
      <div className="grid h-fit grow grid-cols-1 grid-rows-2 border-t md:grid-cols-2">
        <div className="grid h-full grid-cols-1 grid-rows-3 border-t md:row-span-2 md:border-r md:border-t-0">
          <HoverCard className="border-b">
            <HoverTitle>Nav</HoverTitle>
            <HoverItem header="Nav">
              <HoverLinks href="/about">About</HoverLinks>
              <HoverLinks href="/blog">Blog</HoverLinks>
              <HoverLinks href="/playground">Playground</HoverLinks>
              <HoverLinks href="/template">Template</HoverLinks>
            </HoverItem>
          </HoverCard>
          <HoverCard className="border-b">
            <HoverTitle>Soc</HoverTitle>
            <HoverItem header="Soc">
              <HoverLinks href="https://twitter.com/msafdev" target="_blank">
                Twitter
              </HoverLinks>
              <HoverLinks
                href="https://linkedin.com/in/muhammadsalmoon"
                target="_blank"
              >
                LinkedIn
              </HoverLinks>
              <HoverLinks
                href="https://instagram.com/msalman_af"
                target="_blank"
              >
                Instagram
              </HoverLinks>
            </HoverItem>
          </HoverCard>
          <HoverCard>
            <HoverTitle>Kbd</HoverTitle>
            <HoverItem header="Kbd">
              <HoverItems>
                <Command />
              </HoverItems>
            </HoverItem>
          </HoverCard>
        </div>

        <div className="row-start-1 mx-auto flex h-full w-full flex-col justify-center px-4 py-6 md:row-span-2 md:px-12 lg:px-24">
          <p className="anim w-full text-left text-sm font-medium uppercase text-muted-foreground">
            Contact me
          </p>
          <p className="anim mb-8 mt-4 w-full max-w-sm text-balance text-left text-base font-medium text-foreground md:max-w-xs">
            Hit me up and pitch me your <span className="italic">craziest</span>{" "}
            ideas. Let's collaborate and make it happens.
          </p>
          <Email />
        </div>
      </div>

      <div className="flex items-center justify-center border-y px-4 py-8">
        <code className="text-center text-xs text-muted-foreground md:text-sm">
          Crafted by the [2024] version of msaf
        </code>
      </div>
    </footer>
  );
};
export default Footer;
