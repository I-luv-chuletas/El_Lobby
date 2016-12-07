import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions} from '@angular/http';
import { Shouts } from '../shouts';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class ShoutsService {
// <<<<<<< HEAD
    
//     private shoutsURL = " http://api.neighbornet.io/shout";
//     private headers   = new Headers({"Content-Type": "application/json" });
    
// =======

    private shoutsURL = "http://api.neighbornet.io/shout";
    private headers   = new Headers({"Content-Type": "application/json" });
    private options = new RequestOptions({ headers: this.headers });

    constructor(
        private http:Http
    ) {}

// <<<<<<< HEAD
//     getShouts(): Promise<Shouts[]> {
//         // console.log(this.shoutsURL);
//         return this.http.get(this.shoutsURL).toPromise().then(response => response.json().data as Shouts[])
//         .catch(this.handleError);

//     } 
// =======
    getShouts(): Observable<Shouts[]> {
        return this.http.get(this.shoutsURL)
                .map((res:Response) => res.json())
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }


    getShout(id: string): Observable<Shouts> {
        return this.http.get(`${this.shoutsURL}/${id}`)
               .map((res:Response) => res.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }


    update(shout: Shouts): Observable<Shouts>{

        const url = `${this.shoutsURL}/${shout.id}`;

        return this.http.put(url, JSON.stringify({shout:shout}), this.options).map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

   
    
    metadataUpdating(){


    }


    create(shout: Shouts): Observable<Shouts>{
      shout.rating = 0;
      shout.commentSectionId = 2;
      let bodyString = JSON.stringify(shout);

      return this.http.post(this.shoutsURL, bodyString, this.options).map(this.extractData) // ...and calling .json() on the response to return data
                       .catch((error:any) => Observable.throw(console.log(error.status) || 'Server error'));
    }

   
    private extractData(res: Response) {
        let body: JSON;

        // check if empty, before call json
        if (res.text()) {
            body = res.json();
        }

        return body || {};
    }
}
