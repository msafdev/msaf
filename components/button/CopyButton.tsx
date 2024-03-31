"use client";

import { FC } from "react";

// Icons
import { Copy } from "lucide-react";

// Components
import { useToast } from "@/components/ui/use-toast";

interface CopyButtonProps {
  codeString: string;
}

const CopyButton: FC<CopyButtonProps> = ({ codeString }) => {
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    toast({
      title: "Copied to clipboard!",
    });
  };

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy code snippet"
      className="group absolute right-1 top-1 cursor-pointer bg-accent p-2 text-foreground/80"
    >
      <Copy className="anim h-4 w-4" />
    </button>
  );
};
export default CopyButton;
