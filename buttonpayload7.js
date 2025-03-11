console.log('Payload bouton chargé !');

var btn = document.getElementById('kc-login');

if (btn) {
    btn.onclick = function() {
        alert('Test.js');
        onclick="this.disabled = 'disabled';submit();"
        onclick="togglePasswordVisibility(event)"
    };
} else {
    console.log('Bouton non trouvé');
}
