import { Injectable } from '@angular/core';
import { Comments } from '../comments';
import { Headers, Http, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class RatingService {

    private likeURL = 'http://api.neighbornet.io/like/all';
    private hitsURL = 'http://api.neighbornet.io/hit/all';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });
    shoutHits: number;
    shoutLikes: number;

    constructor(
        private http: Http
    ) { }

    getRating(id: string): Observable<number>{
      const url = `${this.likeURL}/${id}`;
      const hurl = `${this.hitsURL}/${id}`;
      Observable.forkJoin(
        this.http.get(url, this.options).map((res:Response) => res.json()),
        this.http.get(hurl, this.options).map((res:Response) => res.json()),
      ).subscribe(
        data => {
           this.shoutHits = data[0];
           this.shoutLikes = data[1];
        },
        err => console.error(err)
      );
    }

}
