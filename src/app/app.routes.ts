import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { ContactTableComponent } from './features/contact/components/contact-table/contact-table.component';
import { DashboardComponent } from './features/dashboard/components/dashboard/dashboard.component';
import { HomeComponent } from './features/home/components/home/home.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/components/login-form/login-form.component').then((m) => m.LoginFormComponent),
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'contact-list', component: ContactTableComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '' },
];
