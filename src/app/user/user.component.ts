import {Component, OnInit} from '@angular/core';
import {UsersService} from '../services/users.service';
import {Users} from '../users';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {Departamento, DEPS} from '../deps';
import {DashboardComponent} from '../dashboard/dashboard.component';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';


@Component({
    selector: 'user-profile',
    template: require('./user.component.html')
})

export class UserComponent implements OnInit {

    //@Input() shout = new Shouts();
    departamentos = DEPS;
    userForm: FormGroup;
    user: Users;
    submitted = false;
    errorMessage: String;
    public id: string;

    constructor(
        private usersService: UsersService,
        private router: Router,
        private location: Location,
        private route: ActivatedRoute,
        private _fb: FormBuilder
    ){}

    ngOnInit():any {
      this.route.params.forEach((params: Params) => { // Le sacamos a los parametros recibidos el id per se con el for
          this.id = params['id']; // El simbolo de suma antes de params convierte el id string a un int
          this.usersService.getProfile(this.id).subscribe((data) => { this.user = data; console.log(data) });
      });
    }

    onSubmit(): void{
        this.usersService.editUser(this.user).subscribe(
            (postedUser:Users) =>  this.user = postedUser,
            (error:any) => this.errorMessage = error.status
        );
    }
}
