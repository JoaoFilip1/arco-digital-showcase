export function FinalCta() {
  return (
    <section id="contato" className="scroll-mt-28 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl rounded-[28px] border border-border/70 bg-[linear-gradient(180deg,var(--ice),var(--background))] px-8 py-20 text-center shadow-soft">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Vamos construir o próximo passo da sua empresa?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Conte-nos o que sua empresa precisa e descubra como a Cruz Systems pode transformar essa
          ideia em uma solução digital.
        </p>
        <a
          href="mailto:contato@cruzsystems.com.br"
          className="mt-10 inline-block rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-colors hover:bg-electric"
        >
          Fale conosco →
        </a>
      </div>
    </section>
  );
}
