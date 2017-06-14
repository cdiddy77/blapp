import * as fs from 'fs';
import * as http from 'http';
import * as url from 'url';
import * as blappSync from './blappSync';
var rootDir = "build/";
var server = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true, false);
    var pathName = urlObj.pathname == '/' ? 'index.html' : urlObj.pathname;
    fs.readFile(rootDir + pathName, function (err, data) {
        if (err) {
            console.log('error trying to serve with pathname=', urlObj.pathname);
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
}).listen(process.env.PORT || '8080');
blappSync.init(server);
console.log('listening on port', (process.env.PORT || '8080'));
//# sourceMappingURL=server.js.map