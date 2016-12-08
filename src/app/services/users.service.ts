import { Injectable } from '@angular/core';
import {Users} from '../users';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class UsersService {

    private usersURL ='http://api.neighbornet.io/auth';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }


    getProfile(id: string): Observable<Users>  {
      return this.http.get(`${this.usersURL}/${id}`,  this.options).map(res => res.json());
    }

    getUsers() : Observable<Users[]> {
        return this.http.get(this.usersURL, this.options)
                       // ...and calling .json() on the response to return data
                        .map((res:Response) => res.json())
                        //...errors if any
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

    addUser(usr: Users) {
      return this.http.post(this.usersURL, JSON.stringify(usr), this.options);
    }

    editUser(usr: Users): Observable<Users> {
      localStorage.setItem('priv', usr.priv); //uodT
      return this.http.put(`${this.usersURL}/${usr.id}`, JSON.stringify(usr), this.options)
                      .map((res:Response) => res.json())
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    deleteCat(usr: Users) {
      return this.http.delete(`${this.usersURL}/${usr.id}`, this.options);
    }
}
