import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        if (!localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // logged in so redirect to home page
        this.router.navigate(['/home']);
        return false;
    }
}
