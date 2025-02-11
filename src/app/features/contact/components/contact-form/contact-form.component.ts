import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask'; // Importando o módulo aqui
import { ToastService } from '../../../../core/services/toast.service';
import { phoneValidator } from '../../../../core/Validators/phone.validator';
import { FormFeedbackComponent } from '../../../../shared/components/form-feedback/form-feedback.component';

@Component({
  selector: 'app-contact-form',
  imports: [MatButtonModule, MatCardModule, MatInputModule, FormFeedbackComponent, NgxMaskDirective, MatCheckboxModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
  providers: [provideNgxMask()],
})
export class ContactFormComponent {
  contactForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private router: Router
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      cellPhone: ['', [Validators.required, phoneValidator()]],
      phone: ['', [Validators.required, phoneValidator()]],
      favorite: [false],
      active: [false],
    });
  }
}
