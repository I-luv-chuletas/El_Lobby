import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from '../services/comments.service';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { Comments } from '../comments';
import { FormsModule } from '@angular/forms';
import { AnalyticsService } from '../services/likes.service';


@Component({
    selector: 'comment-section',
    template: require('./comment.component.html'),
    styles: [require('./comment.component.css')]
})

export class CommentsComponent implements OnInit {

    comments: Comments[];

    model = new Comments();

    constructor(
        private commentService: CommentsService
    ) { }

    ngOnInit() {
        // Para efectos del hackathon lo dejaremos así, para aplicacioón real necesitamos que envie el id para recoger los
        // comments reales de acuerdo a que 'shout' es.
        this.commentService.getComments().subscribe((data) => this.comments = data, err => console.log(err));
    }

    rate (rating: number) {
        console.log(JSON.stringify(rating))
    }

}
