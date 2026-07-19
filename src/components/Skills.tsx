import { skills } from '@/constant/skillsData';

export default function Skills() {
  return (
    <section id="skills" className="space-y-8 mb-16 scroll-mt-24">
      <h2 className="text-xs font-bold uppercase tracking-widest opacity-40">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill) => (
          <div key={skill.category} className="space-y-2">
            <h3 className="text-[10px] font-bold uppercase tracking-widest opacity-40">
              {skill.category}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {skill.summary}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="px-2 py-1 bg-secondary text-secondary-foreground text-[11px] font-bold uppercase tracking-tighter"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
