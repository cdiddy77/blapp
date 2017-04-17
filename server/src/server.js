"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var http = require("http");
var url = require("url");
var io = require("socket.io");
var uuid = require("uuid");
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
var sessionMap = {};
var ios = io(server);
ios.on('connection', function (socket) {
    console.log('socketio connection');
    socket.on('disconnect', function () {
        console.log('socketio disconnect');
    });
    socket.on('createSessionRequest', function () {
        var sessionId = uuid.v4();
        sessionId = createMinimalId(sessionId);
        sessionMap[sessionId] = { code: '' };
        socket.emit('createSessionResponse', sessionId);
        console.log('createSessionRequest', sessionId);
        socket.join(sessionId);
    });
    socket.on('joinSessionRequest', function (sid) {
        console.log('joinSessionRequest', sid);
        var sessionResponse = "noexist";
        if (sessionMap[sid]) {
            console.log("found sid {sid}");
            socket.join(sid);
            sessionResponse = sid;
        }
        else {
            console.log("did not find sid {sid}");
        }
        socket.emit('joinSessionResponse', sessionResponse);
        console.log('sending joinSessionResponse', sessionResponse);
    });
    socket.on('simctrlmsg', function (sid, data) {
        console.log('simctrlmsg', sid, data.type);
        ios.to(sid).emit('simctrlmsg', data);
    });
});
function createMinimalId(id) {
    var length = 4;
    var smap = sessionMap;
    while (length < id.length) {
        var result = id.substr(0, length);
        if (!smap.hasOwnProperty(result)) {
            return result;
        }
        length++;
    }
    if (length == id.length) {
        return createMinimalId(uuid.v4());
    }
}
console.log('listening on port', (process.env.PORT || '8080'));
//# sourceMappingURL=server.js.map