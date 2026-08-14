import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/projetos/$slug")({
  head: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    const title = project
      ? `${project.name} — Projeto Cruz Systems`
      : "Projeto — Cruz Systems";
    const description = project
      ? `${project.name}: ${project.category} desenvolvido pela Cruz Systems.`
      : "Projeto desenvolvido pela Cruz Systems.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjetoPage,
});

function ProjetoPage() {
  const { slug } = Route.useParams();
  const project = projects.find((p) => p.slug === slug);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-40">
        <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
          ← Voltar
        </Link>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {project ? project.name : "Projeto"}
        </h1>
        <p className="mt-3 text-muted-foreground">
          {project ? project.category : "Este projeto ainda não está disponível."}
        </p>
        {project && (
          <img
            src={project.image}
            alt={`Preview do projeto ${project.name}`}
            loading="lazy"
            width={1024}
            height={768}
            className="mt-10 w-full rounded-[16px] border border-border shadow-soft"
          />
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
