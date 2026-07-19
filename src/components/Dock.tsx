'use client';

import { useCallback, useEffect, useState } from 'react';

type DockPosition = 'top' | 'right' | 'bottom' | 'left';

type DockItem = {
  id: string;
  label: string;
  glyph: string;
};

const DOCK_ITEMS: DockItem[] = [
  { id: 'hero', label: 'Home', glyph: '◆' },
  { id: 'about', label: 'About', glyph: 'A' },
  { id: 'experience', label: 'Experience', glyph: 'E' },
  { id: 'skills', label: 'Skills', glyph: 'S' },
  { id: 'projects', label: 'Projects', glyph: 'P' },
  { id: 'blogs', label: 'Writing', glyph: 'W' },
  { id: 'contact', label: 'Contact', glyph: 'C' },
];

const POSITIONS: DockPosition[] = ['top', 'right', 'bottom', 'left'];
const STORAGE_KEY = 'dock-position';

// Magnification curve: distance -> scale
const scaleFor = (distance: number): number => {
  if (distance === 0) return 1.6;
  if (distance === 1) return 1.25;
  if (distance === 2) return 1.08;
  return 1;
};

export default function Dock() {
  const [position, setPosition] = useState<DockPosition>('bottom');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  // Load saved position
  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as DockPosition | null;
      if (saved && POSITIONS.includes(saved)) setPosition(saved);
    } catch {
      // ignore
    }
  }, []);

  // Persist position
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, position);
    } catch {
      // ignore
    }
  }, [position, mounted]);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const trigger = window.innerHeight * 0.35;
      let current = DOCK_ITEMS[0].id;
      for (const item of DOCK_ITEMS) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        // Section is "active" if its top has crossed above the 35% viewport line
        if (rect.top <= trigger) current = item.id;
      }
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const isVertical = position === 'left' || position === 'right';

  // Position classes
  const containerPositionClass = {
    top: 'top-4 left-1/2 -translate-x-1/2',
    bottom: 'bottom-4 left-1/2 -translate-x-1/2',
    left: 'left-4 top-1/2 -translate-y-1/2',
    right: 'right-4 top-1/2 -translate-y-1/2',
  }[position];

  if (!mounted) return null;

  return (
    <div
      role="navigation"
      aria-label="Section navigation"
      className={`fixed z-50 ${containerPositionClass}`}
    >
      <div
        className={`flex items-center gap-1.5 p-2 bg-background/80 backdrop-blur-md border border-border shadow-lg ${
          isVertical ? 'flex-col' : 'flex-row'
        }`}
      >
        {/* Home (scroll-to-top) button */}
        <DockButton
          glyph="↑"
          label="Top"
          scale={hoveredIndex === -1 ? scaleFor(0) : 1}
          isActive={activeSection === 'hero'}
          isVertical={isVertical}
          onClick={handleScrollToTop}
          onMouseEnter={() => setHoveredIndex(-1)}
          onMouseLeave={() => setHoveredIndex(null)}
        />

        {/* Divider */}
        <div
          className={`bg-border ${
            isVertical ? 'h-px w-6 my-1' : 'w-px h-6 mx-1'
          }`}
        />

        {/* Section buttons */}
        {DOCK_ITEMS.slice(1).map((item, idx) => {
          const realIdx = idx + 1; // offset by 1 because Home is at index 0 conceptually
          const distance =
            hoveredIndex === null ? 0 : Math.abs(hoveredIndex - realIdx);
          // Map DOCK_ITEMS index to actual sequence: Home(0) is separate, so items 1..6 are the sections after Home
          // We track hoveredIndex as 1-based for sections (1=About, 6=Contact)
          return (
            <DockButton
              key={item.id}
              glyph={item.glyph}
              label={item.label}
              scale={hoveredIndex === null ? 1 : scaleFor(distance)}
              isActive={activeSection === item.id}
              isVertical={isVertical}
              onClick={() => handleClick(item.id)}
              onMouseEnter={() => setHoveredIndex(realIdx)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          );
        })}

        {/* Divider */}
        <div
          className={`bg-border ${
            isVertical ? 'h-px w-6 my-1' : 'w-px h-6 mx-1'
          }`}
        />

        {/* Position switcher (4 dots in a 2x2 grid) */}
        <div className="grid grid-cols-2 grid-rows-2 gap-0.5 p-1">
          {POSITIONS.map((pos) => (
            <button
              key={pos}
              type="button"
              onClick={() => setPosition(pos)}
              aria-label={`Move dock to ${pos}`}
              title={`Dock ${pos}`}
              className={`w-2 h-2 transition-colors hover:opacity-100 ${
                position === pos
                  ? 'bg-accent opacity-100'
                  : 'bg-muted-foreground/40 opacity-60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type DockButtonProps = {
  glyph: string;
  label: string;
  scale: number;
  isActive: boolean;
  isVertical: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

function DockButton({
  glyph,
  label,
  scale,
  isActive,
  isVertical,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: DockButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-label={label}
      title={label}
      className={`group relative flex items-center justify-center w-9 h-9 text-xs font-bold uppercase tracking-tight transition-all duration-200 ease-out ${
        isActive ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
      }`}
      style={{
        transform: `scale(${scale})`,
      }}
    >
      <span className="flex items-center justify-center">{glyph}</span>

      {/* Tooltip */}
      <span
        className={`pointer-events-none absolute bg-background border border-border px-2 py-1 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap ${
          isVertical
            ? 'right-full mr-2 top-1/2 -translate-y-1/2'
            : 'bottom-full mb-2 left-1/2 -translate-x-1/2'
        }`}
      >
        {label}
      </span>

      {/* Active indicator dot */}
      {isActive && (
        <span
          className={`absolute bg-accent w-1 h-1 rounded-full ${
            isVertical
              ? 'right-0 top-1/2 -translate-y-1/2 mr-0.5'
              : 'bottom-0 left-1/2 -translate-x-1/2 mb-0.5'
          }`}
        />
      )}
    </button>
  );
}
