import { Component, Input, OnChanges,EventEmitter, SimpleChange, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LikesService } from '../services/likes.service';
import { Liked } from '../liked';

@Component({
  selector: 'like-widget',
  template: `
  <span><i class="glyphicon glyphicon-thumbs-up pull-right text-success btn" (click)="rateUp()"> {{lcount}}</i></span>
  `
})
export class LikeWidgetComponent implements OnChanges, OnInit {

  constructor(
      private likeService: LikesService,
      private router: Router
  ) { }

  @Input () id: string;
  @Output() onLiked = new EventEmitter<boolean>();
  public lcount: number;
  like = new Liked();

  ngOnChanges() {

  }

  ngOnInit() {
    this.likeService.getLikeCount(this.id).subscribe((data:any) => this.lcount = data, err => console.log(err));
  }

  isLoggegIn() {
    if (!localStorage.getItem('userID')) {
      let link = ['login']
      this.router.navigate(link);
    }
  }

  rateUp () {
    this.isLoggegIn();
    this.onLiked.emit(true);//triggers event
    this.like.userID = localStorage.getItem('userID');
    this.like.shoutID = this.id;

    this.likeService.createLike(this.like).subscribe(
      (data) => {if (data) { this.lcount++; } },
      (error) => { console.log(error)}
    );
  }
}
