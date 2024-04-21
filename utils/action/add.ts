"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function addContent(formData: FormData) {
  let content = formData.get("content") as string;

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const { data: user } = await supabase.auth.getUser();
  const user_id = user.user?.id;

  if (!user) {
    return { error: "User not found" };
  }

  if (content.length < 3) {
    return { error: "Content must be at least 3 characters" };
  } else if (content.length > 100) {
    return { error: "Content must be less than 100 characters" };
  }

  const { error } = await supabase.from("guestbook").insert([
    {
      content: content,
      user_id: user_id,
    },
  ]);

  if (error) {
    return { error: "Error inserting data" };
  } else {
    revalidatePath("/guestbook");
    return { data: "Data inserted successfully" };
  }
}
