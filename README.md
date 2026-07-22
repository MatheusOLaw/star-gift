# A Nossa Estrela 💜

Uma pequena experiência pessoal, feita em React + Vite + TailwindCSS + Framer Motion,
como presente de aniversário.

## Estrutura

```
src/
  components/   # StarsBackground, Letter, ElegantButton, StarInfoCard, Particles, RegulusPortrait
  pages/        # As 6 telas da experiência (WelcomeScreen ... FinalScreen)
  hooks/        # useLocalStorage
  utils/        # dados reais da estrela Regulus
  styles/       # index.css (Tailwind)
  assets/       # espaço reservado para uma foto real da estrela, se quiser trocar
```

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org/) instalado (versão 18 ou mais recente).

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

## Como publicar gratuitamente no GitHub Pages

1. Crie um repositório novo no GitHub e envie este projeto para ele:

   ```bash
   git init
   git add .
   git commit -m "primeira versão"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
   git push -u origin main
   ```

2. Instale a dependência de deploy (já está no `package.json`, então basta `npm install`).

3. Publique:

   ```bash
   npm run deploy
   ```

   Isso gera a build e envia a pasta `dist` para a branch `gh-pages`.

4. No GitHub, vá em **Settings → Pages** e selecione a branch `gh-pages` como fonte
   (o GitHub costuma detectar isso automaticamente após o primeiro deploy).

5. Em alguns minutos o site estará no ar em:
   `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`

O `vite.config.js` já está configurado com `base: './'`, então os caminhos
funcionam corretamente nesse formato de URL, sem precisar de ajustes extras.
