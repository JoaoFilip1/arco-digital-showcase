export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-foreground">CRUZ SYSTEMS</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Sistemas, sites e soluções digitais para empresas.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
          <a href="/#projetos" className="hover:text-primary">
            Projetos
          </a>
          <a href="/#solucoes" className="hover:text-primary">
            Soluções
          </a>
          <a href="/#sobre" className="hover:text-primary">
            Sobre
          </a>
          <a href="/#contato" className="hover:text-primary">
            Contato
          </a>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Cruz Systems. Todos os direitos reservados.
      </div>
    </footer>
  );
}
