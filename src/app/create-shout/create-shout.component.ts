import {Component, OnInit, Input} from '@angular/core';
import {ShoutsService} from '../services/shouts.service';
import {Shouts} from '../shouts';
import {Router, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'create-shout',
    template: require('./create-shout.component.html')
})

export class CreateShoutComponent implements OnInit{
    
    @Input() shout = new Shouts();

    private supa: Shouts;
    
    ngOnInit(){
        
    }
    
    constructor(
        private shoutService: ShoutsService,
        private router: Router,
        private location: Location
    ){}

    create(){
        // this.supa.title = title;
        // this.supa.userID = userID;
        // this.supa.message = message;
        // title: string, userID: string, message: string
        console.log(JSON.stringify(this.shout));
        this.shoutService.create(this.shout).then( () => this.goBack() );
    }

    goBack():void {

        let link = ['']
        this.router.navigate(link);
    }
}