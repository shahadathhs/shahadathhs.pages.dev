'use client';

import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href="/"
      className="group relative flex items-center gap-2 font-bold text-xl tracking-tighter transition-all duration-500"
    >
      <div className="relative flex h-8 w-8 items-center justify-center">
        <div className="absolute inset-0 bg-accent/20 rounded-full blur-sm group-hover:blur-md transition-all duration-500" />
        <div className="relative z-10 text-accent font-black">S</div>
      </div>
      <span className="hidden sm:inline font-bold tracking-tighter group-hover:tracking-normal transition-all duration-500">
        shahadath
        <span className="text-accent underline decoration-2 underline-offset-4">
          hs
        </span>
      </span>
    </Link>
  );
}
