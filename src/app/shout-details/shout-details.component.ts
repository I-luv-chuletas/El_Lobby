import { Component, Input, OnInit, AfterContentInit, Directive } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Shouts } from '../shouts';
import { Location } from '@angular/common';
import { ShoutsService } from '../services/shouts.service';
import { Comments } from '../comments';
import {CommentsComponent} from '../comment-section/comment.component'

@Component({
    selector: 'shout-detail',
    template: require('./shout-details.component.html'),
    styles: [require('./shout-details.component.css')]
    
})
export class ShoutDetailsComponent implements OnInit {

    // @Input() shout = new Shouts();
    shout = new Shouts();

    temp: Shouts[];
    commentSection = new Array<Comments>();
    idPalChild: string;

    
    constructor(
        private shoutService: ShoutsService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit() {
      this.route.params.forEach((params: Params) => { // Le sacamos a los parametros recibidos el id per se con el for
          let id = params['id']; // El simbolo de suma antes de params convierte el id string a un int

          this.shoutService.getShout(id)
                           .subscribe(sentShout => this.shout = sentShout ); 
        console.log(this.shout.id);
      });
    }


    // ngAfterViewInit(){
    //     console.log("afterContentInit" + this.temp);
    //     this.shout = JSON.parse(JSON.stringify(this.temp))
    // }


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
