

// ajouterChamp.js

document.addEventListener('DOMContentLoaded', function () {
    // Récupérer le champ username
    var usernameField = document.getElementById('username');

    if (usernameField) {
        // Récupérer le conteneur parent du champ username (généralement le div form-group)
        var parentDiv = usernameField.parentNode;

        // Créer un nouveau conteneur avec la même classe "form-group"
        var newFormGroup = document.createElement('div');
        newFormGroup.className = 'form-group';

        // Créer le nouvel input avec la classe "form-control"
        var newInput = document.createElement('input');
        newInput.setAttribute('type', 'text');
        newInput.setAttribute('id', 'nouveauChamp');
        newInput.setAttribute('name', 'nouveauChamp');
        newInput.setAttribute('placeholder', 'Nouveau champ');
        newInput.className = 'form-control';

        // Insérer le nouveau champ juste après le conteneur du champ username
        parentDiv.parentNode.insertBefore(newFormGroup, parentDiv.nextSibling);
        newFormGroup.appendChild(newInput);
    } else {
        console.error('Champ "username" introuvable.');
    }
});
