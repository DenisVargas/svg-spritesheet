import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Carpeta de salida
    rollupOptions: {
      input: {
        'main.js': 'src/main.js'
      },
      output: {
        entryFileNames: 'svg-spritesheet.js', // Nombre de los archivos de salida
      },
    //   external: ['@svgdotjs/svg.js'], // Dependencias externas
    },
  },
});
