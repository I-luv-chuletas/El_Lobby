import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { NgForm }    from '@angular/forms';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router';

import {Shouts} from '../shouts';
import { ShoutsService} from '../services/shouts.service';




@Component({
  selector: 'app-solutions',
  template: require('./solutions.component.html'),
  styles: [require('./solutions.component.css')]
})
export class SolutionsComponent implements OnInit {

    errorMessage: string;
    shouts: Shouts;
    mode = 'Observable';




    constructor(
        private shoutService: ShoutsService,
        private router: Router,
        private location: Location,
    ) { }

    ngOnInit() {
        this.getShoutss();
  
    }

    getShoutss() {
      this.shoutService.getShouts().subscribe((data) => this.shouts = data, err => console.log(err));
    }

    showDetails(shout: Shouts): void {
        let link = ['/detail', shout.id];
        this.router.navigate(link);
    }
}