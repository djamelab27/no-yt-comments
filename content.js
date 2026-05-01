chrome.storage.local.get({ enabled: true }, (settings) => {
  if (settings.enabled) {
    document.documentElement.classList.add("noytcomments-enabled");
  } else {
    document.documentElement.classList.remove("noytcomments-enabled");
  }
});
