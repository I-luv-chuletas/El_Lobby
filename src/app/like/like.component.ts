import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LikesService } from '../services/likes.service';
import { Liked } from '../liked';

@Component({
  selector: 'like-widget',
  template: `
  <span><i class="glyphicon glyphicon-thumbs-down text-warning" (click)="rateDown()"></i> {{dcount}}</span>
  <span><i class="glyphicon glyphicon-thumbs-up pull-right text-success" (click)="rateUp()"> {{lcount}}</i></span>
  `
})
export class LikeWidgetComponent implements OnChanges, OnInit {

  constructor(
      private likeService: LikesService,
      private router: Router
  ) { }

  @Input () id: string;
  public lcount: number;
  public dcount: number;
  public like: Liked;

  ngOnChanges() {

  }

  ngOnInit() {
    this.likeService.getLikeCount(this.id).subscribe((data:any) => this.lcount = data, err => console.log(err));
    this.likeService.getDislikeCount(this.id).subscribe((data:any) => this.dcount = data, err => console.log(err));
  }

  rateUp () {
    alert('here');
    this.like.userID = localStorage.getItem('userID');
    this.like.shoutID = this.id;

    this.likeService.createLike(this.like).subscribe(
      (data) => {if (data) { this.lcount++; } },
      (error) => { console.log(error)}
    );
  }

  rateDown () {
    this.like.userID = localStorage.getItem('userID');
    this.like.shoutID = this.id;

    this.likeService.createDislike(this.like).subscribe(
      (data) => { if (data) { console.log(data); this.dcount++; } },
      (error) => { console.log(error)}
    );
  }
}
