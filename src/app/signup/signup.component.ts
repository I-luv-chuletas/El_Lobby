import { Component, OnInit, Input } from '@angular/core';
import {Departamento, DEPS} from '../deps';
import { Users } from '../users';
import {AuthService} from '../services/auth.service';
import {Auth} from '../auth';
import {ValidationService} from '../services/validation.service';
import {Location} from '@angular/common';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  template: require('./signup.component.html'),
  styles: [require('./signup.component.css')]
})
export class SignupComponent implements OnInit {

  @Input() model = new Users ();
  departamentos = DEPS;

  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  signUp() {
    
    console.log(JSON.stringify(this.model) + 'verificando signUp()');
    
    // Marroneo alert: No esta por ngForm ahoramismo
    this.authService.signup(this.model.email, this.model.password).subscribe(
      (data) => {
        if(data){
          this.redirectToDashboard();    
        }
      }
    );
  }

  redirectToDashboard(): void{
    let link = [''];
    this.router.navigate(link);
  }

}