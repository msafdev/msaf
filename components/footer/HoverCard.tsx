import Link from "next/link";
import { FC, ReactNode } from "react";

interface ComponentsProps {
  children: ReactNode;
}

interface HoverCardProps {
  children: ReactNode;
  className?: string;
}

interface HoverItemProps {
  children: ReactNode;
  header?: string;
}

interface HoverItemsProps {
  children: ReactNode;
}

interface HoverLinksProps {
  href: string;
  children: ReactNode;
  target?: string;
}

const HoverTitle: FC<ComponentsProps> = ({ children }) => {
  return (
    <p className="anim text-center text-sm font-semibold uppercase text-foreground opacity-0 group-hover:opacity-0 md:opacity-100">
      {children}
    </p>
  );
};

const HoverItem: FC<HoverItemProps> = ({ children, header }) => {
  return (
    <div className="anim absolute flex h-fit w-full flex-wrap items-center justify-center gap-x-8 gap-y-4 bg-transparent px-6 delay-100 md:h-full md:translate-y-full md:bg-popover md:group-hover:translate-y-0">
      {header && (
        <p className="text-sm font-semibold text-foreground">{header}</p>
      )}
      {children}
    </div>
  );
};

const HoverItems: FC<HoverItemsProps> = ({ children }) => {
  return <>{children}</>;
};

const HoverLinks: FC<HoverLinksProps> = ({ children, href, target }) => {
  return (
    <Link href={href} target={target}>
      <code className="anim text-xs font-medium text-muted-foreground hover:text-foreground">
        {children}
      </code>
    </Link>
  );
};

const HoverCard: FC<HoverCardProps> = ({ children, className }) => {
  return (
    <div
      className={`group relative flex items-center justify-center overflow-hidden px-4 py-6 md:py-8 ${className}`}
    >
      {children}
    </div>
  );
};

export { HoverTitle, HoverItem, HoverCard, HoverItems, HoverLinks };
