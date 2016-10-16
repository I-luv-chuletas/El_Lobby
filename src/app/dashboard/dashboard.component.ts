import { Component, OnInit } from '@angular/core';
import { ShoutsService } from '../services/shouts.service';
import { Shouts } from '../shouts'
import { Router } from '@angular/router';

@Component({
    selector: 'lobby-dashboard',
    template: require('./dashboard.component.html')
})

export class DashboardComponent implements OnInit {

    shouts: Shouts[] = [];

    constructor(

        shoutService: ShoutsService,
        private router: Router
        
    ) { }

    ngOnInit() { 

    }

}