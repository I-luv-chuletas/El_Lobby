import { Component, OnInit } from '@angular/core';
import {Departamento, DEPS} from '../deps';
import { Users } from '../users';

@Component({
  selector: 'app-signup',
  template: require('./signup.component.html'),
  styles: [require('./signup.component.css')]
})
export class SignupComponent implements OnInit {

  model = new Users ();
  departamentos = DEPS;

  constructor() { }

  ngOnInit() {
  }

  signUp() {
    console.log(JSON.stringify(this.model));
  }

}