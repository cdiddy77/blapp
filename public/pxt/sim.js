/// <reference path="../libs/core/types.d.ts"/>
var pxsim;
(function (pxsim) {
    var UI;
    (function (UI) {
        //%
        function userInterfaceImpl(theme, body) {
        }
        UI.userInterfaceImpl = userInterfaceImpl;
        //%
        function groupElementImpl(name, direction, flex, className, style, children) {
        }
        UI.groupElementImpl = groupElementImpl;
        //%
        function scrollerElementImpl(name, flex, className, horz, style, children) {
        }
        UI.scrollerElementImpl = scrollerElementImpl;
        //%
        function buttonElementImpl(name, flex, className, style, children, whenPressed) {
        }
        UI.buttonElementImpl = buttonElementImpl;
        //%
        function textElementImpl(flex, className, style, value) {
        }
        UI.textElementImpl = textElementImpl;
        //%
        function textInputElementImpl(name, flex, className, style, initialValue, whenTextChanges) {
        }
        UI.textInputElementImpl = textInputElementImpl;
        //%
        function imageElementImpl(flex, width, height, style, url) {
        }
        UI.imageElementImpl = imageElementImpl;
        //%
        function dividerElementImpl(className, style) {
        }
        UI.dividerElementImpl = dividerElementImpl;
        //%
        function updateUIImpl() {
        }
        UI.updateUIImpl = updateUIImpl;
        //%
        function iconElementImpl(category, name, iconType, size, style) {
        }
        UI.iconElementImpl = iconElementImpl;
    })(UI = pxsim.UI || (pxsim.UI = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var Style;
    (function (Style) {
        //%
        function stylePropAlignContentImpl(v) {
            return null;
        }
        Style.stylePropAlignContentImpl = stylePropAlignContentImpl;
        //% 
        function stylePropAlignItemsImpl(v) {
            return null;
        }
        Style.stylePropAlignItemsImpl = stylePropAlignItemsImpl;
        //% 
        function stylePropAlignSelfImpl(v) {
            return null;
        }
        Style.stylePropAlignSelfImpl = stylePropAlignSelfImpl;
        //% 
        function stylePropFlexDirectionImpl(v) {
            return null;
        }
        Style.stylePropFlexDirectionImpl = stylePropFlexDirectionImpl;
        //% 
        function stylePropJustifyContentImpl(v) {
            return null;
        }
        Style.stylePropJustifyContentImpl = stylePropJustifyContentImpl;
        //% 
        function stylePropFlexWrapImpl(v) {
            return null;
        }
        Style.stylePropFlexWrapImpl = stylePropFlexWrapImpl;
        //% 
        function stylePropPositionImpl(v) {
            return null;
        }
        Style.stylePropPositionImpl = stylePropPositionImpl;
        //% 
        function stylePropOffsetImpl(v, p) {
            return null;
        }
        Style.stylePropOffsetImpl = stylePropOffsetImpl;
        //% 
        function stylePropAspectRatioImpl(v) {
            return null;
        }
        Style.stylePropAspectRatioImpl = stylePropAspectRatioImpl;
        //% 
        function stylePropBackgroundColorImpl(v) {
            return null;
        }
        Style.stylePropBackgroundColorImpl = stylePropBackgroundColorImpl;
        //% 
        function stylePropBorderColorImpl(p, v) {
            return null;
        }
        Style.stylePropBorderColorImpl = stylePropBorderColorImpl;
        //% 
        function stylePropBorderRadiusImpl(p, v) {
            return null;
        }
        Style.stylePropBorderRadiusImpl = stylePropBorderRadiusImpl;
        //% 
        function stylePropBorderWidthImpl(p, v) {
            return null;
        }
        Style.stylePropBorderWidthImpl = stylePropBorderWidthImpl;
        //% 
        function stylePropBorderStyleImpl(v) {
            return null;
        }
        Style.stylePropBorderStyleImpl = stylePropBorderStyleImpl;
        //% 
        function stylePropFlexValuesImpl(p, v) {
            return null;
        }
        Style.stylePropFlexValuesImpl = stylePropFlexValuesImpl;
        //% 
        function stylePropSizeImpl(p, v) {
            return null;
        }
        Style.stylePropSizeImpl = stylePropSizeImpl;
        //% 
        function stylePropMarginImpl(p, v) {
            return null;
        }
        Style.stylePropMarginImpl = stylePropMarginImpl;
        //% 
        function stylePropPaddingImpl(p, v) {
            return null;
        }
        Style.stylePropPaddingImpl = stylePropPaddingImpl;
        //% 
        function stylePropOverflowImpl(v) {
            return null;
        }
        Style.stylePropOverflowImpl = stylePropOverflowImpl;
        //% 
        function stylePropOpacityImpl(v) {
            return null;
        }
        Style.stylePropOpacityImpl = stylePropOpacityImpl;
        //% 
        function stylePropImageResizeModeImpl(v) {
            return null;
        }
        Style.stylePropImageResizeModeImpl = stylePropImageResizeModeImpl;
        //% 
        function stylePropImageTintColorImpl(v) {
            return null;
        }
        Style.stylePropImageTintColorImpl = stylePropImageTintColorImpl;
        //% 
        function stylePropTextColorImpl(v) {
            return null;
        }
        Style.stylePropTextColorImpl = stylePropTextColorImpl;
        //% 
        function stylePropTextFontFamilyImpl(v) {
            return null;
        }
        Style.stylePropTextFontFamilyImpl = stylePropTextFontFamilyImpl;
        //% 
        function stylePropTextFontSizeImpl(v) {
            return null;
        }
        Style.stylePropTextFontSizeImpl = stylePropTextFontSizeImpl;
        //% 
        function stylePropTextFontStyleImpl(v) {
            return null;
        }
        Style.stylePropTextFontStyleImpl = stylePropTextFontStyleImpl;
        //% 
        function stylePropTextFontWeightImpl(v) {
            return null;
        }
        Style.stylePropTextFontWeightImpl = stylePropTextFontWeightImpl;
        //% 
        function stylePropTextLineHeightImpl(v) {
            return null;
        }
        Style.stylePropTextLineHeightImpl = stylePropTextLineHeightImpl;
        //% 
        function stylePropTextAlignImpl(v) {
            return null;
        }
        Style.stylePropTextAlignImpl = stylePropTextAlignImpl;
        //% 
        function stylePropTextDecorationLineImpl(v) {
            return null;
        }
        Style.stylePropTextDecorationLineImpl = stylePropTextDecorationLineImpl;
    })(Style = pxsim.Style || (pxsim.Style = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var Data;
    (function (Data) {
        //%
        function getSharedStringImpl(name) {
            return "sample";
        }
        Data.getSharedStringImpl = getSharedStringImpl;
        //%
        function getSharedNumberImpl(name) {
            return -1;
        }
        Data.getSharedNumberImpl = getSharedNumberImpl;
        //%
        function getSharedBooleanImpl(name) {
            return false;
        }
        Data.getSharedBooleanImpl = getSharedBooleanImpl;
        //%
        function getSharedStringListImpl(name) {
            return [];
        }
        Data.getSharedStringListImpl = getSharedStringListImpl;
        //%
        function getSharedNumberListImpl(name) {
            return [];
        }
        Data.getSharedNumberListImpl = getSharedNumberListImpl;
        //%
        function setSharedStringImpl(name, v) {
        }
        Data.setSharedStringImpl = setSharedStringImpl;
        //%
        function setSharedNumberImpl(name, v) {
        }
        Data.setSharedNumberImpl = setSharedNumberImpl;
        //%
        function setSharedBooleanImpl(name, v) {
        }
        Data.setSharedBooleanImpl = setSharedBooleanImpl;
        //%
        function setSharedStringListImpl(name, v) {
        }
        Data.setSharedStringListImpl = setSharedStringListImpl;
        //%
        function setSharedNumberListImpl(name, v) {
        }
        Data.setSharedNumberListImpl = setSharedNumberListImpl;
        //%
        function onSharedVariableChangeImpl(name, body) {
        }
        Data.onSharedVariableChangeImpl = onSharedVariableChangeImpl;
        //%
        function textContainsImpl(text, subtext) {
            return false;
        }
        Data.textContainsImpl = textContainsImpl;
    })(Data = pxsim.Data || (pxsim.Data = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var Time;
    (function (Time) {
        //%
        function afterTimeImpl(ms, body) {
        }
        Time.afterTimeImpl = afterTimeImpl;
        //%
        function everyTimeImpl(ms, body) {
        }
        Time.everyTimeImpl = everyTimeImpl;
        //%
        function resetApplicationImpl() {
        }
        Time.resetApplicationImpl = resetApplicationImpl;
        //%
        function whenAppResetImpl(body) {
        }
        Time.whenAppResetImpl = whenAppResetImpl;
    })(Time = pxsim.Time || (pxsim.Time = {}));
})(pxsim || (pxsim = {}));
/// <reference path="../node_modules/pxt-core/typings/globals/bluebird/index.d.ts"/>
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
var pxsim;
(function (pxsim) {
    pxsim.initCurrentRuntime = () => {
        pxsim.runtime.board = new Board();
    };
    function board() {
        return pxsim.runtime.board;
    }
    pxsim.board = board;
    class Board extends pxsim.BaseBoard {
        constructor() {
            super();
        }
        initAsync(msg) {
            console.log('messing up  simulator');
            return Promise.resolve();
        }
        updateView() {
        }
    }
    pxsim.Board = Board;
})(pxsim || (pxsim = {}));
