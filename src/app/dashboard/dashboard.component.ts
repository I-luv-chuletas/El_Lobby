import { Component, OnInit } from '@angular/core';
import { ShoutsService } from '../services/shouts.service';
import { Shouts } from '../shouts';
import { Router } from '@angular/router';

@Component({
    selector: 'lobby-dashboard',
    template: require('./dashboard.component.html'),
    styles: [require("./dashboard.component.css")]
})

export class DashboardComponent implements OnInit {

    shouts: Shouts[];
    mode = 'Observable';
    errorMessage: string;

    constructor(
        private shoutService: ShoutsService,
        private router: Router
    ) { }

    ngOnInit() {
      this.shoutService.getShouts()
                       .subscribe(
                         shouts => this.shouts = shouts,
                         error =>  this.errorMessage = <any>error);
        console.log('Tamo exotico:\n');
        console.log(JSON.stringify(this.shouts));
    }


    verga(){
        console.log(this.shouts);
    }


    showDetails(shout: Shouts): void {
        let link = ['/detail', shout.id];
        this.router.navigate(link);
    }

}
