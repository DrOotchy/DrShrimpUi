import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ADDnutritionComponent } from './addnutrition.component';

describe('ADDnutritionComponent', () => {
  let component: ADDnutritionComponent;
  let fixture: ComponentFixture<ADDnutritionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ADDnutritionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADDnutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
