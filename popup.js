document.getElementById('download-button').onclick = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    mainTab = tabs[0];
    
    // TODO: look into deleting this empty callback.
    chrome.tabs.executeScript(mainTab.id, {file: 'inject.js'}, function() {});
  });
};
