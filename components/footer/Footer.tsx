import { ChevronRightIcon } from "@radix-ui/react-icons";
import {
  TbBrandBehance,
  TbBrandDribbble,
  TbBrandFigma,
  TbBrandFiverr,
  TbBrandInstagram,
  TbBrandTwitter,
} from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="text-foreground bg-background min-h-screen w-full flex flex-col">
      <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-10 xl:grid-cols-12 border-t">
        {/* Footer */}
        <div className="px-4 py-8 lg:py-4 col-span-3 sm:col-span-6 lg:col-span-4 xl:col-span-6 flex justify-center items-center md:border-r border-b lg:border-b-0">
          <p className="text-sm font-semibold uppercase text-foreground text-center">
            Follow me
          </p>
          <div className="w-full h-[2px] rounded-full max-w-12 xs:max-w-14 sm:max-w-16 md:max-w-32 bg-foreground mx-4 relative flex items-center">
            <ChevronRightIcon className="absolute right-0 w-6 h-auto translate-x-2 text-foreground" />
          </div>
          <p className="text-sm font-semibold uppercase text-foreground text-center">
            Here
          </p>
        </div>

        {/* Social Icons */}
        <div className="py-6 sm:py-8 anim col-span-1 w-full h-auto sm:aspect-video flex items-center justify-center hover:bg-primary cursor-pointer group">
          <TbBrandTwitter className="w-6 h-6 text-foreground group-hover:text-primary-foreground anim group-hover:scale-125 group-hover:rotate-12" />
        </div>
        <div className="py-6 sm:py-8 anim col-span-1 w-full h-auto sm:aspect-video flex items-center justify-center hover:bg-primary cursor-pointer group">
          <TbBrandInstagram className="w-6 h-6 text-foreground group-hover:text-primary-foreground anim group-hover:scale-125 group-hover:-rotate-12" />
        </div>
        <div className="py-6 sm:py-8 anim col-span-1 w-full h-auto sm:aspect-video flex items-center justify-center hover:bg-primary cursor-pointer group">
          <TbBrandDribbble className="w-6 h-6 text-foreground group-hover:text-primary-foreground anim group-hover:scale-125 group-hover:-rotate-45" />
        </div>
        <div className="py-6 sm:py-8 anim col-span-1 w-full h-auto sm:aspect-video flex items-center justify-center hover:bg-primary cursor-pointer group">
          <TbBrandFigma className="w-6 h-6 text-foreground group-hover:text-primary-foreground anim group-hover:scale-125 group-hover:rotate-6" />
        </div>
        <div className="py-6 sm:py-8 anim col-span-1 w-full h-auto sm:aspect-video flex items-center justify-center hover:bg-primary cursor-pointer group">
          <TbBrandBehance className="w-6 h-6 text-foreground group-hover:text-primary-foreground anim group-hover:scale-125 group-hover:rotate-6" />
        </div>
        <div className="py-6 sm:py-8 anim col-span-1 w-full h-auto sm:aspect-video flex items-center justify-center hover:bg-primary cursor-pointer group">
          <TbBrandFiverr className="w-6 h-6 text-foreground group-hover:text-primary-foreground anim group-hover:scale-125 group-hover:-rotate-12" />
        </div>
      </div>

      <div className="flex justify-center items-center py-8 border-y px-4">
        <p className="text-xs md:text-sm text-muted-foreground text-left">
          &copy; 2024 <span className="font-semibold">MSAF</span>, all rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
