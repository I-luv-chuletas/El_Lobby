import { Component, Input, OnInit, AfterContentInit, Directive, AfterContentChecked } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Shouts } from '../shouts';
import { Location } from '@angular/common';
import { ShoutsService } from '../services/shouts.service';
import { HitsService } from '../services/hits.service';
import { Comments } from '../comments';
import { Hits } from '../hits';
import {CommentsComponent} from '../comment-section/comment.component'

@Component({
    selector: 'shout-detail',
    template: require('./shout-details.component.html'),
    styles: [require('./shout-details.component.css')]

})
export class ShoutDetailsComponent implements OnInit {

    // @Input() shout = new Shouts();
    shout = new Shouts();
    hit = new Hits();
    shoutId: string;
    commentSection = new Array<Comments>();
    


    constructor(
        private shoutService: ShoutsService,
        private hitsService: HitsService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit() {
      this.route.params.forEach((params: Params) => { // Le sacamos a los parametros recibidos el id per se con el for
          let id = params['id']; // El simbolo de suma antes de params convierte el id string a un int

          this.shoutService.getShout(id)
                           .subscribe((sentShout) => {
                              if (sentShout) {
                                this.shout = sentShout;
                                this.shoutId = sentShout.id;

                                this.recHit();// record view
                              }
                           }, error => console.log(error), () => {
                               console.log("ngInit de shout-details: " + JSON.stringify(this.shout));
                           });

      });
    }

    ngAfterContentChecked(){

        // Si se detecta que hubo un nuevo comentario añadido
        // if(this.newCommentFlag){
          
        // }

    }

    recHit():void {
        if(localStorage.getItem('userID')) {
          this.hit.userID = localStorage.getItem('userID');
          this.hit.shoutID = this.shoutId;
          this.hit.dept = this.shout.departmento;

          this.hitsService.create(this.hit).subscribe();
        }
    }


    onNewComment(comment: Comments) {
        console.log("padrastro pepeeeeeeeeeeee");
        this.commentSection.push(comment);


        console.log(JSON.stringify(this.commentSection));
    }


    goBack(): void {
        this.location.back();
    }

}
