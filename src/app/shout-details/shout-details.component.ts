import { Component, Input, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Shouts } from '../shouts';
import { Location } from '@angular/common';
import { ShoutsService } from '../services/shouts.service';
import { CommentsService } from '../services/comments.service';
import { Comments } from '../comments';

@Component({
    selector: 'shout-detail',
    template: require('./shout-details.component.html'),
    styles: [require('./shout-details.component.css')]
    //providers: [ShoutsService]
})
export class ShoutDetailsComponent implements OnInit {

    // @Input() shout = new Shouts();
    shout:Shouts;

    temp: Shouts[];
    commentSection = new Array<Comments>();

    constructor(
        private commentService: CommentsService,
        private shoutService: ShoutsService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit() {
      this.route.params.forEach((params: Params) => { // Le sacamos a los parametros recibidos el id per se con el for
          let id = params['id']; // El simbolo de suma antes de params convierte el id string a un int

          this.shoutService.getShout(id)
                           .subscribe(sentShout => this.shout = sentShout );
          
          this.commentService.getComments(id).subscribe(
              comments => this.commentSection = comments
          );
          
        //   this.shout = JSON.parse(JSON.stringify(this.temp))
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
