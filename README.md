# Cruz Systems Digital Canvas

Crie uma landing page institucional moderna, minimalista e premium para a empresa Cruz Systems, focada em desenvolvimento de sites, sistemas e soluções digitais.

A identidade visual deve seguir uma linha clean, tecnológica e sofisticada, com bastante espaço em branco, fundo em tons de branco, gelo e azul muito claro, detalhes em azul royal / azul elétrico, tipografia moderna e elegante, bordas suaves e sombras discretas.

Evite excesso de informações, elementos escuros, fundos pesados ou muitos cards ao mesmo tempo.

1. Header

Criar um header fixo e minimalista.

À esquerda:

Logo/nome CRUZ SYSTEMS

No centro:

Início

Projetos

Soluções

Sobre

Contato

À direita:

Botão outline: Fale conosco

O header deve ser branco/transparente, elegante e com bastante espaçamento.

2. Hero principal

Criar uma Hero ocupando praticamente toda a primeira tela.

Centralizar o conteúdo principal.

Adicionar uma pequena badge acima do título:

✦ Soluções digitais que impulsionam negócios

Título grande:

Transformamos ideias
em experiências digitais.

Destacar “experiências digitais.” com azul ou gradiente azul.

Texto complementar:

Desenvolvemos sites, plataformas e sistemas personalizados para tornar negócios mais eficientes, modernos e competitivos.

Adicionar dois botões:

Botão principal azul:
Ver projetos →

Botão secundário outline:
Fale conosco →

Manter bastante espaço vazio entre o texto e o portfólio.

3. CARROSSEL DE PROJETOS EM ARCO

Este é o principal diferencial visual da página.

Na parte inferior da Hero, criar um carrossel infinito horizontal com 6 projetos visíveis simultaneamente, formando visualmente um arco / ponte.

Não quero os cards em uma linha reta.

A disposição deve lembrar:

                 Projeto
        Projeto           Projeto
   Projeto                     Projeto
Projeto                           Projeto


Ou seja:

cards das extremidades ficam mais baixos;

cards intermediários ficam progressivamente mais altos;

cards centrais ficam no ponto mais alto;

formando uma curva suave e bem perceptível.

Os cards devem ser relativamente pequenos para permitir visualizar aproximadamente 5 ou 6 projetos ao mesmo tempo em desktop.

Cada card representa o preview de um site e deve parecer uma pequena janela de navegador.

Exemplos:

Restaurante — Site Institucional

Clínica — Site Institucional

Hotel Patudo — Site Institucional

English with Mih — Plataforma Educacional

Arquitetura — Site Institucional

Academia — Landing Page

Utilizar imagens/mockups diferentes dentro de cada projeto.

Comportamento do carrossel

Os cards devem se mover automaticamente e continuamente:

da direita para a esquerda

O movimento deve ser:

lento;

elegante;

fluido;

sem saltos.

Quando um card sair completamente pelo lado esquerdo, ele deve reaparecer pelo lado direito, criando um loop infinito real.

Não usar setas tradicionais de carrossel.

O movimento deve parecer uma esteira contínua.

IMPORTANTE — manter o formato do arco durante o movimento

Os cards não devem simplesmente manter uma posição vertical fixa.

Conforme cada projeto se movimentar horizontalmente pela tela, sua posição vertical deve mudar acompanhando uma curva matemática, fazendo com que:

entrando pela direita → fique mais baixo;

aproximando-se do centro → suba;

no centro → alcance o topo do arco;

afastando-se para a esquerda → desça novamente.

Assim, o próprio movimento cria a sensação de uma ponte/arco contínuo.

Pode utilizar CSS/JavaScript para calcular a posição vertical dos cards conforme a posição X.

Exemplo conceitual:

translateY baseado na distância do card até o centro da tela

A animação deve permanecer suave durante todo o percurso.

Hover nos projetos

Quando o usuário passar o mouse sobre um projeto:

pausar temporariamente o movimento do carrossel;

aumentar o card levemente (scale ~1.05);

elevar levemente o card;

aumentar a sombra;

destacar a borda com azul suave.

Mostrar abaixo ou sobre o card:

Nome do projeto

e uma categoria pequena, por exemplo:

Site Institucional

Opcionalmente exibir:

Ver projeto →

Quando retirar o mouse, a animação deve continuar exatamente de onde parou.

Clique nos projetos

Cada card deve ser clicável.

Por enquanto utilizar links placeholders, mas deixar a estrutura preparada para futuramente direcionar para:

/projetos/nome-do-projeto

ou para uma página de preview/demo.

Cursor pointer em todo o card.

4. Detalhes visuais do carrossel

Não colocar caixas grandes atrás dos projetos.

Os projetos devem parecer flutuar sobre o fundo claro.

Adicionar:

sombra muito suave;

borda branca/cinza clara;

border-radius entre 14px e 18px;

leve perspectiva nos cards das extremidades.

Os cards laterais podem ter uma rotação mínima:

esquerda: rotate(-4deg)

direita: rotate(4deg)

Os cards mais próximos do centro devem ficar praticamente retos.

O objetivo é criar profundidade sem exagerar.

5. Fundo

Manter fundo predominantemente:

#FFFFFF

Com detalhes muito suaves em:

#F7FAFF

e gradientes discretos de azul claro.

Pode haver uma linha curva quase imperceptível acompanhando o arco dos projetos.

Não utilizar grandes ilustrações, globos 3D, gráficos ou elementos tecnológicos pesados.

O destaque visual deve ser o próprio portfólio.

6. Scroll indicator

Abaixo do arco, adicionar algo muito discreto:

ícone pequeno de mouse

Role para descobrir mais

7. Responsividade

Desktop:

aproximadamente 6 projetos visíveis.

Tablet:

aproximadamente 4 projetos.

Mobile:

aproximadamente 2 ou 3 projetos.

manter o efeito de arco adaptado à largura.

permitir swipe horizontal além do movimento automático.

Não deixar cards cortados de maneira estranha.

8. Animações gerais

Adicionar animações suaves ao carregar a página:

headline com fade-up;

texto com pequeno delay;

botões;

carrossel entrando suavemente.

Utilizar transições entre 300ms–600ms.

Nada excessivamente chamativo.

A sensação geral deve ser:

premium + tecnologia + simplicidade + confiança.

9. Direção visual geral

Quero algo semelhante a sites modernos de empresas SaaS, software houses e estúdios digitais.

Prioridades:

Muito espaço em branco.

Tipografia grande.

Pouca informação.

Azul como cor principal.

Carrossel arqueado como protagonista.

Design sofisticado.

Animações suaves.

Aparência profissional o suficiente para apresentar a Cruz Systems para clientes.

Não adicionar novas seções ou informações excessivas na primeira tela.

O objetivo principal da primeira tela é que o usuário entenda imediatamente:

quem é a Cruz Systems + o que fazemos + veja nossos projetos.

Implemente o layout completo e funcional em React/Tailwind, com o carrossel infinito em arco funcionando de verdade e preparado para receber posteriormente os projetos reais da Cruz Systems.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://arco-digital-showcase.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ff256cb6-38e5-47b5-a82a-6b191ed6104d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
