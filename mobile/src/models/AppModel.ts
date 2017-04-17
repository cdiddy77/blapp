// import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { ModelBase } from './ModelBase';

export class AppModel extends ModelBase {
    constructor() {
        super();
    }

    readonly serverUri: string;
    readonly pairingCode: string;
    readonly lastEvalError: Error;
    readonly code: string;
    readonly connectionState: 'not connected'|'connecting'|'connected'|'joined' = 'not connected';

    loadSettings(): Promise<[void, void]> {
        let p1 = AsyncStorage.getItem('serverUri').then((v) => {
            this.setProperty('serverUri',v);
        })
        let p2 = AsyncStorage.getItem('pairingCode').then((v) => {
            this.setProperty('pairingCode',v);
        });
        return Promise.all([p1, p2]);
    }

    saveSettings(): Promise<void> {
        return AsyncStorage.setItem('serverUri', this.serverUri)
            .then(() => {
                return AsyncStorage.setItem('pairingCode', this.pairingCode);
            });
    }

    setProperty<T>(prop: keyof AppModel, v: T) {
        (<any>this)[prop] = v;
        this.fire("change", prop);
    }

}