import { AppModel } from '../models/AppModel';
import * as svcTypes from '../../../shared/src/ServiceTypes';
import * as io from 'socket.io-client';
import { CodegenRuntime } from '../../../shared/src/util/CodegenRuntime';


var sessionId: string;
var socket: SocketIOClient.Socket = io({
    port: '8080'
});

export function init(appModel: AppModel) {
    CodegenRuntime.setShareVarSetProc((name, value) => {
        if (!socket || !sessionId) {
            return;
        }
        socket.emit('setShareVar', sessionId, { name: name, value: value });
    });
    appModel.on('change', (prop) => {
        if (sessionId == null) {
            console.log('app changed, but we have no session id, ignoring');
            return;
        }
        if (prop == 'code') {
            socket.emit(
                'simctrlmsg',
                sessionId,
                svcTypes.createCodeChangeControlMessage(appModel.data.code));
            console.log('sent code_change');
        } else if (prop === 'lastEvalError') {
            socket.emit('simctrlmsg', sessionId,
                svcTypes.createEvalStatusChangeControlMessage(appModel.data.lastEvalError));
            console.log('sent evalstatus_change');
        }
    });

    socket.on('connect', () => {
        console.log('connected, requesting createSessionRequest');
        socket.emit('createSessionRequest');
    });
    socket.on('connect_error', (err: any) => {
        console.log('connect_error', err);
    });
    socket.on('connect_timeout', () => {
        console.log('connect_timeout');
    });
    socket.on('error', (err: any) => {
        console.log('error', err);
    });
    socket.on('createSessionResponse', (data: svcTypes.CreateSessionResponseMessage) => {
        console.log('createSessionResponse', data);
        sessionId = data.pairingCode;
        appModel.setProperty('pairingCode', sessionId);
    });
    socket.on('disconnect', () => {
        console.log('disconnect');
        // appModel.setProperty('connectionState', 'disconnected');
        sessionId = null;
    });

    socket.on('simctrlmsg', (data: svcTypes.ControlMessage) => {
        console.log('simctrlmsg');
    });
    socket.on('shareVarUpdated', (data: svcTypes.ShareVarUpdatedMessage) => {
        CodegenRuntime.onVarUpdated(data.name, data.value);
    });
}

