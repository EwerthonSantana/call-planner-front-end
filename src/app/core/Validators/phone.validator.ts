import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // Expressão regular para validar números de telefone e celular (brasileiros)
    const phoneRegex = /^(?:\(\d{2}\)\s?)?(\d{4,5})-?\d{4}$/;

    if (control.value && !phoneRegex.test(control.value)) {
      return { invalidPhone: true }; // Retorna erro se a validação falhar
    }
    return null; // Retorna null se for válido
  };
}
