import { nanoid } from 'nanoid';
import { ActiveLink } from './ActiveLink';
import { navLinks } from '@/constant/navigationLinks';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export const MobileNavDropdown = () => {
  const [open, setOpen] = useState(false);

  const handleItemClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 text-foreground hover:bg-foreground/5 rounded-full transition-all"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="z-[1000] w-full max-w-xs border-foreground/5 glass"
      >
        <SheetHeader className="mb-12 flex flex-row items-center justify-between space-y-0 border-b border-foreground/5 pb-8">
          <h2 className="text-foreground font-bold text-xl tracking-tighter uppercase">
            Menu
          </h2>
        </SheetHeader>
        <nav className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <div key={nanoid()} onClick={handleItemClick}>
              <ActiveLink
                href={link.link}
                extraClasses="text-lg font-bold tracking-widest block w-full py-2"
              >
                {link.title}
              </ActiveLink>
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
