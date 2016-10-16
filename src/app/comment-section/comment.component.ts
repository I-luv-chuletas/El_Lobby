import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../services/comments.service';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { Comments } from '../comments';


@Component({
    selector: 'comment-section',
    template: require('./comment.component.html')
})

export class CommentsComponent implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

}