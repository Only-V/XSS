// Intercepter fetch()
const originalFetch = fetch;
fetch = async (...args) => {
  console.log('Fetch intercepted:', ...args);
  const response = await originalFetch(...args);
  return response;
};

// Intercepter XMLHttpRequest
(function() {
  const originalOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(method, url) {
    console.log(`Intercepted XHR request: ${method} ${url}`);
    return originalOpen.apply(this, arguments);
  };
})();
