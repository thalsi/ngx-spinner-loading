// ngx-spinner-loading.interceptor.ts

import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';
import { NgxSpinnerLoadingService } from './ngx-spinner-loading.service';

export const NgxSpinnerLoadingInterceptor: HttpInterceptorFn = (req, next) => {
    const loadingService = inject(NgxSpinnerLoadingService);

    loadingService.show();

    return next(req).pipe(
        finalize(() => loadingService.hide())
    );
};
