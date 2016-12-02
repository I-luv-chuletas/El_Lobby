import { Component, OnInit } from '@angular/core';
import {Departamento, DEPS} from '../deps';

@Component({
  selector: 'app-signup',
  template: require('./signup.component.html'),
  styles: [require('./signup.component.css')]
})
export class SignupComponent implements OnInit {

  departamentos = DEPS;

  constructor() { }

  ngOnInit() {
  }

}