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
                      let token = response.json() && response.json().auth.id;
                      if (token) {
                          localStorage.setItem('currentUser', JSON.stringify({ username: email, token: token }));
                          localStorage.setItem('auth_token', token);
                          localStorage.setItem('email', email);
                          // return true to indicate successful login
                          return true;
                      } else {
                          // return false to indicate failed login
                          return false;
                      }
                    })
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('email');
    this.token = null;
  }

  isLoggedIn() {
    return this.token;
  }
}
