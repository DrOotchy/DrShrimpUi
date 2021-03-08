import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllDetailsComponent } from './all-details.component';

describe('AllDetailsComponent', () => {
  let component: AllDetailsComponent;
  let fixture: ComponentFixture<AllDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
