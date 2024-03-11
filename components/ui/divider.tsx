const DividerVertical = ({ className }: { className?: string }) => {
  return <div className={`h-full w-[1px] bg-foreground/10 ${className}`} />;
};

const DividerHorizontal = ({ className }: { className?: string }) => {
  return <div className={`h-[1px] w-full bg-foreground/10 ${className}`} />;
};

export { DividerVertical, DividerHorizontal };
