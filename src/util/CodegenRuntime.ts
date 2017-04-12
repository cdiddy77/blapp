import * as jsutil from './jsutil';
import { Target } from '../components/Target';

export namespace CodegenRuntime {
    var curelems: any[][] = [];

    export function pushCont() {
        curelems.push([]);
    }
    export function popCont(): any[] {
        return curelems.pop();
    }

    export function pushElem(e: any) {
        if (curelems.length >= 1)
            curelems[curelems.length - 1].push(e);
    }
    export function setTargetRenderProc(renderProc: () => any) {
        Target.renderProc = renderProc;
    }
    export function makeImageUri(url: string): any {
        return { uri: url };
    }
}