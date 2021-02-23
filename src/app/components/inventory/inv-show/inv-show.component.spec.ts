import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvShowComponent } from './inv-show.component';

describe('InvShowComponent', () => {
  let component: InvShowComponent;
  let fixture: ComponentFixture<InvShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
