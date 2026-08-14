import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/projetos/$slug"
      params={{ slug: project.slug }}
      className="group block cursor-pointer select-none"
      draggable={false}
    >
      <div className="overflow-hidden rounded-[16px] border border-border bg-card shadow-soft transition-[box-shadow,border-color] duration-300 group-hover:border-primary/35 group-hover:shadow-lift">
        <div className="flex items-center gap-1.5 border-b border-border/70 bg-ice px-3 py-2">
          <span className="size-1.5 rounded-full bg-muted-foreground/30" />
          <span className="size-1.5 rounded-full bg-muted-foreground/30" />
          <span className="size-1.5 rounded-full bg-muted-foreground/30" />
          <span className="ml-2 truncate rounded-full bg-background px-2 py-0.5 text-[9px] text-muted-foreground">
            {project.domain}
          </span>
        </div>
        <div className="aspect-[4/3] overflow-hidden bg-ice">
          <img
            src={project.image}
            alt={`Preview do projeto ${project.name} — ${project.category}`}
            loading="lazy"
            width={1024}
            height={768}
            draggable={false}
            className="size-full object-cover object-top"
          />
        </div>
      </div>

      <div className="mt-3 px-1 text-center">
        <p className="text-sm font-medium text-foreground">{project.name}</p>
        <p className="text-xs text-muted-foreground">{project.category}</p>
        <p className="mt-1 text-xs font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Ver projeto →
        </p>
      </div>
    </Link>
  );
}
