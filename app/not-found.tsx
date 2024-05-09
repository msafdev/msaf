import Image from "next/image";

// Assets
import Sad from "@/public/images/avatar-sad.png";

export default function NotFound() {
  return (
    <main className="w-full flex flex-col items-center justify-center pad-x py-8 h-full grow">
      <div className="relative w-fit h-fit flex items-center justify-center">
        <div className="w-32 h-32 z-10 dark:bg-blue-700 anim bg-orange-400 rounded-full blur absolute" />
        <Image
          src={Sad}
          alt="Sad face"
          className="w-40 h-40 z-20 translate-x-1 translate-y-4"
        />
      </div>
      <h2 className="text-xl md:text-2xl text-center lg:text-3xl font-semibold">
        Oops! Page not found
      </h2>
      <p className="text-sm text-balance mt-1 sm:text-base md:text-lg text-center text-muted-foreground leading-tight">
          The page you are looking for does not exist or has been moved.
      </p>
    </main>
  );
}
