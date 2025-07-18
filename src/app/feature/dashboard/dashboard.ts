import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DashboardChart } from '../dashboard-chart/dashboard-chart';
import { DashboardChartAll } from '../dashboard-chart-all/dashboard-chart-all';
import { MatTableModule } from '@angular/material/table';
import { DashboardTable } from '../dashboard-table/dashboard-table';
@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule,
    MatIconModule,DashboardChart,DashboardChartAll, MatTableModule, DashboardTable, ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit{
totalShipments = 0;
  delivered = 0;
  inTransit = 0;
  delayed = 0;

  ngOnInit(): void {
    this.animateCount('totalShipments', 1245, 1000);
    this.animateCount('delivered', 980, 1000);
    this.animateCount('inTransit', 210, 1000);
    this.animateCount('delayed', 55, 1000);
  }

  animateCount(property: keyof this, target: number, duration: number) {
    const start = 0;
    const steps = Math.ceil(duration / 20);
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        (this[property] as number) = target;
        clearInterval(interval);
      } else {
        (this[property] as number) = Math.floor(current);
      }
    }, 20);
  }
}
