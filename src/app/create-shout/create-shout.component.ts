import {Component, OnInit, Input} from '@angular/core';
import {ShoutsService} from '../services/shouts.service';
import {Shouts} from '../shouts';
import {Router, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Departamento, DEPS} from '../deps';


@Component({
    selector: 'create-shout',
    template: require('./create-shout.component.html')
})

export class CreateShoutComponent implements OnInit {

    //@Input() shout = new Shouts();
    departamentos = DEPS;
    shout = new Shouts();
    submitted = false;

    ngOnInit() {

    }

    constructor(
        private shoutService: ShoutsService,
        private router: Router,
        private location: Location
    ){}

    create(model: Shouts, isValid: boolean){

      if(isValid)
        this.shoutService.create(model).subscribe( (model) => console.log(model) );

      this.submitted = true;
    }

    goBack():void {

        let link = ['']
        this.router.navigate(link);
    }
}
