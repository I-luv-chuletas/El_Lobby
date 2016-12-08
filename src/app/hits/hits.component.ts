import { Component, Input,  OnInit} from '@angular/core';
import { HitsService } from '../services/hits.service';

@Component({
  selector: 'hits-widget',
  template: ` <span><i class="glyphicon glyphicon-eye-open"></i> {{vcount}} </span> `
})
export class HitWidgetComponent implements OnInit {

  constructor(
      private hitsService: HitsService,
  ) { }

  @Input () id: string;
  public vcount: number;

  ngOnInit() {
    this.hitsService.getHitCount(this.id).subscribe((data:any) => this.vcount = data, err => console.log(err));
  }
}
