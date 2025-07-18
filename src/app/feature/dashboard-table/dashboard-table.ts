import { Component, OnInit } from '@angular/core';
import { Dashboard, User } from '../../service/dashboard';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard-table',
  imports: [CommonModule, MatTableModule, MatIconModule],
  templateUrl: './dashboard-table.html',
  styleUrl: './dashboard-table.scss'
})
export class DashboardTable implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'city', 'status'];
  dataSource:User[] = [];
  users: User[] = [];

  constructor(private shipmentService: Dashboard) {}

 
  ngOnInit() {
    this.shipmentService.getUsers().subscribe((data: User[]) => {
      this.dataSource = data;
    });
  }
}
