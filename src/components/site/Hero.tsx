import { ArcCarousel } from "./ArcCarousel";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-36 sm:pt-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(60%_60%_at_50%_0%,var(--ice)_0%,transparent_70%)]"
      />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-xs text-muted-foreground shadow-soft">
          <span className="text-primary">✦</span> Tecnologia para empresas que querem crescer
        </p>

        <h1
          className="animate-rise mt-8 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          Transformamos ideias em
          <br />
          <span className="bg-linear-to-r from-primary to-electric bg-clip-text text-transparent">
            soluções digitais
          </span>{" "}
          para empresas.
        </h1>

        <p
          className="animate-rise mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          Desenvolvemos sistemas, sites e soluções personalizadas para simplificar processos,
          aumentar a produtividade e criar novas oportunidades para empresas.
        </p>

        <div
          className="animate-rise mt-9 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#projetos"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-colors hover:bg-electric"
          >
            Ver projetos →
          </a>
          <a
            href="#contato"
            className="rounded-full border border-primary/30 px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
          >
            Fale conosco →
          </a>
        </div>

        <p
          className="animate-rise mt-6 text-xs text-muted-foreground"
          style={{ animationDelay: "320ms" }}
        >
          Sistemas em nuvem · Acesso responsivo · Suporte especializado
        </p>
      </div>

      <div
        id="projetos"
        className="animate-rise mt-16 scroll-mt-28 sm:mt-24"
        style={{ animationDelay: "400ms" }}
      >
        <ArcCarousel />
      </div>

      <div className="mb-16 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="flex h-7 w-4 items-start justify-center rounded-full border border-border pt-1.5">
          <span className="size-1 rounded-full bg-muted-foreground/60" />
        </span>
        <span className="text-[11px]">Role para descobrir mais</span>
      </div>
    </section>
  );
}
