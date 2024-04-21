// Components
import GuestbookCard from "@/components/macro/guestbook-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Utils
import { addFeedback } from "@/utils/action/add";
import { githubSignIn, signOut } from "@/utils/function/fn";
import { createClient } from "@/utils/supabase/server";

// Icons
import { ArrowRightIcon, GitHubLogoIcon, Pencil1Icon } from "@radix-ui/react-icons";

const Feedback = async () => {
  const supabase = createClient();
  const { data: user, error } = await supabase.auth.getUser();

  const { data: guestbook } = await supabase.from("guestbook").select("*");

  return (
    <section
      id="guestbook"
      className="flex h-full w-full grow flex-col gap-y-4 md:gap-y-8 lg:gap-y-12"
    >
      <div className="flex h-full w-full grow flex-col md:flex-row">
        <div className="pad-x relative flex h-auto w-full flex-col">
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
                  <form
                    className="mt-2 flex w-full flex-col"
                    action={addFeedback}
                  >
                    <p className="mb-2 text-balance text-sm text-muted-foreground">
                      Signed in as{" "}
                      <span className="text-foreground">{user.user.email}</span>
                    </p>
                    <div className="flex items-center gap-x-2">
                      <Input
                        placeholder=""
                        name="content"
                        id="content"
                        type="text"
                        maxLength={100}
                      />
                      <Button
                        type="submit"
                        className="aspect-square px-2 py-2"
                        variant={"secondary"}
                      >
                        <ArrowRightIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                  <form action={signOut} className="mt-1">
                    <Button
                      type="submit"
                      className="flex h-fit items-center justify-start gap-2 px-0 py-0 text-sm hover:bg-transparent font-medium"
                      variant={"ghost"}
                    >
                      Sign out
                    </Button>
                  </form>
                </>
              ) : (
                <form action={githubSignIn} className="flex flex-col gap-2">
                  <Button
                    type="submit"
                    className="flex items-center gap-2"
                    variant={"outline"}
                  >
                    <GitHubLogoIcon className="h-4 w-4" /> Sign in with GitHub
                  </Button>
                </form>
              )}

              <div className="anim-slow absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full border bg-popover text-popover-foreground group-hover:border-primary">
                <Pencil1Icon className="h-4 w-4" />
              </div>
            </div>
            {/* Content */}
            {guestbook &&
              guestbook.map((item, index) => {
                return (
                  <GuestbookCard
                    content={item.content}
                    user_id={item.user_id as string}
                    key={index}
                    createdAt={item.created_at as string}
                    index={index}
                  />
                );
              })}
            <div className="absolute top-0 h-full w-[1px] grow bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Feedback;
