var fs = require('fs');
var http = require('http');
var url = require('url');
var rootDir = "build/";

http.createServer(function (req, res) {
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
console.log('listening on port', (process.env.PORT || '8080'));
