import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TempInvoicesComponent } from './temp-invoices.component';

describe('TempInvoicesComponent', () => {
  let component: TempInvoicesComponent;
  let fixture: ComponentFixture<TempInvoicesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TempInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
