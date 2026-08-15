import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { Solutions } from "@/components/site/Solutions";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { FinalCta } from "@/components/site/FinalCta";
import { SiteFooter } from "@/components/site/SiteFooter";

const title = "Cruz Systems — Sistemas, sites e soluções digitais para empresas";
const description =
  "Desenvolvemos sistemas, sites e soluções personalizadas para simplificar processos, aumentar a produtividade e criar novas oportunidades para empresas.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Solutions />
        <WhyUs />
        <Process />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
