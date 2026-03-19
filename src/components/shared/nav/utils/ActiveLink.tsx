import { motion } from 'motion/react';
import Link from 'next/link';
import React from 'react';

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  extraClasses?: string;
}

export function ActiveLink({
  href,
  children,
  isActive = false,
  extraClasses = '',
}: ActiveLinkProps) {
  return (
    <Link
      href={href}
      className={`relative px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-500 ${
        isActive
          ? 'text-foreground'
          : 'text-muted-foreground hover:text-foreground'
      } ${extraClasses}`}
    >
      <span className="relative z-10">{children}</span>
      {isActive && (
        <motion.div
          layoutId="nav-pill"
          className="absolute inset-0 bg-foreground/5 rounded-full"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}
