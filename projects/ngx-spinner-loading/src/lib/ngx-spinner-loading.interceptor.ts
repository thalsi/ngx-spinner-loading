import {
    HttpInterceptor, HttpRequest, HttpHandler, HttpEvent
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { NgxSpinnerLoadingLoadingService } from './ngx-spinner-loading.service';

@Injectable()
export class NgxSpinnerLoadingInterceptor implements HttpInterceptor {
    private loadingService = inject(NgxSpinnerLoadingLoadingService);

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingService.show();

        return next.handle(req).pipe(
            finalize(() => this.loadingService.hide())
        );
    }
}
