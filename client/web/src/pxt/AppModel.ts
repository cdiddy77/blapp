import * as jsutil from '../../../shared/src/util/jsutil';
import { ModelWithEvents } from '../models/ModelWithEvents';
import { CodegenRuntime, CodegenHost } from '../../../shared/src/util/CodegenRuntime';
import * as svcConn from '../util/ServiceConnection';

export interface AppModelData {
    code: string;
    lastEvalError: Error;
    pairingCode: string;
}

export class AppModel extends ModelWithEvents<AppModelData>
    implements CodegenHost, svcConn.ServiceConnectionHost {
    constructor() {
        super({
            code: null,
            lastEvalError: null,
            pairingCode: null
        });
        CodegenRuntime.setCodegenHost(this);
    }

    // CodegenHost implementation /////////////////////////
    //

    //
    ///////////////////////////////////////////////////////

    // ServiceConnectionHost implementation ///////////////
    //
    onChange(cb: (prop: string) => void): void {
        this.on('change', cb);
    }
    getCode(): string {
        return this.data.code;
    }
    getLastEvalError(): Error {
        return this.data.lastEvalError;
    }
    setPairingCode(code: string): void {
        this.setProperty('pairingCode', code);
    }
    //
    ///////////////////////////////////////////////////////
}
