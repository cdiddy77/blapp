import * as uiApi from '../../../shared/src/util/uiApi';
import * as dataApi from '../../../shared/src/util/dataApi';
import * as styleApi from '../../../shared/src/util/styleApi';
///
export namespace pxsim {
    export var UI = uiApi.pxsimui;
    export var Data = dataApi.pxsimdata;
    export var Style= styleApi.pxsimstyle;

    export interface SimulatorMessage {
        type: string;
    }

    export interface SimulatorStateMessage extends SimulatorMessage {
        frameid?: string;
        runtimeid?: string;
        state: string;
    }
    // type=debugger
    export interface DebuggerMessage extends SimulatorMessage {
        subtype: string;
    }

    export function getBreakpointMsg(s: pxsim.StackFrame, brkId: number): any {
        // function valToJSON(v: any) {
        //     switch (typeof v) {
        //         case "string":
        //         case "number":
        //         case "boolean":
        //             return v;
        //         case "function":
        //             return { text: "(function)" }
        //         case "undefined":
        //             return null;
        //         case "object":
        //             if (!v) return null;
        //             if (v instanceof RefObject)
        //                 return { id: (v as RefObject).id }
        //             return { text: "(object)" }
        //         default:
        //             throw new Error();
        //     }
        // }

        // function frameVars(frame: Variables) {
        //     let r: Variables = {}
        //     for (let k of Object.keys(frame)) {
        //         if (/___\d+$/.test(k)) {
        //             r[k] = valToJSON(frame[k])
        //         }
        //     }
        //     return r
        // }

        // let r: DebuggerBreakpointMessage = {
        //     type: "debugger",
        //     subtype: "breakpoint",
        //     breakpointId: brkId,
        //     globals: frameVars(runtime.globals),
        //     stackframes: []
        // }

        // while (s != null) {
        //     let info = s.fn ? (s.fn as any).info : null
        //     if (info)
        //         r.stackframes.push({
        //             locals: frameVars(s),
        //             funcInfo: info,
        //             breakpointId: s.lastBrkId
        //         })
        //     s = s.parent
        // }
        let r = {};
        return r
    }


    export var quiet = false;

    export function check(cond: boolean, msg: string = "sim: check failed") {
        if (!cond) {
            debugger
            throw new Error(msg)
        }
    }

    let refObjId = 1;
    let liveRefObjs: any = {};
    let stringLiterals: any;
    let stringRefCounts: any = {};
    let refCounting = true;
    let floatingPoint = false;

    export function noRefCounting() {
        refCounting = false;
    }

    export function enableFloatingPoint() {
        floatingPoint = true
    }

    export class RefObject {
        id: number = refObjId++;
        refcnt: number = 1;

        constructor() {
            liveRefObjs[this.id + ""] = this
        }

        destroy() { }

        print() {
            console.log(`RefObject id:${this.id} refs:${this.refcnt}`)
        }
    }

    export function noLeakTracking(r: RefObject) {
        delete liveRefObjs[r.id + ""]
    }

    export class FnWrapper {
        constructor(
            public func: LabelFn,
            public caps: any[],
            public a0: any,
            public a1: any,
            public a2: any,
            public cb: ResumeFn) { }
    }

    export interface VTable {
        name: string;
        methods: LabelFn[];
        refmask: boolean[];
    }

    export class RefRecord extends RefObject {
        fields: any[] = [];
        vtable: VTable;

        destroy() {
            let refmask = this.vtable.refmask
            for (let i = 0; i < refmask.length; ++i)
                if (refmask[i]) decr(this.fields[i])
            this.fields = null
            this.vtable = null
        }

        isRef(idx: number) {
            check(0 <= idx && idx < this.fields.length)
            return !!this.vtable.refmask[idx]
        }

        print() {
            console.log(`RefInstance id:${this.id} (${this.vtable.name}) len:${this.fields.length}`)
        }
    }

    export class RefAction extends RefObject {
        fields: any[] = [];
        reflen: number
        func: LabelFn;

        isRef(idx: number) {
            check(0 <= idx && idx < this.fields.length)
            return idx < this.reflen
        }

        ldclo(n: number) {
            n >>= 2;
            check(0 <= n && n < this.fields.length)
            return this.fields[n]
        }

        destroy() {
            for (let i = 0; i < this.reflen; ++i)
                decr(this.fields[i])
            this.fields = null
            this.func = null
        }

        print() {
            console.log(`RefAction id:${this.id} refs:${this.refcnt} len:${this.fields.length}`)
        }
    }

    export namespace pxtcore {
        export function mkAction(reflen: number, len: number, fn: LabelFn) {
            let r = new RefAction();
            r.reflen = reflen
            r.func = fn
            for (let i = 0; i < len; ++i)
                r.fields.push(null)
            return r
        }

        export function runAction3(a: RefAction, a0: any, a1: any, a2: any) {
            let cb = getResume();

            if (a instanceof RefAction) {
                pxtrt.incr(a)
                cb(new FnWrapper(a.func, a.fields, a0, a1, a2, () => {
                    pxtrt.decr(a)
                }))
            } else {
                // no-closure case
                cb(new FnWrapper(<any>a, null, a0, a1, a2, null))
            }
        }

        export function runAction2(a: RefAction, a0: any, a1: any) {
            runAction3(a, a0, a1, null)
        }

        export function runAction1(a: RefAction, v: any) {
            runAction3(a, v, null, null)
        }

        export function runAction0(a: RefAction) {
            runAction3(a, null, null, null)
        }
    }

    export class RefLocal extends RefObject {
        v = 0;

        print() {
            console.log(`RefLocal id:${this.id} refs:${this.refcnt} v:${this.v}`)
        }
    }

    export class RefRefLocal extends RefObject {
        v: any = null;

        destroy() {
            decr(this.v)
        }

        print() {
            console.log(`RefRefLocal id:${this.id} refs:${this.refcnt} v:${this.v}`)
        }
    }

    export interface MapEntry {
        key: number;
        val: any;
    }

    export class RefMap extends RefObject {
        vtable = 42;
        data: MapEntry[] = [];

        findIdx(key: number) {
            for (let i = 0; i < this.data.length; ++i) {
                if (this.data[i].key >> 1 == key)
                    return i;
            }
            return -1;
        }

        destroy() {
            super.destroy()
            for (let i = 0; i < this.data.length; ++i) {
                if (this.data[i].key & 1) {
                    decr(this.data[i].val);
                }
                this.data[i].val = 0;
            }
            this.data = []
        }

        print() {
            console.log(`RefMap id:${this.id} refs:${this.refcnt} size:${this.data.length}`)
        }
    }


    function num(v: any) {
        if (!floatingPoint && v === undefined) return 0;
        return v;
    }

    function ref(v: any) {
        if (v === undefined) return null;
        return v;
    }

    export function decr(v: any): void {
        if (!refCounting) return
        if (v instanceof RefObject) {
            let o = <RefObject>v
            check(o.refcnt > 0)
            if (--o.refcnt == 0) {
                delete liveRefObjs[o.id + ""]
                o.destroy()
            }
        } else if (typeof v == "string") {
            if (stringLiterals && !stringLiterals.hasOwnProperty(v)) {
                stringRefDelta(v, -1)
            }
        } else if (!v) {
            // OK (null)
        } else if (typeof v == "function") {
            // OK (function literal)
        } else if (typeof v == "number" || v === true) {
            // OK (number)
        } else {
            throw new Error("bad decr: " + typeof v)
        }
    }

    export function setupStringLiterals(strings: any) {
        // reset
        liveRefObjs = {};
        stringRefCounts = {};

        // and set up strings
        strings[""] = 1
        strings["true"] = 1
        strings["false"] = 1
        strings["null"] = 1
        strings["undefined"] = 1

        // comment out next line to disable string ref counting
        // stringLiterals = strings
    }

    function stringRefDelta(s: string, n: number) {
        if (!stringRefCounts.hasOwnProperty(s))
            stringRefCounts[s] = 0
        let r = (stringRefCounts[s] += n)
        if (r == 0)
            delete stringRefCounts[s]
        else
            check(r > 0)
        return r
    }

    export function initString(v: string) {
        if (!v || !stringLiterals) return v
        if (typeof v == "string" && !stringLiterals.hasOwnProperty(v))
            stringRefDelta(v, 1)
        return v
    }

    export function incr(v: any) {
        if (!refCounting) return v
        if (v instanceof RefObject) {
            let o = <RefObject>v
            check(o.refcnt > 0)
            o.refcnt++
        } else if (stringLiterals && typeof v == "string" && !stringLiterals.hasOwnProperty(v)) {
            let k = stringRefDelta(v, 1)
            check(k > 1)
        }
        return v;
    }

    export function dumpLivePointers() {
        if (!refCounting) return
        Object.keys(liveRefObjs).forEach(k => {
            (<RefObject>liveRefObjs[k]).print()
        })
        Object.keys(stringRefCounts).forEach(k => {
            let n = stringRefCounts[k]
            console.log("Live String:", JSON.stringify(k), "refcnt=", n)
        })
    }

    export namespace numops {
        export function toString(v: any) {
            if (v === null) return "null"
            else if (v === undefined) return "undefined"
            return initString(v.toString())
        }
        export function toBoolDecr(v: any) {
            decr(v)
            return !!v
        }
        export function toBool(v: any) {
            return !!v
        }
    }

    export namespace langsupp {
        export function toInt(v: number) { return (v | 0) } // TODO
        export function toFloat(v: number) { return v }

        export function ignore(v: any) { return v; }
    }

    export namespace pxtcore {
        export var incr = pxsim.incr;
        export var decr = pxsim.decr;

        export function ptrOfLiteral(v: any) {
            return v;
        }

        export function debugMemLeaks() {
            dumpLivePointers();
        }

        export function allocate() {
            U.userError("allocate() called in simulator")
        }

        export function templateHash() {
            return 0;
        }

        export function programHash() {
            return 0;
        }

        export function programSize() {
            return 0;
        }

        export function afterProgramPage() {
            return 0;
        }

        // these shouldn't generally be called when compiled for simulator
        // provide implementation to silence warnings and as future-proofing
        export function toInt(n: number) { return n >> 0 }
        export function toUInt(n: number) { return n >>> 0 }
        export function toDouble(n: number) { return n }
        export function toFloat(n: number) { return n }
        export function fromInt(n: number) { return n }
        export function fromUInt(n: number) { return n }
        export function fromDouble(n: number) { return n }
        export function fromFloat(n: number) { return n }
        export function fromBool(n: any) { return !!n }
    }

    export namespace pxtrt {
        export var incr = pxsim.incr;
        export var decr = pxsim.decr;

        export function toInt8(v: number) {
            return ((v & 0xff) << 24) >> 24
        }

        export function toInt16(v: number) {
            return ((v & 0xffff) << 16) >> 16
        }

        export function toInt32(v: number) {
            return v | 0
        }

        export function toUInt32(v: number) {
            return v >>> 0
        }

        export function toUInt8(v: number) {
            return v & 0xff
        }

        export function toUInt16(v: number) {
            return v & 0xffff
        }

        export function nullFix(v: any) {
            if (v === null || v === undefined || v === false)
                return 0
            if (v === true)
                return 1
            return v
        }

        export function nullCheck(v: any) {
            if (v === null || v === undefined)
                U.userError("Dereferencing null/undefined value.")
        }

        export function panic(code: number) {
            U.userError("PANIC! Code " + code)
        }

        export function stringToBool(s: string) {
            decr(s)
            return s ? 1 : 0
        }

        export function ptrToBool(v: any) {
            decr(v)
            return v ? 1 : 0
        }

        export function emptyToNull(s: string): any {
            if (s == "") return 0
            return s
        }

        export function ldfld(r: RefRecord, idx: number) {
            nullCheck(r)
            check(!r.isRef(idx))
            let v = num(r.fields[idx])
            decr(r)
            return v;
        }

        export function stfld(r: RefRecord, idx: number, v: any) {
            nullCheck(r)
            check(!r.isRef(idx))
            r.fields[idx] = v;
            decr(r)
        }

        export function ldfldRef(r: RefRecord, idx: number) {
            nullCheck(r)
            check(r.isRef(idx))
            let v = incr(ref(r.fields[idx]))
            decr(r)
            return v
        }

        export function stfldRef(r: RefRecord, idx: number, v: any) {
            nullCheck(r)
            check(r.isRef(idx))
            decr(r.fields[idx])
            r.fields[idx] = v
            decr(r)
        }

        export function ldloc(r: RefLocal) {
            return r.v
        }

        export function ldlocRef(r: RefLocal) {
            return incr(r.v)
        }

        export function stloc(r: RefLocal, v: any) {
            r.v = v;
        }

        export function stlocRef(r: RefRefLocal, v: any) {
            decr(r.v)
            r.v = v;
        }

        export function mkloc() {
            return new RefLocal();
        }

        export function mklocRef() {
            return new RefRefLocal();
        }

        // Store a captured local in a closure. It returns the action, so it can be chained.
        export function stclo(a: RefAction, idx: number, v: any) {
            check(0 <= idx && idx < a.fields.length)
            check(a.fields[idx] === null)
            //console.log(`STCLO [${idx}] = ${v}`)
            a.fields[idx] = v;
            return a;
        }

        export function runtimeWarning(msg: string) {
            console.warn(msg);
            // Runtime.postMessage(pxsim.getWarningMessage(msg))
        }

        export function mkMap() {
            return new RefMap();
        }

        export function mapGet(map: RefMap, key: number) {
            let i = map.findIdx(key);
            if (i < 0) {
                decr(map)
                return 0;
            }
            let r = map.data[i].val;
            decr(map)
            return r;
        }

        export function mapGetRef(map: RefMap, key: number) {
            let i = map.findIdx(key);
            if (i < 0) {
                decr(map);
                return 0;
            }
            let r = incr(map.data[i].val);
            decr(map)
            return r;
        }

        export function mapSet(map: RefMap, key: number, val: any) {
            let i = map.findIdx(key);
            if (i < 0) {
                map.data.push({
                    key: key << 1,
                    val: val
                });
            } else {
                if (map.data[i].key & 1) {
                    decr(map.data[i].val);
                    map.data[i].key = key << 1;
                }
                map.data[i].val = val;
            }
            decr(map)
        }

        export function mapSetRef(map: RefMap, key: number, val: any) {
            let i = map.findIdx(key);
            if (i < 0) {
                map.data.push({
                    key: (key << 1) | 1,
                    val: val
                });
            } else {
                if (map.data[i].key & 1) {
                    decr(map.data[i].val);
                } else {
                    map.data[i].key = (key << 1) | 1;
                }
                map.data[i].val = val;
            }
            decr(map)
        }

        export function switch_eq(a: any, b: any) {
            if (a == b) {
                decr(b)
                return true
            }
            return false
        }

        // these are never used in simulator; silence the warnings
        export var getGlobalsPtr: any;
    }


    export namespace pxtcore {
        export function mkClassInstance(vtable: VTable) {
            check(!!vtable.methods)
            check(!!vtable.refmask)
            let r = new RefRecord()
            r.vtable = vtable
            let len = vtable.refmask.length
            for (let i = 0; i < len; ++i)
                r.fields.push(floatingPoint ? undefined : 0)
            return r
        }

        // these are never used in simulator; silence the warnings
        export var getNumGlobals: any;
        export var RefRecord_destroy: any;
        export var RefRecord_print: any;
        export var anyPrint: any;
        export var dumpDmesg: any;
        export var getVTable: any;
        export var switch_eq: any;
        export var valType: any;
        export var typeOf: any;
        export var lookupPin: any;
    }

    // export namespace thread {
    //     export var panic = pxtrt.panic;

    //     export function pause(ms: number) {
    //         let cb = getResume();
    //         setTimeout(() => { cb() }, ms)
    //     }

    //     export function runInBackground(a: RefAction) {
    //         runtime.runFiberAsync(a).done()
    //     }

    //     export function forever(a: RefAction) {
    //         function loop() {
    //             runtime.runFiberAsync(a)
    //                 .then(() => Promise.delay(20))
    //                 .then(loop)
    //                 .done()
    //         }
    //         pxtrt.nullCheck(a)
    //         incr(a)
    //         loop()
    //     }
    // }


    export namespace U {
        export function addClass(el: HTMLElement, cls: string) {
            if (el.classList) el.classList.add(cls);
            else if (el.className.indexOf(cls) < 0) el.className += ' ' + cls;
        }

        export function removeClass(el: HTMLElement, cls: string) {
            if (el.classList) el.classList.remove(cls);
            else el.className = el.className.replace(cls, '').replace(/\s{2,}/, ' ');
        }

        export function assert(cond: boolean, msg = "Assertion failed") {
            if (!cond) {
                debugger
                throw new Error(msg)
            }
        }

        export function repeatMap<T>(n: number, fn: (index: number) => T): T[] {
            n = n || 0;
            let r: T[] = [];
            for (let i = 0; i < n; ++i) r.push(fn(i));
            return r;
        }

        export function userError(msg: string): Error {
            let e = new Error(msg);
            (<any>e).isUserError = true;
            throw e
        }

        export function now(): number {
            return Date.now();
        }

        export function nextTick(f: () => void) {
            (<any>Promise)._async._schedule(f)
        }
    }

    export interface Map<T> {
        [index: string]: T;
    }

    export type LabelFn = (s: StackFrame) => StackFrame;
    export type ResumeFn = (v?: any) => void;

    export interface StackFrame {
        fn: LabelFn;
        pc: number;
        overwrittenPC?: boolean;
        depth: number;
        r0?: any;
        parent: StackFrame;
        retval?: any;
        lambdaArgs?: any[];
        caps?: any[];
        finalCallback?: ResumeFn;
        lastBrkId?: number;
        // ... plus locals etc, added dynamically
    }

    interface LR {
        caller: LR;
        retPC: number;
        currFn: LabelFn;
        baseSP: number;
        finalCallback?: ResumeFn;
    }

    export let runtime: Runtime;
    export function getResume() { return runtime.getResume() }

    export class Runtime {
        // public board: BaseBoard;
        numGlobals = 1000;
        errorHandler: (e: any) => void;
        postError: (e: any) => void;
        stateChanged: () => void;

        dead = false;
        running = false;
        startTime = 0;
        id: string;
        globals: any = {};
        currFrame: StackFrame;
        entry: LabelFn;

        overwriteResume: (retPC: number) => void;
        getResume: () => ResumeFn;
        run: (cb: ResumeFn) => void;
        setupTop: (cb: ResumeFn) => StackFrame;
        // handleDebuggerMsg: (msg: DebuggerMessage) => void;

        runningTime(): number {
            return Date.now() - this.startTime;
        }

        runFiberAsync(a: pxsim.RefAction, arg0?: any, arg1?: any, arg2?: any) {
            incr(a)
            return new Promise<any>((resolve, reject) =>
                U.nextTick(() => {
                    runtime = this;
                    this.setupTop(resolve)
                    pxtcore.runAction3(a, arg0, arg1, arg2)
                    decr(a) // if it's still running, action.run() has taken care of incrementing the counter
                }))
        }

        runFiberSync(a: RefAction, resolve: (thenableOrResult?: any) => void, arg0?: any, arg1?: any, arg2?: any) {
            incr(a);
            runtime = this;
            this.setupTop(resolve);
            pxtcore.runAction3(a, arg0, arg1, arg2);
            decr(a);
        }

        // communication
        static messagePosted: (data: SimulatorMessage) => void;
        static postMessage(data: SimulatorMessage) {
            if (!data) return;
            // TODO: origins
            if (typeof window !== 'undefined' && window.parent && window.parent.postMessage) {
                window.parent.postMessage(data, "*");
            }
            if (Runtime.messagePosted) Runtime.messagePosted(data);
        }

        kill() {
            this.dead = true
            // TODO fix this
            this.setRunning(false);
        }

        updateDisplay() {
            console.log('Runtime.updateDisplay');
            // this.board.updateView()
        }

        private numDisplayUpdates = 0;
        queueDisplayUpdate() {
            this.numDisplayUpdates++
        }

        maybeUpdateDisplay() {
            if (this.numDisplayUpdates) {
                this.numDisplayUpdates = 0
                this.updateDisplay()
            }
        }

        setRunning(r: boolean) {
            if (this.running != r) {
                this.running = r;
                if (this.running) {
                    this.startTime = U.now();
                    Runtime.postMessage(<SimulatorStateMessage>{ type: 'status', runtimeid: this.id, state: 'running' });
                } else {
                    Runtime.postMessage(<SimulatorStateMessage>{ type: 'status', runtimeid: this.id, state: 'killed' });
                }
                if (this.stateChanged) this.stateChanged();
            }
        }

        constructor(code: string) {
            // U.assert(!!initCurrentRuntime);

            let yieldMaxSteps = 100

            // These variables are used by the generated code as well
            // ---
            let entryPoint: LabelFn;
            let pxtrt = pxsim.pxtrt
            let breakpoints: Uint8Array = null
            let breakAlways = false
            let globals = this.globals
            let yieldSteps = yieldMaxSteps
            // ---

            let currResume: ResumeFn;
            let dbgResume: ResumeFn;
            let breakFrame: StackFrame = null // for step-over
            let lastYield = Date.now()
            let __this = this
            let tracePauseMs = 0;

            function oops(msg: string) {
                throw new Error("sim error: " + msg)
            }

            // referenced from eval()ed code
            function doNothing(s: StackFrame) {
                s.pc = -1;
                return leave(s, s.parent.retval)
            }

            function maybeYield(s: StackFrame, pc: number, r0: any): boolean {
                yieldSteps = yieldMaxSteps;
                let now = Date.now()
                if (now - lastYield >= 20) {
                    lastYield = now
                    s.pc = pc;
                    s.r0 = r0;
                    let cont = () => {
                        if (__this.dead) return;
                        U.assert(s.pc == pc);
                        return loop(s)
                    }
                    //U.nextTick(cont)
                    setTimeout(cont, 5)
                    return true
                }
                return false
            }

            function setupDebugger(numBreakpoints: number) {
                breakpoints = new Uint8Array(numBreakpoints)
                breakAlways = true
            }

            function isBreakFrame(s: StackFrame) {
                if (!breakFrame) return true; // nothing specified
                for (let p = breakFrame; p; p = p.parent) {
                    if (p == s) return true
                }
                return false
            }

            function breakpoint(s: StackFrame, retPC: number, brkId: number, r0: any): StackFrame {
                U.assert(!dbgResume)

                s.pc = retPC;
                s.r0 = r0;

                // Runtime.postMessage(getBreakpointMsg(s, brkId))
                dbgResume = (m: DebuggerMessage) => {
                    dbgResume = null;
                    if (__this.dead) return;
                    runtime = __this;
                    U.assert(s.pc == retPC);

                    breakAlways = false
                    breakFrame = null

                    switch (m.subtype) {
                        case "resume":
                            break
                        case "stepover":
                            breakAlways = true
                            breakFrame = s
                            break
                        case "stepinto":
                            breakAlways = true
                            break
                        case "stepout":
                            breakAlways = true;
                            breakFrame = s.parent || s;
                            break;
                    }

                    return loop(s)
                }

                return null;
            }

            function trace(brkId: number, s: StackFrame, retPc: number, info: any) {
                console.log('trace');
                // setupResume(s, retPc);
                // if (info.functionName === "<main>" || info.fileName === "main.ts") {
                //     Runtime.postMessage({
                //         type: "debugger",
                //         subtype: "trace",
                //         breakpointId: brkId,
                //     } as TraceMessage)
                //     thread.pause(tracePauseMs)
                // }
                // else {
                //     thread.pause(0)
                // }
                // checkResumeConsumed();
            }

            function handleDebuggerMsg(msg: DebuggerMessage) {
                console.log('handleDebuggerMsg', msg);
                // switch (msg.subtype) {
                //     case "config":
                //         let cfg = msg as DebuggerConfigMessage
                //         if (cfg.setBreakpoints) {
                //             breakpoints.fill(0)
                //             for (let n of cfg.setBreakpoints)
                //                 breakpoints[n] = 1
                //         }
                //         break;
                //     case "traceConfig":
                //         let trc = msg as TraceConfigMessage;
                //         tracePauseMs = trc.interval;
                //         break;
                //     case "pause":
                //         breakAlways = true
                //         breakFrame = null
                //         break
                //     case "resume":
                //     case "stepover":
                //     case "stepinto":
                //     case "stepout":
                //         if (dbgResume)
                //             dbgResume(msg);
                //         break;
                // }
            }

            function loop(p: StackFrame) {
                if (__this.dead) {
                    console.log("Runtime terminated")
                    return
                }
                try {
                    runtime = __this
                    while (!!p) {
                        __this.currFrame = p;
                        __this.currFrame.overwrittenPC = false;
                        p = p.fn(p)
                        __this.maybeUpdateDisplay()
                        if (__this.currFrame.overwrittenPC)
                            p = __this.currFrame
                    }
                } catch (e) {
                    if (__this.errorHandler)
                        __this.errorHandler(e)
                    else {
                        console.error("Simulator crashed, no error handler", e.stack)
                        let msg = getBreakpointMsg(p, p.lastBrkId)
                        msg.exceptionMessage = e.message
                        msg.exceptionStack = e.stack
                        Runtime.postMessage(msg)
                        if (__this.postError)
                            __this.postError(e)
                    }
                }
            }

            function actionCall(s: StackFrame, cb?: ResumeFn): StackFrame {
                if (cb)
                    s.finalCallback = cb;
                s.depth = s.parent.depth + 1
                if (s.depth > 1000) {
                    U.userError("Stack overflow")
                }
                s.pc = 0
                return s;
            }

            function leave(s: StackFrame, v: any): StackFrame {
                s.parent.retval = v;
                if (s.finalCallback)
                    s.finalCallback(v);
                return s.parent
            }

            function setupTop(cb: ResumeFn) {
                let s = setupTopCore(cb)
                setupResume(s, 0)
                return s
            }

            function setupTopCore(cb: ResumeFn) {
                let frame: StackFrame = {
                    parent: null,
                    pc: 0,
                    depth: 0,
                    fn: () => {
                        if (cb) cb(frame.retval)
                        return null
                    }
                }
                return frame
            }

            function topCall(fn: LabelFn, cb: ResumeFn) {
                // U.assert(!!__this.board)
                U.assert(!__this.running)
                __this.setRunning(true);
                let topFrame = setupTopCore(cb)
                let frame: StackFrame = {
                    parent: topFrame,
                    fn: fn,
                    depth: 0,
                    pc: 0
                }
                loop(actionCall(frame))
            }

            function checkResumeConsumed() {
                if (currResume) oops("getResume() not called")
            }

            function setupResume(s: StackFrame, retPC: number) {
                currResume = buildResume(s, retPC)
            }

            function buildResume(s: StackFrame, retPC: number) {
                if (currResume) oops("already has resume")
                s.pc = retPC;
                return (v: any) => {
                    if (__this.dead) return;
                    runtime = __this;
                    U.assert(s.pc == retPC);
                    // TODO should loop() be called here using U.nextTick?
                    // This matters if the simulator function calls cb()
                    // synchronously.
                    if (v instanceof FnWrapper) {
                        let w = <FnWrapper>v
                        let frame: StackFrame = {
                            parent: s,
                            fn: w.func,
                            lambdaArgs: [w.a0, w.a1, w.a2],
                            pc: 0,
                            caps: w.caps,
                            depth: s.depth + 1,
                            finalCallback: w.cb,
                        }
                        return loop(actionCall(frame))
                    }
                    s.retval = v;
                    return loop(s)
                }
            }

            // tslint:disable-next-line
            eval(code)

            this.run = (cb) => topCall(entryPoint, cb)
            this.getResume = () => {
                if (!currResume) oops("noresume")
                let r = currResume
                currResume = null
                return r
            }
            this.setupTop = setupTop
            // this.handleDebuggerMsg = handleDebuggerMsg
            this.entry = entryPoint
            this.overwriteResume = (retPC: number) => {
                currResume = null;
                if (retPC >= 0)
                    this.currFrame.pc = retPC;
                this.currFrame.overwrittenPC = true;
            }
            runtime = this;

            // initCurrentRuntime();
        }
    }

    // from libgeneric.ts //////////////////////////////////////////////////////////////
    //
    // A ref-counted collection of either primitive or ref-counted objects (String, Image,
    // user-defined record, another collection)
    export class RefCollection extends RefObject {
        private data: any[] = [];
        //undefiend or null values need to be handled specially to support default values
        //default values of boolean, string, number & object arrays are respectively, false, null, 0, null
        //All of the default values are implemented by mapping undefined\null to zero.

        constructor() {
            super();
        }

        destroy() {
            let data = this.data
            for (let i = 0; i < data.length; ++i) {
                decr(data[i]);
                data[i] = 0;
            }
            this.data = [];
        }

        isValidIndex(x: number) {
            return (x >= 0 && x < this.data.length);
        }

        push(x: any) {
            this.data.push(x);
        }

        pop() {
            let x = this.data.pop();
            if (x != undefined) { //treat null & undefined as the same
                return 0;
            }
            return x;
        }

        getLength() {
            return this.data.length;
        }

        setLength(x: number) {
            this.data.length = x;
        }

        getAt(x: number) {
            if (this.data[x] != undefined) {
                return this.data[x];
            }
            return 0;
        }

        setAt(x: number, y: any) {
            this.data[x] = y;
        }

        insertAt(x: number, y: number) {
            this.data.splice(x, 0, y);
        }

        removeAt(x: number) {
            let ret = this.data.splice(x, 1)
            if (ret[0] == undefined) {
                return 0;
            }
            return ret[0]; //return the deleted element.
        }

        indexOf(x: number, start: number) {
            if (x != 0) {
                return this.data.indexOf(x, start);
            }
            //As we treat undefined same as 0 which is default value for all the arrays, will need to search both.
            let defaultValueIndex = this.data.indexOf(x, start);
            let undefinedIndex = -1;
            for (let i = start; i < this.data.length; i++) {
                if (this.data[i] == undefined) {
                    undefinedIndex = i;
                    break;
                }
            }

            if (defaultValueIndex < undefinedIndex || undefinedIndex == -1) {
                return defaultValueIndex;
            }
            return undefinedIndex;
        }

        print() {
            console.log(`RefCollection id:${this.id} refs:${this.refcnt} len:${this.data.length} d0:${this.data[0]}`)
        }
    }

    export namespace Array_ {
        export function mk() {
            return new RefCollection();
        }

        export function length(c: RefCollection) {
            pxtrt.nullCheck(c)
            return c.getLength();
        }

        export function setLength(c: RefCollection, x: number) {
            pxtrt.nullCheck(c)
            c.setLength(x);
        }


        export function push(c: RefCollection, x: any) {
            pxtrt.nullCheck(c)
            incr(x);
            c.push(x);
        }

        export function pop(c: RefCollection, x: any) {
            pxtrt.nullCheck(c)
            let ret = c.pop();
            decr(ret);
            return ret;
        }

        export function getAt(c: RefCollection, x: number) {
            pxtrt.nullCheck(c)
            let tmp = c.getAt(x);
            incr(tmp);
            return tmp;
        }

        export function removeAt(c: RefCollection, x: number) {
            pxtrt.nullCheck(c)
            if (!c.isValidIndex(x))
                return;

            decr(c.getAt(x));
            return c.removeAt(x);
        }

        export function insertAt(c: RefCollection, x: number, y: number) {
            pxtrt.nullCheck(c)
            incr(y);
            c.insertAt(x, y);
        }

        export function setAt(c: RefCollection, x: number, y: any) {
            pxtrt.nullCheck(c)
            if (c.isValidIndex(x)) {
                //if there is an existing element handle refcount
                decr(c.getAt(x));
            }
            incr(y);
            c.setAt(x, y);
        }

        export function indexOf(c: RefCollection, x: any, start: number) {
            pxtrt.nullCheck(c)
            return c.indexOf(x, start)
        }

        export function removeElement(c: RefCollection, x: any) {
            pxtrt.nullCheck(c)
            let idx = indexOf(c, x, 0);
            if (idx >= 0) {
                removeAt(c, idx);
                return 1;
            }
            return 0;
        }
    }

    export namespace Math_ {
        export function imul(x: number, y: number) {
            return intMult(x, y)
        }

        export function idiv(x: number, y: number) {
            return (x / y) >> 0
        }

        export function round(n: number) { return Math.round(n) }
        export function ceil(n: number) { return Math.ceil(n) }
        export function floor(n: number) { return Math.floor(n) }
        export function sqrt(n: number) { return Math.sqrt(n) }
        export function pow(x: number, y: number) { return Math.pow(x, y) }
        export function trunc(x: number) {
            return x > 0 ? Math.floor(x) : Math.ceil(x);
        }

        export function random(max: number): number {
            if (max < 1) return 0;
            let r = 0;
            do {
                r = Math.floor(Math.random() * max);
            } while (r == max);
            return r;
        }
    }

    // for explanations see:
    // http://stackoverflow.com/questions/3428136/javascript-integer-math-incorrect-results (second answer)
    // (but the code below doesn't come from there; I wrote it myself)
    // TODO use Math.imul if available
    function intMult(a: number, b: number) {
        return (((a & 0xffff) * (b >>> 16) + (b & 0xffff) * (a >>> 16)) << 16) + ((a & 0xffff) * (b & 0xffff));
    }

    export namespace Number_ {
        export function lt(x: number, y: number) { return x < y; }
        export function le(x: number, y: number) { return x <= y; }
        export function neq(x: number, y: number) { return !eq(x, y); }
        export function eq(x: number, y: number) { return pxtrt.nullFix(x) == pxtrt.nullFix(y); }
        export function gt(x: number, y: number) { return x > y; }
        export function ge(x: number, y: number) { return x >= y; }
        export function div(x: number, y: number) { return Math.floor(x / y) | 0; }
        export function mod(x: number, y: number) { return x % y; }
        export function toString(x: number) { return initString(x + ""); }
    }

    export namespace thumb {
        export function adds(x: number, y: number) { return (x + y) | 0; }
        export function subs(x: number, y: number) { return (x - y) | 0; }
        export function divs(x: number, y: number) { return Math.floor(x / y) | 0; }
        export function muls(x: number, y: number) { return intMult(x, y); }
        export function ands(x: number, y: number) { return x & y; }
        export function orrs(x: number, y: number) { return x | y; }
        export function eors(x: number, y: number) { return x ^ y; }
        export function lsls(x: number, y: number) { return x << y; }
        export function lsrs(x: number, y: number) { return x >>> y; }
        export function asrs(x: number, y: number) { return x >> y; }

        export function ignore(v: any) { return v; }
    }

    export namespace String_ {
        export function mkEmpty() {
            return ""
        }

        export function fromCharCode(code: number) {
            return initString(String.fromCharCode(code));
        }

        export function toNumber(s: string) {
            return parseInt(s);
        }

        // TODO check edge-conditions

        export function concat(a: string, b: string) {
            return initString(a + b);
        }

        export function substring(s: string, i: number, j: number) {
            pxtrt.nullCheck(s)
            return initString(s.slice(i, i + j));
        }

        export function equals(s1: string, s2: string) {
            return s1 == s2;
        }

        export function compare(s1: string, s2: string) {
            if (s1 == s2) return 0;
            if (s1 < s2) return -1;
            return 1;
        }

        export function length(s: string) {
            return s.length
        }

        export function isEmpty(s: string): boolean {
            return s == null || s.length == 0;
        }

        export function substr(s: string, start: number, length?: number) {
            return initString(s.substr(start, length));
        }

        function inRange(s: string, i: number) {
            pxtrt.nullCheck(s)
            return 0 <= i && i < s.length
        }

        export function charAt(s: string, i: number) {
            return initString(s.charAt(i));
        }

        export function charCodeAt(s: string, i: number) {
            pxtrt.nullCheck(s)
            return inRange(s, i) ? s.charCodeAt(i) : 0;
        }
    }

    export namespace Boolean_ {
        export function toString(v: boolean) {
            return v ? "true" : "false"
        }
        export function bang(v: boolean) {
            return !v;
        }
    }


    export class RefBuffer extends RefObject {
        constructor(public data: Uint8Array) {
            super();
        }

        print() {
            console.log(`RefBuffer id:${this.id} refs:${this.refcnt} len:${this.data.length} d0:${this.data[0]}`)
        }
    }

    export namespace BufferMethods {
        // keep in sync with C++!
        export enum NumberFormat {
            Int8LE = 1,
            UInt8LE,
            Int16LE,
            UInt16LE,
            Int32LE,
            Int8BE,
            UInt8BE,
            Int16BE,
            UInt16BE,
            Int32BE,
            UInt32LE,
            UInt32BE,
            Float32LE,
            Float64LE,
            Float32BE,
            Float64BE,
        };

        function fmtInfoCore(fmt: NumberFormat) {
            switch (fmt) {
                case NumberFormat.Int8LE: return -1;
                case NumberFormat.UInt8LE: return 1;
                case NumberFormat.Int16LE: return -2;
                case NumberFormat.UInt16LE: return 2;
                case NumberFormat.Int32LE: return -4;
                case NumberFormat.UInt32LE: return 4;
                case NumberFormat.Int8BE: return -10;
                case NumberFormat.UInt8BE: return 10;
                case NumberFormat.Int16BE: return -20;
                case NumberFormat.UInt16BE: return 20;
                case NumberFormat.Int32BE: return -40;
                case NumberFormat.UInt32BE: return 40;

                case NumberFormat.Float32LE: return 4;
                case NumberFormat.Float32BE: return 40;
                case NumberFormat.Float64LE: return 8;
                case NumberFormat.Float64BE: return 80;
                default: throw U.userError("bad format");
            }
        }

        function fmtInfo(fmt: NumberFormat) {
            let size = fmtInfoCore(fmt)
            let signed = false
            if (size < 0) {
                signed = true
                size = -size
            }
            let swap = false
            if (size >= 10) {
                swap = true
                size /= 10
            }
            let isFloat = fmt >= NumberFormat.Float32LE
            return { size, signed, swap, isFloat }
        }

        export function getNumber(buf: RefBuffer, fmt: NumberFormat, offset: number) {
            let inf = fmtInfo(fmt)
            if (inf.isFloat) {
                let subarray = buf.data.buffer.slice(offset, offset + inf.size)
                if (inf.swap) {
                    let u8 = new Uint8Array(subarray)
                    u8.reverse()
                }
                if (inf.size == 4) return new Float32Array(subarray)[0]
                else return new Float64Array(subarray)[0]
            }

            let r = 0
            for (let i = 0; i < inf.size; ++i) {
                r <<= 8
                let off = inf.swap ? offset + i : offset + inf.size - i - 1
                r |= buf.data[off]
            }
            if (inf.signed) {
                let missingBits = 32 - (inf.size * 8)
                r = (r << missingBits) >> missingBits;
            } else {
                r = r >>> 0;
            }
            return r
        }

        export function setNumber(buf: RefBuffer, fmt: NumberFormat, offset: number, r: number) {
            let inf = fmtInfo(fmt)
            if (inf.isFloat) {
                let arr = new Uint8Array(inf.size)
                if (inf.size == 4)
                    new Float32Array(arr.buffer)[0] = r
                else
                    new Float64Array(arr.buffer)[0] = r
                if (inf.swap)
                    arr.reverse()
                for (let i = 0; i < inf.size; ++i) {
                    buf.data[offset + i] = arr[i]
                }
                return
            }

            for (let i = 0; i < inf.size; ++i) {
                let off = !inf.swap ? offset + i : offset + inf.size - i - 1
                buf.data[off] = (r & 0xff)
                r >>= 8
            }
        }

        export function createBuffer(size: number) {
            return new RefBuffer(new Uint8Array(size));
        }

        export function createBufferFromHex(hex: string) {
            let r = createBuffer(hex.length >> 1)
            for (let i = 0; i < hex.length; i += 2)
                r.data[i >> 1] = parseInt(hex.slice(i, i + 2), 16)
            return r
        }

        export function getBytes(buf: RefBuffer) {
            // not sure if this is any useful...
            return buf.data;
        }

        function inRange(buf: RefBuffer, off: number) {
            return 0 <= off && off < buf.data.length
        }

        export function getByte(buf: RefBuffer, off: number) {
            if (inRange(buf, off)) return buf.data[off]
            else return 0;
        }

        export function setByte(buf: RefBuffer, off: number, v: number) {
            if (inRange(buf, off)) buf.data[off] = v
        }

        export function length(buf: RefBuffer) {
            return buf.data.length
        }

        export function fill(buf: RefBuffer, value: number, offset: number = 0, length: number = -1) {
            if (offset < 0 || offset > buf.data.length)
                return;
            if (length < 0)
                length = buf.data.length;
            length = Math.min(length, buf.data.length - offset);

            buf.data.fill(value, offset, offset + length)
        }

        export function slice(buf: RefBuffer, offset: number, length: number) {
            offset = Math.min(buf.data.length, offset);
            if (length < 0)
                length = buf.data.length;
            length = Math.min(length, buf.data.length - offset);
            return new RefBuffer(buf.data.slice(offset, offset + length));
        }

        function memmove(dst: Uint8Array, dstOff: number, src: Uint8Array, srcOff: number, len: number) {
            if (src.buffer === dst.buffer) {
                memmove(dst, dstOff, src.slice(srcOff, srcOff + len), 0, len);
            } else {
                for (let i = 0; i < len; ++i)
                    dst[dstOff + i] = src[srcOff + i];
            }
        }

        const INT_MIN = -0x80000000;

        export function shift(buf: RefBuffer, offset: number, start: number, len: number) {
            if (len < 0) len = buf.data.length - start;
            if (start < 0 || start + len > buf.data.length || start + len < start
                || len == 0 || offset == 0 || offset == INT_MIN) return;
            if (len == 0 || offset == 0 || offset == INT_MIN) return;
            if (offset <= -len || offset >= len) {
                fill(buf, 0);
                return;
            }

            if (offset < 0) {
                offset = -offset;
                memmove(buf.data, start + offset, buf.data, start, len - offset);
                buf.data.fill(0, start, start + offset)
            } else {
                len = len - offset;
                memmove(buf.data, start, buf.data, start + offset, len);
                buf.data.fill(0, start + len, start + len + offset)
            }
        }

        export function rotate(buf: RefBuffer, offset: number, start: number, len: number) {
            if (len < 0) len = buf.data.length - start;

            if (start < 0 || start + len > buf.data.length || start + len < start
                || len == 0 || offset == 0 || offset == INT_MIN) return;

            if (offset < 0)
                offset += len << 8; // try to make it positive
            offset %= len;
            if (offset < 0)
                offset += len;

            let data = buf.data
            let n_first = offset
            let first = 0
            let next = n_first
            let last = len

            while (first != next) {
                let tmp = data[first + start]
                data[first++ + start] = data[next + start]
                data[next++ + start] = tmp
                if (next == last) {
                    next = n_first;
                } else if (first == n_first) {
                    n_first = next;
                }
            }
        }

        export function write(buf: RefBuffer, dstOffset: number, src: RefBuffer, srcOffset = 0, length = -1) {
            if (length < 0)
                length = src.data.length;

            if (srcOffset < 0 || dstOffset < 0 || dstOffset > buf.data.length)
                return;

            length = Math.min(src.data.length - srcOffset, buf.data.length - dstOffset);

            if (length < 0)
                return;

            memmove(buf.data, dstOffset, src.data, srcOffset, length)
        }
    }

    //
    ////////////////////////////////////////////////////////////////////////////////////




}
export function executeCode(code: string) {

    let runtime = new pxsim.Runtime(code);

    runtime.run((v) => {
        console.log('runtime ran');
    });
}