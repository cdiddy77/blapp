"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function copyProperties(src, dest) {
    if (src === undefined)
        return;
    for (var p in src) {
        if (src.hasOwnProperty(p)) {
            dest[p] = src[p];
        }
    }
}
exports.copyProperties = copyProperties;
function randomElement(items) {
    return items[Math.floor(Math.random() * items.length)];
}
exports.randomElement = randomElement;
function firstMatching(items, callbackfn) {
    for (var i = 0; i < items.length; i++) {
        var element = items[i];
        if (callbackfn(element, i, items))
            return element;
    }
    return null;
}
exports.firstMatching = firstMatching;
function notYetImplemented(fnName, message) {
    console.log(fnName, "NOT YET IMPLEMENTED:", message);
}
exports.notYetImplemented = notYetImplemented;
function mapSelectApply(src, dest, s) {
    for (var p in src) {
        dest[p] = s(src[p]);
    }
}
exports.mapSelectApply = mapSelectApply;
function mapSelect(src, s) {
    var dest = {};
    mapSelectApply(src, dest, s);
    return dest;
}
exports.mapSelect = mapSelect;
function interpolateValue(normValue, low, high) {
    return low + (normValue * (high - low));
}
exports.interpolateValue = interpolateValue;
function timerize(fn, startMsg, endMsg) {
    // is there a better fidelity timer to use?
    console.log(startMsg);
    var start = new Date().getTime();
    fn.call(this);
    var end = new Date().getTime();
    console.log(endMsg, (end - start).toString() + 'ms');
}
exports.timerize = timerize;
var enabledTags = {};
function taggedLog(tag, message, ...optionalParams) {
    let enabled = enabledTags[tag];
    if (enabled) {
        console.log(tag + '|' + message, optionalParams);
    }
}
exports.taggedLog = taggedLog;
function enableLogging(tag, on) {
    if (on === undefined)
        on = true;
    enabledTags[tag] = on;
}
exports.enableLogging = enableLogging;
function binarySearch(ar, el, compare_fn) {
    var lo = 0;
    var hi = ar.length - 1;
    while (lo <= hi) {
        var mid = (hi + lo) >> 1;
        var cmp = compare_fn(el, ar[mid]);
        if (cmp > 0) {
            lo = mid + 1;
        }
        else if (cmp < 0) {
            hi = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -lo - 1;
}
exports.binarySearch = binarySearch;
function loadData(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(xhr.responseText);
            }
            else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}
exports.loadData = loadData;
function requestURL(opts) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        let method = opts.method || 'GET';
        xhr.open(method, opts.url);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            }
            else {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: xhr.status,
                statusText: xhr.statusText
            });
        };
        if (opts.headers) {
            Object.keys(opts.headers).forEach((key) => {
                xhr.setRequestHeader(key, opts.headers[key]);
            });
        }
        var params = opts.params;
        // We'll need to stringify if we've been given an object
        // If we have a string, this is skipped.
        if (params && typeof params === 'object') {
            params = Object.keys(params).map(function (key) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
            }).join('&');
        }
        xhr.send(params);
    });
}
exports.requestURL = requestURL;
//# sourceMappingURL=jsutil.js.map