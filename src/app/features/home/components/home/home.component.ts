import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    RouterOutlet,
    MatSlideToggleModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isSidenavOpen: boolean = true;
  auxThemeSwitch: boolean = true;

  constructor() {
    const body = document.body;
    body.classList.add('light-theme');
  }

  toggleTheme() {
    this.auxThemeSwitch = !this.auxThemeSwitch;
    const body = document.body;
    if (this.auxThemeSwitch) {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
      return;
    }
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
  }
}
