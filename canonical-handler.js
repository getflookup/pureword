(function () {
  "use strict";
  const { protocol, host, pathname, search, hash } = window.location;
  const origin = protocol + "//" + host;
  let newPath = pathname;
  let needsUpdate = false;
  if (pathname.endsWith("/index.html")) {
    newPath = pathname.slice(0, -10);
    needsUpdate = true;
  } else if (pathname === "/index.html") {
    newPath = "/";
    needsUpdate = true;
  } else if (pathname.endsWith(".html")) {
    newPath = pathname.slice(0, -5);
    needsUpdate = true;
  }
  if (search) {
    const params = new URLSearchParams(search);
    const utmParams = {};
    let hasUTM = false;
    params.forEach((value, key) => {
      if (key.startsWith("utm_")) {
        utmParams[key] = value;
        hasUTM = true;
      }
    });
    if (hasUTM) {
      try {
        localStorage.setItem("utm_params", JSON.stringify(utmParams));
      } catch (e) {}
    }
    needsUpdate = true;
  }
  if (needsUpdate) {
    const canonicalURL = origin + newPath + hash;
    window.history.replaceState({}, document.title, canonicalURL);
  }
})();
