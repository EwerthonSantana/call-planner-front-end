import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastrService: ToastrService) {}

  showToast(toastConfigs: {
    message: string;
    title: string;
    type: 'success' | 'error' | 'info' | 'warning'; // Tipagem dos tipos de toast
    options?: any;
  }) {
    const {
      message,
      title,
      type,
      options = {
        positionClass: 'toast-top-center',
        closeButton: true,
        easingTime: 500,
        easing: 'ease-in',
        progressBar: true,
      },
    } = toastConfigs;

    // Chama o método correspondente ao tipo de toast
    this.toastrService[type](message, title, options); // Usando o tipo (success, error, etc.)
  }
}
