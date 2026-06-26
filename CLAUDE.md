# CLAUDE.md

Este arquivo fornece orientações ao Claude Code (claude.ai/code) ao trabalhar com o código deste repositório.

## Comandos

```bash
npm run dev       # inicia o servidor de desenvolvimento (Vite)
npm run build     # verifica tipos + build de produção
npm run lint      # ESLint
npm run preview   # pré-visualiza o build de produção localmente
```

Não há testes automatizados.

## Arquitetura

SPA em React 19 + TypeScript + Vite. Sem biblioteca de gerenciamento de estado; o estado é local aos componentes.

**Roteamento** (`src/App.tsx`) — rotas em português:
- `/` Home, `/sobre` About, `/karate` KaratePage, `/videos` Videos, `/contato` Contact, `/galeria` GalleryPage, `/noticias` News, `/noticias/:slug` NewsDetails

**Composição de páginas** — `Home` é uma página de rolagem única que importa e renderiza vários componentes em sequência (Navbar → Hero → About → VideoLibrary → HomeNews → HireSection → Footer). `About` é usado tanto como página independente (`/sobre`) quanto embutido dentro de `Home`. O componente `Home` trata `location.state.scrollTo` para rolar até uma seção após a navegação vinda de outra página.

**Sistema de notícias** — Todo o conteúdo das notícias está em `src/data/newsData.tsx` como um único array exportado `news`. Cada entrada possui:
- `slug` — usado como parâmetro de URL em `/noticias/:slug`
- `title`, `subtitle`, `date` (ex: `"Junho • 2026"`), `location`
- `cover` — imagem importada usada como miniatura do card
- `content` — string de múltiplas linhas (template literal)
- `gallery` — array de imagens importadas
- `videos` — array de IDs de vídeos do YouTube (strings)

Para adicionar uma nova notícia: adicione as imagens em `src/assets/images/<nome-do-evento>/`, importe-as no topo de `newsData.tsx` e insira um novo objeto no início do array `news` (mais recente primeiro).

**Estilos** — Cada componente e página tem um arquivo CSS correspondente em `src/styles/` (ex: `Navbar.tsx` → `navbar.css`). Os estilos globais de base estão em `src/styles/global.css`.

**Imagens** — Armazenadas em `src/assets/images/<nome-do-evento>/`, numeradas sequencialmente (1.png, 2.png, …). As imagens são importadas estaticamente no topo de `newsData.tsx`, e não referenciadas por strings de caminho.
