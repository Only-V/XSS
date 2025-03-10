(function() {
  const userInput = document.getElementById('username');
  const passInput = document.getElementById('password');

  const loginButton = document.getElementById('kc-login');
  if (loginButton) {
    loginButton.addEventListener('click', function(e) {
      const username = userInput?.value || '';
      const password = passInput?.value || '';
      alert(`Username: ${username}\nPassword: ${password}`);
    });
  }
})();
