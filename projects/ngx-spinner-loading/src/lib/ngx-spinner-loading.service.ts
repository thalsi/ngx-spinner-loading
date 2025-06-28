import { Injectable, Signal, computed, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NgxSpinnerLoadingService {
  private loading = signal(false);
  private config = signal<any>({});

  show(config: any = {}) {
    this.config.set(config);
    this.loading.set(true);
    console.log('show');
    
    if (config.timeout) {
      setTimeout(() => this.hide(), config.timeout);
    }
  }

  hide() {
    this.loading.set(false);
      console.log('hide');
  }

  isLoading(): Signal<boolean> {
    return computed(() => this.loading());
  }

  getConfig(): Signal<any> {
    return computed(() => this.config());
  }
}
