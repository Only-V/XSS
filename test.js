// ajouterChamp.js

document.addEventListener('DOMContentLoaded', function () {
    // Récupérer le champ username
    var usernameField = document.getElementById('username');

    if (usernameField) {
        // Récupérer le conteneur immédiat du champ username (div form-group)
        var usernameContainer = usernameField.parentNode;

        // Créer un nouveau conteneur de champ identique (classe "form-group")
        var newFormGroup = document.createElement('div');
        newFormGroup.className = 'form-group';

        // Créer le nouvel input avec la classe "form-control"
        var newInput = document.createElement('input');
        newInput.setAttribute('type', 'text');
        newInput.setAttribute('id', 'nouveauChamp');
        newInput.setAttribute('name', 'nouveauChamp');
        newInput.setAttribute('placeholder', 'Nouveau champ');
        newInput.className = 'form-control';

        // Ajouter l'input dans le nouveau conteneur
        newFormGroup.appendChild(newInput);

        // Insérer le nouveau conteneur **avant** le conteneur du champ username
        usernameContainer.parentNode.insertBefore(newFormGroup, usernameContainer);
    } else {
        console.error('Champ "username" introuvable.');
    }
});
