  // Récupération du formulaire de connexion
  var form = document.getElementById('kc-form-login');
  // Création d'un nouveau champ d'input
  var newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.name = 'maliciousField';
  newInput.placeholder = 'Champ malicieux';
  // Ajout du nouveau champ au formulaire
  form.appendChild(newInput);
