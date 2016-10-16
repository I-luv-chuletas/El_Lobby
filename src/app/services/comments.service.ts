import { Injectable } from '@angular/core';
import { Comments } from '../comments';
import {Headers, Http} from '@angular/http';


@Injectable()
export class CommentsService {

    private commentsURL = 'app/comments';
    private headers = new Headers({"Content-Type": "application/json"});
    
    constructor(
        private http: Http
    ) { }

    getComments(): Promise<Comments[]>{
        return this.http.get(this.commentsURL).toPromise()
        .then(response => response.json().data as Comments[]);
    }

    addComment(comment: Comments): Promise<Comments>{
        return this.http.post(this.commentsURL,JSON.stringify(comment),{headers: this.headers})
        .toPromise()
        .then(response => response.json().data);
    }

}