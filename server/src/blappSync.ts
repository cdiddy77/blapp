import * as http from 'http';
import * as io from 'socket.io';
import * as uuid from 'uuid';


interface ProjectSessionState {
    code: string;
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
            sessionMap[sessionId] = { code: '' };
            socket.emit('createSessionResponse', sessionId);
            console.log('createSessionRequest', sessionId);
            socket.join(sessionId);
        });
        socket.on('joinSessionRequest', (sid: string) => {
            console.log('joinSessionRequest', sid);
            let sessionResponse = "noexist";
            if (sessionMap[sid]) {
                console.log(`found sid {sid}`);
                socket.join(sid);
                sessionResponse = sid;
            } else {
                console.log(`did not find sid {sid}`);
            }
            socket.emit('joinSessionResponse', sessionResponse);
            console.log('sending joinSessionResponse', sessionResponse);
        });
        socket.on('simctrlmsg', (sid: string, data: any) => {
            console.log('simctrlmsg', sid, data.type);
            ios.to(sid).emit('simctrlmsg', data);
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
