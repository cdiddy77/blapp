import * as jsutil from '../../../shared/src/util/jsutil';

type ModelEventCallback = (args: any) => void;

export class ModelBase {
    eventHandlers: jsutil.Map<ModelEventCallback[]> = {};

    // this is what is known as a "self-serve" model. You can subscribe to 
    // any event you want, and you can fire any event you want. 
    on(eventName: string, fn: (args: any) => void) {
        // console.log('on:adding eventhander', eventName);
        if (this.eventHandlers[eventName] === undefined)
            this.eventHandlers[eventName] = [];
        this.eventHandlers[eventName].push(fn);
    }
    off(eventName: string, fn: (args: any) => void) {
        if (this.eventHandlers[eventName] !== undefined) {
            var handlers: any[] = this.eventHandlers[eventName];
            var index = handlers.indexOf(fn);
            if (index >= 0) {
                // console.log('off:removing eventhander', eventName);
                handlers.splice(index, 1);
            }
            else
                console.log('could not find event-handler to remove', eventName);
        }
    }
    protected fire(eventName: string, args?: any) {
        if (this.eventHandlers[eventName]) {
            this.eventHandlers[eventName].forEach((v: any, i: number, arr: any[]) => {
                v.call(this, args);
            });
        }
    }
}