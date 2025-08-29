import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    headers: mode === 'development' ? {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://wybhtprxiwgzmpmnfceq.supabase.co;",
    } : undefined,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
  build: {
    minify: mode === 'production' ? 'terser' : false,
    manifest: true,
    assetsDir: 'assets',
    outDir: 'dist',
    base: '/',
    sourcemap: mode === 'development',
    terserOptions: {
      compress: {
        drop_debugger: mode === 'production',
      },
      mangle: {
        safari10: true,
      },
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) {
            return 'assets/[name]-[hash][extname]';
          }
          const info = assetInfo.name.split('.')
          const extType = info[info.length - 1]
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
            return `assets/media/[name]-[hash][extname]`
          }
          if (/\.(png|jpe?g|gif|svg|webp|avif)(\?.*)?$/i.test(assetInfo.name)) {
            return `assets/img/[name]-[hash][extname]`
          }
          if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash][extname]`
          }
          return `assets/${extType}/[name]-[hash][extname]`
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/').pop()?.split('.')[0] || 'chunk'
            : 'chunk';
          return mode === 'production' ? `assets/[hash]-${facadeModuleId.toLowerCase()}.js` : `assets/js/[name]-[hash].js`;
        },
        entryFileNames: mode === 'production' ? 'assets/[hash].js' : 'assets/js/[name]-[hash].js',
      },
    },
  },
}));
