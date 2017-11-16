"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var http = require("http");
var url = require("url");
var blappSync = require("./blappSync");
var assetStorage = require("./assetStorage");
var rootDir = "build/";
var server = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true, false);
    var isApk = false;
    var pathName = null;
    if (urlObj.pathname == '/') {
        // console.log('got a /', JSON.stringify(urlObj));
        pathName = 'index.html';
        // res.writeHead(301,
        //     { Location: '/index.html' }
        // );
        // res.end();
    }
    else if (urlObj.pathname == '/downloadapk') {
        pathName = 'app-release.apk';
        isApk = true;
    }
    else if (urlObj.pathname.indexOf('/userassets') == 0) {
        var fileName = urlObj.pathname.substr('/userassets/'.length);
        console.log("now serving " + req.method + ":" + urlObj.pathname);
        if (req.method == 'POST') {
            // ASSETS : support a PUT URI to create new assets
            assetStorage.storeFile(fileName, req, function (name) {
                // return name to the client
                console.log('storeFile success', name);
                res.writeHead(200);
                res.end("{\"name\":\"" + name + "\",\"error\":null}");
            }, function (err) {
                // return error to the client
                console.log('storeFile error', JSON.stringify(err));
                res.writeHead(200);
                res.end("{\"name\":null,\"error\":\"" + err.message + "\"}");
            });
        }
        else if (req.method == 'GET') {
            console.log('request headers:', JSON.stringify(req.headers));
            if (req.headers['if-none-match'] == 'immutable'
                || req.headers['If-None-Match'] == 'immutable') {
                console.log('found etag, returning 304');
                res.setHeader('Cache-Control', 'max-age=5');
                res.setHeader('ETag', 'immutable');
                res.writeHead(304);
                res.end();
            }
            else {
                // ASSETS : asset uri maps to azure storage uri
                assetStorage.getFile(fileName, function (err, result) {
                    if (err) {
                        res.writeHead(500);
                    }
                    else {
                        res.setHeader('Cache-Control', 'max-age=5');
                        res.setHeader('ETag', 'immutable');
                        console.log('piping blob to http response');
                        result.on('error', function (error) {
                            res.writeHead(error.statusCode);
                        });
                        result.pipe(res);
                    }
                });
            }
        }
    }
    else {
        pathName = urlObj.pathname;
    }
    ;
    if (pathName) {
        console.log("serving file:" + (rootDir + pathName));
        fs.readFile(rootDir + pathName, function (err, data) {
            if (err) {
                console.log('error trying to serve with pathname=', urlObj.pathname);
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            }
            if (isApk) {
                res.setHeader('Content-Disposition', 'attachment; filename="blockapps.apk"');
                res.setHeader('Content-Type', 'application/vnd.android.package-archive');
            }
            res.writeHead(200);
            res.end(data);
        });
    }
    else {
        // it was handled specially
    }
}).listen(process.env.PORT || '8080');
blappSync.init(server);
console.log('listening on port', (process.env.PORT || '8080'));
//# sourceMappingURL=server.js.map