import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions} from '@angular/http';
import { Shouts } from '../shouts';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class AnalyticsService {

    private shoutsURL = "http://api.neighbornet.io/shout";
    private headers   = new Headers({"Content-Type": "application/json" });
    private options = new RequestOptions({ headers: this.headers });

    constructor(
        private http:Http
    ) { }

    getCommentCount(id: string): Observable<Shouts[]> {
        return this.http.get(`${this.shoutsURL}/${id}`)
               .map((res:Response) => res.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getApprovalPercentage(id: string): Observable<Shouts[]> {
        return this.http.get(`${this.shoutsURL}/${id}`)
               .map((res:Response) => res.json())
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
