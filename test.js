// Récupérer les informations des champs de formulaire
const usernameField = document.querySelector('input[name="username"]');
const passwordField = document.querySelector('input[name="password"]');

const username = usernameField ? usernameField.value : '';
const password = passwordField ? passwordField.value : '';

// Afficher les données dans une alerte
alert(`Username: ${username}\nPassword: ${password}`);
