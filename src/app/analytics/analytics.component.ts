import {Component, OnInit, Input} from '@angular/core';
import {Departamento, DEPS} from '../deps';
import { AnalyticsService} from '../services/analytics.service';
import { CommentsService } from '../services/comments.service';
import { ShoutsService } from '../services/shouts.service';
import { HitsService } from '../services/hits.service';
 

@Component({
    selector: 'analytics',
    template: require('./analytics.component.html'),
    styles: [require('./analytics.component.css')]
})

export class AnalyticsComponent {

  dept: Departamento[];
  i: number = 0; 
  @Input() selectedOption: number;
  departamentos: string[] = DEPS;

  insertValue(departamentos: string[], dept: Departamento[], i: number): Departamento[] {
    for (var item of departamentos) {
      dept[i].name = item;
      i++;
    }
    return dept;
  }

  chooseOption(index: number){
    this.selectedOption = index;
    console.log(this.selectedOption);
  }


}
 