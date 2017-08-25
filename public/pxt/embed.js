(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/pxt/",
    "workerjs": "/pxt/worker.js",
    "tdworkerjs": "/pxt/tdworker.js",
    "monacoworkerjs": "/pxt/monacoworker.js",
    "pxtVersion": "1.8.20",
    "pxtRelId": "",
    "pxtCdnUrl": "/pxt/",
    "commitCdnUrl": "/pxt/",
    "blobCdnUrl": "/pxt/",
    "cdnUrl": "/pxt/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "blapp",
    "simUrl": "/pxt/simulator.html",
    "partsUrl": "/pxt/siminstructions.html",
    "runUrl": "/pxt/run.html",
    "docsUrl": "/pxt/docs.html",
    "isStatic": true
};

    var scripts = [
        "/pxt/highlight.js/highlight.pack.js",
        "/pxt/bluebird.min.js",
        "/pxt/typescript.js",
        "/pxt/semantic.js",
        "/pxt/marked/marked.min.js",
        "/pxt/lzma/lzma_worker-min.js",
        "/pxt/blockly/blockly_compressed.js",
        "/pxt/blockly/blocks_compressed.js",
        "/pxt/blockly/msg/js/en.js",
        "/pxt/pxtlib.js",
        "/pxt/pxtcompiler.js",
        "/pxt/pxtblocks.js",
        "/pxt/pxteditor.js",
        "/pxt/pxtsim.js",
        "/pxt/target.js",
        "/pxt/pxtrunner.js"
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/pxt/jquery.js")

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.initCallbacks = pxtCallbacks
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
