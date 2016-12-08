import { Component, OnInit, Input, Output, EventEmitter, DoCheck, ApplicationRef } from '@angular/core';
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
    @Input() tes = new Comments();
    @Input() model = new Comments();
    @Output() onNewComment = new EventEmitter<Comments>();

    comments: Comments[];

    // forPipeRating: number[];
    idShout:string;
    counter: number = 0;


    public likes: number;
    public dislikes: number;


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

    addComment(): void {
        this.model.shoutID = this.shoutId;
        this.model.userID = localStorage.getItem('userID');

        console.log("Printeando en addComment()" + JSON.stringify(this.model));
      
        this.model.userID = localStorage.getItem('userID');
        this.commentService.addComment(this.model).subscribe(
            (data) => this.model = data, error => console.log(error),
            () => {
                this.onNewComment.emit(this.model);
                // this.refresh();
            }
        );  
       
    }

    takeShout(id: string){
        console.log("LA PUTA PRUEBA"+ this.shoutId);
    }

    
    refresh(){
        let link = ['detail/', this.shoutId];
        this.router.navigate(link);
    }

}
