import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EmitterService {

    //_emitters will work as a store of event with an ID.
    private static _emitters: { [ID: string]: EventEmitter<any>} = { };

    //get function takes and ID of string and returns an event.
    static get(ID: string): EventEmitter<any> {

        // if there are is event present with given ID, assign this id to a new event
        if(!this._emitters[ID]) {
            this._emitters[ID] = new EventEmitter();
        }
        return this._emitters[ID];
    }
}