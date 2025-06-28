import { Directive, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgxSpinnerLoadingService } from './ngx-spinner-loading.service';

@Directive({
    selector: '[NgxSpinnerLoading]',
    standalone: true
})
export class NgxSpinnerLoadingDirective {
    private tmpl = inject(TemplateRef);
    private vcr = inject(ViewContainerRef);
    private loadingService = inject(NgxSpinnerLoadingService);

    @Input() set ngxSmartLoading(value: boolean) {
        if (value) {
            this.loadingService.show();
            this.vcr.clear();
            this.vcr.createEmbeddedView(this.tmpl);
        } else {
            this.loadingService.hide();
            this.vcr.clear();
        }
    }
}
