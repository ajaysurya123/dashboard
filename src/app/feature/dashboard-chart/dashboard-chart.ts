import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexChart,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
@Component({
  selector: 'app-dashboard-chart',
  imports: [NgApexchartsModule],
  templateUrl: './dashboard-chart.html',
  styleUrl: './dashboard-chart.scss'
})
export class DashboardChart {
 chartSeries: ApexAxisChartSeries = [
    { name: 'Shipments', data: [140, 120, 180, 90, 160, 200] },
  ];

  chartDetails: ApexChart = {
    type: 'bar',
    height: 350,
    animations: { enabled: true },
    width: '100%'
  };

  title: ApexTitleSubtitle = { text: 'Weekly Shipment Overview' };

  xAxis: ApexXAxis = {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  };

  colors: string[] = ['#0ea5e9']; // blue-500
  dataLabels: ApexDataLabels = { enabled: false };
  stroke: ApexStroke = {
    show: true,
    width: 2,
    colors: ['transparent'],
  };
  shipmentStatusResponsive: ApexResponsive[] = [
    {
      breakpoint: 380,
      options: {
        chart: {
          width: 270,
        },
        legend: {
          position: 'bottom',
        },
      },
    },
  ];
}
