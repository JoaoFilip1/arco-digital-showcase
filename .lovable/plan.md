# Cruz Systems — Landing page com carrossel em arco

Landing institucional clean, clara e premium, com o portfólio arqueado como protagonista da primeira tela.

## O que será construído

**Header fixo minimalista**
- Esquerda: CRUZ SYSTEMS (wordmark). Centro: Início, Projetos, Soluções, Sobre, Contato. Direita: botão outline "Fale conosco".
- Fundo branco translúcido com leve blur, borda inferior quase invisível, bastante respiro.

**Hero (praticamente 100vh)**
- Badge: "✦ Soluções digitais que impulsionam negócios".
- Título grande em duas linhas, com "experiências digitais." em gradiente azul royal → azul elétrico.
- Parágrafo de apoio + dois botões: "Ver projetos →" (azul sólido) e "Fale conosco →" (outline).
- Entrada animada: título fade-up, texto e botões com delay escalonado, carrossel surgindo por último (300–600ms).

**Carrossel infinito em arco (parte inferior da Hero)**
- 6 projetos visíveis em desktop, cards pequenos no estilo mini-janela de navegador (barra com três pontinhos + preview).
- Movimento contínuo da direita para a esquerda, lento e sem saltos; ao sair pela esquerda o card reentra pela direita (loop real).
- A altura de cada card é calculada em tempo real a partir da posição X: mais baixo nas bordas, subindo até o topo no centro do arco. Rotação sutil acompanhando a curva (~-4° à esquerda, ~+4° à direita, reto no centro).
- Linha curva quase imperceptível ao fundo acompanhando o arco; cards flutuam (sombra suave, borda clara, raio ~16px), sem caixa contêiner.

**Hover e clique**
- Hover: pausa o movimento, scale ~1.05, elevação, sombra maior, borda azul suave; mostra nome do projeto, categoria e "Ver projeto →". Ao sair, o movimento retoma exatamente de onde parou.
- Card inteiro clicável com cursor pointer, apontando para `/projetos/<slug>` (placeholder por enquanto).

**Projetos iniciais**: Restaurante, Clínica, Hotel Patudo, English with Mih, Arquitetura, Academia — cada um com mockup próprio, estruturados em um array fácil de substituir pelos projetos reais.

**Scroll indicator**: ícone de mouse pequeno + "Role para descobrir mais".

**Responsivo**: ~6 cards no desktop, ~4 no tablet, ~2–3 no mobile, com arco proporcional à largura e swipe horizontal (arrastar) somado ao movimento automático; sem cortes estranhos.

## Detalhes técnicos

- Nova página em `src/routes/index.tsx` (substitui o placeholder), com `head()` próprio: título, description, og e twitter.
- Componentes em `src/components/`: `SiteHeader`, `Hero`, `ArcCarousel`, `ProjectCard`, `ScrollIndicator`; dados em `src/data/projects.ts`.
- Carrossel: loop com `requestAnimationFrame` mantendo um offset acumulado; para cada card, `x = (base + offset) mod totalWidth` e `y = -amplitude * cos(π * (x - centro) / meiaLargura)` (clamp suave), com rotação derivada da mesma distância ao centro. Pausa = parar de incrementar o offset. Respeita `prefers-reduced-motion`.
- Tokens em `src/styles.css`: azul royal/elétrico, branco/gelo (#F7FAFF), sombras discretas, raio ~16px, fonte moderna (Sora/Manrope via `<link>` no `__root.tsx`).
- Mockups dos 6 projetos gerados como imagens leves em `src/assets/`.
- Uma única seção (Hero + arco). Nenhuma seção extra além do necessário.
