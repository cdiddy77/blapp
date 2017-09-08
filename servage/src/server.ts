import * as fs from 'fs';
import * as http from 'http';
import * as url from 'url';

import * as blappSync from './blappSync';


var rootDir = "build/";

var server = http.createServer(function (req, res) {
    let urlObj = url.parse(req.url, true, false);
    let isApk: boolean = false;
    let pathName: string;
    if (urlObj.pathname == '/') {
        // console.log('got a /', JSON.stringify(urlObj));
        // pathName = 'index.html';
        res.writeHead(301,
            { Location: '/index.html' }
        );
        res.end();
    } else if (urlObj.pathname == '/downloadapk') {
        pathName = 'app-release.apk';
        isApk = true;
    } else {
        pathName = urlObj.pathname;
    };
    //console.log(`serving file:${rootDir + pathName}`);
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
}).listen(process.env.PORT || '8080');

blappSync.init(server);

console.log('listening on port', (process.env.PORT || '8080'));
