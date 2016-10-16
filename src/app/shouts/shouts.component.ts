import { Component, OnInit } from '@angular/core';
import { ShoutsService} from '../services/shouts.service';

@Component({
    selector: 'shout-component',
    template: require('./shouts.component.html')
})
export class ShoutsComponent implements OnInit {


    constructor(
        shoutService: ShoutsService
        
    ) { }

    ngOnInit() { 

    }

}