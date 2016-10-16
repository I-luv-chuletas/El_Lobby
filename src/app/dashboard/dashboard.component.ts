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

    shouts: Shouts[] = [];

    constructor(

        private shoutService: ShoutsService,
        private router: Router
        
    ) { }

    ngOnInit() { 
        this.shoutService.getShouts().then(shouts => this.shouts = shouts);
        console.log('Tamo exotico:\n')
        console.log(this.shouts)
    }

}