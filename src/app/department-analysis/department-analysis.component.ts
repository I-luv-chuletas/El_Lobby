import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';
import { MostPopular } from '../mostpopular';
import { OrderBy } from '../orderBy.pipe';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {DEPS} from '../deps';

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
                         error =>  this.errorMessage = <any>error,
                         () => {
                           console.log(JSON.stringify(this.mostPopular));
                        });
  }

}