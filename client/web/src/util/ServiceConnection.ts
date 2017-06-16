import { AppModel } from '../models/AppModel';
import * as svcTypes from '../../../shared/src/ServiceTypes';
import * as io from 'socket.io-client';
import { CodegenRuntime } from '../../../shared/src/util/CodegenRuntime';

export interface ServiceConnectionHost {
    onChange(cb: (prop: string) => void): void;
    getCode(): string;
    getLastEvalError(): Error;
    setPairingCode(code: string): void;
}

var pairingCode: string = null;
var socket: SocketIOClient.Socket = io({
    port: '8080'
});

export function init(host: ServiceConnectionHost) {
    CodegenRuntime.setShareVarSetProc((name, value) => {
        if (!socket || !pairingCode) {
            return;
        }
        socket.emit('setShareVar', pairingCode, { name: name, value: value, clientTime: new Date().getTime() });
    });
    host.onChange((prop) => {
        if (pairingCode == null) {
            console.log('app changed, but we have no session id, ignoring');
            return;
        }
        if (prop == 'code') {
            socket.emit(
                'simctrlmsg',
                pairingCode,
                svcTypes.createCodeChangeControlMessage(host.getCode()));
            console.log('sent code_change');
        } else if (prop === 'lastEvalError') {
            socket.emit('simctrlmsg', pairingCode,
                svcTypes.createEvalStatusChangeControlMessage(host.getLastEvalError()));
            console.log('sent evalstatus_change');
        }
    });

    socket.on('connect', () => {
        pairingCode = window.localStorage.getItem('pairingCode');
        if (pairingCode) {
            joinSession();
        } else {
            createSession();
        }
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
        setPairingCode(data.pairingCode, host);
    });
    socket.on('joinSessionResponse', (data: svcTypes.JoinSessionResponseMessage) => {
        if (data.pairingCode == 'noexist') {
            createSession();
        } else {
            setPairingCode(data.pairingCode, host);
        }
        console.log('joinSessionResponse', data);
    });
    socket.on('disconnect', () => {
        console.log('disconnect');
        // appModel.setProperty('connectionState', 'disconnected');
        pairingCode = null;
    });

    socket.on('simctrlmsg', (data: svcTypes.ControlMessage) => {
        console.log('simctrlmsg');
    });
    socket.on('shareVarUpdated', (data: svcTypes.ShareVarUpdatedMessage) => {
        CodegenRuntime.handleUpdateSharevarDiags(data.clientTime,data.serverTime);
        CodegenRuntime.onVarUpdated(data.name,data.value);
    });
}

function createSession() {
    console.log('calling createSessionRequest');
    pairingCode = null;
    socket.emit('createSessionRequest');
}
function joinSession() {
    console.log('calling joinSessionRequest');
    socket.emit('joinSessionRequest', pairingCode);
}
function leaveSession() {
    console.log('calling leaveSessionRequest');
    socket.emit('leaveSessionRequest', pairingCode);
}

function setPairingCode(pc: string, host: ServiceConnectionHost) {
    pairingCode = pc;
    window.localStorage.setItem('pairingCode', pairingCode);
    host.setPairingCode(pairingCode);
}

export function createNewSession() {
    // leave current session
    if (pairingCode) {
        leaveSession();
    }
    // create new session
    createSession();
}

