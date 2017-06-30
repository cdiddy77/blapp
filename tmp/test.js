pxsim.noRefCounting();
pxsim.enableFloatingPoint();


var _main___P1 = entryPoint = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.tmp_0 = { fn: userInterface__P19, parent: s };
    r0 = 0;
    s.tmp_0.arg0 = r0;
    r0 = inline__P39;
    s.tmp_0.arg1 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    s.tmp_0 = { fn: styleDef__P38, parent: s };
    r0 = inline__P51;
    s.tmp_0.arg0 = r0;
    s.pc = 3;
    return actionCall(s.tmp_0)
  case 3:
    r0 = s.retval;
  case 1:
    return leave(s, r0)
  default: oops()
} } }
_main___P1.info = {"start":0,"length":0,"line":0,"column":0,"endLine":0,"endColumn":0,"fileName":"pxt_modules/core/pxt-core.d.ts","functionName":"<main>"}
_main___P1.continuations = [  ]



var inline__P39  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.tmp_0 = { fn: groupElement__P20, parent: s };
    r0 = pxsim.String_.mkEmpty();
    s.tmp_0.arg0 = r0;
    r0 = 0;
    s.tmp_0.arg1 = r0;
    r0 = true;
    s.tmp_0.arg2 = r0;
    r0 = 2;
    s.tmp_0.arg3 = r0;
    r0 = null;
    s.tmp_0.arg4 = r0;
    r0 = inline__P40;
    s.tmp_0.arg5 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
  case 1:
    return leave(s, r0)
  default: oops()
} } }
inline__P39.info = {"start":31,"length":116,"line":0,"column":31,"endLine":4,"endColumn":1,"fileName":"main.ts","functionName":"inline"}



var inline__P40  = function (s) {
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
inline__P40.info = {"start":125,"length":19,"line":1,"column":86,"endLine":3,"endColumn":5,"fileName":"main.ts","functionName":"inline"}



var groupElement__P20  = function (s) {
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
      s.arg3 = (s.lambdaArgs[3]);
      s.arg4 = pxtrt.incr(s.lambdaArgs[4]);
      s.arg5 = pxtrt.incr(s.lambdaArgs[5]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = s.arg4;
    s.tmp_1 = r0;
    r0 = s.arg5;
    s.tmp_2 = r0;
    r0 = pxsim.UI.groupElementImpl(s.tmp_0, s.arg1, s.arg2, s.arg3, s.tmp_1, s.tmp_2);
    s.tmp_3 = r0;
    r0 = s.tmp_0;
    r0 = s.tmp_1;
    r0 = s.tmp_2;
    r0 = s.tmp_3;
  case 1:
    r0 = s.arg0;
    r0 = s.arg4;
    r0 = s.arg5;
    return leave(s, r0)
  default: oops()
} } }
groupElement__P20.info = {"start":655,"length":294,"line":23,"column":4,"endLine":31,"endColumn":5,"fileName":"pxt_modules/core/ui.ts","functionName":"groupElement"}



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
userInterface__P19.info = {"start":302,"length":107,"line":13,"column":4,"endLine":15,"endColumn":5,"fileName":"pxt_modules/core/ui.ts","functionName":"userInterface"}



var inline__P51  = function (s) {
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
inline__P51.info = {"start":164,"length":11,"line":5,"column":15,"endLine":7,"endColumn":1,"fileName":"main.ts","functionName":"inline"}



var styleDef__P38  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = pxtrt.incr(s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = pxsim.Style.styleDefImpl(s.tmp_0);
    s.tmp_1 = r0;
    r0 = s.tmp_0;
    r0 = s.tmp_1;
    { step = 1; continue; }
  case 1:
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = s.arg0;
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 2:
    return leave(s, r0)
  default: oops()
} } }
styleDef__P38.info = {"start":231,"length":101,"line":12,"column":4,"endLine":14,"endColumn":5,"fileName":"pxt_modules/core/style.ts","functionName":"styleDef"}


setupDebugger(1)
