import {EventsProvider} from './EventsProvider';

export class ModelWithEvents<T> extends EventsProvider {

    constructor(m: T) {
        super();
        this._data = m;
    }

    private _data: T;

    // meant to be overridden by derived class
    protected onPropertySet<P>(prop: keyof T) {
    }

    setProperty<P>(prop: keyof T, v: P) {
        (<any>this._data)[prop] = v;
        this.onPropertySet(prop);
        this.fire("change", prop);
    }

    get data(): Readonly<T> {
        return this._data;
    }

}