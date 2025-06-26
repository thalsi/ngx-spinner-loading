import { TestBed } from '@angular/core/testing';

import { NgxSpinnerLoadingService } from './ngx-spinner-loading.service';

describe('NgxSpinnerLoadingService', () => {
  let service: NgxSpinnerLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSpinnerLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
