"use client";

import { FC } from "react";

// Icons
import { CheckCheck, Copy } from "lucide-react";

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
      description: "Don't forget to star the repo.",
      icon: <CheckCheck className="h-6 w-6 text-green-500" />,
    });
  };

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy code snippet"
      className={`group cursor-pointer rounded-md bg-popover p-2 text-popover-foreground ${className}`}
    >
      <Copy className="anim h-4 w-4" />
    </button>
  );
};
export default CopyButton;
