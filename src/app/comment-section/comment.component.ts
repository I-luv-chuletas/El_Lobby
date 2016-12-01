import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../services/comments.service';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { Comments } from '../comments';



@Component({
    selector: 'comment-section',
    template: require('./comment.component.html'),
    styles: [require('./comment.component.css')]
})

export class CommentsComponent implements OnInit {

    comments: Comments[] = [];
    

    constructor(
        private commentService: CommentsService
    ) 
    {
        
     }

    ngOnInit() { 
        // Para efectos del hackathon lo dejaremos así, para aplicacioón real necesitamos que envie el id para recoger los
        // comments reales de acuerdo a que 'shout' es.
        this.commentService.getComments().then(comments => this.comments = comments);
    }

    addComment(comment: Comments)
    {}



    

}