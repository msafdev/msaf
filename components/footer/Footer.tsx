import { ChevronRightIcon } from "@radix-ui/react-icons";
import {
  TbBrandGithub,
  TbBrandDribbble,
  TbBrandFigma,
  TbBrandFiverr,
  TbBrandInstagram,
  TbBrandTwitter,
} from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="z-40 flex min-h-screen w-full flex-col bg-background text-foreground">
      <div className="grid grid-cols-3 border-t sm:grid-cols-6 lg:grid-cols-10 xl:grid-cols-12">
        {/* Footer */}
        <div className="col-span-3 flex items-center justify-center border-b px-4 py-8 sm:col-span-6 md:border-r lg:col-span-4 lg:border-b-0 lg:py-4 xl:col-span-6">
          <p className="text-center text-sm font-semibold uppercase text-foreground">
            Follow me
          </p>
          <div className="relative mx-4 flex h-[2px] w-full max-w-12 items-center rounded-full bg-foreground xs:max-w-14 sm:max-w-16 md:max-w-32">
            <ChevronRightIcon className="absolute right-0 h-auto w-6 translate-x-2 text-foreground" />
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

      <div className="flex items-center justify-center border-y px-4 py-8">
        <p className="text-left text-xs text-muted-foreground md:text-sm">
          &copy; 2024 <span className="font-semibold">MSAF</span>, all rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
