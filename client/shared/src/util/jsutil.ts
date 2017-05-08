export function copyProperties(src: any, dest: any): void {
    if (src === undefined)
        return;
    for (var p in src) {
        if (src.hasOwnProperty(p)) {
            dest[p] = src[p];
        }
    }
}

export function randomElement<T>(items: Array<T>): T {
    return items[Math.floor(Math.random() * items.length)];
}

export function firstMatching<T>(
    items: Array<T>,
    callbackfn: (value: T, index: number, array: T[]) => boolean): T {
    for (var i = 0; i < items.length; i++) {
        var element = items[i];
        if (callbackfn(element, i, items))
            return element;
    }
    return null;
}

export function notYetImplemented(fnName: string, message?: string): void {
    console.log(fnName, "NOT YET IMPLEMENTED:", message);
}

export interface Map<T> {
    [key: string]: T;
}

export interface KVP<K, V> {
    key: K;
    value: V;
}

export function mapSelectApply<T, U>(src: Map<T>, dest: Map<U>, s: (t: T) => U): void {
    for (var p in src) {
        dest[p] = s(src[p]);
    }
}
export function mapSelect<T, U>(src: Map<T>, s: (t: T) => U): Map<U> {
    var dest: Map<U> = {};
    mapSelectApply(src, dest, s);
    return dest;
}

export function mapToArray<T, U>(src: Map<T>, fn: (k: string, v: T) => U): U[] {
    let dest: U[] = [];
    for (var p in src) {
        if (src.hasOwnProperty(p)) {
            dest.push(fn(p, src[p]));
        }
    }
    return dest;
}

export function interpolateValue(normValue: number, low: number, high: number): number {
    return low + (normValue * (high - low));
}

export function timerize(fn: () => void, startMsg: string, endMsg: string) {
    // is there a better fidelity timer to use?
    console.log(startMsg);
    var start: number = new Date().getTime();
    fn.call(this);
    var end: number = new Date().getTime();
    console.log(endMsg, (end - start).toString() + 'ms');
}

var enabledTags: any = {};
export function taggedLog(tag: string, message?: any, ...optionalParams: any[]): void {
    let enabled: boolean = enabledTags[tag];
    if (enabled) {
        console.log(tag + '|' + message, optionalParams);
    }
}

export function enableLogging(tag: string, on?: boolean): void {
    if (on === undefined)
        on = true;
    enabledTags[tag] = on;
}

export function binarySearch<T>(ar: T[], el: T, compare_fn: (searchValue: T, elementValue: T) => number): number {
    var lo = 0;
    var hi = ar.length - 1;
    while (lo <= hi) {
        var mid = (hi + lo) >> 1;
        var cmp = compare_fn(el, ar[mid]);
        if (cmp > 0) {
            lo = mid + 1;
        } else if (cmp < 0) {
            hi = mid - 1;
        } else {
            return mid;
        }
    }
    return -lo - 1;
}

export function loadData(
    path: string,
    success?: (txt: string) => void,
    error?: (xhr: XMLHttpRequest) => void): void {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(xhr.responseText);
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

export interface RequestURLOpts {
    method?: string,
    url: string,
    params?: any,
    headers?: any
}

export function requestURL(opts: RequestURLOpts): Promise<string> {
    return new Promise<string>(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        let method = opts.method || 'GET';
        xhr.open(method, opts.url);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
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
