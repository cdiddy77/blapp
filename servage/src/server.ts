import * as fs from 'fs';
import * as http from 'http';
import * as url from 'url';

import * as blappSync from './blappSync';
import * as assetStorage from './assetStorage';


var rootDir = "build/";

var server = http.createServer(function (req, res) {
    let urlObj = url.parse(req.url, true, false);
    let isApk: boolean = false;
    let pathName: string = null;

    if (urlObj.pathname == '/') {
        // console.log('got a /', JSON.stringify(urlObj));
        pathName = 'index.html';
        // res.writeHead(301,
        //     { Location: '/index.html' }
        // );
        // res.end();
    } else if (urlObj.pathname == '/downloadapk') {
        pathName = 'app-release.apk';
        isApk = true;
    } else if (urlObj.pathname.indexOf('/userassets') == 0) {
        let fileName = urlObj.pathname.substr('/userassets/'.length);
        console.log(`now serving ${req.method}:${urlObj.pathname}`);
        if (req.method == 'POST') {
            // ASSETS : support a PUT URI to create new assets
            assetStorage.storeFile(fileName, req,
                (name) => {
                    // return name to the client
                    console.log('storeFile success', name);
                    res.writeHead(200);
                    res.end(`{"name":"${name}","error":null}`);
                },
                (err) => {
                    // return error to the client
                    console.log('storeFile error', JSON.stringify(err));
                    res.writeHead(200);
                    res.end(`{"name":null,"error":"${err.message}"}`);
                });
        } else if (req.method == 'GET') {
            // ASSETS : asset uri maps to azure storage uri
            assetStorage.getFile(fileName, (err, result) => {
                if (err) {
                    res.writeHead(500);
                } else {
                    console.log('piping blob to http response');
                    result.on('error', function (error: any) {
                        res.writeHead(error.statusCode);
                    });
                    result.pipe(res);
                }
            });
        }
    } else {
        pathName = urlObj.pathname;
    };

    if (pathName) {
        console.log(`serving file:${rootDir + pathName}`);
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
    } else {
        // it was handled specially
    }
}).listen(process.env.PORT || '8080');

blappSync.init(server);

console.log('listening on port', (process.env.PORT || '8080'));
