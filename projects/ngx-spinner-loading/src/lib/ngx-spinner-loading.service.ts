import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NgxSpinnerLoadingService {
  private loadingSubject = new BehaviorSubject(false);
  loading$ = this.loadingSubject.asObservable();
  private count = 0;

  show(): void {
    this.count++;
    this.loadingSubject.next(true);
  }

  hide(): void {
    this.count = Math.max(0, this.count - 1);
    this.loadingSubject.next(this.count > 0);
  }

  reset(): void {
    this.count = 0;
    this.loadingSubject.next(false);
  }
}
