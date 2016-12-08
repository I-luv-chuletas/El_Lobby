import { Component, OnInit } from '@angular/core';
import { DEPS } from '../deps';
import { AnalyticsService } from '../services/analytics.service';
import { MostPopular } from '../mostpopular';


// webpack html imports
let template = require('./pie-chart.component.html');

@Component({
  selector: 'app-pie-chart',
  template: template
})
export class PieChartComponent implements OnInit {
  // Pie

  mostPopular: Array<MostPopular>;
  errorMessage: string;
  
  constructor(
    private analyticsService: AnalyticsService
  ) {}

  public pieChartLabels:string[] = DEPS;
  public pieChartData:number[] = [0, 5, 0, 4, 3, 8, 5, 1, 0, 0, 0, 5, 6, 3, 4];
  public pieChartType:string = 'pie';
  

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  ngOnInit() {
    this.analyticsService.getMostPoularList()
                       .subscribe(
                         shouts => this.mostPopular = shouts,
                         error =>  this.errorMessage = <any>error,
                         () =>{
                           
                          //  this.pieChartLabels = this.mostPopular._id
                          // console.log("UNDEFINED?????? " + JSON.stringify(this.mostPopular))
                         });
      // this.generateData();
    }

    // generateData() {
    //   for (var _i = 0; _i < this.mostPopular.length; _i++) {
    //   console.log("String: " + this.mostPopular.length)
    // var item = this.mostPopular[_i]._id;
    // this.pieChartLabels.push(item);
    //   }

    // for(var _i = 0; _i < this.mostPopular.length; _i++){
    //   var number = this.mostPopular[_i].num_shouts;
    //   this.pieChartData.push(number);
    // }
    // }
}