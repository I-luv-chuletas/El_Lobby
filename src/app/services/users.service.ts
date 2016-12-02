import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Users} from '../users';


@Injectable()
export class UsersService {

    private usersURL ='app/users';
    private headers  = new Headers({"Content-Type" : "application.json"});

    constructor(
        private http: Http
    ) { }
}

