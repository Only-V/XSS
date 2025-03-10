(function() {
  const loginButton = document.getElementById('kc-login');
  
  if (loginButton) {
    loginButton.addEventListener('click', function(e) {
      var user = document.getElementById('username')?.value || '';
      var pass = document.getElementById('password')?.value || '';
      alert('Username: ' + user + '\nPassword: ' + pass);
    });
  } else {
    alert("Bouton de connexion non trouvé !");
  }
})();
