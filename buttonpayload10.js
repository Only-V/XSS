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
    };
} else {
    console.log('Bouton non trouvé');
}
