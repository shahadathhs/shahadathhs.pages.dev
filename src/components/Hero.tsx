import { heroData } from '@/constant/heroData';
import { socialLinks } from '@/constant/socialLinks';

export default function Hero() {
  return (
    <section className="space-y-4 mb-16">
      <h1 className="text-4xl font-bold">{heroData.name}</h1>
      <p className="text-muted-foreground text-lg font-medium leading-relaxed">
        {heroData.role} | Node.js, Python | AI & DevOps
      </p>
      <p className="text-muted-foreground leading-relaxed max-w-prose">
        {heroData.tagline}
      </p>

      {heroData.quickStats.length > 0 && (
        <div className="flex flex-wrap gap-6 pt-2">
          {heroData.quickStats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-lg font-bold">{stat.value}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-4 pt-4">
        <a
          href={heroData.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold uppercase tracking-widest text-accent hover:underline decoration-accent underline-offset-4"
        >
          Resume / CV
        </a>
        <a
          href={heroData.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors underline decoration-border underline-offset-4"
        >
          GitHub
        </a>
        {socialLinks
          .filter((link) => link.name !== 'GitHub')
          .map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors underline decoration-border underline-offset-4"
            >
              {link.name}
            </a>
          ))}
      </div>
    </section>
  );
}
