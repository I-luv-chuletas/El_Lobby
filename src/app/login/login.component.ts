import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {ValidationService} from '../services/validation.service';
import { Auth } from '../auth';
import {Location} from '@angular/common';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: require('./login.component.html'),
  styles: [require('./login.component.css')]
})
export class LoginComponent implements OnInit {
  public signup: boolean;
  public invalidCred: boolean;
  public submitted: boolean;
  public loginForm: FormGroup;

  model = new Auth();

  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location,
    private _fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this._fb.group({
        email: ['', [<any>Validators.required ]],
        password : ['', [<any>Validators.required ]]
    });
    this.invalidCred = false;
  }

  revealSignup() {
    if(!this.signup)
      this.signup = true;
    else if(this.signup)
      this.signup = false;
  }

  login(model: Auth, isValid: boolean) {
    this.submitted = true;
    if(isValid)
      this.authService.login(model.email, model.password).subscribe(

      (data) => {
        if (data) {
          this.invalidCred = false;
          let link = ['home']
          this.router.navigate(link);
        }
      },
      (error) => {
        this.invalidCred = true;
      }
    );
  }
}
