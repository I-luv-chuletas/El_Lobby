import { Component, OnInit, Input } from '@angular/core';
import { Users } from '../users';

@Component({
  selector: 'app-login',
  template: require('./login.component.html'),
  styles: [require('./login.component.css')]
})
export class LoginComponent implements OnInit {

  constructor() { }

  signup = false;

  model = new Users();

  ngOnInit() {
  }

  revealSignup() {
    this.signup = true;
    console.log(this.signup);
    console.log('Tamo esotico?');
  }

}