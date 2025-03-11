// Fonction qui crée et ajoute un champ
function createNewField() {
    // Sélectionne le formulaire par son ID
    const form = document.getElementById('kc-form-login');

    // Crée un nouveau conteneur (div) avec les classes de style
    const newFormGroup = document.createElement('div');
    newFormGroup.className = 'form-group';

    // Crée le conteneur pour l'input
    const newInputContainer = document.createElement('div');
    newInputContainer.className = 'col-xs-12 col-sm-12 col-md-8 col-lg-9';

    // Crée le champ input
    const newInput = document.createElement('input');
    newInput.className = 'form-control';  // Applique le style des champs existants
    newInput.type = 'text';               // Change en 'password' ou autre si besoin
    newInput.name = 'newField';
    newInput.id = 'newField';
    newInput.placeholder = 'Nouveau champ'; // Texte indicatif
    newInput.autocomplete = 'off';

    // Ajoute l'input au conteneur
    newInputContainer.appendChild(newInput);

    // Ajoute le conteneur à la div principale
    newFormGroup.appendChild(newInputContainer);

    // Insère le nouveau champ avant le bouton "Connexion"
    const buttons = document.getElementById('kc-form-buttons');
    form.insertBefore(newFormGroup, buttons);
}

// Appelle la fonction quand la page est complètement chargée
window.addEventListener('DOMContentLoaded', () => {
    createNewField();
});
console.log('test');
alert('1');
