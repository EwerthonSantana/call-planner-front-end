import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, Form, FormControl, ValidationErrors } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-form-feedback',
  imports: [MatFormFieldModule, CommonModule],
  templateUrl: './form-feedback.component.html',
  styleUrl: './form-feedback.component.css',
})
export class FormFeedbackComponent {
  @Input({ required: true }) control!: AbstractControl | null;

  get errorMessage(): string | null {
    if (!this.control || !this.control.errors || !this.control.touched) {
      return null;
    }

    return this.getErrorMessage(this.control.errors);
  }

  private getErrorMessage(errors: ValidationErrors): string {
    if (errors['required']) {
      return 'Este campo é obrigatório.';
    }
    if (errors['minlength']) {
      return `Mínimo de ${errors['minlength'].requiredLength} caracteres.`;
    }
    if (errors['maxlength']) {
      return `Máximo de ${errors['maxlength'].requiredLength} caracteres.`;
    }
    if (errors['email']) {
      return 'E-mail inválido.';
    }
    if (errors['pattern']) {
      return 'Formato inválido.';
    }
    return 'Campo inválido.';
  }
}
