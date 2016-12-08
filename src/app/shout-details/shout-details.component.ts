import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Shouts } from '../shouts';
import { Location } from '@angular/common';
import { ShoutsService } from '../services/shouts.service';

@Component({
    selector: 'shout-detail',
    template: require('./shout-details.component.html'),
    styles: [require('./shout-details.component.css')]
    //providers: [ShoutsService]
})
export class ShoutDetailsComponent implements OnInit {

    @Input() shout = new Shouts();
    temp: Shouts[];

    constructor(
        private shoutService: ShoutsService,
        private route: ActivatedRoute,
        private location: Location,
        
    ) { }

    ngOnInit() {
      this.route.params.forEach((params: Params) => { // Le sacamos a los parametros recibidos el id per se con el for
          let id = params['id']; // El simbolo de suma antes de params convierte el id string a un int

          this.shoutService.getShout(id)
                           .subscribe(shout => this.temp = shout);
          
        //   this.shout = JSON.parse(JSON.stringify(this.temp))
      });
      
      
    }


    test(){
        console.log(this.temp);
        this.shout = JSON.parse(JSON.stringify(this.temp))
    }


    save(): void{

    }


    goBack(): void {
        this.location.back();
    }

}
