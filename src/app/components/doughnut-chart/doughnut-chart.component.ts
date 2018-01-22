import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  @Input() doughnutChartTitle:string;
  @Input() doughnutChartLabels:string[];
  @Input() doughnutChartData:number[];
  constructor() { }

  ngOnInit() {
  }

}
