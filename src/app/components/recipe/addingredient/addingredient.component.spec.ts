import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADDingredientComponent } from './addingredient.component';

describe('ADDingredientComponent', () => {
  let component: ADDingredientComponent;
  let fixture: ComponentFixture<ADDingredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADDingredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADDingredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
