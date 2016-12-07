import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions} from '@angular/http';
import { Liked } from '../liked';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class AnalyticsService {

    private likesURL = "http://api.neighbornet.io/like";
    private dislikesURL = "http://api.neighbornet.io/dislike";
    private headers   = new Headers({"Content-Type": "application/json" });
    private options = new RequestOptions({ headers: this.headers });

    constructor(
        private http:Http
    ) { }

    getLikes(): Observable<Liked[]> {
        return this.http.get(this.likesURL)
                .map((res:Response) => res.json())
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getLike(id: string): Observable<Liked[]> {
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

    getDislikes(): Observable<Liked[]> {
        return this.http.get(this.dislikesURL)
                .map((res:Response) => res.json())
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getDislike(id: string): Observable<Liked[]> {
        return this.http.get(`${this.dislikesURL}/${id}`)
               .map((res:Response) => res.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
    //Returns integer of likes count per shout
    getDislikeCount(id: string): Observable<number> {
        return this.http.get(`${this.dislikesURL}/all/${id}`)
               .map((res:Response) => res.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    createLike(like: Liked): Observable<Liked>{
      let bodyString = JSON.stringify(like);

      return this.http.post(this.likesURL, bodyString, this.options).map(this.extractData) // ...and calling .json() on the response to return data
                       .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    createDislike(like: Liked): Observable<Liked>{
      let bodyString = JSON.stringify(like);

      return this.http.post(this.dislikesURL, bodyString, this.options).map(this.extractData) // ...and calling .json() on the response to return data
                       .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    removeLike(id: string): Observable<Liked>{

      return this.http.delete(`${this.likesURL}/${id}`, this.options).map(this.extractData) // ...and calling .json() on the response to return data
                       .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    removeDislike(id: string): Observable<Liked>{

      return this.http.delete(`${this.dislikesURL}/${id}`, this.options).map(this.extractData) // ...and calling .json() on the response to return data
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
