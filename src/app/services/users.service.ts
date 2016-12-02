import { Injectable } from '@angular/core';
import {Users} from '../users';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UsersService {

    private usersURL ='http://api.neighbornet.io/api/users';
    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    getUsers() : Observable<[]> {

        // ...using get request
        return this.http.get(this.usersURL)
                       // ...and calling .json() on the response to return data
                        .map((res:Response) => res.json())
                        //...errors if any
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

    getCats() {
      return this.http.get(this.usersURL).map(res => res.json());
    }

    addUser(usr) {
      return this.http.post(this.usersURL, JSON.stringify(usr), this.options);
    }

    editUser(usr) {
      return this.http.put(this.usersURL`/${usr._id}`, JSON.stringify(usr), this.options);
    }

    deleteCat(usr) {
      return this.http.delete(this.usersURL`/${usr._id}`, this.options);
    }
}
