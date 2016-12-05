import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions} from '@angular/http';
import { Hits } from '../hits';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class AnalyticsService {

    private hitsURL = "http://api.neighbornet.io/hits";
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

    private extractData(res: Response) {
        let body;

        // check if empty, before call json
        if (res.text()) {
            body = res.json();
        }

        return body || {};
    }
}
