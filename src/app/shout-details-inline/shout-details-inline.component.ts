import { Component, Input, OnInit } from '@angular/core';
import { Shouts } from '../shouts';
import { ShoutsService } from '../services/shouts.service';

@Component({
    selector: 'shout-detail-inline',
    template: require('./shout-details-inline.component.html'),
    styles: [require('./shout-details-inline.component.css')]

})
export class ShoutDetailsInlineComponent implements OnInit {

    @Input() id: string;
    shout = new Shouts();

    constructor(
        private shoutService: ShoutsService,
    ) { }

    ngOnInit() {
      this.shoutService.getShout(this.id)
                       .subscribe((sentShout) => {
                          if (sentShout) {
                            this.shout = sentShout;
                            this.id = sentShout.id;
                          }
                       }, error => console.log(error), () => {
                           console.log("ngInit de shout-details: " + JSON.stringify(this.shout));
                       });
    }
}
