import { Injectable } from '@angular/core';
import { Http, Headers , RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Auth } from '../auth';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {

  public token: string;
  private authURL = "http://api.neighbornet.io/auth";
  private headers   = new Headers({"Content-Type": "application/json" });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {
    this.token = currentUser && currentUser.token;
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  login(email:string, password:string): Observable<boolean> {
    return this.http.post(`${this.authURL}/login`, JSON.stringify({email: email, password: password}), this.options)
                    .map((response: Response) => {
                      if (response.json().auth.id) {

                          localStorage.setItem('currentUser', JSON.stringify({ username: email, token: response.json().auth.id }));
                          localStorage.setItem('userID', response.json().id);
                          localStorage.setItem('email', email);
<<<<<<< HEAD
                          localStorage.setItem('priv', response.json().priv);
                          localStorage.setItem('dept', response.json().dept);
                          localStorage.setItem('subscribedShouts', response.json().subscribedShouts);
=======
                          localStorage.setItem('priv', response.json().auth.priv);
>>>>>>> 0fde20ff6e0dfea2b1fdc30a78871c4fab3acce4
                          // return true to indicate successful login
                          return true;
                      } else {
                          // return false to indicate failed login
                          return false;
                      }
                    })
                    .catch((error:any) => Observable.throw(error.json().error || 'Ser ver error'));
  }

/*
  signup ahoramismo no tiene nada de lo que dijimos que tenia, hay que hacer eso ya.
*/
  signup(email: string, password:string): Observable<boolean> {
    return this.http.post(`${this.authURL}/register`, JSON.stringify({email: email, password: password}), this.options)
      .map((response: Response) => {
        if(response.json().id) {
          localStorage.setItem('currentUser', JSON.stringify({userName: email, token: response.json().auth.id}));
          localStorage.setItem('userID', response.json().id);
          localStorage.setItem('email', email);
          localStorage.setItem('departmento', response.json().departmento);
          localStorage.setItem('priv', response.json().priv);

          return true;
        } else {
         return false;
        }
      })
      .catch((error:any) => Observable.throw(error.json().error || "Server error"));

  }


  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('email');
    localStorage.removeItem('userID');
    this.token = null;
  }

  isLoggedIn() {
    return this.token;
  }
}
