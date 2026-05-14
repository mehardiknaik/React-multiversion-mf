import('./bootstrap').catch(err => {
    console.error('Critical Error during bootstrap:', err);
    const root = document.getElementById('root');
    if (root) {
        root.innerHTML = `
            <div style="padding: 20px; font-family: sans-serif;">
                <h1 style="color: red;">Failed to load application</h1>
                <p>One or more remote services might be unavailable.</p>
                <pre style="background: #eee; padding: 10px;">${err.message}</pre>
                <button onclick="window.location.reload()">Retry</button>
            </div>
        `;
    }
});