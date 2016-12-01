import { Component, OnInit } from '@angular/core';
import {Shouts} from '../shouts';
import {Router} from '@angular/router';
import { ShoutsService} from '../services/shouts.service';
import {Location} from '@angular/common';

@Component({
    selector: 'shout-component',
    template: require('./shouts.component.html')
})
export class ShoutsComponent implements OnInit {

    private shoutsURL = "app/shouts";
    shouts = new Array<Shouts>();

    constructor(
        private shoutService: ShoutsService,
        private router: Router,
        private location: Location
    ) { }

    ngOnInit() { 
        this.getShouts();
    }

    getShouts(): void{
        this.shoutService.getShouts().then(shouts => this.shouts = shouts);
    }
}