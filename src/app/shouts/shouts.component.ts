import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { NgForm }    from '@angular/forms';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router';
import { OrderBy } from '../orderBy.pipe';

import {Shouts} from '../shouts';
import { ShoutsService} from '../services/shouts.service';


@Component({
    selector: 'shout-component',
    template: require('./shouts.component.html'),
    styles: [(require('./shouts.component.css'))]
})
export class ShoutsComponent implements OnInit {
    sort = 1;
    errorMessage: string;
    shouts: Shouts;
    mode = 'Observable';
    titles: string;

    constructor(
        private shoutService: ShoutsService,
        private router: Router,
        private location: Location
    ) { }

    ngOnInit() {
        this.getShoutss();
        
    }

    getShoutss() {
      this.shoutService.getShouts()
                       .subscribe((data) => this.shouts = data, err => console.log(err));
    }

    showDetails(shout: Shouts): void {
        let link = ['/detail', shout.id];
        this.router.navigate(link);
    }

    sorting(){
        this.sort = 1;
        console.log(JSON.stringify(this.sort));
    }
}
