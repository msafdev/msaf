"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function addFeedback(formData: FormData) {
  let guestbook = formData.get("guestbook") as string;

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const { data: user } = await supabase.auth.getUser();
  const user_id = user.user?.id;

  if (!user) {
    console.error("User is not authenticated!");
    return;
  }

  const { data, error } = await supabase.from("guestbook").insert([
    {
      guestbook,
      user_id: user_id,
    },
  ]);

  if (error) {
    console.error("Error inserting data", error);
    return;
  }

  revalidatePath("/");

  formData.delete("guestbook");

  return data;
}
