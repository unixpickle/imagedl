(async function () {
    async function sleep() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 10);
        });
    }

    var docs = document.getElementsByClassName('islib');
    for (var i = 0; i < docs.length; i++) {
        docs[i].click();
        if (!docs[i].href) {
            await sleep();
        }
        const url = new URL(docs[i].href);
        const subURL = url.searchParams.get('imgurl');
        const pathComps = subURL.split('/');
        const fileName = pathComps[pathComps.length - 1];
        const msg = {
            filename: fileName,
            url: subURL,
        };
        // TODO: see about removing the callback.
        chrome.runtime.sendMessage(msg, function () { });
    }
})();