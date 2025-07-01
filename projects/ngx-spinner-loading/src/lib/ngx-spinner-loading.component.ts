import {
  Component, Input, TemplateRef, inject, effect,
  ContentChild, OnInit
} from '@angular/core';
import { NgxSpinnerLoadingService } from './ngx-spinner-loading.service';
import { NgStyle, NgClass , NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'ngx-spinner-loader',
  standalone: true,
  imports: [NgStyle, NgClass, NgIf, NgTemplateOutlet],
  template: `
    <div *ngIf="visible()" [ngClass]="containerClass" [style.zIndex]="zIndex">
      <ng-container *ngIf="type === 'custom' && template; else builtInLoader"
                    [ngTemplateOutlet]="template"></ng-container>

      <ng-template #builtInLoader>
        <div class="loader" [ngStyle]="loaderStyle()" [ngClass]="typeClass"></div>
      </ng-template>
    </div>
  `,
  styleUrls: ['./ngx-spinner-loading.component.css']
})
export class NgxSpinnerLoaderComponent implements OnInit {
  private service = inject(NgxSpinnerLoadingService);

  @Input() manual = false;
  @Input() type: 'spinner' | 'dots' | 'bar' | 'circle' | 'custom' = 'spinner';
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() color: string = '#3498db';
  @Input() mode: 'fullscreen' | 'section' | 'inline' = 'fullscreen';
  @Input() speed = 1;
  @Input() timeout?: number;
  @Input() zIndex = 9999;
  @ContentChild(TemplateRef) template?: TemplateRef<any>;

  visible = this.manual ? () => true : this.service.isLoading;

  ngOnInit(): void {
    if (this.timeout && !this.manual) {
      effect(() => {
        if (this.visible()) {
          setTimeout(() => this.service.hide(), this.timeout);
        }
      });
    }
  }

  get containerClass(): string {
    switch (this.mode) {
      case 'fullscreen':
        return 'ngx-loader-fullscreen';
      case 'section':
        return 'ngx-loader-section';
      case 'inline':
        return 'ngx-loader-inline';
    }
  }

  get typeClass(): string {
    return `loader-${this.type}`;
  }

  loaderStyle(): Record<string, string> {
    const sizeMap: Record<string, string> = {
      xs: '20px', sm: '30px', md: '40px', lg: '50px', xl: '70px'
    };
    return {
      borderColor: this.color,
      width: sizeMap[this.size],
      height: sizeMap[this.size],
      animationDuration: `${1 / this.speed}s`
    };
  }
}
