import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { ToastService } from '../../../../core/services/toast.service';
import { FormFeedbackComponent } from '../../../../shared/components/form-feedback/form-feedback.component';

@Component({
  selector: 'app-login-form',
  imports: [MatInputModule, MatIconModule, ReactiveFormsModule, CommonModule, FormFeedbackComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  isPasswordVisible: boolean = false;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
  ) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/']); // Redireciona para a home se já estiver logado
    }

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  doLogin() {
    if (!this.loginForm.valid) return;

    const loginPayload: any = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };

    this.authService.login(loginPayload.email, loginPayload.password).subscribe((user) => {
      if (!user[0]) {
        return this.toastService.showToast({
          message: 'O E-mail ou a senha informados estão incorretos!',
          title: 'Sistema',
          type: 'error',
        });
      }

      this.authService.setToken();
      this.authService.setUser(user[0]);
      this.router.navigate(['/']);
    });
  }
}
