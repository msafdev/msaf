const ButtonOne = () => {
  return (
    <>
      <button className="flex items-center rounded-sm bg-primary px-4 py-1 text-primary-foreground hover:bg-primary/90">
        Button
      </button>
      <button className="flex items-center rounded-sm bg-secondary px-4 py-1 text-secondary-foreground hover:bg-secondary/90">
        Button
      </button>
      <button className="flex items-center rounded-sm bg-destructive px-4 py-1 text-destructive-foreground hover:bg-destructive/90">
        Button
      </button>
      <button className="flex items-center rounded-sm border bg-background px-4 py-1 text-foreground hover:bg-secondary">
        Button
      </button>
    </>
  );
};

export default ButtonOne;
