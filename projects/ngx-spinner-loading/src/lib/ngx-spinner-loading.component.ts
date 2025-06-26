import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerLoadingService } from './ngx-spinner-loading.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'ngx-spinner-loading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div  *ngIf="loading$ | async" class="overlay">
      <div class="spinner" [ngClass]="type"
           [ngStyle]="{
             'border-top-color': color,
             'width': size,
             'height': size,
             'border-width': borderWidth
           }"></div>
    </div>
  `,
  styles: [`
    .overlay {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.4);
      z-index: 9999;
    }

    .spinner {
      border-radius: 50%;
      border: 4px solid #f3f3f3;
      border-top: 4px solid #3498db;
      animation: spin 1s linear infinite;
    }

    .border {
      border-style: solid;
    }

    .dot {
      width: 20px;
      height: 20px;
      background-color: var(--dot-color, #3498db);
      border-radius: 50%;
      animation: dotBounce 1s infinite ease-in-out;
    }

    .pulse {
      width: 20px;
      height: 20px;
      background-color: var(--dot-color, #3498db);
      border-radius: 50%;
      animation: pulseAnim 1s infinite ease-in-out;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    @keyframes dotBounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    @keyframes pulseAnim {
      0% { transform: scale(0.9); opacity: 0.7; }
      50% { transform: scale(1.2); opacity: 1; }
      100% { transform: scale(0.9); opacity: 0.7; }
    }
  `]
})
export class NgxSpinnerLoadingComponent {
  loading$: Observable<boolean>;

  @Input() color = '#3498db';         // default blue
  @Input() size = '60px';             // width and height
  @Input() type: 'default' | 'border' | 'dot' | 'pulse' = 'default';

  get borderWidth(): string {
    if (this.type === 'border' || this.type === 'default') return '8px';
    return '0'; // dot/pulse don't use border
  }

  constructor(private spinnerService: NgxSpinnerLoadingService) { 
    this.loading$ = this.spinnerService.loading$;
  }

}
