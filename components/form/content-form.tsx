"use client";

import { useState } from "react";

import { User } from "@supabase/supabase-js";
import { addContent } from "@/utils/action/add";

import { ArrowRightIcon, SymbolIcon } from "@radix-ui/react-icons";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "../ui/use-toast";

const ContentForm = ({ user }: { user: User }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const response = await addContent(formData);

    // Reset
    const formElement = document.getElementById(
      "content-form",
    ) as HTMLFormElement;
    if (formElement) {
      formElement.reset();
    }

    // Response handling
    if (response?.error) {
      console.error(response.error);
      toast({
        title: "❌ Failed to send content",
        description: response.error,
      });
    } else if (response.data) {
      toast({
        title: "Content sent!",
        description: response.data,
      });
    }

    setLoading(false);
  };

  return (
    <form
      className="mt-2 flex w-full flex-col"
      onSubmit={handleSubmit}
      id="content-form"
    >
      <p className="mb-2 text-balance text-sm text-muted-foreground">
        Signed in as <span className="text-foreground">{user.email}</span>
      </p>
      <div className="flex items-center gap-x-2">
        <Input placeholder="" name="content" id="content" type="text" />
        <Button
          disabled={loading}
          type="submit"
          className={`anim aspect-square border px-2 py-2 ${
            loading ? "bg-secondary/80" : "bg-secondary"
          }`}
          variant={"secondary"}
        >
          {loading ? (
            <SymbolIcon className="h-4 w-4 animate-spin" />
          ) : (
            <ArrowRightIcon className="h-4 w-4" />
          )}
        </Button>
      </div>
    </form>
  );
};
export default ContentForm;
