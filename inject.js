var docs = document.getElementsByClassName('rg_l');

for (var i = 0, len = docs.length; i < len; ++i) {
  if ('undefined' !== typeof docs[i].href) {
    var subURL = decodeURIComponent(docs[i].href.split('=')[1].split('&')[0]);
    var pathComps = subURL.split('?')[0].split('/');
    var fileName = pathComps[pathComps.length-1];
    var msg = {
      filename: fileName,
      url: subURL,
    };
    // TODO: see about removing the callback.
    chrome.runtime.sendMessage(msg, function() {});
  }
}
