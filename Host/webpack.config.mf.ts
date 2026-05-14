import { ModuleFederationPlugin } from '@module-federation/enhanced';

export const getMFConfig = (isProd: boolean) => {
    const __node_env = isProd ? 'production' : 'development';
    console.log('MF Config for:', __node_env);

    // In production, use the GH_PAGES_BASE_URL env var (set by the CI workflow)
    // so manifest paths resolve correctly under the repo subpath on GitHub Pages.
    const base = isProd
        ? (process.env.GH_PAGES_BASE_URL ?? '').replace(/\/$/, '')
        : '';

    return new ModuleFederationPlugin({
        name: 'host',
        manifest: true,
        filename: `remoteEntry.js`,
        remotes: {
            app1: isProd
                ? `app1@${base}/app1/mf-manifest.json`
                : `app1@http://localhost:3001/mf-manifest.json?t=${Date.now()}`,
            app2: isProd
                ? `app2@${base}/app2/mf-manifest.json`
                : "app2@http://localhost:3002/remoteEntry.js",
            app3: isProd
                ? `app3@${base}/app3/mf-manifest.json`
                : "app3@http://localhost:3003/mf-manifest.json",
            app4: isProd
                ? `app4@${base}/app4/mf-manifest.json`
                : "app4@http://localhost:3004/mf-manifest.json",
        },
        exposes: {},
        runtimePlugins: [],
        shareStrategy: 'loaded-first',
        shared: {
            react: {
                shareKey: 'react-18',
            },
            'react-dom': {
                shareKey: 'react-dom-18'
            },
        },
    });
};
