"use client";

import { ReactNode } from "react";

type BaseButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  className?: string;
};

const baseClasses =
  "inline-flex items-center justify-center px-4 py-3 border border-white/30 text-sm tracking-wide hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer";

export default function BaseButton({
  children,
  onClick,
  href,
  target,
  className,
}: BaseButtonProps) {
  const classes = className ? `${baseClasses} ${className}` : baseClasses;

  if (href) {
    const rel = target === "_blank" ? "noopener noreferrer" : undefined;
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
