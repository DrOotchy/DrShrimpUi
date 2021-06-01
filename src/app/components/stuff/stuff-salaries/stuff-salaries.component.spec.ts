import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffSalariesComponent } from './stuff-salaries.component';

describe('StuffSalariesComponent', () => {
  let component: StuffSalariesComponent;
  let fixture: ComponentFixture<StuffSalariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuffSalariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffSalariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
