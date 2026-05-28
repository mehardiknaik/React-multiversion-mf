import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  const base = isProd ? `${process.env.GH_PAGES_BASE_URL}/vite-host/` : "/";
  return {
    base,
    plugins: [react(),
    federation({
      name: 'vite_host',
      manifest: true,
      remotes: {
        app1: {
          // type: "module",
          name: "app1",
          entry: isProd ? "/app1/mf-manifest.json" : "http://localhost:3001/mf-manifest.json",
        },
        app2: {
          name: "app2",
          entry: isProd ? "/app2/mf-manifest.json" : "http://localhost:3002/mf-manifest.json",
        },
        app3: {
          name: "app3",
          entry: isProd ? "/app3/mf-manifest.json" : "http://localhost:3003/mf-manifest.json",
        },
        app4: {
          name: "app4",
          entry: isProd ? "/app4/mf-manifest.json" : "http://localhost:3004/mf-manifest.json",
        },
      },
      shareStrategy: "loaded-first",
      shared: {
        react: {
          name: 'react-19',
        },
        'react-dom': {
          name: 'react-dom-19'
        },
      },
    }),
    ],
    build: {
      target: 'chrome89',
      outDir: "../dist/vite-host"
    },
  }
})
