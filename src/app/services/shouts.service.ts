import { Injectable } from '@angular/core';
import { Headers, Http, Response} from '@angular/http';
import { Shouts } from '../shouts';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class ShoutsService {

    private shoutsURL = "http://api.neighbornet.io/shout";
    private headers   = new Headers({"Content-Type": "application/json" });

    constructor(
        private http:Http
    ) { }

    getShouts(): Observable<Shouts[]> {
        return this.http.get(this.shoutsURL)
                .map((res:Response) => res.json())
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }


    getShout(id: string): Observable<Shouts[]> {
        return this.http.get(`${this.shoutsURL}/${id}`)
               .map((res:Response) => res.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }


    update(shout: Shouts): Observable<Shouts>{

        const url = `${this.shoutsURL}/${shout.id}`;

        return this.http.put(url, JSON.stringify(shout), {headers: this.headers}).map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }


    create(shout:Shouts): Observable<Shouts>{

      return this.http.post(this.shoutsURL, JSON.stringify(shout), {headers: this.headers}).map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                       .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    private handleError(error: Response | any) {
      let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Promise.reject(errMsg);
    }

}
