import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
// import { ChartDataSet } from '@rds-common-lib';

export interface ChartDataSetPolar {
  label: string,
  data: Array<number>;
  fill: boolean,
  borderColor: string,
  tension: number,
  backgroundColor: Array<string>;
  borderWidth: number;
}

@Component({
  selector: 'rds-chart-polar-area',
  templateUrl: './rds-chart-polar-area.component.html',
  styleUrls: ['./rds-chart-polar-area.component.scss']
})
export class RdsChartPolarAreaComponent implements OnInit {

  canvas: any;
  ctx: any;
  static count = 0;
 // chartId = 'polarAreaChart' + RdsChartPolarAreaComponent.count;
  @Input() chartId:string='polarAreaChart0';
  @Input() chartWidth = 400;
  @Input() chartStyle?: any;
  @Input() chartLabels?: any
  @Input() canvasBackgroundColor?: any;
  @Input() ChartDataSets?: ChartDataSetPolar[] | any;
  @Input() chartOptions?: any;
  static inload: boolean;
  style: CSSStyleDeclaration | undefined;

  constructor() {
    RdsChartPolarAreaComponent.count++;
  }

  ngOnInit(): void {
    this.style = getComputedStyle(document.body);
    this.ChartDataSets[0].backgroundColor[0] = this.style.getPropertyValue('--chartColor1');
    this.ChartDataSets[0].backgroundColor[1] = this.style.getPropertyValue('--chartColor2');
    this.ChartDataSets[0].backgroundColor[2] = this.style.getPropertyValue('--chartColor3');
    this.ChartDataSets[0].backgroundColor[3] = this.style.getPropertyValue('--chartColor4');
    this.ChartDataSets[0].backgroundColor[4] = this.style.getPropertyValue('--chartColor5');
    this.ChartDataSets[0].backgroundColor[5] = this.style.getPropertyValue('--chartColor6');
    this.ChartDataSets[0].backgroundColor[6] = this.style.getPropertyValue('--chartColor7');
    this.ChartDataSets[0].backgroundColor[7] = this.style.getPropertyValue('--chartColor8');
    this.ChartDataSets[0].backgroundColor[8] = this.style.getPropertyValue('--chartColor9');
    this.ChartDataSets[0].backgroundColor[9] = this.style.getPropertyValue('--chartColor10');
  }

  public get classes(): string[] {
    var classes = ['res-width']
    if (this.chartStyle === "Dark") {
      classes.push('dark-mode')
      return classes
    }
    return classes
  }

  ngOnChanges() {
    this.polarAreaChartBrowser()
  }

  ngAfterViewInit() {
    this.polarAreaChartBrowser();
  }

  polarAreaChartBrowser(): void {
    let chartStatus = Chart.getChart(this.chartId);
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    this.canvas = document.getElementById(this.chartId);
    if (this.canvas !== null) {
      this.canvas.style.backgroundColor = this.canvasBackgroundColor;
      this.ctx = this.canvas.getContext('2d');
      const polarAreaCanvas = new Chart(this.ctx, {
        type: 'polarArea',
        data: {
          labels: this.chartLabels,
          datasets: this.ChartDataSets,
        },
        options: this.chartOptions
      });
    }
  }

}
