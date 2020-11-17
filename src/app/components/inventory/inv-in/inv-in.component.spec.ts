import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvINComponent } from './inv-in.component';

describe('InvINComponent', () => {
  let component: InvINComponent;
  let fixture: ComponentFixture<InvINComponent>;

  beforeEach(async(() => {
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
