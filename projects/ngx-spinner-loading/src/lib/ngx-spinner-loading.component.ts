import { Component, computed, effect, inject, Input, signal } from '@angular/core';
import { NgxSpinnerLoadingService } from './ngx-spinner-loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngx-smart-loading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="isVisible()" class="smart-overlay" [ngClass]="modeClass()" [ngStyle]="spinnerStyle()">
      <ng-container *ngIf="!template">
        <div class="default-spinner" [ngStyle]="animationStyle()"></div>
      </ng-container>
      <ng-container *ngIf="template">
        <ng-container *ngTemplateOutlet="template"></ng-container>
      </ng-container>
    </div>
  `,
  styles: [`
    .smart-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.3);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }
    .default-spinner {
      border: 4px solid rgba(0,0,0,0.1);
      border-top: 4px solid #000;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `]
})
export class NgxSpinnerLoadingComponent {
  private service = inject(NgxSpinnerLoadingService);
  config = this.service.getConfig();

  @Input() template?: any;

  isVisible = this.service.isLoading;

  modeClass = computed(() => {
    const mode = this.config()?.mode || 'fullscreen';
    return mode === 'fullscreen' ? 'smart-overlay' : '';
  });

  spinnerStyle = computed(() => ({
    'background-color': 'transparent',
    color: this.config()?.color || '#000',
    width: this.getSize(),
    height: this.getSize(),
  }));

  animationStyle = computed(() => ({
    animationDuration: this.config()?.speed || '1s',
  }));

  private getSize(): string {
    const size = this.config()?.size || 'medium';
    if (size === 'small') return '20px';
    if (size === 'large') return '60px';
    return '40px';
  }
}
