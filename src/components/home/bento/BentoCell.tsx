'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import React from 'react';

interface BentoCellProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const BentoCell = ({
  children,
  className,
  delay = 0,
}: BentoCellProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        'glass border-foreground/5 p-8 rounded-[2rem] flex flex-col overflow-hidden relative group hover:border-foreground/10 transition-colors',
        className,
      )}
    >
      {children}
    </motion.div>
  );
};
