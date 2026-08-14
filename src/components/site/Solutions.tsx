import { CalendarCheck, LineChart, Globe, Rocket, Boxes } from "lucide-react";

const items = [
  {
    icon: CalendarCheck,
    title: "Sistemas de Agendamento",
    text: "Agendas online, confirmações e histórico de atendimentos.",
  },
  {
    icon: LineChart,
    title: "Gestão Comercial",
    text: "Controle de clientes, vendas e indicadores em um só lugar.",
  },
  {
    icon: Globe,
    title: "Sites Institucionais",
    text: "Presença digital sólida, rápida e preparada para buscas.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    text: "Páginas focadas em conversão para campanhas e lançamentos.",
  },
  {
    icon: Boxes,
    title: "Sistemas Personalizados",
    text: "Software sob medida para o processo real da sua empresa.",
  },
];

export function Solutions() {
  return (
    <section id="solucoes" className="scroll-mt-28 border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Nossas soluções</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          O que desenvolvemos para empresas.
        </h2>

        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="border-t border-border/70 pt-6">
              <Icon className="size-5 text-primary" strokeWidth={1.5} />
              <h3 className="mt-4 text-base font-medium text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
