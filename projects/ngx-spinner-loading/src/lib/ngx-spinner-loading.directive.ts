import {
    Directive, Input, TemplateRef, ViewContainerRef, inject
} from '@angular/core';
import { NgxSpinnerLoadingLoadingService } from './ngx-spinner-loading.service';

@Directive({
    selector: '[ngxSpinnerLoading]',
    standalone: true
})
export class NgxSpinnerLoadingDirective {
    private tmpl = inject(TemplateRef<unknown>);
    private vcr = inject(ViewContainerRef);
    private service = inject(NgxSpinnerLoadingLoadingService);

    @Input('ngxSpinnerLoading') set loading(condition: boolean) {
        this.vcr.clear();

        if (condition) {
            this.service.show();
            // Optionally show spinner markup here
        } else {
            this.service.hide();
            this.vcr.createEmbeddedView(this.tmpl);
        }
    }
}
