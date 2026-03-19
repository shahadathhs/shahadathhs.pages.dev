'use client';

import { Button } from '@/components/ui/button';
import { quickLinks } from '@/constant/navigationLinks';
import { ArrowUp, Check, Copy, FileText, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import SocialLinks from './SocialLinks';
import { contactEmail } from '@/constant/contactInfo';
import { heroData } from '@/constant/heroData';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = contactEmail;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-foreground/5 py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-0 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              {heroData.secondLine}
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              {heroData.footerDescription}
            </p>
            <SocialLinks />
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest opacity-40">
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.link}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-xs font-bold uppercase tracking-widest opacity-40">
              Contact
            </h3>
            <div className="space-y-4">
              <button
                onClick={handleCopyEmail}
                className="group flex items-center justify-center md:justify-start gap-3 w-full p-3 rounded-2xl glass border-foreground/5 hover:border-foreground/10 transition-all"
              >
                <span className="text-sm font-medium truncate">{email}</span>
                {copied ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 opacity-40 group-hover:opacity-100" />
                )}
              </button>
              <Button
                asChild
                className="w-full rounded-2xl bg-foreground text-background"
              >
                <Link href={heroData.resumeLink} target="_blank">
                  <FileText className="mr-2 h-4 w-4" />
                  Curriculum Vitae
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-foreground/5 opacity-40 text-[10px] font-bold uppercase tracking-widest">
          <p>
            &copy; {new Date().getFullYear()} {heroData.secondLine}.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            Back to Top <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
