const items = [
  { title: "Segurança desde a base", text: "Boas práticas e proteção de dados em cada camada." },
  { title: "Soluções sob medida", text: "Nada de fórmula pronta: construímos para o seu processo." },
  { title: "Suporte próximo", text: "Comunicação direta, sem intermediários e sem burocracia." },
  { title: "Evolução contínua", text: "Seu sistema acompanha o crescimento da empresa." },
];

export function WhyUs() {
  return (
    <section id="sobre" className="scroll-mt-28 bg-ice py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Por que a Cruz Systems?
        </h2>

        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.title}>
              <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
