import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ADDexpensesComponent } from './addexpenses.component';

describe('ADDexpensesComponent', () => {
  let component: ADDexpensesComponent;
  let fixture: ComponentFixture<ADDexpensesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ADDexpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADDexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
