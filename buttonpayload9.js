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
        onclick="this.disabled = 'disabled';submit();"
    };
} else {
    console.log('Bouton non trouvé');
}
