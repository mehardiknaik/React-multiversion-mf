import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite';
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  const path = process.env.GH_PAGES_BASE_URL ?? ""
  const base = isProd ? `${path}/app5/` : "";
  return {
    base,
    build: {
      outDir: "../dist/app5",
    },
    plugins: [
      federation({
        name: 'app5',
        manifest: true,
        dts: {
          generateTypes: {
            tsConfigPath: './tsconfig.app.json'
          }
        },
        filename: 'remoteEntry.js',
        exposes: {
          './Content': './src/App',
        },
        publicPath: base,
      }),
    ],
    server: {

      port: 3005,
      host: true,
    },
    preview: {
      host: true,
      port: 3005,
    },
  }
})
