import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions} from '@angular/http';
import { Clike } from '../clike';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class ClikesService {

    private likesURL = "http://api.neighbornet.io/clike";

    private headers   = new Headers({"Content-Type": "application/json" });
    private options = new RequestOptions({ headers: this.headers });

    constructor(
        private http:Http
    ) { }

    getLikes(): Observable<Clike[]> {
        return this.http.get(this.likesURL)
                .map((res:Response) => res.json())
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getLike(id: string): Observable<Clike> {
        return this.http.get(`${this.likesURL}/${id}`)
               .map((res:Response) => res.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
    //Returns integer of likes count per shout
    getLikeCount(id: string): Observable<number> {
        return this.http.get(`${this.likesURL}/all/${id}`)
               .map((res:Response) => res.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    createLike(like: Clike): Observable<Clike>{
      let bodyString = JSON.stringify(like);

      return this.http.post(this.likesURL, bodyString, this.options).map(this.extractData) // ...and calling .json() on the response to return data
                       .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    removeLike(id: string): Observable<Clike>{

      return this.http.delete(`${this.likesURL}/${id}`, this.options).map(this.extractData) // ...and calling .json() on the response to return data
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
