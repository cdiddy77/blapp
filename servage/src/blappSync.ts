import * as http from 'http';
import * as io from 'socket.io';
import * as uuid from 'uuid';

import * as svcTypes from '../../client/shared/src/ServiceTypes';
import * as sessionShare from './sessionShare';

interface ProjectSessionState {
    lastControlMessage: svcTypes.ControlMessage;
    sharedVars: any;
    dirty: boolean;
    isPublished: boolean;
}

var sessionMap: {
    [key: string]: ProjectSessionState;
} = {};

export function init(server: any) {
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
                sharedVars: {},
                dirty: false,
                isPublished: false
            };
            let response: svcTypes.CreateSessionResponseMessage = { pairingCode: sessionId };
            socket.emit('createSessionResponse', response);
            console.log('createSessionRequest', sessionId);
            socket.join(sessionId);
        });
        socket.on('joinSessionRequest', (sid: string) => {
            console.log('joinSessionRequest', sid);
            let sessionResponse: svcTypes.JoinSessionResponseMessage = {
                pairingCode: "noexist",
                executeCode: "",
                sharedVars: {}
            };
            let sessionResponseAsync: boolean = false;
            if (sessionMap[sid]) {
                console.log(`found sid ${sid}`);
                socket.join(sid);
                sessionResponse = {
                    pairingCode: sid,
                    executeCode: sessionMap[sid].lastControlMessage.code,
                    sharedVars: sessionMap[sid].sharedVars
                };
            } else if (sid.length > 1 && sid[0] == '!') {
                sid = sid.substring(1);
                if (sessionMap[sid]) {
                    console.log(`found shared sid ${sid}`);
                    socket.join(sid);
                    sessionResponse = {
                        pairingCode: sid,
                        executeCode: sessionMap[sid].lastControlMessage.code,
                        sharedVars: sessionMap[sid].sharedVars
                    };
                } else {
                    sessionResponseAsync = true;
                    sessionShare.restoreSessionAsync(sid, (data, err) => {
                        if (data) {
                            let projState: ProjectSessionState = data;
                            projState.dirty = false;
                            projState.isPublished = true;
                            sessionMap[sid] = projState;
                            sessionResponse.executeCode = projState.lastControlMessage.code;
                            sessionResponse.pairingCode = sid;
                            sessionResponse.sharedVars = projState.sharedVars;
                        } else {
                            sessionResponse = {
                                pairingCode: "noexist",
                                executeCode: "",
                                sharedVars: {}
                            };
                        }
                        socket.emit('joinSessionResponse', sessionResponse);
                    });
                }
            } else {
                console.log(`did not find sid ${sid}`);
            }
            if (!sessionResponseAsync) {
                socket.emit('joinSessionResponse', sessionResponse);
                console.log('sending joinSessionResponse'); //, sessionResponse);
            }
        });
        socket.on('simctrlmsg', (sid: string, data: svcTypes.ControlMessage) => {
            console.log('simctrlmsg', sid, data.type);
            ios.to(sid).emit('simctrlmsg', data);
            if (!sessionMap[sid]) {
                console.error(`simctrlmsg for unknown sid ${sid}, dropping it on the floor`);
            } else {
                if (data.type == 'code_change') {
                    sessionMap[sid].lastControlMessage = data;
                }
            }
        });
        socket.on('setShareVar', (sid: string, data: svcTypes.ShareVarSetMessage) => {
            // console.log('setShareVar', sid, data.name, data.value);
            let session = sessionMap[sid];
            if (!session) {
                console.error('unknown session', sid);
                return;
            }
            session.sharedVars[data.name] = data.value;
            ios.to(sid).emit('shareVarUpdated',
                { serverTime: new Date().getTime(), ...data });
        });
        socket.on('publishSessionRequest', (sid: string, data: svcTypes.PublishSessionRequestMessage) => {
            console.log('got publish request', sid, JSON.stringify(data));
            sessionShare.storeSession(data.nameHint, sessionMap[sid], (name) => {
                console.log('created blob', name);
                let result: svcTypes.PublishSessionResponseMessage = {
                    pairingCode: sid,
                    shareName: name,
                    errorMessage: null
                };
                socket.emit('publishSessionResponse', result);
            }, (err) => {
                console.log('failed to create blob', err.message);
                let result: svcTypes.PublishSessionResponseMessage = {
                    pairingCode: sid,
                    shareName: null,
                    errorMessage: err.message
                };
                socket.emit('publishSessionResponse', result);
            });
        });
    });
}

function createMinimalId(id: string): string {
    let length: number = 4;
    let smap: any = sessionMap;
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
