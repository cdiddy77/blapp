type ControlMessageType = 'code_change' | 'evalstatus_change';

export interface ControlMessage {
    type: ControlMessageType;
    code?: string;
    evalError?: Error;
}

export interface CreateSessionResponseMessage {
    pairingCode: string;
}
export interface JoinSessionResponseMessage {
    pairingCode: string | 'noexist';
    executeCode: string;
    sharedVars: any;
}
export interface PublishSessionRequestMessage {
    nameHint: string;
}

export interface PublishSessionResponseMessage {
    pairingCode: string;
    shareName: string;
    errorMessage:string;
}

export interface ShareVarSetMessage {
    name: string;
    value: any;
}

export interface ShareVarUpdatedMessage {
    name: string;
    value: any;
    serverTime?: number;
    clientTime?: number;
}

export function createCodeChangeControlMessage(code: string): ControlMessage {
    return {
        type: 'code_change',
        code: code
    };
}

export function createEvalStatusChangeControlMessage(evalErr: Error): ControlMessage {
    return {
        type: 'evalstatus_change',
        evalError: evalErr
    };
}

export function createPublishSessionRequest(nameHint: string): PublishSessionRequestMessage {
    return { nameHint: nameHint };
}