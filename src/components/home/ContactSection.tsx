'use client';

import { Button } from '@/components/ui/button';
import { IconBrandMedium } from '@tabler/icons-react';
import { CheckCircle, Copy, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { TypingAnimation } from '../magicui/typing-animation';

import { contactEmail } from '@/constant/contactInfo';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = contactEmail;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success('Email copied to clipboard', {
      icon: '📋',
      duration: 2000,
      description: 'You can now paste it anywhere you need.',
    });

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const contactItems = [
    {
      id: 'github',
      title: 'GitHub',
      handle: '@shahadathhs',
      icon: Github,
      url: 'https://github.com/shahadathhs',
      color: 'from-orange-500 to-amber-500',
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      handle: 'in/shahadathhs',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/shahadathhs',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'email',
      title: 'Email',
      handle: email,
      icon: Mail,
      url: null,
      color: 'from-rose-500 to-pink-500',
      isEmail: true,
    },
    {
      id: 'medium',
      title: 'Medium',
      handle: '@shahadathhs',
      icon: IconBrandMedium,
      url: 'https://medium.com/@shahadathhs',
      color: 'from-slate-700 to-slate-900',
    },
  ];

  return (
    <div
      id="contact"
      className="relative w-full py-20 px-4 md:px-8 lg:px-16 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            <TypingAnimation>Get in touch</TypingAnimation>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
            I&apos;m always open to new opportunities, collaborations, and discussions
            about backend architecture and building scalable systems. Feel free to reach out!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const Component = item.isEmail ? 'div' : 'a';
            const componentProps = item.isEmail
              ? {}
              : {
                  href: item.url,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                };

            return (
              <Component
                key={item.id}
                {...componentProps}
                className={`group relative h-full ${!item.isEmail && 'hover:scale-105 transition-transform duration-300 cursor-pointer'}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl pointer-events-none" />
                <div className="relative h-full flex flex-col items-center justify-center p-8 rounded-xl border border-border/40 bg-card hover:border-accent/60 transition-all duration-300 group">
                  {/* Icon Background */}
                  <div className="mb-6 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 rounded-full`} />
                    <div className="relative bg-accent/10 p-4 rounded-full ring-1 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300 group-hover:scale-110">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-xl text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Handle / Contact Info */}
                  {item.isEmail ? (
                    <div className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      <span className="text-sm font-medium text-foreground/80 truncate max-w-[180px]">
                        {item.handle}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={copyToClipboard}
                        className="h-7 w-7 p-0 hover:bg-accent/20"
                      >
                        {copied ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <Copy className="h-4 w-4 text-foreground/60" />
                        )}
                      </Button>
                    </div>
                  ) : (
                    <span className="text-sm font-medium text-accent group-hover:text-accent/80 transition-colors duration-300">
                      {item.handle}
                    </span>
                  )}
                </div>
              </Component>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-accent/5 to-accent/10 border border-accent/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Ready to collaborate?
              </h3>
              <p className="text-foreground/70">
                Drop me an email or reach out on any platform. I&apos;ll get back to you soon!
              </p>
            </div>
            <Button
              onClick={copyToClipboard}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 font-semibold rounded-lg transition-all hover:shadow-lg"
            >
              Copy Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
