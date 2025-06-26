import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { NgxSpinnerLoadingService } from './ngx-spinner-loading.service';

@Injectable()
export class NgxSpinnerLoadingInterceptor implements HttpInterceptor {

    constructor(private spinner: NgxSpinnerLoadingService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinner.show();

        return next.handle(req).pipe(
            finalize(() => this.spinner.hide())
        );
    }
}
