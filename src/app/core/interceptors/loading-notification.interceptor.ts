import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError, tap, throwError } from 'rxjs';
import { ToastService } from '../services/toast.service';

export const LoadingNotificationInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const spinnerService = inject(NgxSpinnerService);
  const toastr = inject(ToastService);

  spinnerService.show();

  return next(req).pipe(
    tap({
      complete: () => {
        spinnerService.hide();
      },
    }),
    catchError((error: HttpErrorResponse) => {
      toastr.showToast({
        message: 'Erro na requisição, verifique os dados e a conexão com a internet e tente novamente!',
        title: 'Sistema',
        type: 'error',
      });
      spinnerService.hide();

      return throwError(() => error);
    })
  );
};
