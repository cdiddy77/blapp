"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCodeChangeControlMessage(code) {
    return {
        type: 'code_change',
        code: code
    };
}
exports.createCodeChangeControlMessage = createCodeChangeControlMessage;
function createEvalStatusChangeControlMessage(evalErr) {
    return {
        type: 'evalstatus_change',
        evalError: evalErr
    };
}
exports.createEvalStatusChangeControlMessage = createEvalStatusChangeControlMessage;
//# sourceMappingURL=ServiceTypes.js.map