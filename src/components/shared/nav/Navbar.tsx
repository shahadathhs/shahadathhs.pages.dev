'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import Logo from '../logo/Logo';
import { LargeNavLinks } from './utils/LargeNavLinks';
import { MobileNavDropdown } from './utils/MobileNavDropdown';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 inset-x-0 z-[100] transition-all duration-700 ease-in-out pointer-events-none',
        scrolled ? 'py-4' : 'py-6',
      )}
    >
      <div
        className={cn(
          'max-w-6xl mx-auto flex items-center justify-between transition-all duration-700 px-8 py-3 rounded-full border border-foreground/5 pointer-events-auto glass bg-background/40 shadow-2xl shadow-foreground/5',
        )}
      >
        {/* Logo */}
        <div className="shrink-0">
          <Logo />
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6 overflow-hidden">
          {!isMobile && <LargeNavLinks />}
          {isMobile && <MobileNavDropdown />}
        </div>
      </div>
    </nav>
  );
}
