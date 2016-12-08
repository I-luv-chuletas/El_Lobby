import { Component, OnInit, Input, AfterViewInit, AfterContentInit, DoCheck, ApplicationRef } from '@angular/core';
import { CommentsService } from '../services/comments.service';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { Comments } from '../comments';
import { FormsModule } from '@angular/forms';
import {OrderBy} from '../orderBy.pipe';
import {AuthService} from '../services/auth.service'; 
import {Location} from '@angular/common';


@Component({
    selector: 'comment-section',
    template: require('./comment.component.html'),
    styles: [require('./comment.component.css')]
})

export class CommentsComponent implements OnInit{

    @Input('shout') shoutId: any;
    @Input() model = new Comments();

    comments: Comments[];
    forPipeRating: number[];
    idShout:string;
    counter: number = 0;


    public likes: number;
    public dislikes: number;
<<<<<<< HEAD
=======

>>>>>>> 21b391f33fdb747dbac212e7a4cdcbb006464123

    ngOnInit() {
        console.log(this.shoutId);    
    }

    ngDoCheck(){

        if (this.shoutId && this.counter < 10){
            console.log("do check me: " + this.shoutId);
            this.counter+=1;
            
            this.commentService.getComments(this.shoutId).subscribe((data) => this.comments = data, err => console.log(err));            
        }

    }

    constructor(
        private ref: ApplicationRef,
        private commentService: CommentsService,
        private authService: AuthService,
        private router: Router
    ) {}

    // ngAfterViewInit(){
    //     console.log("tamo en init de comment " + this.shoutId);
    //     this.commentService.getComments(this.shoutId).subscribe((data) => this.comments = data, err => console.log(err));
    // }

<<<<<<< HEAD
    addComment(model: Comments): void {
        model.shoutID = this.shoutId; 
=======
    addComment(): void {
        this.model.shoutID = this.shoutId;
        this.model.userId = localStorage.getItem('userID');
>>>>>>> 21b391f33fdb747dbac212e7a4cdcbb006464123
        console.log("Printeando en addComment()" + this.model);
      
        model.userID = localStorage.getItem('userID');
        this.commentService.addComment(this.model).subscribe(
            (data) => this.model = data, error => console.log(error)
        );

        this.refresh();
    }

    takeShout(id: string){
        console.log("LA PUTA PRUEBA"+ this.shoutId);
    }

    
    refresh(){
        let link = ['details/', this.shoutId];
        this.router.navigate(link);
    }

}
