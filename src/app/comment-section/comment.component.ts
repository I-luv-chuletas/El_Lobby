import { Component, OnInit, Input, Output, EventEmitter, DoCheck, OnChanges,AfterContentChecked } from '@angular/core';
import { CommentsService } from '../services/comments.service';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { Comments } from '../comments';
import { FormsModule } from '@angular/forms';
import {OrderBy} from '../orderBy.pipe';
import {AuthService} from '../services/auth.service'; 
import {Location} from '@angular/common';
import {FormGroup, FormBuilder} from '@angular/forms'


@Component({
    selector: 'comment-section',
    template: require('./comment.component.html'),
    styles: [require('./comment.component.css')]
})

export class CommentsComponent implements OnInit, AfterContentChecked{

    @Input('shout') shoutId: any;
    @Input() tes = new Comments();
    @Input() model = new Comments();
    @Output() onNewComment = new EventEmitter<Comments>();

    comments = new Array<Comments>();

    // forPipeRating: number[];
    idShout:string;
    counter: number = 0;
    newCommentFlag: boolean = false;

    public likes: number;
    public dislikes: number;


    ngOnInit() {
        console.log(this.shoutId);    
    }

    ngAfterContentChecked(){
        
      if (this.shoutId && this.counter < 10){
            this.counter+=1;
            
                 
            if(this.newCommentFlag){
                this.comments.push(this.model);
                this.newCommentFlag = false;   
                this.model = null;
                this.model = new Comments(); 
            }
            
            
        }if(this.counter >= 8)
            this.counter -=4;
    }


    ngOnChanges(){
        this.commentService.getComments(this.shoutId).subscribe((data) => this.comments = data, err => console.log(err),
            ()=> {
                // console.log("Mira a ver si salen los nuevos: " + this.comments)
            });       
        console.log("nigga we made it");
          
    }

    constructor(
        private commentService: CommentsService,
        private authService: AuthService,
        private router: Router
    ) {}

    // ngAfterViewInit(){
    //     console.log("tamo en init de comment " + this.shoutId);
    //     this.commentService.getComments(this.shoutId).subscribe((data) => this.comments = data, err => console.log(err));
    // }

    addComment(): void {
        // this.model.message =
        this.model.shoutID = this.shoutId;
        this.model.userID = localStorage.getItem('userID');

        this.commentService.addComment(this.model).subscribe(
            (data) => this.model = data, error => console.log(error),
            () => {
                this.newCommentFlag = true;
                this.onNewComment.emit(this.model);
                console.log("Printeando en addComment()" + JSON.stringify(this.model));
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
