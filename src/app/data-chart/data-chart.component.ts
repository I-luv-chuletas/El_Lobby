import { Component, OnInit, Input } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-data-chart',
  template: require('./data-chart.component.html'),
  styles: [require('./data-chart.component.css')]
})
export class DataChartComponent implements OnInit {

  @Input('data') dataF: number;
  @Input('lab') label:string;
  

  public pieChartLabels:string[];
  public pieChartData:number[];
  public pieChartType:string = 'pie';

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor() { }

  ngOnInit() {
  }

}