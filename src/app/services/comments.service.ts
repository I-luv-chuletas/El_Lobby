import { Injectable } from '@angular/core';
import { Comments } from '../comments';
import { Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class CommentsService {

    private commentsURL = 'http://api.neighbornet.io/comment';
    private commentShoutURL = 'http://api.neighbornet.io/comment/shout';
    private headers = new Headers({"Content-Type": "application/json"});

    constructor(
        private http: Http
    ) { }

    getComments(shoutId: string): Observable<Comments[]>{
      console.log('miramos el id:' + shoutId);
      const url = `${this.commentShoutURL}/${shoutId}`;
      return this.http.get(url)
                      .map((res:Response) => res.json())
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    addComment(comment: Comments): Observable<Comments>{
        console.log(JSON.stringify(comment));
        return this.http.post(this.commentsURL,JSON.stringify(comment),{headers: this.headers})
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}
