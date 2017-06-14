export function createCodeChangeControlMessage(code) {
    return {
        type: 'code_change',
        code: code
    };
}
export function createEvalStatusChangeControlMessage(evalErr) {
    return {
        type: 'evalstatus_change',
        evalError: evalErr
    };
}
//# sourceMappingURL=ServiceTypes.js.map