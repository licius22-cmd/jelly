import { defineConfig } from 'vite';

export default defineConfig({
  // Configuração base do Vite. 
  // Mantemos simples, apenas para a Cloudflare conseguir ler e publicar o site.
  build: {
    outDir: 'dist',
  }
});
