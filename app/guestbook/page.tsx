// Components
import ContentForm from "@/components/form/content-form";
import Guestbook from "@/components/macro/guestbook";
import GuestbookCard from "@/components/macro/guestbook";
import { GuestbookSkeleton } from "@/components/macro/skeleton";
import { Button } from "@/components/ui/button";

// Utils
import { githubSignIn, googleSignIn, signOut } from "@/utils/function/fn";
import { createClient } from "@/utils/supabase/server";

// Icons
import { GitHubLogoIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { Suspense } from "react";
import { FcGoogle } from "react-icons/fc";

const Page = async () => {
  const supabase = createClient();
  const { data: user, error } = await supabase.auth.getUser();

  return (
    <section
      id="guestbook"
      className="flex h-full w-full grow flex-col gap-y-4 md:gap-y-8 lg:gap-y-12"
    >
      <div className="flex h-full w-full grow flex-col md:flex-row">
        <div className="md:pad-x relative flex h-auto w-full flex-col px-6">
          <div className="relative flex h-auto w-full grow flex-col gap-6 py-4 md:gap-8 md:py-6 lg:py-12">
            {/* Login */}
            <div className="group relative z-10 flex h-fit w-fit flex-col pl-8">
              <h2 className="text-lg font-semibold md:text-xl">
                Sign my guestbook
              </h2>
              <p className="mb-4 mt-2 text-balance text-sm text-muted-foreground">
                Give me anything, feedback, suggestions, or just say hi!
              </p>
              {user && user.user ? (
                <>
                  <ContentForm user={user.user} />
                  <form action={signOut} className="mt-1">
                    <Button
                      type="submit"
                      className="flex h-fit items-center justify-start gap-2 px-0 py-0 text-sm font-medium hover:bg-transparent"
                      variant={"ghost"}
                    >
                      Sign out
                    </Button>
                  </form>
                </>
              ) : (
                <div className="flex flex-col gap-2">
                  <form action={githubSignIn} className="w-full">
                    <Button
                      type="submit"
                      className="flex w-full items-center gap-2"
                      variant={"outline"}
                    >
                      <GitHubLogoIcon className="h-4 w-4" /> Sign in with GitHub
                    </Button>
                  </form>
                  <form action={googleSignIn} className="w-full">
                    <Button
                      type="submit"
                      className="flex w-full items-center gap-2"
                      variant={"outline"}
                    >
                      <FcGoogle className="h-4 w-4" /> Sign in with Google
                    </Button>
                  </form>
                </div>
              )}

              <div className="anim-slow absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full border bg-popover text-popover-foreground group-hover:border-primary">
                <Pencil1Icon className="h-4 w-4" />
              </div>
            </div>
            <Suspense fallback={<GuestbookSkeleton />}>
              <Guestbook />
            </Suspense>
            <div className="absolute top-0 h-full w-[1px] grow bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Page;
