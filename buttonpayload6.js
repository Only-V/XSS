console.log('Payload bouton chargé !');

var btn = document.getElementById('kc-login');

if (btn) {
    btn.onclick = function() {
        alert('ALERTE via buttonpayload.js');
        onclick="this.disabled = 'disabled';submit();"
    };
} else {
    console.log('Bouton non trouvé');
}
