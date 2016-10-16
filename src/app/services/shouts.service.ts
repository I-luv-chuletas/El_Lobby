import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import { Shouts } from '../shouts';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ShoutsService {
    
    private shoutsURL = "app/shouts";
    private headers   = new Headers({"Content-Type": "application/json" });

    constructor(
        private http:Http
    ) { }

    getShouts(): Promise<Shouts[]> {
        return this.http.get(this.shoutsURL).toPromise().then(response => response.json().data as Shouts[])
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}