import { aboutBands } from '@/constant/aboutMe';

export default function About() {
  return (
    <section id="about" className="space-y-4 mb-16 scroll-mt-24">
      <h2 className="text-xs font-bold uppercase tracking-widest opacity-40">
        About
      </h2>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {aboutBands.map((band, idx) => (
          <p
            key={idx}
            className="text-muted-foreground leading-relaxed mb-4 last:mb-0"
          >
            {band.paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
