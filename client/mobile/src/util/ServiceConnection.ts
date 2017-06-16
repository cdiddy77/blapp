import { AppModel } from '../models/AppModel';
import * as svcTypes from '../../../shared/src/ServiceTypes';
import { CodegenRuntime } from '../../../shared/src/util/CodegenRuntime';

// window.navigator.userAgent = 'ReactNative';

import io from 'socket.io-client';
// var io = require('socket.io-client');

var serverUri: string = null;
var pairingCode: string = null;
var socket: SocketIOClient.Socket = null;

interface CtrlMsgData {
    type: 'code_change' | 'evalstatus_change';
    code?: string;
    evalError?: Error;
}

CodegenRuntime.setShareVarSetProc((name, value) => {
    if (!socket || !pairingCode) {
        return;
    }
    socket.emit('setShareVar', pairingCode, { name: name, value: value, clientTime: new Date().getTime() });
});

export function resetConnection(appModel: AppModel) {
    console.log('SERVICE trying to connect');

    if (appModel.serverUri !== serverUri) {
        disconnect();
        serverUri = appModel.serverUri;
        pairingCode = null;
        appModel.setProperty('connectionState', 'connecting');

        socket = io(appModel.serverUri, {
            transports: ['websocket']
        });
        socket.on('connect', () => {
            console.log('we connected');
            appModel.setProperty('connectionState', 'connected');
            if (pairingCode !== appModel.pairingCode)
                initPairing(appModel);
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
        socket.on('simctrlmsg', (data: svcTypes.ControlMessage) => {
            console.log('simctrlmsg', JSON.stringify(data));
            if (data.type === 'code_change') {
                appModel.setProperty('code', data.code);
            } else if (data.type === 'evalstatus_change') {
                appModel.setProperty('lastEvalError', data.code);
            }
        });
        socket.on('shareVarUpdated', (data: svcTypes.ShareVarUpdatedMessage) => {
            CodegenRuntime.handleUpdateSharevarDiags(data.clientTime, data.serverTime);
            CodegenRuntime.onVarUpdated(data.name, data.value);
        });
        socket.on('disconnect', () => {
            console.log('disconnect');
            appModel.setProperty('connectionState', 'disconnected');
            pairingCode = null;
        });
    } else if (pairingCode !== appModel.pairingCode) {
        initPairing(appModel);
    }
}

function initPairing(appModel: AppModel) {
    console.log(`initPairing:pairingCode=${pairingCode},appModel.pairingCode=${appModel.pairingCode}`);
    if (pairingCode) {
        socket.emit('leaveSessionRequest', pairingCode);
    }
    if (appModel.pairingCode) {
        socket.emit('joinSessionRequest', appModel.pairingCode);
        socket.on('joinSessionResponse', (data: svcTypes.JoinSessionResponseMessage) => {
            if (data.pairingCode == 'noexist') {
                appModel.setProperty('connectionState', 'unrecognized pairing code');
            } else {
                appModel.setProperty('connectionState', 'joined');
            }
            if (data.executeCode) {
                appModel.setProperty('code', data.executeCode);
            }
            console.log('joinSessionResponse', data);
            pairingCode = data.pairingCode;
            // comment
        });
    }
}

export function disconnect() {
    if (socket) {
        console.log('disconnecting');
        socket.disconnect();
        socket.close();
        socket = null;
    }
}

export function join(pairCode: string) {
    socket.emit('joinSessionRequest', pairCode);
}

