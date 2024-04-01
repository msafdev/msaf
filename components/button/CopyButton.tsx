"use client";

import { FC } from "react";

// Icons
import { Copy } from "lucide-react";

// Components
import { useToast } from "@/components/ui/use-toast";

interface CopyButtonProps {
  codeString: string;
  className?: string;
}

const CopyButton: FC<CopyButtonProps> = ({ codeString, className }) => {
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
      className={`group cursor-pointer bg-primary p-2 text-primary-foreground dark:bg-accent dark:text-accent-foreground ${className}`}
    >
      <Copy className="anim h-4 w-4" />
    </button>
  );
};
export default CopyButton;
