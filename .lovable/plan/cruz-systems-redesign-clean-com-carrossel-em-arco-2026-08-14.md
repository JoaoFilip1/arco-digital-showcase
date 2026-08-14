# Cruz Systems — Redesign clean com carrossel em arco

Evolução do site atual (cruzsystems.vercel.app): mesmo posicionamento comercial e serviços, nova interface muito mais clara, ampla e premium, com o portfólio em arco como protagonista da Hero.

## Identidade visual

Branco e off-white como base, gelo #F7FAFF em faixas suaves, azul royal e azul elétrico como destaque, cinza azulado nos textos secundários. Tipografia grande e moderna, muito espaço em branco, sombras suaves, bordas discretas. Sem fundos escuros, sem dashboards decorativos, sem gradientes pesados ou ilustrações 3D.

## Header

Fixo e minimalista, fundo branco levemente translúcido com blur discreto e praticamente sem sombra.
- Esquerda: CRUZ SYSTEMS. Centro: Início, Projetos, Soluções, Sobre, Contato. Direita: "Fale conosco".
- No mobile, menu compacto em drawer.

## Hero

Primeira tela ampla e com muito respiro:
- Badge "✦ Tecnologia para empresas que querem crescer".
- Headline em duas linhas com "soluções digitais" em gradiente azul.
- Texto de apoio sobre sistemas, sites e soluções personalizadas.
- Botões "Ver projetos →" e "Fale conosco →".
- Linha discreta: Sistemas em nuvem · Acesso responsivo · Suporte especializado.
- O dashboard atual é removido; no lugar entra o carrossel em arco.

## Carrossel infinito em arco (elemento central)

- ~6 projetos visíveis no desktop, cards pequenos no formato de mini-janela de navegador (barra com pontinhos + preview do site).
- Movimento contínuo direita → esquerda, loop real: quem sai pela esquerda reaparece pela direita, sem saltos, sem setas, sem slider tradicional.
- Cada card percorre fisicamente o arco: entra baixo pela direita, sobe, atinge o topo no centro, desce e sai pela esquerda. A posição vertical é calculada a partir da posição horizontal a cada quadro.
- Rotação acompanhando a curva: ~-4° na ponta esquerda, 0° no centro, ~+4° na ponta direita.
- Nome e categoria sempre visíveis. Card inteiro clicável, cursor pointer, destino /projetos/<slug>.
- Hover: pausa todo o carrossel, leve aumento de escala, elevação de alguns pixels, sombra um pouco maior, borda azul clara e "Ver projeto →". Ao sair, o movimento retoma exatamente do ponto onde parou.
- Sem caixa ao redor: os cards flutuam sobre o branco, com uma linha curva extremamente discreta acompanhando a trajetória.

Projetos iniciais em array separado: Restaurante, Clínica, Hotel Patudo, English with Mih, Arquitetura, Academia — cada um com preview próprio, nome, categoria e slug.

## Seções abaixo da Hero

- **Nossas soluções**: Sistemas de Agendamento, Gestão Comercial, Sites Institucionais, Landing Pages, Sistemas Personalizados — grade minimalista com ícones lineares, sem cards pesados.
- **Por que a Cruz Systems?**: Segurança desde a base, Soluções sob medida, Suporte próximo, Evolução contínua — textos curtos.
- **Como trabalhamos**: 01 Entendemos · 02 Planejamos · 03 Desenvolvemos · 04 Evoluímos, com linha fina conectando as etapas no desktop.
- **CTA final**: "Vamos construir o próximo passo da sua empresa?" + texto + botão "Fale conosco →", sobre um gradiente azul muito suave (nunca uma faixa escura).
- Rodapé enxuto com nome, navegação e contato.

## Responsividade e animações

- Desktop ~6 projetos, tablet ~4, mobile ~1,5–2 com swipe/drag horizontal, arco reduzido e auto-scroll mantido. Nada de cards comprimidos ou cortados de forma estranha.
- Entrada da página em sequência (badge → headline → texto → botões → carrossel) com fade + translateY, 300–600ms, respeitando prefers-reduced-motion.

## Detalhes técnicos

- Página em `src/routes/index.tsx` (substitui o placeholder), com `head()` próprio (title, description, og, twitter). Rota `/projetos/$slug` fica preparada como destino dos cards.
- Componentes em `src/components/`: `SiteHeader`, `Hero`, `ArcCarousel`, `ProjectCard`, `Solutions`, `WhyUs`, `Process`, `FinalCta`, `SiteFooter`; dados em `src/data/projects.ts`.
- Carrossel: `requestAnimationFrame` com offset acumulado; para cada card `x = (base + offset) mod larguraTotal`, `y = -amplitude * cos(π * (x - centro)/meiaLargura)` e rotação derivada da mesma distância ao centro. Pausa = parar de incrementar o offset. Drag no touch soma ao offset.
- Tokens em `src/styles.css`: azul royal/elétrico, gelo #F7FAFF, cinza azulado, sombras suaves, raio ~16px; fonte moderna carregada via `<link>` no `__root.tsx`.
- Previews dos 6 projetos gerados como imagens em `src/assets/`.
