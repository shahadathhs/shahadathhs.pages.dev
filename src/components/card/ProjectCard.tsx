import { Github, Star, GitFork, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  language: string;
}

export default function ProjectCard({
  name,
  description,
  url,
  stars,
  forks,
  language,
}: ProjectCardProps) {
  return (
    <div className="group relative transition-all duration-500">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col md:flex-row md:items-center justify-between py-10 gap-8"
      >
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-accent transition-colors duration-500 leading-none">
              {name}
            </h3>
            {language && (
              <span className="px-3 py-1 bg-foreground/5 text-foreground/60 rounded-full text-[10px] font-bold uppercase tracking-widest border border-foreground/5">
                {language}
              </span>
            )}
          </div>

          <p className="text-muted-foreground line-clamp-2 text-sm md:text-lg leading-relaxed max-w-4xl">
            {description || 'No description provided.'}
          </p>

          <div className="flex items-center gap-6 text-muted-foreground/60 text-xs font-semibold tracking-wider uppercase">
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              {stars}
            </span>
            <span className="flex items-center gap-2">
              <GitFork className="h-4 w-4" />
              {forks}
            </span>
            <Github className="h-4 w-4 group-hover:text-foreground transition-colors" />
          </div>
        </div>

        <div className="flex items-center justify-center shrink-0 w-12 h-12 rounded-full border border-foreground/5 group-hover:bg-foreground group-hover:text-background transition-all duration-500 group-hover:scale-110">
          <ExternalLink className="h-5 w-5" />
        </div>
      </a>
    </div>
  );
}
