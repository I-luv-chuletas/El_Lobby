import { Component, OnInit } from '@angular/core';
import { MostActive } from '../mostactive';
import { AnalyticsService } from '../services/analytics.service';
import { OrderBy } from '../orderBy.pipe';

@Component({
  selector: 'shouts-analysis',
  template: require('./shouts-analysis.component.html'),
  styles: [require('./shouts-analysis.component.css')]
})
export class ShoutsAnalysisComponent implements OnInit {

  mostActive: MostActive[];
  errorMessage: string;
  constructor(
    private analyticsService: AnalyticsService
  ) { }

  ngOnInit() {
    this.analyticsService.getMostActiveList()
                       .subscribe(
                         shouts => this.mostActive = shouts,
                         error =>  this.errorMessage = <any>error);
  }

}