import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
/* L'instruction suivante permet de changer le enpoint de notre application */
  /* dev: {
    rollupOptions: {
      input: 'src/app.js'
    }
  }, */
  plugins: [svelte()],
});
