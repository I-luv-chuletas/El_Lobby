import { Injectable } from '@angular/core';
import { Comments } from '../comments';
import { Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class CommentsService {

    private commentsURL = 'http://api.neighbornet.io/comment';
    private headers = new Headers({"Content-Type": "application/json"});

    constructor(
        private http: Http
    ) { }

    getComments(shoutId: string): Observable<Comments[]>{
      return this.http.get(this.commentsURL)
                      .map((res:Response) => res.json())
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    addComment(comment: Comments): Observable<Comments>{
        return this.http.post(this.commentsURL,JSON.stringify(comment),{headers: this.headers})
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}
