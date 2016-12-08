import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
    selector: 'logout-login-section',
    template: `<span (click)="login()">{{label}} </span>`
})

export class LogoutComponent implements OnInit {

    public label:string;

    constructor(
        private router: Router,
        private authservice: AuthService
    ) { }

    ngOnInit() {
        if (!localStorage.getItem('userID')) {
          this.label = 'Login/Signup';
        } else{
          this.label = 'Logout';
        }
    }

    login() {
      if(localStorage.getItem('userID')) {
        this.authservice.logout();
      }
    }
}
