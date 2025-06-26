import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSpinnerLoadingComponent } from './ngx-spinner-loading.component';

describe('NgxSpinnerLoadingComponent', () => {
  let component: NgxSpinnerLoadingComponent;
  let fixture: ComponentFixture<NgxSpinnerLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSpinnerLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSpinnerLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
