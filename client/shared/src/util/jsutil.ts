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

export interface Rect {
    left: number;
    top: number;
    right: number;
    bottom: number;
}

export interface Size {
    width: number;
    height: number;
}

//
// POINT
// ========================================================================
export class Point {
    x: number;
    y: number;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    static getTotalDistance(pts: Point[]): number {
        var totalDistance: number;
        for (var i: number = 0; i < pts.length; i++) {
            if (i == 0) {
                totalDistance = 0;
            } else {
                totalDistance = totalDistance + Vector.fromPoints(
                    pts[i - 1], pts[i]).magnitude;
            }
        }
        return totalDistance;
    }
    static fromVector(v: Vector): Point {
        return new Point(v.x, v.y);
    }

    toAttrString(): string { return this.x.toString() + ',' + this.y; }

}

//
// VECTOR
// ========================================================================
export class Vector {
    x: number;
    y: number;
    constructor(x: number = 0, y: number = 0) {

        var point = { x, y };
        this.x = point.x;
        this.y = point.y;
    }

    static fromMagnitudeAndDirection(mag: number, dir: number): Vector {
        return new Vector(
            mag * Math.sin(dir * (Math.PI / 180)),
            -mag * Math.cos(dir * (Math.PI / 180)));
    }

    get magnitude() { return Math.sqrt(this.x * this.x + this.y * this.y); }
    set magnitude(m) {
        var uv = this.normalize();
        this.x = uv.x * m;
        this.y = uv.y * m;
    }

    static fromPoints(p1: Point, p2: Point): Vector {
        return new Vector(p2.x - p1.x, p2.y - p1.y);
    }
    static fromPoint(p: Point): Vector {
        return new Vector(p.x, p.y);
    }

    cross(vector: Vector) {
        return this.x * vector.y - this.y * vector.x;
    }

    dot(vector: Vector) {
        return this.x * vector.x + this.y * vector.y;
    }

    add(vector: Vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    subtract(vector: Vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }

    multiply(scalar: number) {
        return new Vector(this.x * scalar, this.y * scalar);
    }

    divide(scalar: number) {
        return new Vector(this.x / scalar, this.y / scalar);
    }

    normalize() {
        var v = new Vector();
        var m = this.magnitude;
        v.x = this.x / m;
        v.y = this.y / m;
        return v;
    }

    unit() {
        return this.divide(this.magnitude);
    }

    perp() {
        return new Vector(-this.y, this.x)
    }

    perpendicular(vector: Vector) {
        return this.subtract(this.project(vector));
    }

    project(vector: Vector) {
        var percent = this.dot(vector) / vector.dot(vector);
        return vector.multiply(percent);
    }

    reflect(axis: Vector) {
        var vdot = this.dot(axis);
        var ldot = axis.dot(axis);
        var ratio = vdot / ldot;
        var v = new Vector();
        v.x = 2 * ratio * axis.x - this.x;
        v.y = 2 * ratio * axis.y - this.y;
        return v;
    }
}



export function rectsIntersect(r1: Rect, r2: Rect): boolean {
    return !(r2.left > r1.right ||
        r2.right < r1.left ||
        r2.top > r1.bottom ||
        r2.bottom < r1.top);
}

export function reflect(angle: number, normal: number): number {
    return (2 * normal) - angle - 180;
}

export interface IntersectData {
    tEnter: number;
    tLeave: number;
    // left:90, right:-90,top:0,bottom:180 ==> useful for bouncing
    normal: number;
    intersects: boolean;
}

interface AxisIntersectData {
    tEnter: number;
    tLeave: number;
}

export function rectIntersection(b1: Rect, b2: Rect, dir: Vector): IntersectData {
    let aid: AxisIntersectData = {
        tEnter: 0, tLeave: 1
    };
    if (axisIntersection(b1.left, b1.right, b2.left, b2.right, dir.x, aid) == false) {
        return {
            tEnter: aid.tEnter,
            tLeave: aid.tLeave,
            normal: Number.NaN,
            intersects: false
        };
    } else {
        let xAidEnter = aid.tEnter;
        // let xAidLeave = aid.tLeave;
        if (axisIntersection(b1.top, b1.bottom, b2.top, b2.bottom, dir.y, aid) == false) {
            return {
                tEnter: aid.tEnter,
                tLeave: aid.tLeave,
                normal: Number.NaN,
                intersects: false
            };
        } else {
            // figure out the normal:
            // if the x enter time is 0, then that means we were already
            // intersecting x, which means we must be top or bottom,
            // else if the y enter time is 0, similar,
            // if they are both non-zero (and they must therefore be <1)
            // the winner is the one that hit last
            let normal: number;
            if (xAidEnter == 0) {
                normal = dir.y >= 0 ? 180 : 0;
            } else if (aid.tEnter == 0) {
                normal = dir.x >= 0 ? 90 : -90;
            } else {
                normal = (xAidEnter == aid.tEnter)
                    ? (dir.x >= 0 ? 90 : -90)
                    : (dir.y >= 0 ? 180 : 0)
            }
            return {
                tEnter: aid.tEnter,
                tLeave: aid.tLeave,
                normal: normal,
                intersects: true
            };
        }
    }
}


function axisIntersection(
    b1left: number,
    b1right: number,
    b2left: number,
    b2right: number,
    diraxis: number,
    aid: AxisIntersectData): boolean {

    const intrEps = 1e-9;
    // let tLeave = 1;
    /* Carefully check for diraxis==0 using an epsilon. */
    if (Math.abs(diraxis) < intrEps) {
        if ((b1left >= b2right) || (b1right <= b2left)) {
            /* No movement in the axis, and they don't overlap,
                hence no intersection. */
            return false;
        } else {
            /* Stationary in the axis, with overlap at t=0 to t=1 */
            return true;
        }
    } else {
        let start: number = (b2left - b1right) / diraxis;
        let leave: number = (b2right - b1left) / diraxis;

        /* Swap to make sure our intervals are correct */
        if (start > leave) {
            let tmp = leave;
            leave = start;
            start = tmp;
        }
        if (start > aid.tEnter)
            aid.tEnter = start;
        if (leave < aid.tLeave)
            aid.tLeave = leave;
        if (aid.tEnter > aid.tLeave)
            return false;
    }
    return true;
}
