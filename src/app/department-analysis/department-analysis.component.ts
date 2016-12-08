import { Component, OnInit } from '@angular/core';
import { AnalyticsService} from '../services/analytics.service';
import { CommentsService } from '../services/comments.service';
import { ShoutsService } from '../services/shouts.service';
import { HitsService } from '../services/hits.service';


@Component({
  selector: 'department-analysis',
  template: require('./department-analysis.component.html'),
  styles: [require('./department-analysis.component.css')]
})
export class DepartmentAnalysisComponent implements OnInit {

  constructor(
    private analyticsService :AnalyticsService,
    private shoutsService :ShoutsService,
    private hitsService :HitsService

  ) { }

  ngOnInit() {
  }

}