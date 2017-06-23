pxsim.noRefCounting();
pxsim.enableFloatingPoint();


var _main___P1 = entryPoint = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    r0 = pxsim.String_.mkEmpty();
    s.tmp_0 = r0;
    r0 = globals.item___28;
    r0 = s.tmp_0;
    globals.item___28 = (r0);
    s.tmp_0 = { fn: userInterface__P19, parent: s };
    r0 = 0;
    s.tmp_0.arg0 = r0;
    r0 = inline__P29;
    s.tmp_0.arg1 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    r0 = "jkkjkjk";
    s.tmp_0 = r0;
    r0 = globals.item___28;
    r0 = s.tmp_0;
    globals.item___28 = (r0);
    r0 = s.tmp_0;
  case 1:
    return leave(s, r0)
  default: oops()
} } }
_main___P1.info = {"start":0,"length":0,"line":0,"column":0,"endLine":0,"endColumn":0,"fileName":"pxt_modules/core/pxt-core.d.ts","functionName":"<main>"}
_main___P1.continuations = [  ]



var inline__P29  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.tmp_0 = { fn: textInputElement__P25, parent: s };
    r0 = pxsim.String_.mkEmpty();
    s.tmp_0.arg0 = r0;
    r0 = false;
    s.tmp_0.arg1 = r0;
    r0 = 1;
    s.tmp_0.arg2 = r0;
    r0 = null;
    s.tmp_0.arg3 = r0;
    r0 = globals.item___28;
    s.tmp_0.arg4 = r0;
    r0 = inline__P30;
    s.tmp_0.arg5 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    s.tmp_0 = { fn: buttonElement__P22, parent: s };
    r0 = "ffsk";
    s.tmp_0.arg0 = r0;
    r0 = false;
    s.tmp_0.arg1 = r0;
    r0 = 0;
    s.tmp_0.arg2 = r0;
    r0 = null;
    s.tmp_0.arg3 = r0;
    r0 = inline__P46;
    s.tmp_0.arg4 = r0;
    r0 = inline__P59;
    s.tmp_0.arg5 = r0;
    s.pc = 3;
    return actionCall(s.tmp_0)
  case 3:
    r0 = s.retval;
  case 1:
    return leave(s, r0)
  default: oops()
} } }
inline__P29.info = {"start":44,"length":326,"line":1,"column":30,"endLine":15,"endColumn":1,"fileName":"main.ts","functionName":"inline"}



var inline__P30  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.text___32 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = pxtrt.incr(s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = pxsim.pxtrt.ldfldRef(s.tmp_0, 0);
    s.tmp_1 = r0;
    r0 = s.text___32;
    r0 = s.tmp_1;
    s.text___32 = (r0);
    r0 = s.text___32;
    s.tmp_0 = r0;
    r0 = globals.item___28;
    r0 = s.tmp_0;
    globals.item___28 = (r0);
  case 1:
    r0 = s.text___32;
    r0 = s.arg0;
    return leave(s, r0)
  default: oops()
} } }
inline__P30.info = {"start":122,"length":43,"line":2,"column":69,"endLine":4,"endColumn":5,"fileName":"main.ts","functionName":"inline"}



var textInputElement__P25  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = pxtrt.incr(s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = pxtrt.incr(s.lambdaArgs[3]);
      s.arg4 = pxtrt.incr(s.lambdaArgs[4]);
      s.arg5 = pxtrt.incr(s.lambdaArgs[5]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.pxtcore.mkAction(1, 1, inline__P40);
    s.tmp_0 = r0;
    r0 = s.arg5;
    s.tmp_1 = r0;
    r0 = pxsim.pxtrt.stclo(s.tmp_0, 0, s.tmp_1);
    r0 = s.arg0;
    s.tmp_2 = r0;
    r0 = s.arg3;
    s.tmp_3 = r0;
    r0 = s.arg4;
    s.tmp_4 = r0;
    r0 = pxsim.UI.textInputElementImpl(s.tmp_2, s.arg1, s.arg2, s.tmp_3, s.tmp_4, s.tmp_0);
    s.tmp_5 = r0;
    r0 = s.tmp_2;
    r0 = s.tmp_3;
    r0 = s.tmp_4;
    r0 = s.tmp_0;
    r0 = s.tmp_5;
  case 1:
    r0 = s.arg0;
    r0 = s.arg3;
    r0 = s.arg4;
    r0 = s.arg5;
    return leave(s, r0)
  default: oops()
} } }
textInputElement__P25.info = {"start":2468,"length":824,"line":84,"column":5,"endLine":108,"endColumn":5,"fileName":"pxt_modules/core/ui.ts","functionName":"textInputElement"}



var inline__P40  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.args___42 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = pxtrt.incr(s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.pxtcore.mkClassInstance(C24_VT);
    s.tmp_0 = r0;
    r0 = s.args___42;
    r0 = s.tmp_0;
    s.args___42 = (r0);
    r0 = s.args___42;
    s.tmp_0 = r0;
    r0 = s.arg0;
    s.tmp_1 = r0;
    r0 = pxsim.pxtrt.stfldRef(s.tmp_0, 0, s.tmp_1);
    r0 = s.caps[0];
    s.tmp_0 = r0;
    r0 = s.args___42;
    s.tmp_1 = r0;
    setupResume(s, 2);
    pxsim.pxtcore.runAction1(s.tmp_0, s.tmp_1);
    checkResumeConsumed();
    return;
  case 2:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = s.tmp_0;
    r0 = s.tmp_1;
    r0 = s.tmp_2;
  case 1:
    r0 = s.args___42;
    r0 = s.arg0;
    return leave(s, r0)
  default: oops()
} } }
inline__P40.info = {"start":3153,"length":131,"line":103,"column":72,"endLine":107,"endColumn":9,"fileName":"pxt_modules/core/ui.ts","functionName":"inline"}



var userInterface__P19  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = pxtrt.incr(s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = s.arg1;
    s.tmp_0 = r0;
    r0 = pxsim.UI.userInterfaceImpl(s.arg0, s.tmp_0);
    s.tmp_1 = r0;
    r0 = s.tmp_0;
    r0 = s.tmp_1;
  case 1:
    r0 = s.arg1;
    return leave(s, r0)
  default: oops()
} } }
userInterface__P19.info = {"start":78,"length":331,"line":5,"column":14,"endLine":15,"endColumn":5,"fileName":"pxt_modules/core/ui.ts","functionName":"userInterface"}



var inline__P46  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.tmp_0 = { fn: textElement__P23, parent: s };
    r0 = false;
    s.tmp_0.arg0 = r0;
    r0 = 0;
    s.tmp_0.arg1 = r0;
    r0 = null;
    s.tmp_0.arg2 = r0;
    r0 = globals.item___28;
    s.tmp_0.arg3 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
  case 1:
    return leave(s, r0)
  default: oops()
} } }
inline__P46.info = {"start":229,"length":117,"line":5,"column":62,"endLine":12,"endColumn":5,"fileName":"main.ts","functionName":"inline"}



var textElement__P23  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = pxtrt.incr(s.lambdaArgs[2]);
      s.arg3 = pxtrt.incr(s.lambdaArgs[3]);
      s.lambdaArgs = null;
    }
    r0 = s.arg2;
    s.tmp_0 = r0;
    r0 = s.arg3;
    s.tmp_1 = r0;
    r0 = pxsim.UI.textElementImpl(s.arg0, s.arg1, s.tmp_0, s.tmp_1);
    s.tmp_2 = r0;
    r0 = s.tmp_0;
    r0 = s.tmp_1;
    r0 = s.tmp_2;
  case 1:
    r0 = s.arg2;
    r0 = s.arg3;
    return leave(s, r0)
  default: oops()
} } }
textElement__P23.info = {"start":1987,"length":413,"line":65,"column":5,"endLine":80,"endColumn":5,"fileName":"pxt_modules/core/ui.ts","functionName":"textElement"}



var buttonElement__P22  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = pxtrt.incr(s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = pxtrt.incr(s.lambdaArgs[3]);
      s.arg4 = pxtrt.incr(s.lambdaArgs[4]);
      s.arg5 = pxtrt.incr(s.lambdaArgs[5]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = s.arg3;
    s.tmp_1 = r0;
    r0 = s.arg4;
    s.tmp_2 = r0;
    r0 = s.arg5;
    s.tmp_3 = r0;
    r0 = pxsim.UI.buttonElementImpl(s.tmp_0, s.arg1, s.arg2, s.tmp_1, s.tmp_2, s.tmp_3);
    s.tmp_4 = r0;
    r0 = s.tmp_0;
    r0 = s.tmp_1;
    r0 = s.tmp_2;
    r0 = s.tmp_3;
    r0 = s.tmp_4;
  case 1:
    r0 = s.arg0;
    r0 = s.arg3;
    r0 = s.arg4;
    r0 = s.arg5;
    return leave(s, r0)
  default: oops()
} } }
buttonElement__P22.info = {"start":1492,"length":495,"line":48,"column":5,"endLine":65,"endColumn":5,"fileName":"pxt_modules/core/ui.ts","functionName":"buttonElement"}



var inline__P59  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

  case 1:
    return leave(s, r0)
  default: oops()
} } }
inline__P59.info = {"start":347,"length":20,"line":12,"column":6,"endLine":14,"endColumn":5,"fileName":"main.ts","functionName":"inline"}

var C24_VT = {
  name: "WhenTextChangesArgs",
  refmask: [true],
  methods: [
  ],
  iface: [
  ],
};

setupDebugger(1)

pxsim.setupStringLiterals({
 "ffsk": 1,
 "jkkjkjk": 1
})