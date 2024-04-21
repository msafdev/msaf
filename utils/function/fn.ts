"use client";

import { createClient } from "../supabase/client";

const githubSignIn = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${location.origin}/auth/callback`,
    },
  });
  if (error) {
    console.error(error);
    return;
  }
};

const signOut = async () => {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error(error);
    return;
  }

  return window.location.reload();
};

export { githubSignIn, signOut };
