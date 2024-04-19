import { FC } from "react";

interface NoteProps {
  variant?: "primary" | "secondary" | "destructive";
  children: React.ReactNode;
  className?: string;
}

const Note: FC<NoteProps> = ({
  variant = "secondary",
  children,
  className = "",
}) => {
  const variantStyle = {
    primary: "border-primary",
    secondary: "border-secondary",
    destructive: "border-tertiary",
  };

  return (
    <div
      className={`flex flex-col justify-center gap-x-2 border-l-2 py-1 pl-4 pr-3 ${variantStyle[variant]} ${className}`}
    >
      {children}
    </div>
  );
};

export default Note;
