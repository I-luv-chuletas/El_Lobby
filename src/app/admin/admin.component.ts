import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { UsersService } from '../services/users.service';
import { Users } from '../users';
import { Router } from '@angular/router';

@Component({
    selector: 'admin-user-list',
    template: require('./admin.component.html'),
    styles: [require("./admin.component.css")],
})

export class AdminComponent implements OnInit {

    user: Users;
    users: Users[];
    mode = 'Observable';
    errorMessage: string;

    constructor(
        private usersService: UsersService,
        private router: Router
    ) { }

    ngOnInit() {
      this.usersService.getUsers().subscribe((data) => {
          if (data) {
              this.users = data;
              console.log(data);
          }
        },
        (error:any) => this.errorMessage = <any>error);
    }
    /**
    * Redirects to User Details
    */
    showDetails(user: Users): void {
        let link = ['/user', user.id];
        this.router.navigate(link);
    }
}
