const steps = [
  { number: "01", title: "Entendemos", text: "Ouvimos o processo e os objetivos do negócio." },
  { number: "02", title: "Planejamos", text: "Definimos escopo, prioridades e prazos claros." },
  { number: "03", title: "Desenvolvemos", text: "Construímos com qualidade e entregas frequentes." },
  { number: "04", title: "Evoluímos", text: "Acompanhamos, medimos e melhoramos continuamente." },
];

export function Process() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Como trabalhamos.
        </h2>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-2 hidden h-px bg-border lg:block"
          />
          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="relative lg:pr-8">
                <span
                  aria-hidden="true"
                  className="absolute -top-[3px] left-0 hidden size-2 rounded-full bg-primary lg:block"
                />
                <p className="text-xs tracking-[0.2em] text-primary lg:mt-8">{step.number}</p>
                <h3 className="mt-3 text-lg font-medium text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
