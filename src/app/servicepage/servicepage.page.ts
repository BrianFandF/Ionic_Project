import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { TabService } from './service/tab/tab.service';
import { SeriesService } from './service/series/series.service';
import { RecursionService } from './service/recursion/recursion.service';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
})
export class ServicepagePage implements OnInit {
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  lineChart: any;

  constructor(private tabService: TabService,
              private seriesService: SeriesService,
              private recursionService: RecursionService) { Chart.register(...registerables); }
  
  xyTab = new Map();
  xySeries = new Map();
  xyRecursion = new Map();
  xyInput = new Map();
  xx: string[] = [];
  dataTab: number[] = [];;
  dataSeries: number[] = [];;
  dataRecursion: number[] = [];;

  ras(xn: any, xk: any, h: any) {
    let xn1 = parseFloat(xn),
    xk1 = parseFloat(xk),
    h1 = parseFloat(h);
    console.log("Табулювання");
    this.xyTab = this.tabService.getTab(xn1, xk1, h1);
    console.log("Ряд");
    this.xySeries = this.seriesService.getTab(xn1, xk1, h1);
    console.log("Рекурсія");
    this.xyRecursion = this.recursionService.getTab(xn1, xk1, h1);
    this.input();
    this.prepareChartData(xn1, xk1, h1);
    this.lineChartMethod();
  }

  input() {
    this.xyTab.forEach((value, key, map) => {
      let s = '';
      let y: number = 0;
      y = value;
      s = y.toFixed(4) + " ";
      y = this.xySeries.get(key);
      s = s + y.toFixed(4);
      y = this.xyRecursion.get(key);
      s = s + " " + y.toFixed(4);
      let x = key;
      this.xyInput.set(x.toFixed(2), s);
    })
  }

  prepareChartData(xn: number, xk: number, h: number) {
    for (let x = xn; x <= xk; x += h) {
      this.xx.push(x.toString());
      this.dataTab.push(this.xyTab.get(x));
      this.dataSeries.push(this.xySeries.get(x));
      this.dataRecursion.push(this.xyRecursion.get(x));
    }
  }

  lineChartMethod() {
    if(this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }

    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.xx,
        datasets: [
          {
            label: 'Tab Function',
            fill: false,
            borderColor: 'blue',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: this.dataTab,
            spanGaps: false,
          },
          {
            label: 'Series Function',
            fill: false,
            borderColor: 'red',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: this.dataSeries,
            spanGaps: false,
          },
          {
            label: 'Recursion Function',
            fill: false,
            borderColor: 'green',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: this.dataRecursion,
            spanGaps: false,
          },
        ]
      }
    });
  }

  ngOnInit() {
  }

}
