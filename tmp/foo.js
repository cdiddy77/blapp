pxsim.noRefCounting();
pxsim.enableFloatingPoint();


var _main___P1 = entryPoint = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    r0 = inline__P20;
    s.tmp_0 = r0;
    r0 = pxsim.ui.userInterface(0, s.tmp_0);
    s.tmp_1 = r0;
    r0 = s.tmp_0;
    r0 = s.tmp_1;
  case 1:
    return leave(s, r0)
  default: oops()
} } }
_main___P1.info = {"start":0,"length":0,"line":0,"column":0,"endLine":0,"endColumn":0,"fileName":"pxt_modules/core/pxt-core.d.ts","functionName":"<main>"}
_main___P1.continuations = [  ]



var inline__P20  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    r0 = inline__P22;
    s.tmp_0 = r0;
    r0 = pxsim.ui.groupElement("ss", 0, false, 0, s.tmp_0);
    s.tmp_1 = r0;
    r0 = s.tmp_0;
    r0 = s.tmp_1;
  case 1:
    return leave(s, r0)
  default: oops()
} } }
inline__P20.info = {"start":30,"length":109,"line":0,"column":30,"endLine":4,"endColumn":1,"fileName":"main.ts","functionName":"inline"}



var inline__P22  = function (s) {
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
inline__P22.info = {"start":116,"length":20,"line":1,"column":77,"endLine":3,"endColumn":5,"fileName":"main.ts","functionName":"inline"}


setupDebugger(1)

pxsim.setupStringLiterals({
 "ss": 1
})