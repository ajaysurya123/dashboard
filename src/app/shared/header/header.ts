import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatBadgeModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isDark:boolean=false;
   animate = false;
@Output() toggleSidenav = new EventEmitter<void>();

ngOnInit() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    this.isDark = true;
    document.body.classList.add('dark-theme'); // Use dark-theme as defined in SCSS
  } else {
    document.body.classList.remove('dark-theme');
  }
}

toggleTheme() {
  this.isDark = !this.isDark;

  if (this.isDark) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
}

}
