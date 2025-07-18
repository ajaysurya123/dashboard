import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexNonAxisChartSeries, ApexChart, ApexResponsive, ApexLegend, ApexTitleSubtitle } from 'ng-apexcharts';
@Component({
  selector: 'app-dashboard-chart-all',
  imports: [NgApexchartsModule],
  templateUrl: './dashboard-chart-all.html',
  styleUrl: './dashboard-chart-all.scss'
})
export class DashboardChartAll {
shipmentStatusSeries: ApexNonAxisChartSeries = [45, 30, 15, 10]; // Delivered, In Transit, Delayed, Cancelled

shipmentStatusChart: ApexChart = {
  type: 'donut',
  height: 300,
  width: '100%'
};

shipmentStatusLabels: string[] = ['Delivered', 'In Transit', 'Delayed', 'Cancelled'];

shipmentStatusColors: string[] = ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444'];

shipmentStatusLegend: ApexLegend = {
  position: 'bottom',
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

shipmentStatusTitle: ApexTitleSubtitle = {
  text: 'Shipment Status Distribution',
  align: 'center',
};
}
