import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Shouts} from '../shouts';
import { Headers, Http, Response} from '@angular/http';

@Injectable()
export class SearchService {
  constructor(private jsonp: Jsonp, private http: Http) {}

  private deptURL = "http://api.neighbornet.io/shout/dept";

  search (term: string): Observable<Shouts[]> {
      const url = `${this.deptURL}/${term}`;
      return this.http.get(url)
                      .map((res:Response) => res.json())
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  // searchByDept(): Observable<Shouts[]> {

  // }
}