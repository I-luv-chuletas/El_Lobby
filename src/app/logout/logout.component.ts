import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
    selector: 'logout-login-section',
    template: `<a href="" (click)="login()"> {{label}} </a>`
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
      if(!localStorage.getItem('userID')) {
        let link = ['login']
        this.router.navigate(link);
      }

      this.authservice.logout();

      let link = ['home']
      this.router.navigate(link);
    }
}
