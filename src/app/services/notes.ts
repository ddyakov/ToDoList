import { Injectable } from '@angular/core'
import { Api } from './api'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class NotesService { 
    private path: string = '/notes';
    private api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    getNotes() : Observable<any> {
        return this.api.get(this.path);
    }

    createNote(note) : Observable<any>{
        return this.api.post(this.path, note);
    }

    completeNote(note) : Observable<any> {
        return this.api.delete(`${this.path}/${note.id}`);
    }
}