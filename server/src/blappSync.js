import * as io from 'socket.io';
import * as uuid from 'uuid';
import * as svcTypes from '../../client/shared/src/ServiceTypes';
var sessionMap = {};
export function init(server) {
    console.log('blappSync.init');
    let ios = io(server);
    ios.on('connection', (socket) => {
        console.log('socketio connection');
        socket.on('disconnect', () => {
            console.log('socketio disconnect');
        });
        socket.on('createSessionRequest', () => {
            let sessionId = uuid.v4();
            sessionId = createMinimalId(sessionId);
            sessionMap[sessionId] = {
                lastControlMessage: svcTypes.createCodeChangeControlMessage(''),
                sharedVars: {}
            };
            let response = { pairingCode: sessionId };
            socket.emit('createSessionResponse', response);
            console.log('createSessionRequest', sessionId);
            socket.join(sessionId);
        });
        socket.on('joinSessionRequest', (sid) => {
            console.log('joinSessionRequest', sid);
            let sessionResponse = {
                pairingCode: "noexist",
                executeCode: "",
                sharedVars: {}
            };
            if (sessionMap[sid]) {
                console.log(`found sid ${sid}`);
                socket.join(sid);
                sessionResponse = {
                    pairingCode: sid,
                    executeCode: sessionMap[sid].lastControlMessage.code,
                    sharedVars: sessionMap[sid].sharedVars
                };
            }
            else {
                console.log(`did not find sid ${sid}`);
            }
            socket.emit('joinSessionResponse', sessionResponse);
            console.log('sending joinSessionResponse', sessionResponse);
        });
        socket.on('simctrlmsg', (sid, data) => {
            console.log('simctrlmsg', sid, data.type);
            ios.to(sid).emit('simctrlmsg', data);
            if (!sessionMap[sid]) {
                console.error(`simctrlmsg for unknown sid ${sid}, dropping it on the floor`);
            }
            else {
                if (data.type == 'code_change') {
                    sessionMap[sid].lastControlMessage = data;
                }
            }
        });
        socket.on('setShareVar', (sid, data) => {
            // console.log('setShareVar', sid, data.name, data.value);
            let session = sessionMap[sid];
            if (!session) {
                console.error('unknown session', sid);
                return;
            }
            session.sharedVars[data.name] = data.value;
            ios.to(sid).emit('shareVarUpdated', Object.assign({ serverTime: new Date().getTime() }, data));
        });
    });
}
function createMinimalId(id) {
    let length = 4;
    let smap = sessionMap;
    while (length < id.length) {
        let result = id.substr(0, length);
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