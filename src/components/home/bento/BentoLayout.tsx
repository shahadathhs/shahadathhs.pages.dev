'use client';

import { BentoCell } from './BentoCell';
import { heroData } from '@/constant/heroData';
import { aboutMeBio } from '@/constant/aboutMe';
import { skills } from '@/constant/skillsData';
import { experienceData } from '@/constant/experienceData';
import { Button } from '../../ui/button';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';
import SocialLinks from '../../shared/SocialLinks';
import { Badge } from '../../ui/badge';

export default function BentoLayout() {
  return (
    <div
      id="hero"
      className="max-w-6xl mx-auto pt-32 pb-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[minmax(180px,auto)] px-4 md:px-0"
    >
      {/* Hero Cell */}
      <BentoCell className="md:col-span-4 lg:col-span-4 lg:row-span-2 flex flex-col justify-center items-start">
        <span className="text-xs font-bold tracking-widest uppercase opacity-60 mb-4">
          {heroData.firstLine}
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-gradient">
          {heroData.secondLine}
        </h1>
        <div className="text-xl md:text-2xl text-muted-foreground font-medium mb-8">
          <Typewriter
            words={heroData.typewriterWords}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </div>
        <div className="flex gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 bg-foreground text-background"
          >
            <Link href="#projects">Work</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 glass"
          >
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
      </BentoCell>

      {/* About Cell */}
      <BentoCell className="md:col-span-2 lg:col-span-2 lg:row-span-2">
        <h2 className="text-2xl font-bold mb-6">About</h2>
        <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
          {aboutMeBio.split('\n')[1]}{' '}
          {/* Taking the first meaningful paragraph */}
        </p>
        <div className="mt-auto pt-6">
          <SocialLinks />
        </div>
      </BentoCell>

      {/* Skills Cell */}
      <BentoCell className="md:col-span-3 lg:col-span-3 lg:row-span-1">
        <h2 className="text-xl font-bold mb-4">Core Stack</h2>
        <div className="flex flex-wrap gap-2">
          {skills
            .slice(0, 3)
            .map((s) => s.description)
            .flat()
            .map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="glass border-foreground/10"
              >
                {tech}
              </Badge>
            ))}
        </div>
      </BentoCell>

      {/* Experience Cell */}
      <BentoCell className="md:col-span-3 lg:col-span-3 lg:row-span-2 overflow-y-auto max-h-[400px]">
        <h2 className="text-xl font-bold mb-6">Experience</h2>
        <div className="space-y-6">
          {experienceData.slice(0, 2).map((exp, i) => (
            <div key={i} className="border-l-2 border-accent/20 pl-4 py-1">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">
                {exp.title}
              </span>
              <h3 className="font-bold text-sm lg:text-base">
                {exp.designation}
              </h3>
              <p className="text-xs text-muted-foreground">{exp.company}</p>
            </div>
          ))}
        </div>
      </BentoCell>

      {/* Projects Preview Cell */}
      <BentoCell className="md:col-span-4 lg:col-span-4 lg:row-span-1 flex flex-row items-center justify-between">
        <div>
          <h2 className="text-xl font-bold mb-2">Selected Works</h2>
          <p className="text-sm text-muted-foreground">
            Recent backend & fullstack projects
          </p>
        </div>
        <Button asChild variant="ghost" className="rounded-full">
          <Link href="#projects">Explore All →</Link>
        </Button>
      </BentoCell>

      {/* Contact Cell */}
      <BentoCell className="md:col-span-2 lg:col-span-2 lg:row-span-1 flex flex-col items-center justify-center text-center bg-accent/5">
        <h2 className="text-xl font-bold mb-2">Let&apos;s Connect</h2>
        <Button
          asChild
          className="rounded-full bg-accent text-background hover:bg-accent/90"
        >
          <Link href="#contact">Get in Touch</Link>
        </Button>
      </BentoCell>
    </div>
  );
}
