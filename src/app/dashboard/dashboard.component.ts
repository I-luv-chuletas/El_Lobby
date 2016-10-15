import { Component, OnInit } from '@angular/core';
import { ShoutsService } from '../services/shouts.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'lobby-dashboard',
    template: require('./dashboard.component.html')
})

export class DashboardComponent implements OnInit {

    constructor(
        shoutService: ShoutsService
    ) { }

    ngOnInit() { 

    }

}