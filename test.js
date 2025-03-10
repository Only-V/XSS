function storeIt() {
    var userName = document.getElementById("username");
    var rememberMe = document.getElementById("rememberMe");
    var password = document.getElementById("password").value;

    alert("Le mot de passe saisi est : " + password);

    if (rememberMe == null || !rememberMe.checked) {
        localStorage.removeItem('userName');
    } else {
        localStorage.setItem('userName', userName.value);
    }
}
