import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InvINComponent } from './inv-in.component';

describe('InvINComponent', () => {
  let component: InvINComponent;
  let fixture: ComponentFixture<InvINComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InvINComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
