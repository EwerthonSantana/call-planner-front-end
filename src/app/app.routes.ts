import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { ContactFormComponent } from './features/contact/components/contact-form/contact-form.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { LoginFormComponent } from './features/login/components/login-form/login-form.component';

export const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'contact-form', component: ContactFormComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }, // Redireciona para a home se a rota não existir
];
