"use client";

import React from "react";

import Link from "next/link";

interface NavLinkProps {
  href?: string;
  name?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href = "/", name = "Link" }) => {
  const letters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ,.!?@#$%^&*()_+-=<>{}[]|/\\";
  let interval: NodeJS.Timeout | null = null;

  const handleMouseOver = (
    event: React.MouseEvent<HTMLHeadingElement, MouseEvent>
  ) => {
    let iteration = 0;

    if (interval) clearInterval(interval);

    interval = setInterval(() => {
      if (!event.target) return;
      const headingElement = event.target as HTMLHeadingElement;
      headingElement.innerText = (headingElement.dataset.value || "")
        .split("")
        .map((letter: string, index: number) => {
          if (index < iteration) {
            return (headingElement.dataset.value || "")[index];
          }

          return letters[Math.floor(Math.random() * 52)];
        })
        .join("");

      if (iteration >= (headingElement.dataset.value || "").length) {
        if (interval) clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  return (
    <Link href={href}>
      <p
        data-value={name}
        onMouseOver={handleMouseOver}
        className="text-lg font-bold uppercase font-mono"
      >
        {name}
      </p>
    </Link>
  );
};
export default NavLink;
