import { ModuleFederationPlugin } from '@module-federation/enhanced';

export const getMFConfig = (isProd: boolean) => {
    const __node_env = isProd ? 'production' : 'development';
    console.log('MF Config for:', __node_env);
    return new ModuleFederationPlugin({
        name: 'host',
        manifest: true,
        filename: `remoteEntry.js`,
        remotes: {
            app1: isProd
                ? `app1@/app1/mf-manifest.json` // Replace with actual production URL
                : `app1@http://localhost:3001/mf-manifest.json?t=${Date.now()}`,
            app2: isProd
                ? `app2@/app2/mf-manifest.json` // Replace with actual production URL
                : "app2@http://localhost:3002/remoteEntry.js",
            app3: isProd
                ? `app3@/app3/mf-manifest.json` // Replace with actual production URL
                : "app3@http://localhost:3003/mf-manifest.json",
            app4: isProd
                ? `app4@/app4/mf-manifest.json` // Replace with actual production URL
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
