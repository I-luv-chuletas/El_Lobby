import { Component, Input, OnChanges, SimpleChange,  EventEmitter,  OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommentsService } from '../services/comments.service';
import { Comments } from '../comments';

@Component({
  selector: 'flag-widget',
  template: `
            <span [class.text-success]="isSolution()"><i class="glyphicon glyphicon-certificate text-success btn" (click)="flagAsSolution()"></i> {{this.comm.solution}}</span>
            `
})
export class FlagWidgetComponent implements OnInit {

  constructor(
      private commentsService: CommentsService,
      private router: Router
  ) { }

  @Input () id: string;
  @Output() onFlaged = new EventEmitter<boolean>();
  comm = new Comments();
  toggled: boolean = false;


  ngOnInit():any {
    this.commentsService.getComment(this.id).subscribe((data:Comments) => this.comm = data, (err:any) => console.log(err));
  }

  isLoggegIn():void {
    if (!localStorage.getItem('userID')) {
      let link = ['login']
      this.router.navigate(link);
    }
  }

  flagAsSolution ():void {
    this.toggled = !this.toggled;
    this.isLoggegIn();
    this.onFlaged.emit(true);//triggers event
    if (this.comm.solution) {
      this.comm.solution = '';
    } else {
      this.comm.solution = 'Solution!';
    }

    this.commentsService.updateComment(this.comm).subscribe((data:any) => {this.comm = data; }, (err:any) => {console.log(err); } );
  }

  isSolution():boolean {
    return this.comm.solution === 'Solution!';
  }
}
