"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var io = require("socket.io");
var uuid = require("uuid");
var svcTypes = require("../../client/shared/src/ServiceTypes");
var sessionShare = require("./sessionShare");
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
                sharedVars: {},
                dirty: false,
                isPublished: false
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
            var sessionResponseAsync = false;
            if (sessionMap[sid]) {
                console.log("found sid " + sid);
                socket.join(sid);
                sessionResponse = {
                    pairingCode: sid,
                    executeCode: sessionMap[sid].lastControlMessage.code,
                    sharedVars: sessionMap[sid].sharedVars
                };
            }
            else if (sid.length > 1 && sid[0] == '!') {
                sid = sid.substring(1);
                if (sessionMap[sid]) {
                    console.log("found shared sid " + sid);
                    socket.join(sid);
                    sessionResponse = {
                        pairingCode: sid,
                        executeCode: sessionMap[sid].lastControlMessage.code,
                        sharedVars: sessionMap[sid].sharedVars
                    };
                }
                else {
                    sessionResponseAsync = true;
                    sessionShare.restoreSessionAsync(sid, function (data, err) {
                        if (data) {
                            var projState = data;
                            projState.dirty = false;
                            projState.isPublished = true;
                            sessionMap[sid] = projState;
                            sessionResponse.executeCode = projState.lastControlMessage.code;
                            sessionResponse.pairingCode = sid;
                            sessionResponse.sharedVars = projState.sharedVars;
                        }
                        else {
                            sessionResponse = {
                                pairingCode: "noexist",
                                executeCode: "",
                                sharedVars: {}
                            };
                        }
                        socket.emit('joinSessionResponse', sessionResponse);
                    });
                }
            }
            else {
                console.log("did not find sid " + sid);
            }
            if (!sessionResponseAsync) {
                socket.emit('joinSessionResponse', sessionResponse);
                console.log('sending joinSessionResponse'); //, sessionResponse);
            }
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
            // console.log('setShareVar', sid, data.name, data.value);
            var session = sessionMap[sid];
            if (!session) {
                console.error('unknown session', sid);
                return;
            }
            session.sharedVars[data.name] = data.value;
            ios.to(sid).emit('shareVarUpdated', __assign({ serverTime: new Date().getTime() }, data));
        });
        socket.on('publishSessionRequest', function (sid, data) {
            console.log('got publish request', sid, JSON.stringify(data));
            sessionShare.storeSession(data.nameHint, sessionMap[sid], function (name) {
                console.log('created blob', name);
                var result = {
                    pairingCode: sid,
                    shareName: name,
                    errorMessage: null
                };
                socket.emit('publishSessionResponse', result);
            }, function (err) {
                console.log('failed to create blob', err.message);
                var result = {
                    pairingCode: sid,
                    shareName: null,
                    errorMessage: err.message
                };
                socket.emit('publishSessionResponse', result);
            });
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