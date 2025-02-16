import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { User } from '../../../../core/Models/user.model';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  isSidenavOpen: boolean = true;
  auxThemeSwitch: boolean = true;
  user: User;
  filteredOptions: Observable<string[]>;
  searchControl: FormControl;
  options: string[] = ['One', 'Two', 'Three'];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    const body = document.body;
    body.classList.add('light-theme');
    this.user = this.authService.User;
  }

  ngOnInit() {
    this.searchControl = new FormControl('', [Validators.minLength(3)]);
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) => option.toLowerCase().includes(filterValue));
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

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
