import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { routes } from './app.routes';
import { AuthInterceptor } from './core/interceptors/auth-login.interceptor';
import { LoadingNotificationInterceptor } from './core/interceptors/loading-notification.interceptor';

const maskConfig: Partial<any> = {
  validation: true,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([LoadingNotificationInterceptor, AuthInterceptor])),
    provideToastr(),
    provideCharts(withDefaultRegisterables()),
    provideEnvironmentNgxMask(maskConfig),
  ],
};
