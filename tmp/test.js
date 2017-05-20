var input_text, buttonstyle, buttontextstyle, error_message, rowstyle;


input_text = '';


var __f, result = {};
CgRt.setTargetRenderProc(function () {
  CgRt.pushCont();
  {
    CgRt.beginProps();
    undefined
    CgRt.addProp("style", (
      function () {
        var result = {};
        result.flexDirection = "column";
        result.flex = 1;
        return result;
      }()));
    var p490 = CgRt.getProps();
    CgRt.pushCont();
    {
      {
        CgRt.beginProps();

        CgRt.addProp("ref", function (e) { CgRt.setIdElem('top2', e); });
        CgRt.addProp("style", (
          function () {
            var result = {};
            result.flexDirection = "row";
            result.justifyContent = "flex-start";
            result.flex = 1;
            return result;
          }()));
        var p477 = CgRt.getProps();
        CgRt.pushCont();
        {
          {
            CgRt.beginProps();

            CgRt.addProp("ref", function (e) { CgRt.setIdElem('left', e); });
            CgRt.addProp("style", (
              function () {
                var result = {};
                result.flex = 1;
                result.margin = 2;
                return result;
              }()));
            var p467 = CgRt.getProps();
            CgRt.pushCont();
            {
              {
                CgRt.beginProps();
                undefined
                CgRt.addProp("style", (
                  function () {
                    var result = {};
                    result.borderWidth = 1;
                    result.flex = 1;
                    result.margin = 2;
                    return result;
                  }()));
                var p465 = CgRt.getProps();
                CgRt.pushCont();
                { }
                var cl466 = CgRt.popCont();
                CgRt.pushElem(CgRt.createElement(CgRt.ScrollViewr, p465, cl466));
              }
            }
            var cl468 = CgRt.popCont();
            CgRt.pushElem(CgRt.createElement(CgRt.Viewr, p467, cl468));
          }
          {
            CgRt.beginProps();

            CgRt.addProp("ref", function (e) { CgRt.setIdElem('right', e); });
            var p475 = CgRt.getProps();
            CgRt.pushCont();
            {
              {
                CgRt.beginProps();

                CgRt.addProp("onPress", function () {
                  CgRt.updateUI();
                });
                CgRt.addProp("style", buttonstyle);
                var p470 = CgRt.getProps();
                CgRt.pushCont();
                {
                  {
                    CgRt.beginProps();

                    CgRt.addProp("style", buttontextstyle);
                    var p469 = CgRt.getProps();
                    CgRt.pushElem(CgRt.createElement(CgRt.Textr, p469, ['Button']));
                  }
                }
                var cl471 = CgRt.popCont();
                CgRt.pushElem(CgRt.createElement(CgRt.TouchableHighlightr, p470, cl471));
              }
              {
                CgRt.beginProps();

                CgRt.addProp("onPress", function () {
                  CgRt.updateUI();
                });
                CgRt.addProp("style", buttonstyle);
                var p473 = CgRt.getProps();
                CgRt.pushCont();
                {
                  {
                    CgRt.beginProps();

                    CgRt.addProp("style", buttontextstyle);
                    var p472 = CgRt.getProps();
                    CgRt.pushElem(CgRt.createElement(CgRt.Textr, p472, ['Other button']));
                  }
                }
                var cl474 = CgRt.popCont();
                CgRt.pushElem(CgRt.createElement(CgRt.TouchableHighlightr, p473, cl474));
              }
            }
            var cl476 = CgRt.popCont();
            CgRt.pushElem(CgRt.createElement(CgRt.Viewr, p475, cl476));
          }
        }
        var cl478 = CgRt.popCont();
        CgRt.pushElem(CgRt.createElement(CgRt.Viewr, p477, cl478));
      }
      {
        CgRt.beginProps();

        CgRt.addProp("ref", function (e) { CgRt.setIdElem('bottom', e); });
        CgRt.addProp("style", (
          function () {
            var result = {};
            result.flexDirection = "row";
            result.justifyContent = "flex-start";
            return result;
          }()));
        var p488 = CgRt.getProps();
        CgRt.pushCont();
        {
          {
            CgRt.beginProps();

            CgRt.addProp("ref", function (e) { CgRt.setIdElem('left', e); });
            CgRt.addProp("style", (
              function () {
                var result = {};
                result.flex = 1;
                result.margin = 2;
                return result;
              }()));
            var p481 = CgRt.getProps();
            CgRt.pushCont();
            {
              {
                CgRt.beginProps();

                CgRt.addProp("style", (
                  function () {
                    var result = {};
                    result.color = "#cc0000";
                    return result;
                  }()));
                var p479 = CgRt.getProps();
                CgRt.pushElem(CgRt.createElement(CgRt.Textr, p479, [error_message]));
              }
              {
                CgRt.beginProps();

                CgRt.addProp("onChangeText", function (text) {
                  input_text = text;

                  CgRt.updateUI();
                });
                CgRt.addProp("value", input_text);
                CgRt.addProp("style", (
                  function () {
                    var result = {};
                    result.borderWidth = 1;
                    result.flex = 1;
                    result.margin = 2;
                    result.padding = 5;
                    return result;
                  }()));
                var p480 = CgRt.getProps();
                CgRt.pushElem(CgRt.createElement(CgRt.TextInputr, p480));
              }
            }
            var cl482 = CgRt.popCont();
            CgRt.pushElem(CgRt.createElement(CgRt.Viewr, p481, cl482));
          }
          {
            CgRt.beginProps();

            CgRt.addProp("ref", function (e) { CgRt.setIdElem('right', e); });
            CgRt.addProp("style", (
              function () {
                var result = {};
                result.justifyContent = "flex-end";
                return result;
              }()));
            var p486 = CgRt.getProps();
            CgRt.pushCont();
            {
              {
                CgRt.beginProps();

                CgRt.addProp("onPress", function () {
                  if (!) {
                  }

                  CgRt.updateUI();
                });
                CgRt.addProp("style", buttonstyle);
                var p484 = CgRt.getProps();
                CgRt.pushCont();
                {
                  {
                    CgRt.beginProps();

                    CgRt.addProp("style", buttontextstyle);
                    var p483 = CgRt.getProps();
                    CgRt.pushElem(CgRt.createElement(CgRt.Textr, p483, ['Insert']));
                  }
                }
                var cl485 = CgRt.popCont();
                CgRt.pushElem(CgRt.createElement(CgRt.TouchableHighlightr, p484, cl485));
              }
            }
            var cl487 = CgRt.popCont();
            CgRt.pushElem(CgRt.createElement(CgRt.Viewr, p486, cl487));
          }
        }
        var cl489 = CgRt.popCont();
        CgRt.pushElem(CgRt.createElement(CgRt.Viewr, p488, cl489));
      }
    }
    var cl491 = CgRt.popCont();
    CgRt.pushElem(CgRt.createElement(CgRt.Viewr, p490, cl491));
  }

  var cl = CgRt.popCont();
  return CgRt.createElement(CgRt.Viewr, { style: { backgroundColor: "white", flex: 1 } }, cl);
});
rowstyle =
  function () {
    var result = {};
    result.flexDirection = "row";
    result.justifyContent = "center";
    return result;
  }();
buttonstyle =
  function () {
    var result = {};
    result.alignItems = "center";
    result.justifyContent = "center";
    result.backgroundColor = "#3366ff";
    result.borderRadius = 5;
    result.margin = 5;
    result.padding = 5;
    result.minWidth = 100;
    return result;
  }();
buttontextstyle =
  function () {
    var result = {};
    result.color = "#ffffff";
    return result;
  }();

{
  CgRt.beginProps();
  undefined
  CgRt.addProp("style", (
    function () {
      var result = {};
      result.borderWidth = 1;
      result.flex = 1;
      result.margin = 2;
      return result;
    }()));
  var p492 = CgRt.getProps();
  CgRt.pushCont();
  { }
  var cl493 = CgRt.popCont();
  CgRt.pushElem(CgRt.createElement(CgRt.ScrollViewr, p492, cl493));
}


{
  CgRt.beginProps();

  CgRt.addProp("source", { uri: '' });
  var p = CgRt.getProps();
  CgRt.pushElem(CgRt.createElement(CgRt.Imager, p));
}