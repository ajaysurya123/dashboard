import { Component, ViewChild } from '@angular/core';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import {  RouterModule  } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Header } from '../shared/header/header';
import { Sidebar } from '../shared/sidebar/sidebar';


@Component({
  selector: 'app-layout',
  imports: [CommonModule, MatSidenavModule,
    Header,Sidebar, RouterModule 
    ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isMobile = false;

  constructor(private observer: BreakpointObserver) {}

  ngAfterViewInit(): void {
    this.observer.observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe(result => {
        this.isMobile = result.matches;
        if (this.isMobile) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  toggleSidebar() {
    this.sidenav.toggle();
  }
}
