import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';
import { MostPopular } from '../mostpopular';
import { OrderBy } from '../orderBy.pipe';

@Component({
  selector: 'department-analysis',
  template: require('./department-analysis.component.html'),
  styles: [require('./department-analysis.component.css')]
})
export class DepartmentAnalysisComponent implements OnInit {

  mostPopular: MostPopular[];
  errorMessage: string;
  constructor(
    private analyticsService: AnalyticsService
  ) { }

  ngOnInit() {
    this.analyticsService.getMostPoularList()
                       .subscribe(
                         shouts => this.mostPopular = shouts,
                         error =>  this.errorMessage = <any>error);
  }

}