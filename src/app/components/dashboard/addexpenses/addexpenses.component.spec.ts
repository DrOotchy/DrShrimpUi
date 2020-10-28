import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADDexpensesComponent } from './addexpenses.component';

describe('ADDexpensesComponent', () => {
  let component: ADDexpensesComponent;
  let fixture: ComponentFixture<ADDexpensesComponent>;

  beforeEach(async(() => {
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
