import Link from "next/link";

import {
  FileText,
  Link2,
  Heart,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";

const SubLinks = () => {
  return (
    <div className="anim mt-4 grid h-fit w-full grid-cols-2 grid-rows-3 items-center justify-between border-y md:mt-8 md:flex md:grid-rows-1 lg:mt-12">
      <Link
        href={"https://github.com/msafdev?tab=repositories&q=&type=template"}
        target="_blank"
        className="md:pad-l anim group col-span-1 flex h-fit w-full items-center justify-center gap-x-2 py-4 font-medium transition-all duration-200 ease-in-out hover:w-full hover:bg-muted md:w-1/2"
      >
        <Sparkles
          size={14}
          className="anim delay-100 text-muted-foreground fill-transparent group-hover:text-yellow-400 group-hover:fill-yellow-400"
        />
        <p className="text-center text-xs font-medium text-muted-foreground anim group-hover:text-foreground">
          Starter
        </p>
      </Link>
      <Link
        href={
          "https://drive.google.com/file/d/1mCvY4uWDmKjsaQEBkDzQZC4bc-AkZHPK/view?usp=drive_link"
        }
        target="_blank"
        className="anim group col-span-1 flex h-fit w-full items-center justify-center gap-x-2 border-l py-4 font-medium transition-all duration-200 ease-in-out hover:w-full hover:bg-muted md:w-1/2"
      >
        <FileText
          size={14}
          className="anim delay-100 text-muted-foreground fill-transparent group-hover:text-rose-500"
        />
        <p className="text-center text-xs font-medium text-muted-foreground anim group-hover:text-foreground">
          Resume
        </p>
      </Link>
      <Link
        href={"/guestbook"}
        className="anim group col-span-1 flex h-fit w-full items-center justify-center gap-x-2 border-l-0 border-t py-4 font-medium transition-all duration-200 ease-in-out hover:w-full hover:bg-muted md:w-1/2 md:border-l md:border-t-0"
      >
        <Heart
          size={14}
          className="anim delay-100 text-muted-foreground fill-transparent group-hover:text-pink-500 group-hover:fill-pink-500"
        />
        <p className="text-center text-xs font-medium text-muted-foreground anim group-hover:text-foreground">
          Guestbook
        </p>
      </Link>
      <Link
        href={"https://github.com/msafdev/"}
        target="_blank"
        className="anim group col-span-1 flex h-fit w-full items-center justify-center gap-x-2 border-l border-t py-4 font-medium transition-all duration-200 ease-in-out hover:w-full hover:bg-muted md:w-1/2 md:border-t-0"
      >
        <MonitorSmartphone
          size={14}
          className="anim delay-100 text-muted-foreground fill-transparent group-hover:text-foreground"
        />
        <p className="text-center text-xs font-medium text-muted-foreground anim group-hover:text-foreground">Setup</p>
      </Link>
      <Link
        href={"https://link.msaf.tech"}
        className="md:pad-r anim group col-span-2 flex h-fit w-full items-center justify-center gap-x-2 border-t py-4 font-medium transition-all duration-200 ease-in-out hover:w-full hover:bg-muted md:w-1/2 md:border-l md:border-t-0"
      >
        <Link2
          size={14}
          className="anim delay-100 text-muted-foreground fill-transparent group-hover:text-sky-500"
        />
        <p className="text-center text-xs font-medium text-muted-foreground anim group-hover:text-foreground">Link</p>
      </Link>
    </div>
  );
};
export default SubLinks;
