import { Component, Input, OnChanges, SimpleChange,  EventEmitter,  OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ClikesService } from '../services/clikes.service';
import { Clike } from '../clike';

@Component({
  selector: 'clike-widget',
  template: `
  <span><i class="glyphicon glyphicon-thumbs-up pull-right text-success btn" (click)="rateUp()"> {{lcount}}</i></span>
  `
})
export class CLikeWidgetComponent implements OnChanges, OnInit {

  constructor(
      private clikeService: ClikesService,
      private router: Router
  ) { }

  @Input () id: string;
  @Output() onLiked = new EventEmitter<boolean>();
  public lcount: number;
  clike = new Clike();

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {

  }

  ngOnInit() {
    this.clikeService.getLikeCount(this.id).subscribe((data:any) => this.lcount = data, err => console.log(err));
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
    this.clike.userID = localStorage.getItem('userID');
    this.clike.commentID = this.id;

    this.clikeService.createLike(this.clike).subscribe(
      (data) => {if (data) { this.lcount++; } },
      (error) => { console.log(error)}
    );
  }
}
