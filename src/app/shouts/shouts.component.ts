import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { NgForm, FormsModule }    from '@angular/forms';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router';
import { OrderBy } from '../orderBy.pipe';
import { DEPS } from '../deps';
import {SearchService} from '../services/search.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import {Shouts} from '../shouts';
import { ShoutsService} from '../services/shouts.service';


@Component({
    selector: 'shout-component',
    template: require('./shouts.component.html'),
    styles: [(require('./shouts.component.css'))],
    providers: [SearchService]
})
export class ShoutsComponent implements OnInit {

    sort = 1;
    term: string;
    @Input() deptValue: string;
    items: Array<Shouts>;
    errorMessage: string;
    shouts: Shouts;
    mode = 'Observable';
    titles: string;
    deps = DEPS;

    constructor(
        private shoutService: ShoutsService,
        private router: Router,
        private location: Location,
        private searchService: SearchService
    ) { }

    ngOnInit() {
        // this.getShoutss();
        
        
    }

    getShoutss() {
      this.shoutService.getShouts()
                       .subscribe((data) => this.shouts = data, err => console.log(err));
    }

    showDetails(shout: Shouts): void {
        let link = ['/detail', shout.id];
        this.router.navigate(link);
    }

    search(term: string) {
    this.searchService.search(term)
        .subscribe((data) => this.items = data, err => console.log(err),
        () => {
            console.log("Valor: " + term + " Objetos: " + JSON.stringify(this.items) );
        });
    }
    
    
    // searchByDept(){
    //     this.shoutService.getShoutsByDept(this.deptValue).subscribe(
    //         (data) => this.items = data, err => console.log(err)
    //     );
    // }
}
