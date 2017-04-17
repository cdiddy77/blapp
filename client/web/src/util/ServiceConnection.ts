import { AppModel } from '../models/AppModel';
import * as io from 'socket.io-client';
var sessionId: string;
var socket: SocketIOClient.Socket = io({
    port: '8080'
});

export function init(appModel: AppModel) {

    appModel.on('code_change', (args) => {
        socket.emit('simctrlmsg', sessionId, {
            type: 'code_change',
            code: appModel.code
        });
        console.log('sent code_change');
    });
    appModel.on('evalstatus_change', (args) => {
        socket.emit('simctrlmsg', sessionId, {
            type: 'evalstatus_change',
            code: appModel.lastEvalError
        });
        console.log('sent evalstatus_change');
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
    socket.on('createSessionResponse', (data: string) => {
        console.log('createSessionResponse', data);
        sessionId = data;
        // comment
    });

    socket.on('simctrlmsg', (data: any) => {
        console.log('simctrlmsg', data);
    });
}

export function getPairingCode():string{
    return sessionId;
}

