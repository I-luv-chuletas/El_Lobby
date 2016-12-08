import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions} from '@angular/http';
import { Hits } from '../hits';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class HitsService {

    private hitsURL = "http://api.neighbornet.io/hit";
    private headers   = new Headers({"Content-Type": "application/json" });
    private options = new RequestOptions({ headers: this.headers });

    constructor(
        private http:Http
    ) { }

    getHits(): Observable<Hits[]> {
        return this.http.get(this.hitsURL)
                .map((res:Response) => res.json())
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getHit(id: string): Observable<Hits> {
        return this.http.get(`${this.hitsURL}/${id}`)
               .map((res:Response) => res.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    create(hit: Hits): Observable<Hits>{
      let bodyString = JSON.stringify(hit);

      return this.http.post(this.hitsURL, bodyString, this.options).map(this.extractData) // ...and calling .json() on the response to return data
                       .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    //Returns integer of likes count per shout
    getHitCount(id: string): Observable<number> {
        return this.http.get(`${this.hitsURL}/all/${id}`)
               .map(this.extractData)
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
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
