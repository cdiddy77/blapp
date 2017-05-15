var i, list, message_input, message_text, my_username, username, x;

function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}

function mathRandomInt(a, b) {
    if (a > b) {
        // Swap a and b to ensure a is smaller.
        var c = a;
        a = b;
        b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
}

/**
 * Describe this function...
 */
function create_random_username() {
    return String(listsGetRandomItem('Gigastrength,Techpill,Mathshot,Mathnerd,TreeEater,PackmanBrainlure,Caracalplant,Sharpcharm,DreamGirl,PrettyEggplant,BroNooo,ThatDude,4real,DopeDude,FriendlyGiant,PinkHatter'.split(','), false)) + String(mathRandomInt(1, 99));
}

/**
 * Describe this function...
 */
function draw_their_message(message_text, username) {
    {
        CgRt.beginProps();

        CgRt.addProp("style", (
            function () {
                var result = {};
                result.alignItems = "center";
                result.flexDirection = "row";
                return result;
            }()));
        var p16394 = CgRt.getProps();
        CgRt.pushCont();
        {
            {
                CgRt.beginProps();

                CgRt.addProp("style", (
                    function () {
                        var result = {};
                        result.backgroundColor = "#666666";
                        result.borderRadius = 20;
                        result.padding = 10;
                        result.margin = 5;
                        result.height = 40;
                        result.alignItems = "center";
                        result.justifyContent = "center";
                        return result;
                    }()));
                var p16389 = CgRt.getProps();
                CgRt.pushCont();
                {
                    {
                        CgRt.beginProps();

                        CgRt.addProp("style", (
                            function () {
                                var result = {};
                                result.color = "#ffffff";
                                result.textAlign = "center";
                                return result;
                            }()));
                        var p16388 = CgRt.getProps();
                        CgRt.pushElem(CgRt.createElement(CgRt.Textr, p16388, [username]));
                    }
                }
                var cl16390 = CgRt.popCont();
                CgRt.pushElem(CgRt.createElement(CgRt.Viewr, p16389, cl16390));
            }
            {
                CgRt.beginProps();

                CgRt.addProp("style", (
                    function () {
                        var result = {};
                        result.backgroundColor = "#c0c0c0";
                        result.borderRadius = 10;
                        result.padding = 10;
                        result.margin = 10;
                        result.maxWidth = 250;
                        return result;
                    }()));
                var p16392 = CgRt.getProps();
                CgRt.pushCont();
                {
                    {
                        CgRt.beginProps();

                        CgRt.addProp("style", (
                            function () {
                                var result = {};
                                result.color = "#000000";
                                return result;
                            }()));
                        var p16391 = CgRt.getProps();
                        CgRt.pushElem(CgRt.createElement(CgRt.Textr, p16391, [message_text]));
                    }
                }
                var cl16393 = CgRt.popCont();
                CgRt.pushElem(CgRt.createElement(CgRt.Viewr, p16392, cl16393));
            }
        }
        var cl16395 = CgRt.popCont();
        CgRt.pushElem(CgRt.createElement(CgRt.Viewr, p16394, cl16395));
    }
}

/**
 * Describe this function...
 */
function draw_your_message(message_text) {
    {
        CgRt.beginProps();

        CgRt.addProp("style", (
            function () {
                var result = {};
                result.backgroundColor = "#3366ff";
                result.borderRadius = 10;
                result.padding = 10;
                result.margin = 10;
                result.maxWidth = 250;
                result.alignSelf = "flex-end";
                return result;
            }()));
        var p16397 = CgRt.getProps();
        CgRt.pushCont();
        {
            {
                CgRt.beginProps();

                CgRt.addProp("style", (
                    function () {
                        var result = {};
                        result.color = "#ffffff";
                        return result;
                    }()));
                var p16396 = CgRt.getProps();
                CgRt.pushElem(CgRt.createElement(CgRt.Textr, p16396, [message_text]));
            }
        }
        var cl16398 = CgRt.popCont();
        CgRt.pushElem(CgRt.createElement(CgRt.Viewr, p16397, cl16398));
    }
}

/**
 * Describe this function...
 */
function handle_send() {
    if (!!message_input.length) {
        CgRt.getShareVar('message texts').push(message_input);
        CgRt.getShareVar('message usernames').push(my_username);
        message_input = '';
        CgRt.getShareVar('message texts');CgRt.getShareVar('message usernames'), 2, 2
    }
}



CgRt.setResetApplicationProc(function () {
    CgRt.setShareVar('all users', []);
    CgRt.setShareVar('message texts', []);
    CgRt.setShareVar('message usernames', []);
});
if (CgRt.getResetApplicationProc()) CgRt.getResetApplicationProc()();
my_username = create_random_username();

CgRt.setTimeoutr(function () {
    CgRt.getShareVar('all users').push(my_username);

    CgRt.setShareVar('all users', (CgRt.getShareVar('all users')));
}, 500);

var __f, result = {};
CgRt.setTargetRenderProc(function () {
    CgRt.pushCont();
    {
        CgRt.beginProps();

        CgRt.addProp("style", (
            function () {
                var result = {};
                result.backgroundColor = "#cccccc";
                result.flexDirection = "row";
                result.justifyContent = "space-between";
                result.padding = 5;
                return result;
            }()));
        var p16378 = CgRt.getProps();
        CgRt.pushCont();
        {
            {
                CgRt.beginProps();

                CgRt.addProp("style", (
                    function () {
                        var result = {};
                        result.color = "#000000";
                        return result;
                    }()));
                var p16376 = CgRt.getProps();
                CgRt.pushElem(CgRt.createElement(CgRt.Textr, p16376, [(String('Logged in as: ') + String(my_username))]));
            }
            {
                CgRt.beginProps();

                CgRt.addProp("style", (
                    function () {
                        var result = {};
                        result.color = "#000000";
                        return result;
                    }()));
                var p16377 = CgRt.getProps();
                CgRt.pushElem(CgRt.createElement(CgRt.Textr, p16377, [(String('Involved: ') + String(CgRt.getShareVar('all users').join(',')))]));
            }
        }
        var cl16379 = CgRt.popCont();
        CgRt.pushElem(CgRt.createElement(CgRt.Viewr, p16378, cl16379));
    }
    {
        CgRt.beginProps();

        var p16380 = CgRt.getProps();
        CgRt.pushCont();
        {
            if (!!CgRt.getShareVar('message texts').length) {
                var i_end = CgRt.getShareVar('message texts').length;
                var i_inc = 1;
                if (1 > i_end) {
                    i_inc = -i_inc;
                }
                for (i = 1; i_inc >= 0 ? i <= i_end : i >= i_end; i += i_inc) {
                    if (my_username == CgRt.getShareVar('message usernames')[(i - 1)]) {
                        draw_your_message(CgRt.getShareVar('message texts')[(i - 1)]);
                    } else {
                        draw_their_message(CgRt.getShareVar('message texts')[(i - 1)], CgRt.getShareVar('message usernames')[(i - 1)]);
                    }
                }
            }
        }
        var cl16381 = CgRt.popCont();
        CgRt.pushElem(CgRt.createElement(CgRt.ScrollViewr, p16380, cl16381));
    }
    {
        CgRt.beginProps();

        CgRt.addProp("style", (
            function () {
                var result = {};
                result.backgroundColor = "#cccccc";
                result.flexDirection = "row";
                result.padding = 5;
                return result;
            }()));
        var p16386 = CgRt.getProps();
        CgRt.pushCont();
        {
            {
                CgRt.beginProps();

                CgRt.addProp("onChangeText", function (text) {
                    message_input = text;

                    CgRt.updateUI();
                });
                CgRt.addProp("value", message_input);
                CgRt.addProp("style", (
                    function () {
                        var result = {};
                        result.flex = 1;
                        result.borderRadius = 5;
                        result.backgroundColor = "#ffffff";
                        result.padding = 5;
                        return result;
                    }()));
                var p16382 = CgRt.getProps();
                CgRt.pushElem(CgRt.createElement(CgRt.TextInputr, p16382));
            }
            {
                CgRt.beginProps();

                CgRt.addProp("onPress", function () {
                    handle_send();

                    CgRt.updateUI();
                });
                CgRt.addProp("style", (
                    function () {
                        var result = {};
                        result.backgroundColor = "#3333ff";
                        result.borderRadius = 5;
                        result.padding = 5;
                        result.alignItems = "center";
                        result.justifyContent = "center";
                        result.marginLeft = 5;
                        return result;
                    }()));
                var p16384 = CgRt.getProps();
                CgRt.pushCont();
                {
                    {
                        CgRt.beginProps();

                        CgRt.addProp("style", (
                            function () {
                                var result = {};
                                result.color = "#ffffff";
                                result.textAlign = "center";
                                return result;
                            }()));
                        var p16383 = CgRt.getProps();
                        CgRt.pushElem(CgRt.createElement(CgRt.Textr, p16383, ['send']));
                    }
                }
                var cl16385 = CgRt.popCont();
                CgRt.pushElem(CgRt.createElement(CgRt.TouchableHighlightr, p16384, cl16385));
            }
        }
        var cl16387 = CgRt.popCont();
        CgRt.pushElem(CgRt.createElement(CgRt.Viewr, p16386, cl16387));
    }

    var cl = CgRt.popCont();
    return CgRt.createElement(CgRt.Viewr, { style: { backgroundColor: "white", height: CgRt.screenHeight } }, cl);
});