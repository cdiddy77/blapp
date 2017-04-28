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

export interface ShareVarSetMessage {
    name: string;
    value: any;
}

export interface ShareVarUpdatedMessage {
    name: string;
    value: any;
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