import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Shouts } from '../shouts';
import { Location } from '@angular/common';
import { ShoutsService } from '../services/shouts.service';

@Component({
    selector: 'shout-detail',
    template: require('./shout-details.component.html')
})
export class ShoutDetailsComponent implements OnInit {

    @Input() shout: Shouts;

    constructor(
        private shoutService: ShoutsService,
        private route: ActivatedRoute, 
        private location: Location
    ) { }

    ngOnInit() { 
        this.route.params.forEach((params: Params) => { // Le sacamos a los parametros recibidos el id per se con el for
            let id = +params['id']; // El simbolo de suma antes de params convierte el id string a un int
        
        this.shoutService.getShout(id).then(shout => this.shout = shout);
        })
    }


    save(): void{
        this.shoutService.update(this.shout).then(() => this.goBack());
    }


    goBack(): void {
        this.location.back();
    }

}