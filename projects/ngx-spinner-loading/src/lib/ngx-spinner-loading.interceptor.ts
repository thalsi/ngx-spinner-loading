import { inject } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptorFn,
    HttpRequest,
    HttpHandlerFn
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { NgxSpinnerLoadingService } from './ngx-spinner-loading.service';

export const NgxSpinnerLoadingInterceptor: HttpInterceptorFn = (
    req: HttpRequest<any>,
    next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
    const spinner = inject(NgxSpinnerLoadingService);

    spinner.show();

    return next(req).pipe(
        finalize(() => spinner.hide())
    );
};
