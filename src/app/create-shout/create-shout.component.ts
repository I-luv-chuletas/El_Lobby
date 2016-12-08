import {Component, OnInit, Input, AfterContentInit} from '@angular/core';
import {ShoutsService} from '../services/shouts.service';
import {Shouts} from '../shouts';
import {Router, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Departamento, DEPS} from '../deps';
import {DashboardComponent} from '../dashboard/dashboard.component';


@Component({
    selector: 'create-shout',
    template: require('./create-shout.component.html')
})

export class CreateShoutComponent implements OnInit {

    //@Input() shout = new Shouts();
    departamentos = DEPS;
    shout = new Shouts();
    submitted = false;
    posted: Shouts;
    errorMessage: String;

    ngOnInit() {

    }

   

    constructor(
        private shoutService: ShoutsService,
        private router: Router,
        private location: Location
    ){}

    // create(model: Shouts, isValid: boolean){

    //   if(isValid)
    //     this.shoutService.create(model).subscribe( (model) => console.log(model) );

    //   this.submitted = true;
    // }

    create(model: Shouts, isValid: boolean): void{
        this.shoutService.create(model).subscribe(
            postedShout =>  this.shout = postedShout,
            error => this.errorMessage = error.status 
        );

       console.log("Creating shout "+ JSON.stringify(this.shout)); 
       this.goToShout(this.shout.id);
        
        // console.log(JSON.stringify(this.shout) + "shout-details .create()");
        // console.log(this.errorMessage);
    }


    goToShout(id: String):void {

        
        let link = ['detail/', id];
        this.router.navigate(link);
    }
}
