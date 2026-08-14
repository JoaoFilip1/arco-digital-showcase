import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Início", href: "/#inicio" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Soluções", href: "/#solucoes" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/75 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 md:grid-cols-3">
        <Link
          to="/"
          className="min-w-0 truncate text-sm font-semibold tracking-[0.18em] text-foreground"
        >
          CRUZ SYSTEMS
        </Link>

        <nav className="hidden justify-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden justify-end md:flex">
          <a
            href="/#contato"
            className="rounded-full border border-primary/30 px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
          >
            Fale conosco
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex size-11 shrink-0 items-center justify-center justify-self-end rounded-full border border-border text-foreground md:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/50 bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-1 text-sm text-muted-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#contato"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border border-primary/30 px-5 py-2 text-center text-sm font-medium text-primary"
            >
              Fale conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
