import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgxSpinnerLoadingService } from './ngx-spinner-loading.service';

@Directive({
    selector: '[ngxSpinnerLoading]',
    standalone: true
})
export class NgxSpinnerLoadingDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private vcr: ViewContainerRef,
        private loadingService: NgxSpinnerLoadingService
    ) { }

    @Input()
    set ngxSpinnerLoading(condition: boolean) {
        if (!condition) {
            this.vcr.clear();
            this.loadingService.show();
        } else {
            this.vcr.createEmbeddedView(this.templateRef);
            this.loadingService.hide();
        }
    }
}
