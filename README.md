# Vinheria Agnello — site estático (HTML + CSS)

Website público da **Vinheria Agnello**, publicado via GitHub Pages. Este README descreve a arquitetura do projeto, conteúdo e os **efeitos/ animações/ transições** utilizados no front‑end.

> **Demo**
>
> ```
> https://gonzales-jpg.github.io/Vinheria_Agnello-CP-2/
> ```

---

## Estrutura de pastas (projeto)

```
/
├── index.html
└── src/
    ├── pages/
    │   ├── pagina1.html          # Tabela de Harmonização
    │   ├── pagina2.html          # Carrinho (estático)
    │   ├── pagina3.html          # Sobre Nós (história)
    │   ├── pagina4.html          # Clube dos Vinhos
    │   ├── pagina5.html          # Login/Registrar-se
    │   ├── chatue.pagina.html    # Produto – Chateau Grand Puy Lacoste
    │   ├── espumante.pagina.html # Produto – Salton Moscatel
    │   ├── branco2.pagina.html   # Produto – Casillero del Diablo (branco)
    │   ├── branco.pagina.html    # Produto – Sauvignon Blanc
    │   ├── bordro2.pagina.html   # Produto – Gran Reserva Concha y Toro
    │   ├── bordo.pagina.html     # Produto – Pérgola Bordô
    │   ├── rose.pagina.html      # Produto – Casal Garcia Rosé
    │   └── rose2.pagina.html     # Produto – Toro Loco Rosé
    │
    ├── css/
    │    ├── style.css
    │    ├── pagina1.style.css
    │    ├── pagina2.style.css
    │    ├── pagina3.style.css
    │    ├── pagina4.style.css
    │    ├── pagina5.style.css
    │    ├── efeitos.css
    │    ├── confirmacao.css
    │    └── comprar.pagina.css
    │ 
    │
    └── assets/
        └── imgs/
            ├── casillero-del-diablo.webp
            ├── bordo.png
            ├── espumante.jpg
            ├── toro-loco-rose.jpg
            ├── bordo-2.jpg
            ├── branco.jpg
            ├── branco-2.jpg
            ├── Chateau-Grand.jpg
            ├── Confirmado.gif
            ├── image-0.webp
            ├── rose.jpg
            ├── vinho-de-mesa-ou-vinho-fino-2-blog-setembro-22.jpg
            └── LOGO.png
```

> Observação: projeto **estático**, sem back‑end.

---

## Navegação & seções

- **Header** com links: *Clube de Vinhos*, *Sobre Nós*, *Login/Registrar-se*, *Vídeos* (YouTube), *Carrinho* e *Tabela de Harmonização*.
- **Home** com imagem de **capa** e seção **“Mais vendidos”** (grade de produtos).
- **Rodapé** com aviso de direitos autorais.

---

## Conteúdo institucional (resumo)

A Vinheria Agnello é um negócio familiar de São Paulo, com mais de 15 anos no mercado, que cresceu mantendo atendimento consultivo. A gestão é feita por **Giulio** (fundador) e **Bianca** (filha), apoiados por uma equipe de seis pessoas e por um ERP que integra finanças, compras e estoque. Há cuidado específico com armazenagem para preservar rótulos de maior valor (luz, calor e vibração sob controle).

---

## Clube dos Vinhos (resumo)

Plano com **2 garrafas por mês**, curado pelo sommelier **Rodrigo Colon**, priorizando rótulos com **ótimo custo‑benefício** e vínculo temático (regiões, uvas e estilos). Envios até o **dia 15** de cada mês (primeiro envio no mês seguinte à confirmação do pagamento) e **cancelamento livre**.

---

## Tabela de harmonização (resumo)

- **Espumante Brut** → entradas leves; queijos frescos; frituras  
- **Sauvignon Blanc** → saladas; peixes; culinária japonesa  
- **Chardonnay (sem madeira)** → frango grelhado; risotos leves  
- **Chardonnay (com madeira)** → massas ao molho branco; carnes brancas  
- **Pinot Noir** → aves; cogumelos; massas ao molho vermelho  
- **Merlot** → carnes magras; pizzas; queijos de média intensidade  
- **Cabernet Sauvignon** → carnes vermelhas; cordeiro  
- **Malbec** → churrasco; queijos curados; carnes assadas  
- **Vinho do Porto / Moscatel** → sobremesas; chocolate; frutas secas  

---

## Tecnologias

- **HTML5** e **CSS3** (sem JavaScript).

---

## Efeitos visuais, animações e transições (CSS)

O site usa **efeitos leves, 100% em CSS**, para feedback visual e micro‑interações.

### 1) Estados de *hover* (links, botões e cards)
- **Transições suaves** em `color`, `background-color`, `box-shadow` e `transform` (200–300ms; `ease`/`ease-in-out`).
- **Cards de produto** e **imagens** ganham leve **escala** e/ou **sombra** ao passar o mouse.

```css
/* Transições padrão */
:root { --t: .25s ease; }
.nav a, .btn, .card, .card img { transition: all var(--t); }

/* Hover em links do menu */
.nav a:hover { color: #8B0000; text-decoration: underline; }

/* Hover em cards de produto */
.card:hover { transform: translateY(-2px) scale(1.02); box-shadow: 0 10px 24px rgba(0,0,0,.12); }
.card:hover img { filter: contrast(1.03) saturate(1.02); }
```

### 2) Foco de acessibilidade (*focus states*)
- Realce visível para navegação por teclado (ex.: `outline`/`box-shadow`).

```css
:where(a, button, input):focus-visible { outline: 3px solid #8B0000; outline-offset: 2px; }
```

### 3) Separadores e micro‑animações visuais
- Separadores de seção com linhas/asteriscos estilizados.
- **Confirmação** usando `Confirmado.gif` em telas de compra/confirmar (animação via GIF).

```css
.hr { height: 1px; background: linear-gradient(90deg, transparent, #8B0000, transparent); opacity: .5; }
```

### 4) Formulários (página de Login/Registrar‑se)
- *Hover/focus* em campos e botões com transição de cor/borda.

```css
input, select { transition: border-color .2s ease, box-shadow .2s ease; }
input:focus { border-color: #8B0000; box-shadow: 0 0 0 3px rgb(139 0 0 / .15); }
.btn-primary { background: #8B0000; color: #fff; }
.btn-primary:hover { filter: brightness(1.05); }
```

> **Notas**
> - Efeitos foram implementados apenas com **CSS** para manter simplicidade e desempenho.
> - A duração padrão sugerida é **200–300ms** para transições perceptíveis sem distrair.

---

## Executar localmente

1. Clone o repositório.  
2. Abra `index.html` no navegador (duplo clique) ou rode com um *Live Server* para recarregamento automático.

---

## Deploy (GitHub Pages)

1. Repositório → **Settings › Pages**.  
2. **Source**: *Deploy from a branch*.  
3. Selecione `branch` (ex.: `main`) e **pasta** (`/` raiz ou `docs/`).  
4. Publicação em URL do tipo: `https://USUÁRIO.github.io/NOME_DO_REPO/`.

> Para projetos com `docs/` ou geradores estáticos, adicione `.nojekyll` na raiz.

---

## Status & limitações

- Páginas internas estáticas (ex.: *Carrinho* apenas ilustrativo).  
- Link de **Vídeos** abre conteúdo externo (YouTube).  
- Páginas de **produto** são exemplos com preço/imagem.

---

## Roadmap (ideias de evolução)

- Carrinho funcional com JavaScript + `localStorage` (ou back‑end leve).
- Página de produto com ficha técnica, avaliações e recomendações.
- Catálogo dinâmico (JSON/API fake) e filtros por uva, país e faixa de preço.
- Acessibilidade: contraste, navegação por teclado, atributos `aria-*` complementares.
- **SEO**: `<title>`, meta description, Open Graph/Twitter Cards e favicon.
- Otimização de imagens (compressão, `loading="lazy"`, formatos modernos).

---

## Licença

Sem arquivo de licença.

---

## Créditos

Projeto educacional/demonstração. Marcas, rótulos e imagens pertencem aos seus respectivos proprietários.

