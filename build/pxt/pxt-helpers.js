var helpers;
(function (helpers) {
    function arraySplice(arr, start, len) {
        if (start < 0) {
            return;
        }
        for (var i = 0; i < len; ++i) {
            arr.removeAt(start);
        }
    }
    helpers.arraySplice = arraySplice;
    function arrayReverse(arr) {
        var len = arr.length;
        for (var i = 0; i < len / 2; i++) {
            swap(arr, i, len - i - 1);
        }
    }
    helpers.arrayReverse = arrayReverse;
    function arrayShift(arr) {
        return arr.removeAt(0);
    }
    helpers.arrayShift = arrayShift;
    /*TODO: Enable this multiple value unshift, after rest is enabled in our compiler.
        export function arrayUnshift<T>(arr: T[], ...values: T[]) : number {
            for(let i = values.length; i > 0; --i) {
                arr.insertAt(0, values[i - 1]);
            }
            return arr.length;
        }
    */
    function arrayUnshift(arr, value) {
        arr.insertAt(0, value);
        return arr.length;
    }
    helpers.arrayUnshift = arrayUnshift;
    function swap(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    function sortHelper(arr, callbackfn) {
        if (arr.length <= 0 || !callbackfn) {
            return arr;
        }
        var len = arr.length;
        // simple selection sort.
        for (var i = 0; i < len - 1; ++i) {
            for (var j = i + 1; j < len; ++j) {
                if (callbackfn(arr[i], arr[j]) > 0) {
                    swap(arr, i, j);
                }
            }
        }
        return arr;
    }
    function arraySort(arr, callbackfn) {
        if (!callbackfn) {
            //TODO: support native strings and number sorting
            /* callbackfn = function (value1: string, value2: string) : number {
                return value1.compare(value2);
                }*/
        }
        return sortHelper(arr, callbackfn);
    }
    helpers.arraySort = arraySort;
    function arrayMap(arr, callbackfn) {
        var res = [];
        var len = arr.length; // caching this seems to match V8
        for (var i = 0; i < len; ++i) {
            res.push(callbackfn(arr[i], i));
        }
        return res;
    }
    helpers.arrayMap = arrayMap;
    function arrayFilter(arr, callbackfn) {
        var res = [];
        var len = arr.length;
        for (var i = 0; i < len; ++i) {
            var v = arr[i]; // need to cache
            if (callbackfn(v, i))
                res.push(v);
        }
        return res;
    }
    helpers.arrayFilter = arrayFilter;
    function arrayReduce(arr, callbackfn, initialValue) {
        var len = arr.length;
        for (var i = 0; i < len; ++i) {
            initialValue = callbackfn(initialValue, arr[i], i);
        }
        return initialValue;
    }
    helpers.arrayReduce = arrayReduce;
    function arraySlice(arr, start, end) {
        var res = [];
        var len = arr.length;
        if (start < 0) {
            start = Math.max(len + start, 0);
        }
        if (end < 0) {
            end = len + end;
        }
        var sliceLength = end - start;
        for (var i = 0; i < sliceLength; ++i) {
            var index = i + start;
            if (index >= len) {
                break;
            }
            res.push(arr[index]);
        }
        return res;
    }
    helpers.arraySlice = arraySlice;
})(helpers || (helpers = {}));
var Math;
(function (Math) {
    function clamp(min, max, value) {
        return Math.min(max, Math.max(min, value));
    }
    Math.clamp = clamp;
    /**
      * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
      * For example, the absolute value of -5 is the same as the absolute value of 5.
      * @param x A numeric expression for which the absolute value is needed.
      */
    function abs(x) {
        return x < 0 ? -x : x;
    }
    Math.abs = abs;
    /**
      * Returns the sign of the x, indicating whether x is positive, negative or zero.
      * @param x The numeric expression to test
      */
    function sign(x) {
        if (x == 0)
            return 0;
        if (x > 0)
            return 1;
        return -1;
    }
    Math.sign = sign;
    /**
      * Returns the larger of two supplied numeric expressions.
      */
    function max(a, b) {
        if (a >= b)
            return a;
        return b;
    }
    Math.max = max;
    /**
      * Returns the smaller of two supplied numeric expressions.
      */
    function min(a, b) {
        if (a <= b)
            return a;
        return b;
    }
    Math.min = min;
})(Math || (Math = {}));
//# sourceMappingURL=pxt-helpers.js.map