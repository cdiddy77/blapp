"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io = require("socket.io");
var uuid = require("uuid");
var svcTypes = require("../../client/shared/src/ServiceTypes");
var sessionMap = {};
function init(server) {
    console.log('blappSync.init');
    var ios = io(server);
    ios.on('connection', function (socket) {
        console.log('socketio connection');
        socket.on('disconnect', function () {
            console.log('socketio disconnect');
        });
        socket.on('createSessionRequest', function () {
            var sessionId = uuid.v4();
            sessionId = createMinimalId(sessionId);
            sessionMap[sessionId] = {
                lastControlMessage: svcTypes.createCodeChangeControlMessage(''),
                sharedVars: {}
            };
            var response = { pairingCode: sessionId };
            socket.emit('createSessionResponse', response);
            console.log('createSessionRequest', sessionId);
            socket.join(sessionId);
        });
        socket.on('joinSessionRequest', function (sid) {
            console.log('joinSessionRequest', sid);
            var sessionResponse = {
                pairingCode: "noexist",
                executeCode: "",
                sharedVars: {}
            };
            if (sessionMap[sid]) {
                console.log("found sid " + sid);
                socket.join(sid);
                sessionResponse = {
                    pairingCode: sid,
                    executeCode: sessionMap[sid].lastControlMessage.code,
                    sharedVars: sessionMap[sid].sharedVars
                };
            }
            else {
                console.log("did not find sid " + sid);
            }
            socket.emit('joinSessionResponse', sessionResponse);
            console.log('sending joinSessionResponse', sessionResponse);
        });
        socket.on('simctrlmsg', function (sid, data) {
            console.log('simctrlmsg', sid, data.type);
            ios.to(sid).emit('simctrlmsg', data);
            if (!sessionMap[sid]) {
                console.error("simctrlmsg for unknown sid " + sid + ", dropping it on the floor");
            }
            else {
                if (data.type == 'code_change') {
                    sessionMap[sid].lastControlMessage = data;
                }
            }
        });
        socket.on('setShareVar', function (sid, data) {
            console.log('setShareVar', sid, data.name);
            var session = sessionMap[sid];
            if (!session) {
                console.error('unknown session', sid);
                return;
            }
            session.sharedVars[data.name] = data.value;
            ios.to(sid).emit('shareVarUpdated', data);
        });
    });
}
exports.init = init;
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
//# sourceMappingURL=blappSync.js.map