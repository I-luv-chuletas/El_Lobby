import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from '../services/comments.service';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { Comments } from '../comments';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'comment-section',
    template: require('./comment.component.html'),
    styles: [require('./comment.component.css')]
})

export class CommentsComponent implements OnInit {

    comments: Comments[];
    comment: Comments;

    submmited = false;

    model = new Comments(0, 1, "Esto es un comentario");

    constructor(
        private commentService: CommentsService
    ) { }

    ngOnInit() { 
        // Para efectos del hackathon lo dejaremos así, para aplicacioón real necesitamos que envie el id para recoger los
        // comments reales de acuerdo a que 'shout' es.
        this.commentService.getComments().then(comments => this.comments = comments);
    }

      // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

}