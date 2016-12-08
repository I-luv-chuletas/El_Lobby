import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from '../services/comments.service';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { Comments } from '../comments';
import { FormsModule } from '@angular/forms';
import {OrderBy} from '../orderBy.pipe';
import {AuthService} from '../services/auth.service' 

@Component({
    selector: 'comment-section',
    template: require('./comment.component.html'),
    styles: [require('./comment.component.css')]
})

export class CommentsComponent implements OnInit {

    @Input() shoutId: string;
    @Input() model = new Comments();

    comments: Comments[];
    forPipeRating: number[];

    
    public likes: number;
    public dislikes: number;
    


    constructor(
        private commentService: CommentsService,
        private authService: AuthService
    ) { }

    ngOnInit() {
        // Para efectos del hackathon lo dejaremos así, para aplicacioón real necesitamos que envie el id para recoger los
        // comments reales de acuerdo a que 'shout' es.
        this.commentService.getComments(this.shoutId).subscribe((data) => this.comments = data, err => console.log(err));
    }


    addComment(): void {
        this.model.shoutID = this.shoutId; 
        this.model.userId = localStorage.getItem('userID');
        console.log("Printeando en addComment()" + this.model);
        this.commentService.addComment(this.model).subscribe(
            (data) => this.model = data, error => console.log(error)
        );
    }

}
