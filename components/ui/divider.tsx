const DividerVertical = ({ className }: { className?: string }) => {
  return <div className={`h-full w-[1px] bg-border ${className}`} />;
};

const DividerHorizontal = ({ className }: { className?: string }) => {
  return <div className={`h-[1px] w-full bg-border ${className}`} />;
};

export { DividerVertical, DividerHorizontal };
