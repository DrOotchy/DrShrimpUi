import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InvOUTComponent } from './inv-out.component';

describe('InvOUTComponent', () => {
  let component: InvOUTComponent;
  let fixture: ComponentFixture<InvOUTComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InvOUTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvOUTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
