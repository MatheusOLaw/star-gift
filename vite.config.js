import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' garante que os caminhos dos arquivos gerados sejam relativos,
// o que funciona tanto no GitHub Pages (projeto ou usuário) quanto localmente.
export default defineConfig({
  plugins: [react()],
  base: './',
})
