import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FormFeedbackComponent } from '../../../../shared/components/form-feedback/form-feedback.component';

@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule, CommonModule, FormFeedbackComponent, MatInputModule, RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  emailControl: FormControl;

  constructor(private formBuilder: FormBuilder) {
    this.emailControl = formBuilder.control('', [Validators.required, Validators.email]);
  }

  onSubimit() {
    if (!this.emailControl) return;
  }
}
