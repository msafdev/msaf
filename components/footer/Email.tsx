"use client";

import { useState } from "react";

// Components
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useToast } from "../ui/use-toast";

// Icons
import { AtSign, LoaderCircle } from "lucide-react";

// Lib
import { sendEmail } from "@/lib/email";

const Email = () => {
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const submitEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await sendEmail();
    if (response?.status === 200) {
      toast({
        title: "Email sent!",
        description: "I will get back to you as soon as possible",
      });
      setLoading(false);
    } else {
      toast({
        variant: "destructive",
        title: "Failed to send email",
        description: "Please try again later",
      });
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={submitEmail}
      id="emailForm"
      className="flex w-full flex-col gap-y-3"
    >
      <div className="flex w-full items-center gap-x-2 md:max-w-xs">
        <div className="flex aspect-square h-full items-center justify-center rounded-md bg-muted">
          <AtSign className="h-4 w-4 text-muted-foreground" />
        </div>
        <Input
          required
          id="email"
          type="email"
          name="email"
          className="anim border"
          placeholder="Your email"
        />
      </div>
      <div className="flex w-full flex-col gap-y-3 md:max-w-xs">
        <Input
          required
          id="title"
          name="title"
          className="anim border"
          placeholder="Title"
        />
        <Textarea
          required
          id="message"
          name="message"
          className="anim min-h-24 resize-none border"
          placeholder="Your message"
        />
      </div>
      <div className="flex md:max-w-xs">
        <Button
          className={`anim h-9 w-full md:ml-auto md:w-1/2 ${
            loading ? "bg-primary/80" : "bg-primary"
          }`}
          disabled={loading}
          type="submit"
          form="emailForm"
        >
          {loading ? <LoaderCircle className="h-5 w-5 animate-spin" /> : "Send"}
        </Button>
      </div>
    </form>
  );
};
export default Email;
